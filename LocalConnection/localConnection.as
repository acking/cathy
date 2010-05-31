package {
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.net.LocalConnection;
	import flash.events.StatusEvent;
	import flash.external.ExternalInterface;
	
	public class localConnection extends Sprite {
		
		private var conn:LocalConnection;
		private static var CONNECT_NAME:String = "Test";
		
		public function localConnection() {
			super();
			
			inited();
		}
		
		private function inited():void {
			conn = new LocalConnection();
			
			conn.addEventListener(StatusEvent.STATUS, statusHandler);
			conn.allowDomain("*");
			
			try {			
				conn.client = this;
				conn.connect(CONNECT_NAME);				
				
				conn.client = {};
				conn.send(CONNECT_NAME, 'connectHandler');
			} catch(e:Error) {
				ExternalInterface.call('alert', '已经打开过此窗口');
			}
		}
		
		public function connectHandler():void {
			ipt.text = '已经又开了一个新窗口';
		}
		
		private function statusHandler(event:StatusEvent):void {
			switch(event.level) {
				case 'status':
					trace('LocalConnection.send() succeeded');
					ExternalInterface.call('alert', '这里第一次打开...');
					break;
				case 'error':
					trace('LocalConnection.send() failed');
					ExternalInterface.call('alert', '本地通信发送失败....');
					break;
			}
		}
		
	}
}
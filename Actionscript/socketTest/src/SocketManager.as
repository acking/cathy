package
{
	import flash.errors.IOError;
	import flash.events.DataEvent;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.SecurityErrorEvent;
	import flash.net.XMLSocket;

	public class SocketManager
	{
		public var conn:XMLSocket;
		
		
		public function SocketManager()
		{
			initSocket();
		}
		
		private function initSocket():void {
			conn = new XMLSocket();
			
			conn.addEventListener(Event.CLOSE, closeHandler);
			conn.addEventListener(DataEvent.DATA, dataHandler);
			conn.addEventListener(Event.CONNECT, connectHandler);
			conn.addEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);
			conn.addEventListener(SecurityErrorEvent.SECURITY_ERROR, securityErrHandler);
		}
		
		private static var instance:SocketManager;
		public static function getInstance():SocketManager {
			if(instance == null) {
				instance = new SocketManager();
			}
			
			return instance;
		}
		
		public function connSocket(url:String  , port:Number):void {
			trace("开始进行socket连接....");
			conn.connect(url , port );
		}
		
		//接收数据..
		private function dataHandler(event:DataEvent):void {
			trace('接收到的数据为：' + event.data);
		}
		
		//连接关闭
		private function closeHandler(event:Event):void {
			trace("连接已断开...");
		}
		
		//socket连接成功
		private function connectHandler(event:Event):void {
			trace("socket 连接成功...");
			
			conn.removeEventListener(Event.CONNECT, connectHandler);
			conn.removeEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);
			conn.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, securityErrHandler);
		}
		
		//io流错误
		private function ioErrorHandler(event:IOErrorEvent):void {
			trace("ioError....");
		}
		
		//安全错误
		private function securityErrHandler(event:SecurityErrorEvent):void {
			trace('securityError....');
		}
	}
}
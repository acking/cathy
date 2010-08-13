package
{
	import flash.display.Sprite;
	
	import mx.core.ButtonAsset;
	
	public class socketTest extends Sprite
	{
		private static const SOCKET_HOST:String = "localhost";
		private static const SOCKET_PORT:Number = 9000;
		
		public function socketTest()
		{
			init();
		}
		
		private function init():void {
			SocketManager.getInstance().connSocket(SOCKET_HOST, SOCKET_PORT);
			
			trace('start send request....');
			
			SocketManager.getInstance().conn.send("send demo stream.....");
		}
	}
}
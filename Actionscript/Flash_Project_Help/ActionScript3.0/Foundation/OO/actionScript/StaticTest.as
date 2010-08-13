package actionScript
{
	import flash.display.Sprite;
	
	public class StaticTest extends Sprite
	{
		// 静态属性
		public static const nickname:String = "webabcd";
		public static var age:int;
		
		public function StaticTest()
		{
			
		}
		
		// 静态方法
		public static function hello(s:String):String
		{
			return "hello: " + s;
		}
	}
}
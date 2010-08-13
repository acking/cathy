package actionScript
{
	import flash.display.Sprite;
	
	public class ParentTest extends Sprite
	{
		public function ParentTest()
		{
			
		}
		
		// ParentTest为基类，其内定义了一个名为hello()的方法
		public function hello(s:String):String
		{
			return "hello: " + s;
		}
	}
}
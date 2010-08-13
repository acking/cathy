package actionScript
{
	import actionScript.ParentTest;
	
	// ChildTest类继承自ParentTest类
	// final代表禁止继承
	public final class ChildTest extends ParentTest
	{
		public function ChildTest()
		{
			
		}
		
		// 重写基类（ParentTest）中的hello()方法
		public override function hello(s:String):String
		{
			// super为对基类的引用
			return "基类的hello()方法 - " + super.hello(s) + "；子类重写后的hello()方法 - 您好: " + s;
		}
	}
}
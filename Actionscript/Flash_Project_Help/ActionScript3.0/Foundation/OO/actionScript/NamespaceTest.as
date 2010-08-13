package actionScript
{
	import flash.display.Sprite;
	
	// 使用命名控件
	use namespace china;
	use namespace usa;
	
	public class NamespaceTest extends Sprite
	{
			
		public function NamespaceTest()
		{
			
		}
		
		// china命名空间的hello()方法
		china function hello(s:String):String
		{
			return "您好: " + s;
		}
		
		// usa命名空间的hello()方法
		usa function hello(s:String):String
		{
			return "hello: " + s;
		}
	}
}
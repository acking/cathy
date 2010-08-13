package actionScript
{
	import flash.display.Sprite;
	
	public class FunctionTest extends Sprite
	{
		public function FunctionTest()
		{
			
		}
		
		// 减法
		public function Subtract(a:int, b:int):int
		{
			// 参数总数
			trace(arguments.length);
			// output: 2
			
			// 第一个参数
			trace(arguments[0]);
			// output: “参数 a 的值”
			
			// 第二个参数
			trace(arguments[1]);
			// output: “参数 b 的值”
			
			// 返回a - b
			return a - b;
		}
		
		// 加法（...args - 任意多参数）
		public function Add(s:String, ...args):String
		{
			var i:int = 0;
			
			// 枚举出 ...args 中的所有参数
			for each(var v in args)
			{
				i += v;
			}
			
			return s + ": " + i;
		}
	}
}
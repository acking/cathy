package actionScript
{
	import flash.display.Sprite;
	
	public class PropertyTest extends Sprite
	{
		// 属性
		public var nickname:String;
		public var age:int;
		
		private var _salary:int;
		
		public function PropertyTest()
		{
			
		}
		
		// getter方法
		public function get salary():int
		{
			return this._salary;
		}
		
		// setter方法
		public function set salary(s:int):void
		{
			this._salary = s;
		}
	}
}
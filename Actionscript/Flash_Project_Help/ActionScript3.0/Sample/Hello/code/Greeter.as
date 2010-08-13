// 包名称要与文件的目录结构对应，类名称要与文件名对应
package code
{
	/*
	 * 打招呼类
	 */
	public class Greeter 
	{
		/*
         * 打招呼方法
         * @param name		名称
		 * @return 			打招呼的结果
         */
		public static function sayHello(name:String = "World"):String 
		{
			return "<font color='#FFFFFF'>Hello: " + name + "</font>";
		}
	}
}
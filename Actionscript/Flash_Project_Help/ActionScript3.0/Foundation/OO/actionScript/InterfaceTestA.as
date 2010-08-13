package actionScript
{
	// 实现InterfaceTest接口
	// 在同一个包中，所以不需要import InterfaceTest
	public class InterfaceTestA implements InterfaceTest
	{
		// 实现InterfaceTest接口的writeLog()方法
		public function writeLog():String
		{
			return "记录日志到SQL Server数据库";
		}
	}
}
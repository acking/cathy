package 
{
	import flash.events.Event;
	
	public class AlarmEvent extends Event 
	{
		// 定义事件类型
		public static const ALARM:String = "alarm";
		
		// 定义闹钟在响铃时所显示的信息
		public var alermMessage:String;
		
		// 构造函数，msg 为提醒信息
		public function AlarmEvent(msg:String = "ALARM!")
		{
			// 调用父类的构造函数。参数为事件类型，可以作为 Event.type 访问
			super(ALARM);
	
			alermMessage = msg;
		}
		
		// 重写 Event 的 clone() 方法
		public override function clone():Event
		{
			return new AlarmEvent(alermMessage);
		}
		
		// 重写 Event 的 toString() 方法
		public override function toString():String
		{
			// Event.formatToString() - 在自定义 Event 类中实现 toString() 方法的 utility 函数
			return formatToString("AlarmEvent", "type", "bubbles", "cancelable", "eventPhase", "message");
		}
	}
}
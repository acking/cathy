package 
{
	public class AlarmClock extends SimpleClock 
	{
		import flash.events.MouseEvent;
		import flash.events.TimerEvent;
		import flash.utils.Timer;
			
		private var alarmHour:Number = -1; 
		private var alarmMinute:Number = -1;
		private var alarmMessage:String;
		private var timer:Timer;
		
		// 构造函数， radius 为表盘半径
		public function AlarmClock(radius:Number = 100):void
		{
			// 调用父类的构造函数
			super(radius);

			// 计时器，每 1 秒 tick 一次
			timer = new Timer(1000);
        	timer.addEventListener(TimerEvent.TIMER, onTick);
			timer.start();
        }

		/*
         * 设置提醒时间
         * @param hour		提醒时间的小时数
         * @param minute	提醒时间的分钟数
         * @param message	提醒信息
		 * @return 无返回值
         */
        public function setAlarm(hour:Number = 0, minute:Number = 0, message:String = "Alarm!"):void
        {      	
        	alarmHour = hour;
			alarmMinute = minute;
         	alarmMessage = message;
        }
		
		/*
		 * 清除提醒时间
		 */
		public function clearAlarm()
		{
			alarmHour = alarmMinute = -1;
		}

		private function onTick(e:TimerEvent):void 
		{
			var date:Date = new Date();
			
			if (alarmHour == date.hours && alarmMinute == date.minutes)
			{
				// 如果到了提醒时间则实例化 AlarmEvent，并通过 dispatchEvent() 触发该事件
				var alarm:AlarmEvent = new AlarmEvent(alarmMessage);
				dispatchEvent(alarm);
			}
		}
	}
}
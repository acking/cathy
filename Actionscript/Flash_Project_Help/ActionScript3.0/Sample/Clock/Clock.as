package
{
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	
	public class Clock extends MovieClip 
	{
		var alarmClock:AlarmClock;
		
		public function Clock():void
		{
			btnSet.addEventListener(MouseEvent.CLICK, onSetAlarm);
			btnClear.addEventListener(MouseEvent.CLICK, onClearAlarm);
			txtHour.maximum = 23;
			txtMinute.maximum = 59;
			txtHour.value = new Date().hours;
			txtMinute.value = new Date().minutes;

			// 实例化 AlarmClock，并在舞台上添加此对象
			alarmClock = new AlarmClock(80);
			alarmClock.x = 200;
			alarmClock.y = 200;
			alarmClock.addEventListener(AlarmEvent.ALARM, onAlarm);
			addChild(alarmClock);
		}
		
		function onSetAlarm(e:MouseEvent):void
		{
			alarmClock.setAlarm(txtHour.value, txtMinute.value, "起床啦");
		}
		
		function onClearAlarm(e:MouseEvent):void
		{
			alarmClock.clearAlarm();
			txtMessage.text = "";
		}
		
		function onAlarm(e:AlarmEvent):void
		{
			txtMessage.text += e.alermMessage + " " + new Date().toString() + "\n";
			txtMessage.verticalScrollPosition = txtMessage.maxVerticalScrollPosition;    
		}
	}
}

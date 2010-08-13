package 
{
	import flash.display.Sprite;

	public class SimpleClock extends Sprite
	{
		import flash.events.TimerEvent;
		import flash.utils.Timer;
		
		private var timer:Timer;
		private var clockUI:ClockUI;
		
		// 构造函数，radius 为表盘半径
		public function SimpleClock(radius:Number = 100):void 
		{		    
			// 实例化一个 ClockUI 对象，并将其添加到舞台上
			clockUI = new ClockUI(Math.max(20, radius));
			clockUI.init();
			addChild(clockUI);
		
			// 刷新表盘 UI
			clockUI.refresh();

			// 实例化一个计时器，每 1 秒 tick 一次
        	timer = new Timer(1000);   	
            timer.addEventListener(TimerEvent.TIMER, onTick);
            timer.start();
        }

        private function onTick(e:TimerEvent):void 
        {
        	// 刷新表盘 UI
            clockUI.refresh();
        }		
	}
}
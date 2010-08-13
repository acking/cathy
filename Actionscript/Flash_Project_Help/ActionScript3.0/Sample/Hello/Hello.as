// 包
package
{
	// 导入相关的类
	import flash.display.MovieClip;
	import fl.events.ComponentEvent;
	import flash.events.TimerEvent;
	import flash.utils.Timer;
	import flash.text.TextField;
	import flash.display.SimpleButton;
	import flash.events.MouseEvent;
	import flash.events.Event;
	import flash.utils.getTimer;
	import code.Greeter;	
	
	public class Hello extends MovieClip
	{		
		// 构造函数
		public function Hello()
		{
			InitHello();
			
			InitClock();
			
			InitTimer();
		}
		
		
		/*---- Hello 的 Demo 开始 ----*/
		function InitHello()
		{
			// 给 Label 组件的 htmlText 属性赋值
			lblMsg.htmlText = Greeter.sayHello();

			// 为对象增加事件处理器（第一个参数：事件类型；第二个参数：事件处理器，也就是一个方法）
			txtName.addEventListener(ComponentEvent.ENTER, sayHello);
			btnHello.addEventListener(ComponentEvent.BUTTON_DOWN, sayHello);
		}
		
		function sayHello(e:ComponentEvent):void 
		{
			lblMsg.htmlText = Greeter.sayHello(txtName.text);	
		}
		/*---- Hello 的 Demo 结束 ----*/
		
		
		/*---- 时钟的 Demo 开始 ----*/
		private var timer:Timer;
		function InitClock()
		{
			// 实例化计时器，其参数为 tick 的间隔
			timer = new Timer(1000); 
    
			// 指定 onTick() 方法来处理 Timer 事件
			timer.addEventListener(TimerEvent.TIMER, onTick);

			// 启动计时器
			timer.start();
		}		
		
		function onTick(event:TimerEvent):void
		{	
			// 实例化 Date ，返回宿主服务器的当前时间
			var now:Date = new Date();
			
			// rotation - 对指定对象做顺时针旋转的角度数
			arrowHour.rotation = now.getHours() * 30 + (now.getMinutes() / 2);		
			arrowMinute.rotation = now.getMinutes() * 6 + (now.getSeconds() / 10);	
			arrowSecond.rotation = now.getSeconds() * 6;		
		}
		/*---- 时钟的 Demo 结束 ----*/
		
		
		/*---- 计时器的 Demo 开始 ----*/
		// 计时器需要显示的 时,分,秒,毫秒 变量
		var hour:Number = 0;
		var minute:Number = 0;
		var second:Number = 0;
		var millisecond:Number = 0;
		
		// 计时器是否在计时
		var running:Boolean = false;
		
		// 播放器加载的总时长
		var playerLength:Number = 0;
		// 计时器暂停的总时长
		var pauseLength:Number = 0;
		// 计时器计时的总时长
		var timerLength:Number = 0;
		
		function InitTimer()
		{
			// 设置暂停按钮初始为隐藏状态
			btnPause.visible = false;
			
			// addEventListener(EventType.EVENT_NAME, eventResponse) - 为对象添加事件监听器
			//     EventType.EVENT_NAME - 事件类型
			//     eventResponse - 事件处理器（响应该事件的方法）
			// 为 3 个按钮增加 Click 事件的事件处理器
			btnPlay.addEventListener(MouseEvent.CLICK, clickHandler);
			btnPause.addEventListener(MouseEvent.CLICK, clickHandler);
			btnStop.addEventListener(MouseEvent.CLICK, clickHandler);
			
			// 每次进入此帧时的事件处理器
			// 因为本例就 1 帧，速率为 30 fps，所以每 1/30 秒会触发一次此事件
			this.addEventListener(Event.ENTER_FRAME, enterFrameHandler);
		}
		
		function clickHandler(event:MouseEvent):void
		{
			// event.target - 触发此事件的对象
			switch(event.target)
			{
				case btnPlay:
					playTimer(); // 启动计时器
					btnPlay.visible = false;
					btnPause.visible = true;
					break;
				case btnPause:
					pauseTimer(); // 暂停计时器
					btnPlay.visible = true;
					btnPause.visible = false;
					break;
				case btnStop:
					stopTimer(); // 停止计时器
					btnPlay.visible = true;
					btnPause.visible = false;
					break;
			}	
		}
		
		function enterFrameHandler(event:Event):void
		{			
			if (running) 
			{
				// 当前计时器需要显示的时间
				var goTime:Number = getTimer() - pauseLength - timerLength;
			
				// 从总的毫秒时间中解析出时间的 时,分,秒,毫秒 部分
				// Math.floor(val:Number) - 返回小于等于指定数字的最接近的整数
				hour = Math.floor( goTime/3600/1000 );
				minute = Math.floor( (goTime/3600/1000 - hour) * 60 );
				second = Math.floor( ((goTime/3600/1000 - hour) * 60 - minute) * 60 );
				millisecond = Math.floor( goTime - (second + minute*60 + hour*3600) * 1000 );
				
				// 在 UI 上显示格式化后的时间
				txtSecond.text = formatNumber(second);
				txtMinute.text = formatNumber(minute);
				txtHour.text = formatNumber(hour);
				txtMillisecond.text = formatNumber2(millisecond);
			}
		}
		
		// 停止计时器。相当于暂停计时器，然后数据归零
		function stopTimer():void
		{
			txtHour.text = "00";
			txtMinute.text = "00";
			txtSecond.text = "00";
			txtMillisecond.text = "000";
			
			// 计时器总的启动时长
			timerLength = getTimer() - pauseLength;
			
			pauseTimer();
		}
		
		function playTimer():void
		{
			// 计时器总的暂停时长
			pauseLength += getTimer() - playerLength;
			
			running = true;
		}
		
		function pauseTimer():void
		{
			// getTimer() - 播放器（swf）被加载后，所经过的时长。单位：毫秒
			playerLength = getTimer();
			
			running = false;
		}
		
		// 格式化 时,分,秒，返回长度为两个字符的字符串
		function formatNumber(n:Number):String
		{
			if( n < 10 )
				return ("0" + n.toString());
			
			return n.toString();
		}
		
		// 格式化 毫秒，返回长度为三个字符的字符串
		function formatNumber2(n:Number):String
		{
			if( n < 10 )
				return ("00" + n.toString());
			else if (n < 100)
				return ("0" + n.toString());
			
			return n.toString();
		}
		/*---- 计时器的 Demo 结束 ----*/
	}
}
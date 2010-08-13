package
{
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.display.MovieClip;
	import flash.ui.Keyboard;
	import flash.events.MouseEvent;
	
	public class Main extends MovieClip
	{
		// 保存用户是否按下了上/下/左/右键
		public var isUp:Boolean = false;
		public var isDown:Boolean = false;
		public var isLeft:Boolean = false;
		public var isRight:Boolean = false;
		
		// 鼠标单击位置的坐标
		public var targetX:Number = 0;
		public var targetY:Number = 0;
		// 物体是否再向鼠标单击的位置移动
		public var moving:Boolean = false;
		
		// 每次 ENTER_FRAME 物体所需移动的距离
		public var step:Number = 5;
		
		public function Main()
		{
			// 设置四个用于显示方向的 MovieClip 的初始状态为停在第一帧
			btnUp.stop();
			btnDown.stop();
			btnLeft.stop();
			btnRight.stop();			
			
			// 处理按键的按下、放开事件（在舞台上侦测该事件）
			stage.addEventListener(KeyboardEvent.KEY_DOWN, keyPressHandler);
			stage.addEventListener(KeyboardEvent.KEY_UP, keyReleaseHandler);
			// 用于响应按键事件的 ENTER_FRAME
			this.addEventListener(Event.ENTER_FRAME, enterFrameHandlerForKeyboard);
			
			// 处理鼠标的按下事件（在舞台上侦测该事件）
			stage.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler);
			// 用于响应鼠标按下事件的 ENTER_FRAME
			this.addEventListener(Event.ENTER_FRAME, enterFrameHandlerForMouse);
		}
		
		protected function keyPressHandler(event:KeyboardEvent):void
		{
			// 检测用户按下的键
			switch (event.keyCode)
			{
				case Keyboard.UP: 
					isUp = true;
					btnUp.gotoAndStop(2);
					block.rotation = 0;
					break;
					
				case Keyboard.DOWN: // 按的是“下”键
					isDown = true; // 保存用户的按键信息。即用户正在按“下”键
					btnDown.gotoAndStop(2); // 用于显示方向“下”的 MovieClip 停到第二帧
					block.rotation = 180; // 物体旋转 180 度
					break;
					
				case Keyboard.LEFT:
					isLeft = true;
					btnLeft.gotoAndStop(2);
					block.rotation = 270;
					break;
					
				case Keyboard.RIGHT:
					isRight = true;
					btnRight.gotoAndStop(2);
					block.rotation = 90;
					break;
			}
		}
		
		protected function keyReleaseHandler(event:KeyboardEvent):void
		{
			// 检测用户放开的键
			switch( event.keyCode )
			{
				case Keyboard.UP: // 按的是“上”键
					isUp = false; // 保存用户的按键信息。即用户已经不再按“上”键了
					btnUp.gotoAndStop(1); // 用于显示方向“上”的 MovieClip 停到第一帧
					break;
					
				case Keyboard.DOWN:
					isDown = false;
					btnDown.gotoAndStop(1);
					break;
					
				case Keyboard.LEFT:
					isLeft = false;
					btnLeft.gotoAndStop(1);
					break;
					
				case Keyboard.RIGHT:
					isRight = false;
					btnRight.gotoAndStop(1);
					break;
			}
		}
		
		protected function enterFrameHandlerForKeyboard(event:Event):void
		{
			// 根据用户的按键情况。将物体向上/下/左/右移动指定的距离
			if (isLeft) 
			{
				block.x -= step;
			}
			if (isRight) 
			{
				block.x += step;
			}
			if (isUp) 
			{
				block.y -= step;
			}
			if (isDown) 
			{
				block.y += step;
			}
		}
		
		
		protected function mouseDownHandler(event:MouseEvent):void
		{
			// 当用户在舞台上按下鼠标后，获取鼠标的坐标
			targetX = event.stageX;
			targetY = event.stageY;
			
			// 物体正在向鼠标单击的位置移动
			moving = true;
		}		

		protected function enterFrameHandlerForMouse(event:Event):void
		{
			if (moving)
			{
				// 计算物体在 X 方向和 Y 方向上分别需要移动的距离
				var offsetX:Number = block.x - targetX;
				var offsetY:Number = block.y - targetY;
				
				// 计算物体需要旋转的角度
				var targetRotation:Number = -Math.atan2(offsetX, offsetY) / (Math.PI / 180);
				block.rotation = targetRotation;
				
				if( Math.sqrt((offsetX*offsetX) + (offsetY*offsetY)) > step )
				{
					// 如果还没有移动到目标位，则继续移动指定的距离
					block.y -= step * Math.cos(targetRotation * (Math.PI/180));
					block.x += step * Math.sin(targetRotation * (Math.PI/180));
				}
				else
				{
					// 物体已经移动到鼠标所单击的位置
					moving = false;
				}
			}
		}
	}
}
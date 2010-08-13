package
{
    import flash.display.Shape;
    import flash.display.Sprite;
    import flash.display.StageAlign;
    import flash.display.StageScaleMode;
    import flash.text.StaticText;
    import flash.events.*;
    import flash.text.TextField;
    import flash.text.TextFormat;
    import flash.display.Sprite;
	
	// 绘制表盘 UI
    public class ClockUI extends Sprite 
    {
		// 表盘半径
        public var radius:uint;
        
        // 表盘中心点的 X 坐标和 Y 坐标
        public var centerX:int;
        public var centerY:int;
        
        // 时, 分, 秒指针的形状
        public var hourHand:Shape;
        public var minuteHand:Shape;
        public var secondHand:Shape;
        
        // 表盘背景颜色，以及时, 分, 秒指针颜色（0x代表16进制）
        public var bgColor:uint = 0xEEEEFF;
        public var hourHandColor:uint = 0x003366;
        public var minuteHandColor:uint = 0x000099;
        public var secondHandColor:uint = 0xCC0033;
        
        // 构造函数，r 为表盘半径
        public function ClockUI(r:uint) 
        {
			this.radius = r;
					
			this.centerX = r;
			this.centerY = r;
        }
        
        // 初始化表盘
        public function init():void 
        {
        	// 画表盘的边框
        	drawBorder();
        	
        	// 画表盘上的小时的标记
        	drawHourLabel();

        	// 画时, 分, 秒指针
        	drawHand();
        }
        
        public function drawBorder():void
        {
			// 指定线条样式，两个参数分别为线条的粗细（以磅为单位）和线条的颜色
        	this.graphics.lineStyle(0.5, 0x999999);
			// 以指定的颜色开始填充，在调用 endFill() 后才会呈现填充
        	this.graphics.beginFill(bgColor);
			// 画园，三个参数分别为圆心的 X 坐标、圆心的 Y 坐标和园的半径。之前调用的 beginFill() 方法将填充此园
        	this.graphics.drawCircle(centerX, centerY, radius);
			// 呈现上次的 beginFill() 的结果
        	this.graphics.endFill();
        }
  
        public function drawHourLabel():void
        {
        	for (var i:Number = 1; i <= 12; i++)
        	{
        		// 表盘的刻度标识，1 到 12
        		var lbl:TextField = new TextField();
        		lbl.text = i.toString();
        		
        		// 小时刻度标识所需旋转的弧度（使用弧度是为了方便之后的 sin() 和 cos() 计算）
        		var angle:Number = i * 30 * (Math.PI / 180);
        		
        		// 计算刻度标识的位置
        		lbl.x = centerX + (0.9 * radius * Math.sin(angle)) - 5;
        		lbl.y = centerY - (0.9 * radius * Math.cos(angle)) - 9;
        		
        		// 格式化刻度标识的文本样式
        		var tf:TextFormat = new TextFormat();
        		// tf.font = "Arial";
        		tf.bold = "true";
        		tf.size = 12;
        		lbl.setTextFormat(tf);
        		
				// 在 Container 中添加指定的 DisplayObject ，返回值为被添加到 Container 后的 DisplayObject
	        	this.addChild(lbl);
        	}
        }
        
        public function drawHand():void
        {   	
        	hourHand = new Shape();
			hourHand.graphics.lineStyle(3, hourHandColor);
			// 移动当前的绘画起点到指定的位置
        	hourHand.graphics.moveTo(0, -radius * 0.5);
			// 画直线到指定位置，起点位置由 moveTo() 决定
        	hourHand.graphics.lineTo(0, 0);
			hourHand.x = centerX;
        	hourHand.y = centerY;		
        	addChild(hourHand);
			     	
          	minuteHand = new Shape();
			minuteHand.graphics.lineStyle(2, minuteHandColor);
        	minuteHand.graphics.moveTo(0, -radius * 0.8);
        	minuteHand.graphics.lineTo(0, 0);
         	minuteHand.x = centerX;
        	minuteHand.y = centerY;
			addChild(minuteHand);
 
         	secondHand = new Shape();
			secondHand.graphics.lineStyle(0.5, secondHandColor);
        	secondHand.graphics.moveTo(0, -radius * 0.9);
        	secondHand.graphics.lineTo(0, 0);
			secondHand.x = centerX;
        	secondHand.y = centerY;
        	addChild(secondHand);
        }
        
		// 以当前系统时间刷新表盘的呈现
        public function refresh():void
        {
			// new Date() - Flash 宿主的系统时间
        	var currentTime:Date = new Date();
        	
			var hour:uint = currentTime.getHours();
			var minute:uint = currentTime.getMinutes();
			var second:uint = currentTime.getSeconds();
    
	        // 时, 分, 秒指针做相应的旋转。单位：度数
	        this.hourHand.rotation = hour * 30 + minute * 0.5;
	        this.minuteHand.rotation = minute * 6;
	        this.secondHand.rotation = second * 6;
        }
    }
}
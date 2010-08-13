package 
{
	import flash.display.Sprite;
	import flash.text.StyleSheet;
	import flash.text.TextField;
	import flash.events.*;
	import flash.external.ExternalInterface;
	import flash.system.System;
	
	/**
	 * ...
	 * @author ZhangYi
	 */
	public class Main extends Sprite 
	{
		
		public function Main():void 
		{
			if (stage) {
				init();
			} else {
				addEventListener(Event.ADDED_TO_STAGE, init);
			}
		}
		
		private function init(e:Event = null):void {
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			//stage.scaleMode = StageScaleMode.NO_SCALE;			
			
			var txt:TextField = new TextField();
			var css:StyleSheet = new StyleSheet();
			css.parseCSS(".clipboard {font-size:12px; color:#333; text-decoration:underline;}");
			
			txt.styleSheet = css;
			txt.htmlText = "<a href='#' class='clipboard'>复制到剪贴板</a>";
			
			txt.addEventListener(MouseEvent.CLICK, clickHandler);
			
			addChild(txt);
		}
		
		private function clickHandler(evt:Event):void {
			var content:String = "Flash Test";
			//var content:String = ExternalInterface.call("getData") || "";
			System.setClipboard(content);
			trace("复制成功");
			//ExternalInterface.call("copySuccess");
			
			evt.stopImmediatePropagation();
			evt.preventDefault();
			evt.stopPropagation();
		}
	}
	
}
package 
{
	import flash.display.Loader;
	import flash.display.Sprite;
	import flash.events.IOErrorEvent;
	import flash.events.Event;
	import flash.events.ProgressEvent;
	import flash.net.URLRequest;
	
	/**
	 * ...
	 * @author ZhangYi
	 */
	public class Main extends Sprite 
	{
		private var loadMC:Loader
		public function Main():void 
		{
			trace("构造函数...");
			
			if (stage) {
				init();
			} else {
				addEventListener(Event.ADDED_TO_STAGE, init);
			}
			
			var newMC:Sprite = new Sprite();
			this.addChild(newMC);
			
			loadMC = new Loader();
			loadMC.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS, progressHandler);	
			loadMC.contentLoaderInfo.addEventListener(Event.COMPLETE, initHandler);
			loadMC.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);
			
			loadMC.load(new URLRequest("file:///D:/flashApp/game_3/game_3.swf"));
			newMC.addChild(loadMC);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
		}
		
		private function progressHandler(evt:ProgressEvent):void {
			var percentLoader:Number = evt.bytesLoaded / evt.bytesTotal;
			percentLoader = Math.round(percentLoader * 100);
			trace("加载的比率为：" + percentLoader + "%");
		}
		
		private function initHandler(evt:Event):void {
			trace("加载完成!");
			trace(loadMC.content)
		}
		
		private function ioErrorHandler(evt:IOErrorEvent):void {
			trace("IOErrorEvent:"+evt);
		}
		
	}
	
}
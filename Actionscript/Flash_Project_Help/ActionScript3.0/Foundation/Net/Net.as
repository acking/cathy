package
{
	import flash.display.Sprite;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.URLVariables;
	import flash.net.URLRequestMethod;
	import flash.events.Event;
	
	// 对JSON的支持
	import com.adobe.serialization.json.JSON;
	
	public class Net extends Sprite
	{
		public function Net()
		{
			// 以文本形式与ASP.NET通信
			showText();
			
			// 以XML形式与ASP.NET通信
			showXml();
			
			// 以JSON形式与ASP.NET通信
			showJSON();
		}
		
		// 以文本形式与ASP.NET通信
		function showText():void
		{
			var v:URLVariables = new URLVariables("name=webabcd&age=27");
			var r:URLRequest = new URLRequest();
			r.url = "http://localhost:1343/Web/Text.aspx";
			r.method = URLRequestMethod.GET;
			r.data = v;
			
			var l:URLLoader = new URLLoader();
			l.load(r);
			l.addEventListener(Event.COMPLETE, textCompleteHandler);
		}
		
		function textCompleteHandler(event:Event):void
		{
			var l:URLLoader = URLLoader(event.target);
    		
			trace(l.data);
			// output: name: webabcd; age: 27
		}
		
		// 以XML形式与ASP.NET通信
		function showXml():void
		{
			var v:URLVariables = new URLVariables()
			var r:URLRequest = new URLRequest();
			r.url = "http://localhost:1343/Web/Xml.aspx";
			r.method = URLRequestMethod.GET;
			r.data = v;
			
			
			var l:URLLoader = new URLLoader();
			l.load(r);
			l.addEventListener(Event.COMPLETE, xmlCompleteHandler);
		}
		
		function xmlCompleteHandler(event:Event):void
		{
			var l:URLLoader = event.target as URLLoader;
    		var xml:XML = new XML(l.data);
			
			for each(var v in xml.person)
			{
				trace("姓名：" + v.@name + "；年龄：" + v.@age + "；薪水：" + v.salary);
			}
			// output: 
			// 姓名：webabcd；年龄：27；薪水：1000
			// 姓名：webabcdefg；年龄：37；薪水：2000
			// 姓名：webabcdefghijklmn；年龄：47；薪水：30
		}
		
		// 以JSON形式与ASP.NET通信
		function showJSON():void
		{
			var v:URLVariables = new URLVariables()
			var r:URLRequest = new URLRequest();
			r.url = "http://localhost:1343/Web/JSON.aspx";
			r.method = URLRequestMethod.GET;
			r.data = v;
			
			
			var l:URLLoader = new URLLoader();
			l.load(r);
			l.addEventListener(Event.COMPLETE, jsonCompleteHandler);
		}
		
		function jsonCompleteHandler(event:Event):void
		{
			var l:URLLoader = event.target as URLLoader;
    		
			var v:* = JSON.decode(l.data);
			
			trace("姓名：" + v.Name + "；年龄：" + v.Age);
			// output: 姓名：webabcd；年龄：27
		}
	}
}
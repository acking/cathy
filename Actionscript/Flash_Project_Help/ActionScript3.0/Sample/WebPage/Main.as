/*
 * 注： 
 * 1、如果需要 Flash 与 JavaScript 交互，那么包含 swf 文件的 html 标记必须要有 id
 * 2、如跨域调用，需要设置相关的插件参数，如 <param name="allowScriptAccess" value ="always" />
 * 3、Flash端的相关安全类配置：类似 flash.system.Security.allowDomain("*");
 */
package 
{
	import flash.display.MovieClip;
	import flash.external.ExternalInterface;

	public class Main extends MovieClip
	{
		public function Main():void
		{
			loadVarsDemo();
			
			asCallJS();
			
			jsCallAS();
		}
		
		
		// 获取页面端配置的参数
		// 下面的示例用于读取页面端的如下配置 
		// <param name="flashVars" value="name=webabcd&age=29" />
		// <param name="movie" value="Demo.swf?dateOfBirth=1980-02-14" />
		private function loadVarsDemo():void
		{
			lblVars.text = 
				"姓名：" + stage.loaderInfo.parameters["name"]
				+ "  "
				+ "年龄：" + stage.loaderInfo.parameters["age"]
				+ "  "
				+ "生日：" + stage.loaderInfo.parameters["dateOfBirth"];
				
			lblSwfUrl.text = stage.loaderInfo.url;
		}
		
		
		// ActionScript 调用 JavaScript
		private function asCallJS():void
		{
			// 调用指定的 JavaScript 端的函数，并顺序指定传递给 JavaScript 端函数的参数
			ExternalInterface.call("jsMethod", "param1", "param2");
		}
		
		
		// JavaScript 调用 ActionScript 时，ActionScript 端的函数
		private function jsCallAS():void
		{
			// 注册一个需要被 JavaScript 调用的函数
			ExternalInterface.addCallback("asMethod", output);   
		}
		
		public function output(p1:String, p2:String):void
		{   
			lblResult.text = "参数1：" + p1 + " 参数2：" + p2
		}  
	}
}
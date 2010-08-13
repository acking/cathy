// 包
package 
{
	// 导入包
	import flash.display.Sprite;
	
	// Basic类继承自Sprite
	// 包内只可以定义一个类
	// 类名必须与文件名相同
	public class Basic extends Sprite
	{
		// 构造函数
		public function Basic()
		{
			trace("Hello ActionScript");
			// output: Hello ActionScript
			
			// 数据类型（一切都是对象）
			showDataType();
			
			// 各个对象的默认值
			showDefaultValue();
			
			// 操作符
			showOperator();
			
			// 流程控制语句
			showFlowControl();
		}
		
		// 数据类型（一切都是对象）
		function showDataType():void
		{
			// 声明常量
			const c:String = "CONST webabcd";
			trace(c);
			// output: CONST webabcd
			
			// 整型
			var i:int = -100;
			trace(i);
			// output: -100
			
			// 布尔值
			var b:Boolean = true;
			trace(b);
			// output: true
			
			// 数字类型（有小数的时候）
			var n:Number = 100.123;
			trace(n);
			// output: 100.123
			
			// 正整数
			var u:uint = 100;
			trace(u);
			// output: 100
			
			// 字符串
			var s:String = "webabcd";
			trace(s);
			// output: webabcd
			
			// 一维数组（赋初始值）
			var a:Array = new Array(1,2,3);
			trace(a[0]);
			// output: 1
			
			// 一维数组（赋初始值）
			var a2:Array = [1,2,3];
			trace(a2[1]);
			// output: 2
			
			// 一维数组（指定数组长度）
			var a3:Array = new Array(3);
			a3[0] = 1;
			a3[1] = 2;
			a3[2] = 3;
			trace(a3[2]);
			// output: 3
			
			// 二维数组（赋初始值）
			var aa:Array = [[1,2,3], [4,5,6], [7,8,9]];
			trace(aa[0][0]);
			// output: 1
			
			// 二维数组（指定数组长度）
			var aa2:Array = new Array(3);
			aa2[0] = [1,2,3];
			aa2[1] = [4,5,6];
			aa2[2] = [7,8,9];
			trace(aa2[0][0]);
			// output: 1
			
			// 日期类型
			var d:Date = new Date();
			trace(d.toDateString());
			// output: Mon Nov 12 2007
			
			// 声明一个新对象
			// var o:Object = new Object();
			// var o:Object = {};
			
			// 声明一个新对象，同时写入属性
			var o:Object = {nickname:"webabcd", age:"27"};
			
			// 为对象动态地添加属性
			o["salary"] = 1000;
			trace(o.nickname);
			// output: webabcd
			
			trace(o.age);
			// output: 27
			
			trace(o.salary);
			// output: 1000
			
			// delete只能删除动态添加的属性
			delete o.salary;
			trace(o.salary);
			// output: undefined
		}
		
		// 各个对象的默认值
		function showDefaultValue():void
		{
			var i:int;
			trace(i);
			// output: 0
			
			var u:uint;
			trace(u);
			// output: 0
			
			var n:Number;
			trace(n);
			// output: NaN
			
			var s:String;
			trace(s);
			// output: null
			
			var b:Boolean;
			trace(b);
			// output: false
			
			var a:Array;
			trace(a);
			// output: null
			
			var o:Object;
			trace(o);
			// output: null
			
			var d:Date;
			trace(d);
			// output: null
			
			var xxx;
			trace(xxx);
			// output: undefined
			
			var yyy:*;
			trace(yyy);
			// output: undefined
		}
		
		// 操作符
		function showOperator():void
		{
			/* 以下操作符同C#
			+ - * / % 
			+= -= *= /= %=
			== != 
			=== !=== （操作符两边不做类型转换）
			>= <= > <
			&& || !
			? : 
			*/
			
			// 以字符串的形式返回对象的类型
			trace(typeof "webabcd");
			// output: string
			
			// 判断一个对象是否属于某一类型
			trace("webabcd" is String);
			// output: true
			
			// 如果对象属于某一类型，则返回该对象
			trace("webabcd" as String);
			// output: webabcd
			
			// 如果对象不属于某一类型，则返回null
			trace("webabcd" as Number);
			// output: null
			
			var ary:Array = [1,2,3];
			// 判断一个对象是否属于某一集合
			trace(1 in ary);
			// output: true
		}
		
		// 流程控制语句
		function showFlowControl():void
		{
			/* 以下流程控制同C#
			if - else if - else
			while 循环
			do-while 循环
			for 循环
			switch - case
			break continue
			*/
			
			var ary:Array = [1,2,3];
			// for each - in的枚举变量代表集合成员
			for each(var v in ary)
			{
				trace(v)
			}
			// output: 
			// 1
			// 2
			// 3
			
			// for - in的枚举变量代表集合索引
			for (var k in ary)
			{
				trace(ary[k])
			}
			// output: 
			// 1
			// 2
			// 3
		}
	}
}
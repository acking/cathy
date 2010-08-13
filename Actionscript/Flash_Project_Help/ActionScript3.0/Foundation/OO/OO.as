package
{
	import flash.display.Sprite;
	
	// 导入actionScript目录下的所有包
	import actionScript.*;
	
	public class OO extends Sprite
	{
		public function OO()
		{
			// internal - 包内访问（默认）
			// public - 完全公开
			// private - 仅当前类可访问
			// protected - 子类可访问
			
			// 用函数表达式定义函数
			var hello:Function = function(s:String):String
			{
				return "hello: " + s;
			}
			trace(hello("webabcd"));
			// output: hello: webabcd
			
			// 方法
			showFunction();
			
			// 属性、getter方法和setter方法
			showProperty();
			
			// 静态属性和静态方法
			showStatic();
			
			// 包外类
			showPackageOut();
			
			// 命名空间
			showNamespace();
			
			// 继承、基类和子类
			showInherit();
			
			// 接口
			showInterface();
		}
		
		// 方法
		function showFunction():void
		{
			var ft:FunctionTest = new FunctionTest();
			
			trace(ft.Subtract(300, 100));
			// output: 200
			
			trace(ft.Add("webabcd", 1, 2, 3, 4, 5));
			// output: webabcd: 15
		}
		
		// 属性、getter方法和setter方法
		function showProperty():void
		{
			var pt:PropertyTest = new PropertyTest();
			pt.nickname = "webabcd";
			pt.age = 27;
			pt.salary = 1000;
			
			trace(pt.nickname);
			// output: webabcd
			
			trace(pt.age);
			// output: 27
			
			trace(pt.salary);
			// output: 1000
		}
		
		// 静态属性和静态方法
		function showStatic():void
		{
			trace(StaticTest.nickname);
			// output: webabcd
			
			StaticTest.age = 27;
			
			trace(StaticTest.age);
			// output: 27
			
			trace(StaticTest.hello("webabcd"));
			// output: hello: webabcd
		}
		
		// 包外类
		function showPackageOut()
		{
			var po:PackageOut = new PackageOut();
			
			trace(po.hello("webabcd"));
			// output: hello: webabcd
		}
		
		// 命名空间
		function showNamespace()
		{
			// 使用命名空间
			// use namespace 不受上下文的影响，编译时会被自动地提到前端
			use namespace china;
			
			var n:NamespaceTest = new NamespaceTest();
			
			trace(n.hello("webabcd"));
			// output: 您好: webabcd
			
			// 使用命名空间名称限定符
			trace(n.usa::hello("webabcd"));
			// output: hello: webabcd
		}
		
		// 继承、基类和子类
		function showInherit()
		{
			var ct:ChildTest = new ChildTest();
			
			trace(ct.hello("webabcd"));
			// output: 基类的hello()方法 - hello: webabcd；子类重写后的hello()方法 - 您好: webabcd

			trace(ct is ParentTest);
			// output: true
		}
		
		// 接口
		function showInterface()
		{
			var a:InterfaceTest = new InterfaceTestA();
			
			trace(a.writeLog());
			// output: 记录日志到SQL Server数据库
			
			trace(a is InterfaceTest);
			// output: true
			
			var b:InterfaceTest = new InterfaceTestB();
			
			trace(b.writeLog());
			// output: 记录日志到XML文件
			
			trace(b is InterfaceTest);
			// output: true
		}
	}
}

// 包外类（只有当前类文件中的成员类可以访问）
class PackageOut
{
	public function hello(s:String):String
	{
		return "hello: " + s;
	}
}
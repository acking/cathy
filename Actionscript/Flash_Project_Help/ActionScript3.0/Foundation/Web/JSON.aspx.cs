using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class JSON : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Person person = new Person();
        person.Name = "webabcd";
        person.Age = 27;

        HttpContext.Current.Response.ClearContent();
        // HttpContext.Current.Response.ContentType = "application/json";
        HttpContext.Current.Response.ContentType = "text/plain";

        // 把person对象序列化成JSON
        System.Runtime.Serialization.DataContractJsonSerializer dcjs = new System.Runtime.Serialization.DataContractJsonSerializer(person.GetType());
        dcjs.WriteObject(HttpContext.Current.Response.OutputStream, person);

        HttpContext.Current.Response.End();
    }
}

/// <summary>
/// Person类
/// </summary>
[System.Runtime.Serialization.DataContract]
public class Person
{
    private string _name;
    /// <summary>
    /// 姓名
    /// </summary>
    [System.Runtime.Serialization.DataMember]
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    private int _age;
    /// <summary>
    /// 年龄
    /// </summary>
    [System.Runtime.Serialization.DataMember]
    public int Age
    {
        get { return _age; }
        set { _age = value; }
    }
}


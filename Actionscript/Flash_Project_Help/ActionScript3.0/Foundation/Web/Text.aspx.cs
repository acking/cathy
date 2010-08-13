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

public partial class Text : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string s = "name: " + Request.QueryString["name"] + "; age: " + Request.QueryString["age"];

        Response.ClearContent();
        Response.ContentType = "text/plain";
        Response.Write(s);
        Response.End();
    }
}

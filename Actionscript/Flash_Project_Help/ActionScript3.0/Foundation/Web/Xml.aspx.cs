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

public partial class Xml : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string s = @"<?xml version=""1.0"" encoding=""utf-8""?>
            <root>
                <person name=""webabcd"" age=""27"">
                    <salary>1000</salary>
                </person>
                <person name=""webabcdefg"" age=""37"">
                    <salary>2000</salary>
                </person>
                <person name=""webabcdefghijklmn"" age=""47"">
                    <salary>3000</salary>
                </person>
            </root>";

        Response.ClearContent();
        Response.ContentType = "text/xml";
        Response.Write(s);
        Response.End();
    }
}

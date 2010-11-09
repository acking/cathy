function CityTripleModule() {
	this.def_c1 = ["", ""];
	this.def_c2 = ["", ""];
	this.def_c3 = ["", ""];
	var city = "=中国:CN|北京:bj+东城区:CN.bj.101.+西城区:CN.bj.102.+崇文区:CN.bj.103.+宣武区:CN.bj.104.+朝阳区:CN.bj.105.+丰台区:CN.bj.106.+石景山区:CN.bj.107.+海淀区:CN.bj.108.+门头沟区:CN.bj.109.+房山区:CN.bj.110.+通州区:CN.bj.111.+顺义区:CN.bj.112.+昌平区:CN.bj.113.+大兴区:CN.bj.114.+怀柔区:CN.bj.115.+平谷区:CN.bj.116.+密云县:CN.bj.117.+延庆县:CN.bj.118.|福建:fj+福州:CN.fj.591.+厦门:CN.fj.592.+宁德:CN.fj.593.+莆田:CN.fj.594.+泉州:CN.fj.595.+漳州:CN.fj.596.+龙岩:CN.fj.597.+三明:CN.fj.598.+南平:CN.fj.599.|甘肃:gs+临夏:CN.gs.930.+兰州:CN.gs.931.+定西:CN.gs.932.+平凉:CN.gs.933.+西峰:CN.gs.934.+武威:CN.gs.935.+张掖:CN.gs.936.+酒泉:CN.gs.937.+天水:CN.gs.938.+武都:CN.gs.939.+甘南:CN.gs.941.+嘉峪关:CN.gs.942.+白银:CN.gs.943.|广东:gd+广州:CN.gd.20.+汕尾:CN.gd.660.+潮阳:CN.gd.661.+阳江:CN.gd.662.+揭阳:CN.gd.663.+茂名:CN.gd.668.+江门:CN.gd.750.+韶关:CN.gd.751.+惠州:CN.gd.752.+梅州:CN.gd.753.+汕头:CN.gd.754.+深圳:CN.gd.755.+珠海:CN.gd.756.+佛山:CN.gd.757.+肇庆:CN.gd.758.+湛江:CN.gd.759.+中山:CN.gd.760.+河源:CN.gd.762.+清远:CN.gd.763.+顺德:CN.gd.765.+云浮:CN.gd.766.+潮州:CN.gd.768.+东莞:CN.gd.769.|广西:gx+防城港:CN.gx.770.+南宁:CN.gx.771.+柳州:CN.gx.772.+桂林:CN.gx.773.+梧州:CN.gx.774.+玉林:CN.gx.775.+百色:CN.gx.776.+钦州:CN.gx.777.+河池:CN.gx.778.+北海:CN.gx.779.+崇左:CN.gx.780.+贵港:CN.gx.781.+贺州:CN.gx.782.+来宾:CN.gx.783.|贵州:gz+贵阳:CN.gz.851.+遵义:CN.gz.852.+安顺:CN.gz.853.+都匀:CN.gz.854.+凯里:CN.gz.855.+铜仁:CN.gz.856.+毕节:CN.gz.857.+六盘水:CN.gz.858.+兴义:CN.gz.859.|海南:hi+白沙:CN.hi.840.+保亭:CN.hi.841.+昌江:CN.hi.842.+澄迈:CN.hi.843.+儋州:CN.hi.844.+定安:CN.hi.845.+东方:CN.hi.846.+乐东:CN.hi.847.+临高:CN.hi.848.+陵水:CN.hi.849.+南沙:CN.hi.860.+琼海:CN.hi.861.+琼中:CN.hi.862.+三亚:CN.hi.863.+屯昌:CN.hi.864.+万宁:CN.hi.865.+文昌:CN.hi.866.+五指山:CN.hi.867.+西沙:CN.hi.868.+中沙:CN.hi.869.+海口:CN.hi.898.|河北:he+邯郸:CN.he.310.+石家庄:CN.he.311.+保定:CN.he.312.+张家口:CN.he.313.+承德:CN.he.314.+唐山:CN.he.315.+廊坊:CN.he.316.+沧州:CN.he.317.+衡水:CN.he.318.+邢台:CN.he.319.+秦皇岛:CN.he.335.|河南:ha+商丘:CN.ha.370.+郑州:CN.ha.371.+安阳:CN.ha.372.+新乡:CN.ha.373.+许昌:CN.ha.374.+平顶山:CN.ha.375.+信阳:CN.ha.376.+南阳:CN.ha.377.+开封:CN.ha.378.+洛阳:CN.ha.379.+焦作:CN.ha.391.+鹤壁:CN.ha.392.+濮阳:CN.ha.393.+周口:CN.ha.394.+漯河:CN.ha.395.+驻马店:CN.ha.396.+潢川:CN.ha.397.+三门峡:CN.ha.398.|黑龙江:hl+哈尔滨:CN.hl.451.+齐齐哈尔:CN.hl.452.+牡丹江:CN.hl.453.+佳木斯:CN.hl.454.+绥化:CN.hl.455.+黑河:CN.hl.456.+大兴安岭:CN.hl.457.+伊春:CN.hl.458.+大庆:CN.hl.459.+七台河:CN.hl.464.+鸡西:CN.hl.467.+鹤岗:CN.hl.468.+双鸭山:CN.hl.469.|湖北:hb+武汉:CN.hb.27.+襄樊:CN.hb.710.+鄂州:CN.hb.711.+孝感:CN.hb.712.+黄冈:CN.hb.713.+黄石:CN.hb.714.+咸宁:CN.hb.715.+荆州:CN.hb.716.+宜昌:CN.hb.717.+恩施:CN.hb.718.+十堰:CN.hb.719.+潜江:CN.hb.720.+天门:CN.hb.721.+随州:CN.hb.722.+神农架:CN.hb.723.+荆门:CN.hb.724.+江汉:CN.hb.728.|湖南:hn+岳阳:CN.hn.730.+长沙:CN.hn.731.+湘潭:CN.hn.732.+株洲:CN.hn.733.+衡阳:CN.hn.734.+郴州:CN.hn.735.+常德:CN.hn.736.+益阳:CN.hn.737.+娄底:CN.hn.738.+邵阳:CN.hn.739.+吉首:CN.hn.743.+张家界:CN.hn.744.+怀化:CN.hn.745.+永州:CN.hn.746.|吉林:jl+长春:CN.jl.431.+吉林:CN.jl.432.+延吉:CN.jl.433.+四平:CN.jl.434.+通化:CN.jl.435.+白城:CN.jl.436.+辽源:CN.jl.437.+松原:CN.jl.438.+白山:CN.jl.439.+梅河口:CN.jl.448.|江苏:js+南京:CN.js.25.+无锡:CN.js.510.+镇江:CN.js.511.+苏州:CN.js.512.+南通:CN.js.513.+扬州:CN.js.514.+盐城:CN.js.515.+徐州:CN.js.516.+淮安:CN.js.517.+连云港:CN.js.518.+常州:CN.js.519.+泰州:CN.js.523.+宿迁:CN.js.527.|江西:jx+鹰潭:CN.jx.701.+新余:CN.jx.790.+南昌:CN.jx.791.+九江:CN.jx.792.+上饶:CN.jx.793.+抚州:CN.jx.794.+宜春:CN.jx.795.+吉安:CN.jx.796.+赣州:CN.jx.797.+景德镇:CN.jx.798.+萍乡:CN.jx.799.|辽宁:ln+沈阳:CN.ln.24.+铁岭:CN.ln.410.+大连:CN.ln.411.+鞍山:CN.ln.412.+抚顺:CN.ln.413.+本溪:CN.ln.414.+丹东:CN.ln.415.+锦州:CN.ln.416.+营口:CN.ln.417.+阜新:CN.ln.418.+辽阳:CN.ln.419.+朝阳:CN.ln.421.+盘锦:CN.ln.427.+葫芦岛:CN.ln.429.|内蒙古自治区:nm+海拉尔:CN.nm.470.+呼和浩特:CN.nm.471.+包头:CN.nm.472.+乌海:CN.nm.473.+集宁:CN.nm.474.+通辽:CN.nm.475.+赤峰:CN.nm.476.+东胜:CN.nm.477.+临河:CN.nm.478.+锡林浩特:CN.nm.479.+乌兰浩特:CN.nm.482.+阿拉善左旗:CN.nm.483.|宁夏回族自治区:nx+银川:CN.nx.951.+石嘴山:CN.nx.952.+吴忠:CN.nx.953.+固原:CN.nx.954.+中卫:CN.nx.955.|青海:qh+海晏:CN.qh.970.+西宁:CN.qh.971.+海东:CN.qh.972.+同仁:CN.qh.973.+共和:CN.qh.974.+玛沁:CN.qh.975.+玉树:CN.qh.976.+德令哈:CN.qh.977.+门源:CN.qh.978.+格尔木:CN.qh.979.|山东:sd+菏泽:CN.sd.530.+济南:CN.sd.531.+青岛:CN.sd.532.+淄博:CN.sd.533.+德州:CN.sd.534.+烟台:CN.sd.535.+潍坊:CN.sd.536.+济宁:CN.sd.537.+泰安:CN.sd.538.+临沂:CN.sd.539.+滨州:CN.sd.543.+东营:CN.sd.546.+威海:CN.sd.631.+枣庄:CN.sd.632.+日照:CN.sd.633.+莱芜:CN.sd.634.+聊城:CN.sd.635.|山西:sx+朔州:CN.sx.349.+忻州:CN.sx.350.+太原:CN.sx.351.+大同:CN.sx.352.+阳泉:CN.sx.353.+榆次:CN.sx.354.+长治:CN.sx.355.+晋城:CN.sx.356.+临汾:CN.sx.357.+吕梁:CN.sx.358.+运城:CN.sx.359.|陕西:sn+西安:CN.sn.29.+咸阳:CN.sn.910.+延安:CN.sn.911.+榆林:CN.sn.912.+渭南:CN.sn.913.+商州:CN.sn.914.+安康:CN.sn.915.+汉中:CN.sn.916.+宝鸡:CN.sn.917.+铜川:CN.sn.919.|上海:sh+黄浦区:CN.sh.171.+卢湾区:CN.sh.172.+徐汇区:CN.sh.173.+长宁区:CN.sh.174.+静安区:CN.sh.175.+普陀区:CN.sh.176.+闸北区:CN.sh.177.+虹口区:CN.sh.178.+杨浦区:CN.sh.179.+闵行区:CN.sh.180.+宝山区:CN.sh.181.+嘉定区:CN.sh.182.+浦东新区:CN.sh.183.+金山区:CN.sh.184.+松江区:CN.sh.185.+青浦区:CN.sh.186.+南汇区:CN.sh.187.+奉贤区:CN.sh.188.+崇明县:CN.sh.189.|四川:sc+成都:CN.sc.28.+攀枝花:CN.sc.812.+自贡:CN.sc.813.+绵阳:CN.sc.816.+南充:CN.sc.817.+达川:CN.sc.818.+遂宁:CN.sc.825.+广安:CN.sc.826.+巴中:CN.sc.827.+眉山:CN.sc.828.+资阳:CN.sc.829.+泸州:CN.sc.830.+宜宾:CN.sc.831.+内江:CN.sc.832.+乐山:CN.sc.833.+西昌:CN.sc.834.+雅安:CN.sc.835.+康定:CN.sc.836.+马尔康:CN.sc.837.+德阳:CN.sc.838.+广元:CN.sc.839.|台湾:tw+台北市:CN.tw.241.+高雄市:CN.tw.242.+基隆市:CN.tw.243.+台中市:CN.tw.244.+台南市:CN.tw.245.+新竹市:CN.tw.246.+嘉义市:CN.tw.247.|天津:tj+和平区:CN.tj.191.+河东区:CN.tj.192.+河西区:CN.tj.193.+南开区:CN.tj.194.+河北区:CN.tj.195.+红桥区:CN.tj.196.+塘沽区:CN.tj.197.+汉沽区:CN.tj.198.+大港区:CN.tj.199.+东丽区:CN.tj.200.+西青区:CN.tj.201.+津南区:CN.tj.202.+北辰区:CN.tj.203.+武清区:CN.tj.204.+宝坻区:CN.tj.205.+宁河县:CN.tj.206.+静海县:CN.tj.207.+蓟县:CN.tj.208.|西藏自治区:xz+拉萨:CN.xz.891.+日喀则:CN.xz.892.+山南:CN.xz.893.+林芝:CN.xz.894.+昌都:CN.xz.895.+那曲:CN.xz.896.+阿里:CN.xz.897.|香港:hk+中西区:CN.hk.211.+湾仔区:CN.hk.212.+东区:CN.hk.213.+南区:CN.hk.214.+油尖旺区:CN.hk.215.+深水埗区:CN.hk.216.+九龙城区:CN.hk.217.+黄大仙区:CN.hk.218.+观塘区:CN.hk.219.+荃湾区:CN.hk.220.+葵青区:CN.hk.221.+沙田区:CN.hk.222.+西贡区:CN.hk.223.+大埔区:CN.hk.224.+北区:CN.hk.225.+元朗区:CN.hk.226.+屯门区:CN.hk.227.+离岛区:CN.hk.228.|新疆维吾尔自治区:xj+塔城:CN.xj.901.+哈密:CN.xj.902.+和田:CN.xj.903.+阿勒泰:CN.xj.906.+阿图什:CN.xj.908.+博乐:CN.xj.909.+阿拉尔:CN.xj.920.+五家渠:CN.xj.921.+图木舒克:CN.xj.922.+克拉玛依:CN.xj.990.+乌鲁木齐:CN.xj.991.+奎屯:CN.xj.992.+石河子:CN.xj.993.+昌吉:CN.xj.994.+吐鲁番:CN.xj.995.+库尔勒:CN.xj.996.+阿克苏:CN.xj.997.+喀什:CN.xj.998.+伊宁:CN.xj.999.|云南:yn+景洪:CN.yn.691.+潞西:CN.yn.692.+昭通:CN.yn.870.+昆明:CN.yn.871.+大理:CN.yn.872.+个旧:CN.yn.873.+曲靖:CN.yn.874.+保山:CN.yn.875.+文山:CN.yn.876.+玉溪:CN.yn.877.+楚雄:CN.yn.878.+思茅:CN.yn.879.+东川:CN.yn.881.+临沧:CN.yn.883.+六库:CN.yn.886.+中甸:CN.yn.887.+丽江:CN.yn.888.|浙江:zj+衢州:CN.zj.570.+杭州:CN.zj.571.+湖州:CN.zj.572.+嘉兴:CN.zj.573.+宁波:CN.zj.574.+绍兴:CN.zj.575.+台州:CN.zj.576.+温州:CN.zj.577.+丽水:CN.zj.578.+金华:CN.zj.579.+舟山:CN.zj.580.|重庆:cq+万州区:CN.cq.121.+涪陵区:CN.cq.122.+渝中区:CN.cq.123.+大渡口区:CN.cq.124.+江北区:CN.cq.125.+沙坪坝区:CN.cq.126.+九龙坡区:CN.cq.127.+南岸区:CN.cq.128.+北碚区:CN.cq.129.+万盛区:CN.cq.130.+双桥区:CN.cq.131.+渝北区:CN.cq.132.+巴南区:CN.cq.133.+黔江区:CN.cq.134.+长寿区:CN.cq.135.+江津区:CN.cq.136.+合川区:CN.cq.137.+永川区:CN.cq.138.+南川区:CN.cq.139.+綦江县:CN.cq.140.+潼南县:CN.cq.141.+铜梁县:CN.cq.142.+大足县:CN.cq.143.+荣昌县:CN.cq.144.+璧山县:CN.cq.145.+梁平县:CN.cq.146.+城口县:CN.cq.147.+丰都县:CN.cq.148.+垫江县:CN.cq.149.+武隆县:CN.cq.150.+忠县:CN.cq.151.+开县:CN.cq.152.+云阳县:CN.cq.153.+奉节县:CN.cq.154.+巫山县:CN.cq.155.+巫溪县:CN.cq.156.+石柱土家族自治县:CN.cq.157.+秀山土家族苗族自治县:CN.cq.158.+酉阳土家族苗族自治县:CN.cq.159.+彭水苗族土家族自治县:CN.cq.160.|安徽:ah+滁州:CN.ah.550.+合肥:CN.ah.551.+蚌埠:CN.ah.552.+芜湖:CN.ah.553.+淮南:CN.ah.554.+马鞍山:CN.ah.555.+安庆:CN.ah.556.+宿州:CN.ah.557.+阜阳:CN.ah.558.+黄山:CN.ah.559.+亳州:CN.ah.560.+淮北:CN.ah.561.+铜陵:CN.ah.562.+宣城:CN.ah.563.+六安:CN.ah.564.+巢湖:CN.ah.565.+池州:CN.ah.566.|澳门:mo+澳门:CN.mo.mo.";

	this.initC1 = function(obj1) {
		var i;
		obj1.options.length = 0;

		//		if (this.def_c1)
		//			obj1.options.add(new Option(this.def_c1[0], this.def_c1[1]));
		var c1Regex = /=[^|]+/ig;
		var c1 = city.match(c1Regex);
		for (i = 0; i < c1.length; i++) {
			var arr = c1[i].replace("=", "").split(':');
			obj1.options.add(new Option(arr[0], arr[1]));
		}
	}
	this.initC2 = function(obj1, key) {
		var i;
		obj1.options.length = 0;

		//		if (this.def_c2)
		//			obj1.options.add(new Option(this.def_c2[0], this.def_c2[1]));
		var c2Regex = new RegExp("=[\u4e00-\u9fa5（）]+:" + key + "[^=]+");
		var reg = new RegExp("=[\u4e00-\u9fa5（）]+:" + key + "|");
		var c2 = city.match(c2Regex)[0].replace(reg, "").split('|');
		obj1.options.add(new Option('请选择省份', ''));
		for (i = 0; i < c2.length; i++) {
			if (c2[i].length > 0) {
				var arr = c2[i].split('+')[0].split(':');
				obj1.options.add(new Option(arr[0], arr[1]));
			}
		}
	}
	this.initC3 = function(obj1, key, key2) {
		var i;
		obj1.options.length = 0;

		//		if (this.def_c3)
		//			obj1.options.add(new Option(this.def_c3[0], this.def_c3[1]));
		var c2Regex = new RegExp("=[\u4e00-\u9fa5（）]+:" + key + "[^=]+");
		var arrC2 = city.match(c2Regex);
		//alert(arrC2);
		if (arrC2 != null && arrC2.length != 0) {
			var c3Regex = new RegExp("[\u4e00-\u9fa5（）]+:" + key2 + "[^|=]+");
			var arr = arrC2[0].match(c3Regex);
			//alert(arr);
			if (arr != null && arr.length != 0) {
				var reg = new RegExp("[\u4e00-\u9fa5（）]+:" + key2 + "+");
				var c3 = arr[0].replace(reg, "").split('+');
				obj1.options.add(new Option('请选择城市', ''));
				for (i = 0; i < c3.length; i++) {
					if (c3[i].length > 0) {
						var arr = c3[i].split(':');
						if (arr[0]!='CN'){
							obj1.options.add(new Option(arr[0], arr[1]));
						}
					}
				}

				if (c3.length == 1)
					obj1.options[c3.length - 1].selected = true;
			}
		}

	}
	this.selectC1Item = function(obj1, value) {
		var ret = false;
		for (var i = 0; i < obj1.options.length; i++) {
			if (obj1.options[i].value == value) {
				ret = obj1.options[i].selected = true;
				break;
			}
		}
		if (!ret) {
			for (var i = 0; i < obj1.options.length; i++) {
				if (obj1.options[i].value == "CN") {
					ret = obj1.options[i].selected = true;
					break;
				}
			}
		}
		return ret;
	}
	this.selectC2Item = function(obj1, value) {
		var ret = false;
		for (var i = 0; i < obj1.options.length; i++) {
			if (obj1.options[i].value == value) {
				ret = obj1.options[i].selected = true;
				break;
			}
		}
		return ret;
	}

	this.selectC3Item = function(obj1, value) {
		var ret = false;
		for (var i = 0; i < obj1.options.length; i++) {
			if (obj1.options[i].value == value) {
				ret = obj1.options[i].selected = true;
				break;
			}
		}
		return ret;
	}
	this.getSelValue = function(obj1) {
		if (obj1 && obj1.options && obj1.options.length > 0)
			return obj1.options[obj1.selectedIndex].value;
		else
			return null;
	}

	this.getC1NameById = function(id) {
		var ret = "";
		for (var i = 0; i < c1.length; i++) {
			if (c1[i][1] == id) {
				ret = c1[i];
				break;
			}
		}

		return ret;
	}

	this.getC1IdByName = function(name) {
		var ret = -1;
		for (var i = 0; i < c1.length; i++) {
			if (c1[i] == name) {
				ret = c1[i][1];
				break;
			}
		}

		return ret;
	}

	this.removeOptionItem = function(obj, index) {
		if (typeof obj.options.remove == "undefined") {
			obj.remove(index);
		} else {
			obj.options.remove(index);
		}
	}

	this.Init = function(objN, objP, objC, region) {
		if (region != "") {
			var arr = region.split('.');
			if (arr.length >= 3) {
				this.selectC1Item(objN, arr[0]);
				this.initC2(objP, this.getSelValue(objN));
				this.selectC2Item(objP, arr[1]);
				this.initC3(objC, this.getSelValue(objN), this.getSelValue(objP));
				var cValue = arr[2];
				if (arr[0] != "CN") {
					cValue = region.toString().substring(0, region.toString().length - 1);
				}
				this.selectC3Item(objC, region);
			}
			else {
				this.selectC1Item(objN, arr[0]);
				this.initC2(objP, this.getSelValue(objN));
				this.initC3(objC, this.getSelValue(objN), this.getSelValue(objP));
			}
		}
	}
} //end moudle
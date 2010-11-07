/*QQMapAPI@Tencent Research*/
//showZoomFrameFx


﻿
if (window._a === undefined) {
    window._a = {}
}
if (_a.Search === undefined) {
    _a.Search = {}
}
if (_a._aa === undefined) {
    _a._aa = {}
}
_a._aa._aag = function () {
    var _aag = function () {
        if (this.initialize) {
            this.initialize.apply(this, arguments)
        }
    };
    var extended = {};
    var parent;
    for (var i = 0; i < arguments.length; ++i) {
        if (typeof arguments[i] == "function") {
            parent = arguments[i].prototype
        } else {
            parent = arguments[i]
        }
        _a._aa._aag._aagb(extended, parent)
    }
    _aag.prototype = extended;
    extended = null;
    parent = null;
    return _aag
};
_a._aa._aag._aagb = function (destination, source) {
    var value, sourceIsEvt, property;
    if (destination && source) {
        for (property in source) {
            value = source[property];
            if (value !== undefined) {
                destination[property] = value
            }
        }
        if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty('toString')) {
            destination.toString = source.toString
        }
    }
    return destination
};
_a._aa._aaa = _a._aa._aag({
    initialize: function () {}
});
_a._aa._aaa.result = [];
_a._aa._aaa.bind = function (url, pars, method, onComplete, asynchronous, this_, mapNumber, base64, mvc) {
    var proxy;
    var params;
    var prefix = "ZN";
    var suffix = "HJ";
    proxy = document.createElement("script");
    proxy.setAttribute("charset", "utf-8");
    proxy.id = Math.random();
    document.getElementsByTagName("head")[0].appendChild(proxy);
    var async = asynchronous;
    if (async === true) {}
    if (mapNumber !== undefined && (typeof mapNumber !== "boolean")) {
        if (base64 === undefined) {
            base64 = _a._aa._aab.Base64Default
        }
        params = pars + "&mapNumber=" + mapNumber + "&obscure=" + _a._aa._aab.Obscure + "&randomKey=" + Math.random();
        if (base64) {
            params = prefix + _a._aa._aaf.base64encode(params) + suffix
        }
        proxy.src = url + "?" + params;
        if (_a._aa._aaf._aafj() === "IE") {
            proxy.onreadystatechange = function () {
                if (proxy.readyState == "loaded") {
                    if (onComplete !== null) {
                        onComplete(this_, _a._aa._aaa.result[mapNumber]);
                        if (async === true) {}
                    }
                    document.getElementsByTagName("head")[0].removeChild(proxy)
                }
            }
        } else {
            proxy.onload = function () {
                if (onComplete !== null) {
                    onComplete(this_, _a._aa._aaa.result[mapNumber]);
                    if (async === true) {}
                }
                document.getElementsByTagName("head")[0].removeChild(proxy)
            }
        }
    } else {
        base64 = mapNumber;
        if (base64 === undefined) {
            base64 = _a._aa._aab.Base64Default
        }
        params = pars + "&randomKey=" + Math.random();
        if (base64) {
            params = prefix + _a._aa._aaf.base64encode(params) + suffix
        }
        proxy.src = url + "?" + params;
        window.result = undefined;
        if (_a._aa._aaf._aafj() === "IE") {
            proxy.onreadystatechange = function () {
                if (proxy.readyState == "loaded") {
                    if (result === undefined || result !== null) {
                        onComplete(this_, result);
                        if (async === true) {}
                    }
                    document.getElementsByTagName("head")[0].removeChild(proxy)
                }
            }
        } else {
            proxy.onload = function () {
                if (onComplete !== null) {
                    onComplete(this_, result);
                    if (async === true) {}
                }
                document.getElementsByTagName("head")[0].removeChild(proxy)
            }
        }
    }
    url = null;
    pars = null;
    method = null;
    asynchronous = null
};
_a._aa._aab = _a._aa._aag({
    className: "_a._aa._aab",
    initialize: function () {}
});
_a._aa._aab._aabr = "http://map.qq.com/QQMapAPI/";
_a._aa._aab._aabu = 2;
_a._aa._aab._aabw = 256;
_a._aa._aab._aabv = 256;
_a._aa._aab._aabc = 10;
_a._aa._aab._aabn = "beijing";
_a._aa._aab._aabo = "EPSG4326";
_a._aa._aab._aabp = "CASVEGA";
_a._aa._aab._aabg = "QQMap";
_a._aa._aab._aabs = "NoTileCache";
_a._aa._aab._aabt = 10;
_a._aa._aab._aabx = "CenterStable";
_a._aa._aab._aaby = "TileStable";
_a._aa._aab._aabz = "CenterStable";
_a._aa._aab._aabb = true;
_a._aa._aab._aaba = 2;
_a._aa._aab._aabd = 10;
_a._aa._aab._aabi = 5;
_a._aa._aab.QPolylineZIndex = 4;
_a._aa._aab._aabm = 3;
_a._aa._aab.QCircleZIndex = 3;
_a._aa._aab.QMarkerTipZIndex = 4;
_a._aa._aab._aabq = 3;
_a._aa._aab._aabl = 20;
_a._aa._aab.QPaintOpacity = 0.85;
_a._aa._aab.QPaintControlOpacity = 0.85;
_a._aa._aab._aabj = 100;
_a._aa._aab.Base64Default = false;
_a._aa._aab.Obscure = 0;
if (_a._aa._aab.MetaData === undefined) {
    _a._aa._aab.MetaData = {}
}
_a._aa._aab._aabe = ["http://p0.map.qq.com/maptiles/", "http://p1.map.qq.com/maptiles/", "http://p2.map.qq.com/maptiles/", "http://p3.map.qq.com/maptiles/"];
_a._aa._aab.GetMapSuffix = ".gif";
_a._aa._aab.MetaData.zmin = 4;
_a._aa._aab.MetaData.zmax = 17;
_a._aa._aab.MetaData.resolution = [156543.03, 78271.516, 39135.758, 19567.879, 9783.939, 4891.9697, 2445.9849, 1222.9924, 611.4962, 305.7481, 152.87405, 76.43703, 38.218513, 19.109257, 9.554628, 4.777314, 2.388657, 1.1943285];
_a._aa._aab.MetaData.scope = [0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7, 0, 7, 0, 15, 0, 15, 0, 31, 0, 31, 0, 63, 4, 59, 0, 127, 12, 115, 0, 225, 28, 227, 356, 455, 150, 259, 720, 899, 320, 469, 1440, 1799, 650, 929, 2880, 3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520, 14349, 5100, 7999, 23060, 28689, 10710, 15429, 46120, 57369, 20290, 29849, 89990, 124729, 41430, 60689, ];
_a._aa._aab.MetaData.display_bound_box = [
    [-20037508.34, -233606567.06003442, 20037508.34, 238107693.23182276],
    [-20037508.34, -233606567.06003442, 20037508.34, 238107693.23182276],
    [-20037508.34, -233606567.06003442, 20037508.34, 238107693.23182276],
    [-20037508.34, -233606567.06003442, 20037508.34, 238107693.23182276],
    [-13362089.727333333, -557305.257196999, 15362089.727333333, 7558415.655029641],
    [-13362089.727333333, -557305.257196999, 15362089.727333333, 7558415.655029641],
    [-18924313.432222225, -15538711.09414622, 18924313.432222225, 15538711.094146222],
    [-18924313.432222225, -15538711.09414622, 18924313.432222225, 15538711.094146222],
    [-18924313.432222225, -15538711.09414622, 18924313.432222225, 15538711.094146222],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641],
    [7569725.372888888, 557305.257196999, 15362089.727333333, 7558415.655029641]
];
_a._aa._aac = _a._aa._aag({
    className: "_a._aa._aac",
    _1: null,
    initialize: function (len) {
        if (len === undefined) {
            this._1 = new Array()
        } else {
            this._1 = new Array(len)
        }
        len = null
    },
    length: function () {
        return this._1.length
    },
    at: function (i) {
        return this._1[i]
    },
    set: function (i, obj) {
        this._1[i] = obj;
        i = null;
        obj = null
    },
    push: function (obj) {
        this._1.push(obj);
        obj = null
    },
    slice: function (p) {
        this._1 = this._1.slice(p);
        p = null
    },
    concat: function (array) {
        this._1 = this._1.concat(array);
        array = null
    },
    remove: function (p, count) {
        if (count === undefined) {
            count = 1
        }
        this._1.splice(p, count);
        p = null;
        count = null
    },
    join: function (p) {
        return this._1.join(p)
    },
    clear: function () {
        this._1.length = 0
    }
});
_a._aa.QArray2D = _a._aa._aag({
    className: "_a._aa.QArray2D",
    _1: null,
    _25: null,
    _14: null,
    initialize: function (x, y) {
        this._1 = new _a._aa._aac(x * y);
        this._25 = x;
        this._14 = y;
        x = null;
        y = null
    },
    lengthX: function () {
        return this._25
    },
    lengthY: function () {
        return this._14
    },
    at: function (i, j) {
        return this._1.at(i * this._14 + j)
    },
    set: function (i, j, obj) {
        this._1.set(i * this._14 + j, obj);
        i = null;
        j = null;
        obj = null
    },
    clear: function () {
        this._1.length = 0
    }
});
_a._aa._aad = _a._aa._aag({
    className: "_a._aa._aad",
    _3: null,
    initialize: function (bufferLength) {
        if (bufferLength !== null) {
            this._3 = new _a._aa._aac(bufferLength)
        } else {
            this._3 = new _a._aa._aac()
        }
        bufferLength = null
    },
    _19: function (key) {
        var len, i;
        len = this._3.length();
        for (i = 0; i < len; i += 2) {
            if (this._3.at(i) === key) {
                break
            }
        }
        if (i === len) {
            i = -1
        }
        key = null;
        len = null;
        return i
    },
    get: function (key) {
        var i, value = null;
        if ((i = this._19(key)) !== -1) {
            value = this._3.at(i + 1)
        }
        key = null;
        i = null;
        return value
    },
    set: function (key, value) {
        var i;
        if ((i = this._19(key)) !== -1) {
            this._3[i + 1] = value
        } else {
            this._3.push(key);
            this._3.push(value)
        }
        i = null;
        key = null;
        value = null
    },
    length: function () {
        return this._3.length() / 2
    },
    at: function (i) {
        var mapElement = {
            first: null,
            second: null
        };
        mapElement.first = this._3.at(2 * i);
        mapElement.second = this._3.at(2 * i + 1);
        i = null;
        return mapElement
    },
    remove: function (key) {
        var i;
        if ((i = this._19(key)) !== -1) {
            this._3.remove(i, 2)
        }
        i = null;
        key = null
    },
    clear: function () {
        this._3.clear()
    }
});
_a._aa._aae = _a._aa._aag({
    className: "_a._aa._aae",
    _4: null,
    _11: 0,
    initialize: function () {
        this._4 = new _a._aa._aac()
    },
    enqueue: function (obj) {
        this._4.push(obj);
        obj = null
    },
    dequeue: function () {
        var ret = null;
        if (this._4.length()) {
            ret = this._4.at(this._11);
            if (++this._11 * 2 >= this._4.length()) {
                this._4.slice(this._11);
                this._11 = 0
            }
        }
        return ret
    },
    top: function () {
        var ret = null;
        if (this._4.length()) {
            ret = this._4.at(queueSpace)
        }
        return ret
    },
    length: function () {
        return this._4.length() - this._11
    },
    empty: function () {
        return (this._4.length() === 0)
    }
});
_a._aa._aaf = _a._aa._aag({
    className: "_a._aa._aaf",
    initialize: function () {}
});
_a._aa._aaf.setTimeout = function (fRef, mDelay) {
    var _21, argu, f;
    _21 = window.setTimeout;
    if (typeof(fRef) === "function") {
        argu = Array.prototype.slice.call(arguments, 2);
        f = (function () {
            fRef.apply(null, argu)
        });
        return _21(f, mDelay)
    }
    return _21(fRef, mDelay)
};
_a._aa._aaf.log = function (str, fileName, lineNumber) {
    var logDiv, logTextArea;
    logTextArea = document.getElementById('qqmap_log_textarea');
    if (!logTextArea) {
        logDiv = document.createElement('div');
        logDiv.innerHTML = "<textarea id='qqmap_log_textarea' style='width:190px;height:1000px;border:1px solid red;'></textarea>";
        document.getElementsByTagName('body')[0].appendChild(logDiv);
        logTextArea = document.getElementById('qqmap_log_textarea')
    }
    if (fileName && lineNumber) {
        logTextArea.value = fileName + ":" + lineNumber + ' - ' + str + logTextArea.value
    } else {
        logTextArea.value = str + logTextArea.value
    }
    str = null;
    fileName = null;
    lineNumber = null;
    logDiv = null;
    logTextArea = null
};
_a._aa._aaf._aafb = 0;
_a._aa._aaf._aafg = function (str, mapNumber) {
    var ret = [_a._aa._aab._aabg, mapNumber, "_", str].join("");
    str = null;
    mapNumber = null;
    return ret
};
_a._aa._aaf._aafj = function () {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("msie") >= 0) {
        return "IE"
    } else if (agent.indexOf("firefox") >= 0) {
        return "FF"
    } else if (agent.indexOf("opera") >= 0) {
        return "OPERA"
    } else if (agent.indexOf("chrome") >= 0) {
        return "CHROME"
    } else if (agent.indexOf("safari") >= 0) {
        return "SAFARI"
    } else {
        return "FF"
    }
};
_a._aa._aaf._aafj.isIE6 = function () {
    if (_a._aa._aaf._aafj() === "IE") {
        var arVersion = navigator.appVersion.split("MSIE");
        var version = parseFloat(arVersion[1]);
        if ((version >= 5.5 && version < 7.0) && (document.body.filters)) {
            return true
        }
    }
    return false
};

function partition(items, p, r, getter) {
    var x = getter(items[r]);
    var i = p - 1;
    for (var j = p; j < r; j++) {
        if (getter(items[j]) <= x) {
            i++;
            var tmp = items[j];
            items[j] = items[i];
            items[i] = tmp
        }
    }
    var tmp = items[i + 1];
    items[i + 1] = items[r];
    items[r] = tmp;
    return i + 1
}
function quickSortByGetter(items, p, r, getter) {
    if (p < r) {
        var q = partition(items, p, r, getter);
        quickSortByGetter(items, p, q - 1, getter);
        quickSortByGetter(items, q + 1, r, getter)
    }
}
_a._aa._aaf.sortByGetter = function (items, getter) {
    return quickSortByGetter(items, 0, items.length - 1, getter)
};
var freeDom = null;
_a._aa._aaf.removeNode = function (node) {
    if (_a._aa._aaf._aafj() == 'IE') {
        _a._aa.QMVCEvent.clearListeners(node);
        if (!freeDom) {
            freeDom = document.createElement('div')
        }
        freeDom.appendChild(node);
        freeDom.innerHTML = ''
    } else {
        node && node.parentNode && node.parentNode.removeChild(node)
    }
};
var fetchedImage = [];
_a._aa._aaf.fetchImage = function (url, callback) {
    var imageFetch = new Image();
    for (var i = 0, len = fetchedImage.length; i < len; ++i) {
        if (fetchedImage[i].url === url) {
            callback(fetchedImage[i].width, fetchedImage[i].height, url);
            return
        }
    }
    _a._aa.QMVCEvent.addDomListener(imageFetch, 'load', function () {
        fetchedImage.push({
            url: url,
            width: imageFetch.width,
            height: imageFetch.height
        });
        callback(imageFetch.width, imageFetch.height, url);
        imageFetch = null
    });
    _a._aa.QMVCEvent.addDomListener(imageFetch, 'error', function () {
        fetchedImage.push({
            url: url,
            width: 0,
            height: 0
        });
        callback(0, 0, url);
        imageFetch = null
    });
    var sm = '?';
    if (url.indexOf('\?') != -1) {
        sm = '&'
    }
    imageFetch.src = url + sm + new Date().getTime();
    return
};

function emptyEvent(event) {
    event = event || window.event;
    _a._aa._aaf.stopEvent(event);
    return false
}
_a._aa._aaf.getCssSpriteImage = function (url, origin, img, allowSelectDrag) {
    var isPng = _a._aa._aaf._aafj.isIE6() && url.toLowerCase().indexOf('.png') != -1;
    if (!img) {
        img = document.createElement('img');
        img.style.cssText = 'position:absolute';
        if (!allowSelectDrag) {
            img.style.cssText = '-moz-user-select:none;' + '-khtml-user-select:none;';
            img.unselectable = 'on';
            _a._aa.QMVCEvent.addDomListener(img, 'selectstart', emptyEvent);
            _a._aa.QMVCEvent.addDomListener(img, 'dragstart', emptyEvent)
        }
        img.style.position = 'absolute';
        img.__src__ = url;
        if (isPng) {
            img.className = 'csssprite';
            img.src = _a._aa._aab._aabr + '/themes/default/img/blank.gif';
            _a._aa._aaf.fetchImage(url, function (width, height) {
                img.width = width;
                img.height = height;
                img.style.filter = 'progid:DXImageTransform.' + 'Microsoft.AlphaImageLoader(enabled=true, ' + 'sizingMethod=scale, src="' + url + '"'
            })
        } else {
            img.src = url;
            img.style.width = 'auto';
            img.style.height = 'auto'
        }
    } else if (url && img.__src__ != url) {
        img.__src__ = url;
        if (_a._aa._aaf._aafj.isIE6() && url.toLowerCase().indexOf('.png') != -1) {
            img.style.filter = 'progid:DXImageTransform.' + 'Microsoft.AlphaImageLoader(enabled=true, ' + 'sizingMethod=scale, src="' + url + '"'
        } else {
            img.src = url
        }
    }
    img.style.left = -origin[0] + 'px';
    img.style.top = -origin[1] + 'px';
    return img
};
_a._aa._aaf.setCssSprite = function (dom, url, position, selectDrag) {
    if (_a._aa._aaf._aafj.isIE6()) {
        if (dom.style.position != 'relative' && dom.style.position != 'absolute') {
            dom.style.position = 'relative'
        }
        dom.style.background = '';
        dom.style.overflow = 'hidden';
        var imgs = dom.childNodes;
        var img = null;
        for (var i = 0, len = imgs.length; i < len; ++i) {
            if (imgs[i].className == 'csssprite') {
                img = imgs[i];
                break
            }
        }
        img = _a._aa._aaf.getCssSpriteImage(url, position, img, selectDrag);
        if (!img.parentNode) {
            dom.appendChild(img)
        }
    } else {
        url && (dom.style.backgroundImage = 'url(' + url + ')');
        dom.style.backgroundPosition = -position[0] + 'px ' + (-position[1]) + 'px'
    }
};
_a._aa._aaf.getDivPageLeft = function (obj) {
    var ParentObj = obj;
    var left = obj.offsetLeft;
    while (ParentObj = ParentObj.offsetParent) {
        left += ParentObj.offsetLeft
    }
    obj = null;
    ParentObj = null;
    return left
};
_a._aa._aaf.getDivPageTop = function (obj) {
    var ParentObj = obj;
    var top = obj.offsetTop;
    while (ParentObj = ParentObj.offsetParent) {
        top += ParentObj.offsetTop
    }
    obj = null;
    ParentObj = null;
    return top
};
_a._aa._aaf._aafa = {};
_a._aa._aaf._aafa.lngFrom4326ToProjection = function (lng) {
    var ret = lng * 111319.49077777777777777777777778;
    lng = null;
    return ret
};
_a._aa._aaf._aafa.latFrom4326ToProjection = function (lat) {
    var ret = Math.log(Math.tan((90 + lat) * 0.0087266462599716478846184538424431)) / 0.017453292519943295769236907684886;
    ret = ret * 111319.49077777777777777777777778;
    lat = null;
    return ret
};
_a._aa._aaf._aafa.lngFromProjectionTo4326 = function (x) {
    var lng = x / 111319.49077777777777777777777778;
    x = null;
    return lng
};
_a._aa._aaf._aafa.latFromProjectionTo4326 = function (y) {
    var lat = y / 111319.49077777777777777777777778;
    lat = Math.atan(Math.exp(lat * 0.017453292519943295769236907684886)) * 114.59155902616464175359630962821 - 90;
    y = null;
    return lat
};
_a._aa._aaf.LatLngPixelConvertor = _a._aa._aag({
    className: "_a._aa._aaf.LatLngPixelConvertor",
    _27: 0,
    _13: 0,
    _12: 0,
    _30: 0,
    _17: 0,
    _18: 0,
    _5: null,
    _10: 0,
    initialize: function () {},
    setSeedLatLng: function (lng, lat) {
        this._27 = lng;
        this._30 = lat;
        if (_a._aa._aab._aabp === "CASVEGA") {
            this._13 = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng);
            this._12 = _a._aa._aaf._aafa.latFrom4326ToProjection(lat)
        } else if (_a._aa._aab._aabp === "EPSG4326") {
            this._13 = this._27;
            this._12 = this._30
        }
        lng = null;
        lat = null
    },
    setSeedPixel: function (left, top) {
        this._17 = left;
        this._18 = top;
        left = null;
        top = null
    },
    setResolution: function (resolution) {
        this._5 = resolution;
        resolution = null
    },
    setZoomLevel: function (zoomLevel) {
        this._10 = zoomLevel;
        zoomLevel = null
    },
    LatLng2Pixel: function (lng, lat) {
        var left, top, deltaX, deltaY, res, serviceProjectionX, serviceProjectionY;
        if (_a._aa._aab._aabp === "CASVEGA") {
            serviceProjectionX = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng);
            serviceProjectionY = _a._aa._aaf._aafa.latFrom4326ToProjection(lat)
        } else {
            serviceProjectionX = lng;
            serviceProjectionY = lat
        }
        deltaX = serviceProjectionX - this._13;
        deltaY = serviceProjectionY - this._12;
        var result = [];
        if (this._5) {
            res = this._5[this._10];
            left = this._17 + Math.round(deltaX / res);
            top = this._18 - Math.round(deltaY / res);
            result = [left, top]
        }
        lng = null;
        lat = null;
        deltaX = null;
        deltaY = null;
        res = null;
        serviceProjectionX = null;
        serviceProjectionY = null;
        return result
    },
    Pixel2LatLng: function (left, top) {
        var lng, lat, deltaLeft, deltaTop, res, serviceProjectionX, serviceProjectionY;
        deltaLeft = left - this._17;
        deltaTop = top - this._18;
        var result = [];
        if (this._5) {
            res = this._5[this._10];
            serviceProjectionX = this._13 + deltaLeft * res;
            serviceProjectionY = this._12 - deltaTop * res;
            if (_a._aa._aab._aabp === "CASVEGA") {
                lng = _a._aa._aaf._aafa.lngFromProjectionTo4326(serviceProjectionX);
                lat = _a._aa._aaf._aafa.latFromProjectionTo4326(serviceProjectionY)
            } else {
                lng = serviceProjectionX;
                lat = serviceProjectionY
            }
            result = [lng, lat]
        }
        left = null;
        top = null;
        deltaLeft = null;
        deltaTop = null;
        res = null;
        serviceProjectionX = null;
        serviceProjectionY = null;
        return result
    },
    distanceToPixels: function (distance) {
        var res = this._5[this._10];
        var pixels = Math.round(distance / res);
        return pixels
    },
    getOptimalZoomLevel: function (minLng, minLat, maxLng, maxLat, viewSizeWidth, viewSizeHeight) {
        var minServiceProjectionX, minServiceProjectionY, maxServiceProjectionX, maxServiceProjectionY;
        if (_a._aa._aab._aabp === "CASVEGA") {
            minServiceProjectionX = _a._aa._aaf._aafa.lngFrom4326ToProjection(minLng);
            minServiceProjectionY = _a._aa._aaf._aafa.latFrom4326ToProjection(minLat);
            maxServiceProjectionX = _a._aa._aaf._aafa.lngFrom4326ToProjection(maxLng);
            maxServiceProjectionY = _a._aa._aaf._aafa.latFrom4326ToProjection(maxLat)
        } else {
            minServiceProjectionX = minLng;
            minServiceProjectionY = minLat;
            maxServiceProjectionX = maxLng;
            maxServiceProjectionY = maxLat
        }
        var deltaServiceProjectionX, deltaServiceProjectionY, z;
        deltaServiceProjectionX = maxServiceProjectionX - minServiceProjectionX;
        deltaServiceProjectionY = maxServiceProjectionY - minServiceProjectionY;
        for (z = this._5.length - 1; z >= 0; --z) {
            if (deltaServiceProjectionX / this._5[z] < (viewSizeWidth - 80) && deltaServiceProjectionY / this._5[z] < (viewSizeHeight - 80)) {
                break
            }
        }
        minLng = null;
        minLat = null;
        maxLng = null;
        maxLat = null;
        viewSizeWidth = null;
        viewSizeHeight = null;
        minServiceProjectionX = null;
        minServiceProjectionY = null;
        maxServiceProjectionX = null;
        maxServiceProjectionY900913 = null;
        deltaServiceProjectionX = null;
        deltaServiceProjectionY = null;
        return z
    }
});
Function.prototype.bind = function () {
    var method = this;
    var args = this.args;
    return function (newArg) {
        args.push(newArg);
        return method.apply(this, args)
    }
};
_a._aa._aaf.gc = function () {
    if (_a._aa._aaf._aafj() === "IE") {
        setTimeout("CollectGarbage();", 1)
    }
};
_a._aa._aaf._aafk = function (s1) {
    var s = escape(s1);
    var sa = s.split("%");
    var retV = "";
    if (sa[0] !== "") {
        retV = sa[0]
    }
    for (var i = 1; i < sa.length; i++) {
        if (sa[i].substring(0, 1) == "u") {
            retV += _a._aa._aaf._aafh(_a._aa._aaf._aafi(sa[i].substring(1, 5)));
            if (sa[i].length > 5) {
                retV += sa[i].substring(5)
            }
        } else {
            retV += "%" + sa[i]
        }
    }
    return retV
};
_a._aa._aaf._aafi = function (s) {
    var c = "";
    var n;
    var ss = "0123456789ABCDEF";
    var digS = "";
    for (var i = 0; i < s.length; i++) {
        c = s.charAt(i);
        n = ss.indexOf(c);
        digS += _a._aa._aaf._aafe(eval(n))
    }
    return digS
};
_a._aa._aaf._aafe = function (n1) {
    var s = "";
    var n2 = 0;
    for (var i = 0; i < 4; i++) {
        n2 = Math.pow(2, 3 - i);
        if (n1 >= n2) {
            s += '1';
            n1 = n1 - n2
        } else {
            s += '0'
        }
    }
    return s
};
_a._aa._aaf._aaff = function (s) {
    var retV = 0;
    if (s.length == 4) {
        for (var i = 0; i < 4; i++) {
            retV += eval(s.charAt(i)) * Math.pow(2, 3 - i)
        }
        return retV
    }
    return -1
};
_a._aa._aaf._aafh = function (s) {
    var retS = "";
    var tempS = "";
    var ss = "";
    if (s.length == 16) {
        tempS = "1110" + s.substring(0, 4);
        tempS += "10" + s.substring(4, 10);
        tempS += "10" + s.substring(10, 16);
        var sss = "0123456789ABCDEF";
        for (var i = 0; i < 3; i++) {
            retS += "%";
            ss = tempS.substring(i * 8, (eval(i) + 1) * 8);
            retS += sss.charAt(_a._aa._aaf._aaff(ss.substring(0, 4)));
            retS += sss.charAt(_a._aa._aaf._aaff(ss.substring(4, 8)))
        }
        return retS
    }
    return ""
};
_a._aa._aaf._aafl = function () {
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
    if ((version >= 5.5 && version < 7.0) && (document.body.filters)) {
        for (var i = 0; i < document.images.length; i++) {
            var img = document.images[i];
            var imgName = img.src.toUpperCase();
            if (imgName.indexOf(".PNG") > 0) {
                var width = img.width;
                var height = img.height;
                var sizingMethod = (img.className.toLowerCase().indexOf("scale") >= 0) ? "scale" : "image";
                img.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + img.src.replace('%23', '%2523').replace("'", "%27") + "', sizingMethod='" + sizingMethod + "')";
                img.src = _a._aa._aab._aabr + "/themes/default/img/blank.gif";
                img.width = width;
                img.height = height
            }
        }
    }
};
_a._aa._aaf.ContextMenuGetLatLng = function (event) {
    var target, mapNumber, mvc, contextMenu, left, top, eventLeft, eventTop, latlng;
    event = event || window.event;
    target = event.target || event.srcElement;
    mapNumber = target.getAttribute("mapNumber");
    mvc = document.getElementById(_a._aa._aaf._aafg("MapDiv", mapNumber)).mvc;
    contextMenu = document.getElementById(_a._aa._aaf._aafg("ContextMenu", mapNumber));
    left = parseInt(contextMenu.style.left, 10);
    top = parseInt(contextMenu.style.top, 10);
    eventLeft = left - mvc.view.qOverlaysDivLeft;
    eventTop = top - mvc.view.qOverlaysDivTop;
    latlng = mvc.view.latlngPixelConvertor.Pixel2LatLng(eventLeft, eventTop);
    event = null;
    target = null;
    mapNumber = null;
    mvc = null;
    contextMenu = null;
    left = null;
    top = null;
    eventLeft = null;
    eventTop = null;
    return latlng
};
_a._aa._aaf._aafn = function (c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length
            }
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return null
};
_a._aa._aaf._aafr = function (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString())
};
_a._aa._aaf._aafq = function (name) {
    _a._aa._aaf._aafr(name, '', {
        expireHours: -1
    })
};
_a._aa._aaf._aaft = function (str) {
    str = str.replace(/^\s*/, "");
    str = str.replace(/\s*$/, "");
    return str
};
_a._aa._aaf.getRandomNum = function (lbound, ubound) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound)
};
_a._aa._aaf.generateLowerCaseLetterRandommly = function () {
    return _a._aa._aaf.generateLowerCaseLetterRandommly.letters[_a._aa._aaf.getRandomNum(0, 25)]
};
_a._aa._aaf.generateLowerCaseLetterRandommly.letters = "abcdefghijklmnopqrstuvwxyz";
_a._aa._aaf.generateUpperCaseLetterRandommly = function () {
    return _a._aa._aaf.generateUpperCaseLetterRandommly.letters[_a._aa._aaf.getRandomNum(0, 25)]
};
_a._aa._aaf.generateUpperCaseLetterRandommly.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
_a._aa._aaf.base64encode = function (str) {
    src = _a._aa._aaf.utf8to16(str);
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "**";
            break
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "*";
            break
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F)
    }
    return out
};
_a._aa._aaf.utf8to16 = function (str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            out += str.charAt(i - 1);
            break;
        case 12:
        case 13:
            char2 = str.charCodeAt(i++);
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
        case 14:
            char2 = str.charCodeAt(i++);
            char3 = str.charCodeAt(i++);
            out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
            break
        }
    }
    return out
};
_a._aa._aaf.fixEvent = function (event) {
    if (_a._aa._aaf._aafj() === "IE") {
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        return [(event.clientX + scrollLeft), (event.clientY + scrollTop)]
    } else {
        return [event.pageX, event.pageY]
    }
};
_a._aa._aaf.stopBubble = function (event) {
    if (_a._aa._aaf._aafj() === "IE") {
        window.event.cancelBubble = true
    } else {
        event.stopPropagation()
    }
};
_a._aa._aaf.centerChangedFixDisplayBBox = function (qevent, displayBBox) {
    if (displayBBox !== undefined && displayBBox !== null) {
        if (qevent.lng < displayBBox[0]) {
            qevent.lng = displayBBox[0]
        } else if (qevent.lng > displayBBox[2]) {
            qevent.lng = displayBBox[2]
        }
        if (qevent.lat < displayBBox[1]) {
            qevent.lat = displayBBox[1]
        } else if (qevent.lat > displayBBox[3]) {
            qevent.lat = displayBBox[3]
        }
    }
    qevent = null;
    displayBBox = null
};
_a._aa._aaf.isCenterInDisplayBBox = function (lng, lat, displayBBox) {
    var flag = false;
    if (displayBBox !== undefined && displayBBox !== null) {
        if (lng > displayBBox[0] && lat > displayBBox[1] && lng < displayBBox[2] && lat < displayBBox[3]) {
            flag = true
        }
    } else {
        flag = true
    }
    lng = null;
    lat = null;
    displayBBox = null;
    return flag
};
_a._aa._aaf.getKeyNumber = function (event) {
    var keynum;
    if (window.event) {
        keynum = window.event.keyCode
    } else if (event.which) {
        keynum = event.which
    }
    event = null;
    return keynum
};
String.prototype._aaft = function () {
    return this.replace(/^\s+/g, "").replace(/\s+$/g, "")
};
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2)
};
(function () {
    var QALIGN = {
        'TOP_LEFT': 0,
        'TOP': 1,
        'TOP_RIGHT': 2,
        'LEFT': 3,
        'CENTER': 4,
        'RIGHT': 5,
        'BOTTOM_LEFT': 6,
        'BOTTOM': 7,
        'BOTTOM_RIGHT': 8
    };
    QALIGN.isTop = function (align) {
        return align < 3
    };
    QALIGN.isMiddle = function (align) {
        return align > 2 && align < 6
    };
    QALIGN.isBottom = function (align) {
        return align > 5
    };
    QALIGN.isLeft = function (align) {
        return align % 3 == 0
    };
    QALIGN.isCenter = function (align) {
        return align % 3 == 1
    };
    QALIGN.isRight = function (align) {
        return align % 3 == 2
    };
    _a._aa._aaf.messOperator = function (mess, handler, opt_isAllProperty) {
        if (mess) {
            if (mess.length) {
                for (var i = 0, len = mess.length; i < len; ++i) {
                    handler(i, mess[i])
                }
            } else {
                for (var key in mess) {
                    if (opt_isAllProperty || !mess.hasOwnProperty || mess.hasOwnProperty(key)) {
                        handler(key, mess[key])
                    }
                }
            }
        }
    };
    _a._aa._aaf.copyObject = function (source, target, opt_isAllProperty) {
        _a._aa._aaf.messOperator(source, function (key) {
            target[key] = source[key]
        }, opt_isAllProperty)
    };
    _a._aa._aaf._aagb = function (son, parent) {
        function pp() {};
        pp.prototype = parent.prototype;
        son.prototype = new pp
    };
    var capitalInitialList = {};
    _a._aa._aaf.capitalInitial = function (str) {
        return capitalInitialList[str] || (capitalInitialList[str] = str.substr(0, 1).toUpperCase() + str.substr(1))
    };
    _a._aa._aaf.stopEvent = function (event) {
        event.returnValue = false;
        event.preventDefault && event.preventDefault();
        event.cancelBubble = true;
        event.stopPropagation && event.stopPropagation()
    };
    _a._aa._aaf.getDomSize = function (dom, callback) {
        var imgs = dom.getElementsByTagName('img');
        var len = imgs.length;
        var count = len;
        for (var i = 0; i < len; ++i) {
            if (imgs[i].height && imgs[i].width) {
                count--
            } else {
                imgs[i].onload = imgs[i].onerror = function () {
                    count--;
                    count == 0 && callback()
                }
            }
        }
        if (count == 0) {
            callback()
        }
    };
    _a._aa._aaf.fixImagesSize = function (dom, maxWidth, maxHeight) {
        maxWidth = maxWidth || 100000;
        maxHeight = maxHeight || 100000;
        var imgs = dom.getElementsByTagName('img');
        var len = imgs.length;
        for (var i = 0; i < len; ++i) {
            if (imgs[i].height && imgs[i].width) {
                if (imgs[i].width > maxWidth) {
                    var theta = imgs[i].width / imgs[i].height;
                    imgs[i].width = maxWidth;
                    imgs[i].height = imgs[i].width / theta;
                    if (imgs[i].height > maxHeight) {
                        imgs[i].height = maxHeight;
                        imgs[i].width = imgs[i].height * theta
                    }
                }
            } else {
                imgs[i].onload = imgs[i].onerror = function () {
                    if (this.width > maxWidth) {
                        var theta = this.width / this.height;
                        this.width = maxWidth;
                        this.height = this.width / theta;
                        if (this.height > maxHeight) {
                            this.height = maxHeight;
                            this.width = this.height * theta
                        }
                    }
                }
            }
        }
    };
    var debugCurTimer;
    var debugTimer = new Date().getTime();
    _a.debug = {
        write: function (message) {
            var mess = document.createElement('div');
            mess.style.cssText = 'border-bottom:1px dashed #e0ecff;' + 'line-height:12px;padding:2px 0;height:12px;';
            mess.innerHTML = '<xmp style="margin:0 80px 0 0;float:left;">' + message + '</xmp>';
            var timeDiv = document.createElement('div');
            timeDiv.style.cssText = 'float:right;';
            debugCurTimer = new Date().getTime();
            timeDiv.innerHTML = (debugCurTimer - debugTimer) + ' ms';
            debugTimer = debugCurTimer;
            mess.appendChild(timeDiv);
            var dbg = document.getElementById('__debug');
            var cont = document.getElementById('__debug_content');
            if (!dbg) {
                dbg = document.createElement('div');
                dbg.id = '__debug';
                dbg.style.cssText = 'position:fixed;*position:absolute;bottom:0;' + 'left:2%;width:96%;height:100px;overflow:hidden;' + 'z-index:100000;background:#99c661;font-size:11px;';
                document.body.appendChild(dbg);
                var topBar = document.createElement('div');
                topBar.style.cssText = 'height:16px;' + 'line-height:16px;background:#88b752;position:relative;';
                topBar.innerHTML = '<span style="margin-left:5px;color:white;' + 'font-weight:bold;">Logs</span>';
                var clear = document.createElement('span');
                var acss = 'color:white;cursor:pointer;' + 'position:absolute;right:45px;text-decoration:underline;';
                clear.style.cssText = acss;
                clear.innerHTML = 'Clear';
                _a._aa.QMVCEvent.addDomListener(clear, 'click', function () {
                    cont.innerHTML = ''
                });
                var close = document.createElement('span');
                close.style.cssText = acss;
                close.style.right = '10px';
                close.innerHTML = 'Hide';
                _a._aa.QMVCEvent.addDomListener(close, 'click', function () {
                    if (close.innerHTML == 'Hide') {
                        close.innerHTML = 'Show';
                        dbg.style.height = '16px'
                    } else {
                        close.innerHTML = 'Hide';
                        dbg.style.height = '100px'
                    }
                });
                topBar.appendChild(clear);
                topBar.appendChild(close);
                cont = document.createElement('div');
                cont.id = '__debug_content';
                cont.style.cssText = 'height:80px;overflow:auto;' + 'background:#99c661;margin:2px 5px;color:#333333;';
                dbg.appendChild(topBar);
                dbg.appendChild(cont)
            }
            dbg.style.display = '';
            cont.appendChild(mess);
            cont.scrollTop = cont.scrollHeight
        },
        clear: function () {
            document.getElementById('__debug_content').innerHTML = ''
        }
    };
    var dragElementsInfo = [];
    var dragPanes = [];
    _a._aa._aaf.enableDrag = function (element, pane, callbacks) {
        _a._aa.QMVCEvent.addDomListener(element, 'mousedown', function (event) {
            event = event || window.event;
            _a._aa._aaf.stopEvent(event);
            var mouse = _a._aa._aaf.fixEvent(event);
            dragElementsInfo.push([element, pane, callbacks, mouse]);
            callbacks.dragstart && callbacks.dragstart(event)
        });
        var isPaneExist = false;
        for (var i = 0, len = dragPanes.length; i < len; i++) {
            if (dragPanes[i] == pane) {
                isPaneExist = true
            }
        }
        if (!isPaneExist) {
            dragPanes.push(pane);
            var moveTimer = null;
            var moveEvent = null;
            var setStatus = function (event, isDestroy) {
                event = event || window.event;
                var currentMouse = _a._aa._aaf.fixEvent(event);
                for (var i = 0, d; d = dragElementsInfo[i]; i++) {
                    if (d[1] == pane) {
                        var delta = [currentMouse[0] - d[3][0], currentMouse[1] - d[3][1]];
                        d[2].dragging && d[2].dragging(event, delta);
                        if (isDestroy) {
                            d[2].dragend && d[2].dragend(event, delta);
                            dragElementsInfo.splice(i, 1);
                            i--
                        }
                    }
                }
                moveTimer = null
            };
            _a._aa.QMVCEvent.addDomListener(pane, 'mousemove', function (event) {
                if (moveTimer) {
                    moveEvent = event || window.event;
                    return
                }
                setStatus(event);
                moveTimer = window.setTimeout(function () {
                    moveTimer = null;
                    if (moveEvent) {
                        moveEvent = null
                    }
                }, 10)
            });
            _a._aa.QMVCEvent.addDomListener(pane, 'mouseup', function (event) {
                setStatus(event, true)
            });
            _a._aa.QMVCEvent.addDomListener(pane, 'mouseout', function (event) {
                var relatedTarget = event.toElement || event.relatedTarget;
                while (relatedTarget && relatedTarget !== pane) relatedTarget = relatedTarget.parentNode;
                if (!relatedTarget) {
                    setStatus(event, true)
                }
            })
        }
    };
    _a._aa.QALIGN = QALIGN
})();﻿window.QEventUtil = {};
QEventUtil.cancelBubble = function (e) {};
QEventUtil.returnValue = function (e, returnValue) {};
QEventUtil.getEventPosition = function (e, container) {};
QEventUtil.getKeyNumber = function (e) {
    if (window.event) {
        keynum = window.event.keyCode
    } else if (event.which) {
        keynum = event.which
    }
    event = null;
    return keynum
};
QEventUtil.addDomListener = function (object, eventName, handler) {
    var listener;
    if (object.addEventListener) {
        var d = false;
        if (eventName === 'focusin') {
            eventName = 'focus';
            d = true
        } else if (eventName === 'focusout') {
            eventName = 'blur';
            d = true
        }
        var type = d ? 4 : 1;
        object.addEventListener(eventName, handler, d);
        listener = new QEventUtil.EventListener(object, eventName, handler, type)
    } else if (object.attachEvent) {
        listener = new QEventUtil.EventListener(object, eventName, handler, 2);
        object.attachEvent('on' + eventName, QEventUtil.bind(listener))
    } else {
        object['on' + eventName] = handler;
        listener = new QEventUtil.EventListener(object, eventName, handler, 3)
    }
    return listener
};
QEventUtil.removeDomListener = function (listener) {
    listener.remove()
};
QEventUtil.clearDomListeners = function (object, eventName) {};
QEventUtil.purgeEvents = function (node) {
    var a = node.attributes,
        i, l, n;
    if (a) {
        l = a.length;
        for (i = 0; i < l; i += 1) {
            n = a[i].name;
            if (typeof node[n] === 'function') {
                node[n] = null
            }
        }
    }
    _a._aa.QMVCEvent.clearListeners(node);
    a = node.childNodes;
    if (a) {
        l = a.length;
        for (i = 0; i < l; i += 1) {
            QEventUtil.purgeEvents(node.childNodes[i]);
            _a._aa.QMVCEvent.clearListeners(node.childNodes[i])
        }
    }
};
QEventUtil.trigger = function (object, eventName) {};
QEventUtil.getEventList = function (object, eventName) {
    object.__events_ || (object.__events_ = {});
    var events = object.__events_;
    events[eventName] || (events[eventName] = {});
    return events[eventName]
};
QEventUtil.fire = function (listener, args) {
    if (listener.target) {
        return listener.handler.apply(listener.target, args)
    }
    return null
};
QEventUtil.bind = function (listener) {
    listener.bindHandler = function (event) {
        event = event || window.event;
        if (event && !event.target) try {
            event.target = event.srcElement
        } catch (e) {}
        var returnValue = QEventUtil.fire(listener, [event]);
        if (event && event.type === 'click') {
            var target = event.srcElement;
            if (target && target.tagName === 'A' && target.href === 'javascript:void(0)') {
                return false
            }
        }
        return returnValue
    };
    return listener.bindHandler
};
var eventListenerIdIndex = 0;
QEventUtil.EventListener = _a._aa._aag({
    className: 'QEventUtil.EventListener',
    initialize: function (target, eventName, handler, type) {
        this.target = target;
        this.eventName = eventName;
        this.handler = handler;
        this.type = type;
        this.bindHandler = null;
        this.id = eventListenerIdIndex++;
        QEventUtil.getEventList(target, eventName)[this.id] = this;
        target = null
    },
    remove: function () {
        if (this.target) {
            switch (this.type) {
            case 1:
                this.target.removeEventListener(this.eventName, this.handler, false);
                break;
            case 4:
                this.target.removeEventListener(this.eventName, this.handler, true);
                break;
            case 2:
                this.target.detachEvent('on' + this.eventName, this.bindHandler);
                break;
            case 3:
                this.target['on' + this.eventName] = null;
                break
            }
            delete getEventList(this.target, this.eventName)[this.id];
            this.handler = null;
            this.target = null
        }
    }
});
(function () {
    var changedStr = '_' + 'changed';

    function getEventList(object, eventName) {
        object.__events_ || (object.__events_ = {});
        var events = object.__events_;
        events[eventName] || (events[eventName] = {});
        return events[eventName]
    }
    function getEventListeners(object, eventName) {
        var listeners, events = object.__events_ || {};
        if (eventName) {
            listeners = events[eventName] || {}
        } else {
            listeners = {};
            for (var event in events) {
                _a._aa._aaf.copyObject(events[event], listeners)
            }
        }
        return listeners
    };

    function fire(listener, args) {
        if (listener.target) {
            return listener.handler.apply(listener.target, args)
        }
        return null
    }
    var eventListenerIdIndex = 0;
    var EventListener = _a._aa._aag({
        className: 'EventListener',
        initialize: function (target, eventName, handler, type) {
            this.target = target;
            this.eventName = eventName;
            this.handler = handler;
            this.type = type;
            this.bindHandler = null;
            this.id = eventListenerIdIndex++;
            getEventList(target, eventName)[this.id] = this;
            target = null
        },
        remove: function () {
            if (this.target) {
                switch (this.type) {
                case 1:
                    this.target.removeEventListener(this.eventName, this.handler, false);
                    break;
                case 4:
                    this.target.removeEventListener(this.eventName, this.handler, true);
                    break;
                case 2:
                    this.target.detachEvent('on' + this.eventName, this.bindHandler);
                    break;
                case 3:
                    this.target['on' + this.eventName] = null;
                    break
                }
                delete getEventList(this.target, this.eventName)[this.id];
                this.handler = null;
                this.target = null
            }
        }
    });

    function callback(object, method, args, hasEvent) {
        args = args || [];
        return function (event) {
            if (hasEvent && event) {
                args.shift();
                args.unshift(event)
            }
            method.apply(object, args)
        }
    }
    var _abb = {};
    _abb.addListener = function (object, eventName, handler, args) {
        var method = handler;
        if (args) {
            method = callback(object, handler, args)
        }
        return new EventListener(object, eventName, method, 0)
    };
    _abb.removeListener = function (listener) {
        listener.remove()
    };
    _abb.clearListeners = function (object, eventName) {
        _a._aa._aaf.messOperator(getEventListeners(object, eventName), function (key, listener) {
            listener && listener.remove()
        })
    };
    _abb.trigger = function (object, eventName) {
        var args = slice(arguments, 2);
        _a._aa._aaf.messOperator(getEventListeners(object, eventName), function (key, listener) {
            listener && fire(listener, args)
        })
    };

    function bind(listener) {
        listener.bindHandler = function (event) {
            event = event || window.event;
            if (event && !event.target) try {
                event.target = event.srcElement
            } catch (e) {}
            var returnValue = fire(listener, [event]);
            if (event && event.type === 'click') {
                var target = event.srcElement;
                if (target && target.tagName === 'A' && target.href === 'javascript:void(0)') {
                    return false
                }
            }
            return returnValue
        };
        return listener.bindHandler
    }
    _abb.addDomListener = function (object, eventName, handler) {
        var listener;
        if (object.addEventListener) {
            var d = false;
            if (eventName === 'focusin') {
                eventName = 'focus';
                d = true
            } else if (eventName === 'focusout') {
                eventName = 'blur';
                d = true
            }
            var type = d ? 4 : 1;
            object.addEventListener(eventName, handler, d);
            listener = new EventListener(object, eventName, handler, type)
        } else if (object.attachEvent) {
            listener = new EventListener(object, eventName, handler, 2);
            object.attachEvent('on' + eventName, bind(listener))
        } else {
            object['on' + eventName] = handler;
            listener = new EventListener(object, eventName, handler, 3)
        }
        return listener
    };

    function slice() {
        return Function.prototype.call.apply(Array.prototype.slice, arguments)
    };

    function setAccessor(source, key, target, targetKey, noNotify) {
        getAccessors(source)[key] = {
            'target': target,
            'key': targetKey
        };
        noNotify || triggerChanged(source, key)
    };

    function getAccessors(mvcObject) {
        return mvcObject.accessors_ || (mvcObject.accessors_ = {})
    };

    function getBindings(mvcObject) {
        return mvcObject.bindings_ || (mvcObject.bindings_ = {})
    }
    function triggerChanged(mvcObj, key) {
        var change = key + changedStr;
        mvcObj[change] ? mvcObj[change]() : mvcObj.changed(key);
        _abb.trigger(mvcObj, key.toLowerCase() + changedStr)
    }
    _a._aa.QMVCObject = _a._aa._aag({
        className: 'QMVCObject',
        initialize: function () {},
        get: function (key) {
            var accessor = getAccessors(this)[key];
            if (accessor) {
                var target = accessor['target'];
                var targetKey = accessor['key'];
                var getterName = 'get' + _a._aa._aaf.capitalInitial(targetKey);
                return target[getterName] ? target[getterName]() : target.get(targetKey)
            } else {
                return this[key]
            }
        },
        set: function (key, value) {
            var accessor = getAccessors(this)[key];
            if (accessor) {
                var target = accessor['target'];
                var targetKey = accessor['key'];
                var setterName = 'set' + _a._aa._aaf.capitalInitial(targetKey);
                target[setterName] ? target[setterName](value) : target.set(targetKey, value)
            } else {
                this.__checker__ = this.__checker__ || {};
                var checker = this.__checker__[key];
                if (checker && (!checker(value))) {
                    throw Error("Invalid value for property <" + (key + (">: " + value)))
                }
                this[key] = value;
                triggerChanged(this, key)
            }
        },
        setValues: function (values) {
            for (var key in values) {
                var value = values[key];
                var setterName = 'set' + getAccessors(key);
                this[setterName] ? this[setterName](value) : this.set(key, value)
            }
        },
        notify: function (key) {
            var accessors = getAccessors(this);
            if (accessors.hasOwnProperty(key)) {
                var accessor = accessors[key];
                accessor['target'].notify(accessor['key'])
            } else {
                triggerChanged(this, key)
            }
        },
        bindTo: function (key, target, targetKey, noNotify) {
            targetKey = targetKey || key;
            this.__checker__ = this.__checker__ || {};
            if (this.__checker__[key] !== this.__checker__[targetKey]) {
                throw Error('Can not bind properties of ' + 'different type.')
            }
            this.unbind(key);
            var eventName = targetKey.toLowerCase() + changedStr;
            var obj = this;
            var handler = function () {
                triggerChanged(obj, key)
            };
            getBindings(this)[key] = _abb.addListener(target, eventName, handler);
            setAccessor(this, key, target, targetKey, noNotify)
        },
        unbind: function (key) {
            var listener = getBindings(this)[key];
            if (listener) {
                delete getBindings(this)[key];
                _abb.removeListener(listener);
                var value = this.get(key);
                delete getAccessors(this)[key];
                this[key] = value
            }
        },
        changed: function (key) {}
    });
    _a._aa.QMVCObject.prototype.setOptions = _a._aa.QMVCObject.prototype.setValues;
    _a._aa.QMVCView = _a._aa._aag(_a._aa.QMVCObject, {
        className: 'QMVCView',
        initialize: function () {},
        forceredraw: function () {
            var view = this;
            if (!this.timer_) {
                this.timer_ = setTimeout(function () {
                    this.timer_ = undefined;
                    view.draw()
                }, 0)
            }
        },
        redraw: function () {
            this.timer_ && window.clearTimeout(this.timer_);
            this.counter_ = 0;
            this.timer_ = undefined;
            var obj = this;
            if (!this.drawtimer_) {
                this.drawtimer_ = setTimeout(function () {
                    obj.drawtimer_ = null;
                    if (obj.count_ != 0) {
                        obj.draw();
                        obj.count_ = 0
                    }
                }, 50);
                this.draw()
            } else {
                obj.count_++
            }
        },
        draw: function () {}
    });
    _a._aa.QMVCAccessor = {};
    _a._aa.QMVCAccessor.union = function () {
        var args = arguments,
            len = args.length;
        return function () {
            for (var errors = [], i = 0; i < len; ++i) {
                try {
                    if (args[i].apply(this, arguments)) {
                        return true
                    }
                } catch (e) {
                    errors.push(e.message)
                }
            }
            if (errors.length !== 0) {
                throw Error("Invalid value: " + (arguments[0] + (" (" + (errors.join(" | ") + ")"))));
                return false
            }
            return true
        }
    };
    _a._aa.QMVCAccessor.set = function (object, properties) {
        object.prototype.__checker__ = properties;
        _a._aa._aaf.messOperator(properties, function (key, checker) {
            var getterName = "get" + _a._aa._aaf.capitalInitial(key);
            object.prototype[getterName] = function () {
                return this.get(key)
            };
            var setterName = "set" + _a._aa._aaf.capitalInitial(key);
            object.prototype[setterName] = function (value) {
                this.set(key, value)
            }
        })
    };
    _a._aa.QMVCAccessor.isBoolean = function (a) {
        return a === !! a
    };
    _a._aa.QMVCAccessor.isNull = function (a) {
        return a == null
    };
    _a._aa.QMVCAccessor.isString = function (a) {
        return typeof a == "string"
    };
    _a._aa.QMVCAccessor.isNumber = function (a) {
        return typeof a == "number"
    };
    _a._aa.QMVCAccessor.isStringOrNull = _a._aa.QMVCAccessor.union(_a._aa.QMVCAccessor.isString, _a._aa.QMVCAccessor.isNull);
    _a._aa.QMVCAccessor.isNumberOrNull = _a._aa.QMVCAccessor.union(_a._aa.QMVCAccessor.isNumber, _a._aa.QMVCAccessor.isNull);
    _a._aa.QMVCAccessor.isInstanceOf = function (classObject) {
        return function (object) {
            return object == null || object instanceof classObject
        }
    };
    _a._aa.QMVCEvent = _abb;
    _a._aa.QAnimation = _a._aa._aag(_a._aa.QMVCObject, {
        className: '_a._aa.QFps',
        initialize: function (options) {
            options = options || {};
            options['duration'] = options['duration'] || 0;
            options['fps'] = options['fps'] || 60;
            this.setValues(options)
        },
        prepare: function () {},
        start: function (noEvent) {
            this.prepare();
            this.stop(true);
            this.set('current', 1 / this.get('fps'));
            !noEvent && _abb.trigger(this, 'start');
            this.set('status', 1);
            qAnimationExec(this)()
        },
        stop: function (noEvent) {
            this.timer_ && window.clearTimeout(this.timer_);
            this.timer_ = null;
            !noEvent && _abb.trigger(this, 'end');
            this.set('status', 0);
            this.set('current', -1)
        },
        getStatus: function () {
            return this.get('status')
        },
        frame: function () {}
    });

    function qAnimationExec(anim) {
        return function () {
            var currentFrame = anim.get('current');
            var duration = anim.get('duration');
            var fps = anim.get('fps');
            currentFrame > duration && (currentFrame = duration);
            anim.frame(currentFrame);
            if (currentFrame >= duration) {
                anim.stop();
                return
            }
            anim.set('current', currentFrame + 1 / fps);
            anim.timer_ && window.clearTimeout(anim.timer_);
            anim.timer_ = window.setTimeout(qAnimationExec(anim), 1000 / fps)
        }
    }
    _a._aa.QFx = _a._aa._aag(_a._aa.QAnimation, {
        className: '_a._aa.QFx',
        initialize: function (options) {
            options = options || {};
            options['begins'] = options['begins'] || [];
            options['ends'] = options['ends'] || [];
            options['duration'] = options['duration'] || 0;
            options['callback'] = options['callback'] ||
            function () {};
            options['fps'] = options['fps'] || 60;
            options['method'] = options['method'] || _a._aa.QFx.linear;
            this.setValues(options)
        },
        frame: function (currentFrame) {
            var begins = this.get('begins');
            var ends = this.get('ends');
            var method = this.get('method');
            var duration = this.get('duration');
            var values = [];
            var steps = [];
            for (var i = 0, len = begins.length; i < len; ++i) {
                var delta = ends[i] - begins[i],
                    value, step;
                if (duration != 0) {
                    value = method(currentFrame, begins[i], delta, duration);
                    var lastFrame = currentFrame - 1 / this.get('fps');
                    lastFrame < 0 && (lastFrame = 0);
                    step = value - method(lastFrame, begins[i], delta, duration)
                } else {
                    value = ends[i];
                    step = delta
                }
                values.push(parseInt(value, 10));
                steps.push(parseInt(step, 10))
            }
            this.qFxFrame(values, steps)
        },
        qFxFrame: function (values, steps) {
            var callback = this.get('callback');
            if (callback) {
                callback(values, steps)
            }
        }
    });
    _a._aa.QCssFx = _a._aa._aag(_a._aa.QFx, {
        className: '_a._aa.QCssFx',
        initialize: function (options) {
            options = options || {};
            options['items'] = options['items'] || [];
            options['duration'] = options['duration'] || 0;
            options['fps'] = options['fps'] || 60;
            options['method'] = options['method'] || _a._aa.QFx.linear;
            this.setValues(options)
        },
        prepare: function () {
            var items = this.get('items');
            var begins = [];
            var ends = [];
            for (var i = 0, len = items.length; i < len; ++i) {
                var item = items[i];
                begins = begins.concat(item['begins']);
                ends = ends.concat(item['ends'])
            }
            this.set('begins', begins);
            this.set('ends', ends)
        },
        qFxFrame: function (values, steps) {
            var items = this.get('items');
            var index = 0;
            for (var i = 0, len = items.length; i < len; ++i) {
                var item = items[i];
                var styles = item['styles'];
                var units = item['units'];
                var element = item['element'];
                for (var j = 0, lenJ = styles.length; j < lenJ; ++j) {
                    element.style[styles[j]] = parseInt(values[index], 10) + units[j];
                    index++
                }
            }
        }
    });
    _a._aa.QFx.linear = function (t, b, c, d) {
        return c * t / d + b
    };
    _a._aa.QFx.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b
    };
    _a._aa.QFx.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    };
    _a._aa.QFx.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b
        } else {
            return -c / 2 * ((--t) * (t - 2) - 1) + b
        }
    };
    _a._aa.QFx.easeInCubic = function (t, b, c, d) {
        return c * Math.pow(t / d, 3) + b
    };
    _a._aa.QFx.easeOutCubic = function (t, b, c, d) {
        return c * (Math.pow(t / d - 1, 3) + 1) + b
    };
    _a._aa.QFx.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(t, 3) + b
        } else {
            return c / 2 * (Math.pow(t - 2, 3) + 2) + b
        }
    };
    _a._aa.QFx.easeInSine = function (t, b, c, d) {
        return c * (1 - Math.cos(t / d * (Math.PI / 2))) + b
    };
    _a._aa.QFx.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    };
    _a._aa.QFx.easeInOutSine = function (t, b, c, d) {
        return c / 2 * (1 - Math.cos(Math.PI * t / d)) + b
    };
    _a._aa.QFx.easeInExpo = function (t, b, c, d) {
        return c * Math.pow(2, 10 * (t / d - 1)) + b
    };
    _a._aa.QFx.easeOutExpo = function (t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) + b
    };
    _a._aa.QFx.easeInOutExpo = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b
        } else {
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
        }
    };
    _a._aa.QFx.easeInCirc = function (t, b, c, d) {
        return c * (1 - Math.sqrt(1 - (t /= d) * t)) + b
    };
    _a._aa.QFx.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t /= d - 1) * t) + b
    };
    _a._aa.QFx.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * (1 - Math.sqrt(1 - t * t)) + b
        } else {
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
        }
    };
    _a._aa._aaf.callback = callback
})();
_a._ae = _a._aa._aag({
    className: "_a._ae",
    model: null,
    controller: null,
    view: null,
    initialize: function (container) {
        this.model = new _a._ac._acb(this);
        this.controller = new _a._ab._aba(this);
        this.view = new _a._ad.ViewMgr(this, container);
        this.controller.registerEventHandler("ViewSizeChanged", this.model);
        this.controller.registerEventHandler("CenterChanged", this.model);
        this.controller.registerEventHandler("ZoomLevelChanged", this.model);
        this.controller.registerEventHandler("TileGridReInit", this.model);
        this.controller.registerEventHandler("ContextMenuItemAdded", this.model);
        this.controller.registerEventHandler("QOverlayAdded", this.model);
        this.controller.registerEventHandler("QOverlayModified", this.model);
        this.controller.registerEventHandler("QOverlayMoved", this.model);
        this.controller.registerEventHandler("QOverlayRemoved", this.model);
        this.controller.registerEventHandler("QOverlaysCleared", this.model);
        this.controller.registerEventHandler("ViewSizeChanged", this.view);
        this.controller.registerEventHandler("CenterChanged", this.view);
        this.controller.registerEventHandler("Render", this.view);
        this.controller.registerEventHandler("ThemeChanged", this.view);
        var this_ = this;
        QEventUtil.addDomListener(window, 'unload', function () {
            this_.model = null;
            this_.controller = null;
            this_.view = null
        })
    },
    triggerEvent: function (qevent) {
        this.controller.triggerEvent(qevent)
    },
    addEventListener: function (eventName, callback) {
        return this.controller.addEventListener(eventName, callback)
    },
    removeEventListener: function (eventListener) {
        this.controller.removeEventListener(eventListener)
    }
});
if (_a._ac === undefined) {
    _a._ac = {}
}
QViewMgrModel = _a._aa._aag(_a._aa.QMVCObject, {
    className: 'QViewMgrModel',
    initialize: function () {}
});
_a._ac._acb = _a._aa._aag({
    className: "_a._ac._acb",
    mvc: null,
    tileGrid: null,
    _2: null,
    qOverlayCount: null,
    qOverlayChangeList: null,
    qContextMenuItemList: null,
    qControlList: null,
    qControlIdCounter: 0,
    zmin: null,
    zmax: null,
    resolution: null,
    scope: null,
    displayBBox: null,
    allDisplayBBox: null,
    isOptimalRender: false,
    isMetaDataInitialized: false,
    _23: null,
    initialize: function (mvc) {
        this.mvc = mvc;
        this.model_ = new QViewMgrModel();
        this.tileGrid = new _a._ac._aco();
        this._2 = new _a._aa._aac();
        this.qOverlayChangeList = new _a._aa._aac();
        this.qContextMenuItemList = new _a._aa._aac();
        this.qControlList = new _a._aa._aac();
        this.qOverlayCount = 0;
        this._23 = new _a._ac._acl(this.mvc);
        this.initAllDisplayBBox();
        mvc = null
    },
    initAllDisplayBBox: function () {
        this.allDisplayBBox = [];
        var prjBBox = _a._aa._aab.MetaData.display_bound_box;
        var length = prjBBox.length;
        for (var i = 0; i < length; ++i) {
            var levelBBox = prjBBox[i];
            this.allDisplayBBox[i] = [];
            this.allDisplayBBox[i].push(_a._aa._aaf._aafa.lngFromProjectionTo4326(levelBBox[0]));
            this.allDisplayBBox[i].push(_a._aa._aaf._aafa.latFromProjectionTo4326(levelBBox[1]));
            this.allDisplayBBox[i].push(_a._aa._aaf._aafa.lngFromProjectionTo4326(levelBBox[2]));
            this.allDisplayBBox[i].push(_a._aa._aaf._aafa.latFromProjectionTo4326(levelBBox[3]))
        }
    },
    getLatLngScope: function () {
        var qObjListLength = this._2.length();
        var latlngArray = new Array();
        var tmpQObj;
        for (var i = 0; i < qObjListLength; ++i) {
            tmpQObj = this._2.at(i);
            if (tmpQObj.getVisible && (!tmpQObj.getVisible())) {
                continue
            }
            switch (tmpQObj.className) {
            case "_a._ac._ach":
            case "_a._ac.QInfoWindow":
                if (tmpQObj.position) {
                    if (tmpQObj.position) {
                        var lng = tmpQObj.position.getLng();
                        var lat = tmpQObj.position.getLat();
                        if (this.isValidLng(lng) && this.isValidLat(lat)) {
                            latlngArray.push(lng);
                            latlngArray.push(lat)
                        }
                    }
                }
                break;
            case "_a._ac.QPolyline":
            case "_a._ac._ack":
            case "_a._ac.QCircle":
                if (tmpQObj.scopeLatLng && tmpQObj.scopeLatLng.length > 0) {
                    var minLng = tmpQObj.scopeLatLng[0];
                    var maxLat = tmpQObj.scopeLatLng[1];
                    var maxLng = tmpQObj.scopeLatLng[2];
                    var minLat = tmpQObj.scopeLatLng[3];
                    if (this.isValidLng(minLng) && this.isValidLat(maxLat) && this.isValidLng(maxLng) && this.isValidLat(minLat)) {
                        latlngArray = latlngArray.concat(tmpQObj.scopeLatLng)
                    }
                }
                break
            }
        }
        var latlngLength = latlngArray.length;
        if (latlngLength === 0) {
            return null
        }
        var minLng = latlngArray[0],
            minLat = latlngArray[1],
            maxLng = latlngArray[0],
            maxLat = latlngArray[1];
        for (i = 0; i < latlngLength; i += 2) {
            if (latlngArray[i] < minLng) {
                minLng = latlngArray[i]
            }
            if (latlngArray[i] > maxLng) {
                maxLng = latlngArray[i]
            }
        }
        for (i = 1; i < latlngLength; i += 2) {
            if (latlngArray[i] < minLat) {
                minLat = latlngArray[i]
            }
            if (latlngArray[i] > maxLat) {
                maxLat = latlngArray[i]
            }
        }
        var scope = new Array(minLng, minLat, maxLng, maxLat);
        latlngLength = null;
        minLng = null;
        minLat = null;
        maxLng = null;
        maxLat = null;
        tmpQObj = null;
        latlngArray = null;
        qObjListLength = null;
        return scope
    },
    isValidLng: function (lng) {
        var bValid = true;
        if (lng === undefined || lng === null || isNaN(lng) || !isFinite(lng)) {
            bValid = false
        }
        if (lng < this.displayBBox[0] || lng > this.displayBBox[2]) {
            bValid = false
        }
        return bValid
    },
    isValidLat: function (lat) {
        var bValid = true;
        if (lat === undefined || lat === null || isNaN(lat) || !isFinite(lat)) {
            bValid = false
        }
        if (lat < this.displayBBox[1] || lat > this.displayBBox[3]) {
            bValid = false
        }
        return bValid
    },
    onTileGridReInit: function (qevent) {
        this.isOptimalRender = qevent.isOptimal;
        if ((this.zmax === null) || (this.tileGrid.baseTileZ <= this.zmax && this.tileGrid.baseTileZ >= this.zmin)) {
            if (this.isMetaDataInitialized === false) {
                this.zmin = _a._aa._aab.MetaData.zmin;
                this.zmax = _a._aa._aab.MetaData.zmax;
                this.resolution = _a._aa._aab.MetaData.resolution;
                this.scope = _a._aa._aab.MetaData.scope;
                this.displayBBox = this.allDisplayBBox[this.tileGrid.baseTileZ];
                this.mvc.view.latlngPixelConvertor.setResolution(this.resolution);
                var seedTileIndex = this._23.getSeedTileIndex(this.tileGrid.centerLng, this.tileGrid.centerLat, this.tileGrid.baseTileZ);
                this.tileGrid.initTileGrid(seedTileIndex[0], seedTileIndex[1]);
                qevent = new _a._ab._abb.RenderEvent(this.tileGrid, this.qOverlayChangeList, this.isOptimalRender);
                this.mvc.triggerEvent(qevent);
                this.isMetaDataInitialized = true
            } else {
                var seedTileIndex = this._23.getSeedTileIndex(this.tileGrid.centerLng, this.tileGrid.centerLat, this.tileGrid.baseTileZ);
                this.tileGrid.initTileGrid(seedTileIndex[0], seedTileIndex[1]);
                qevent = new _a._ab._abb.RenderEvent(this.tileGrid, this.qOverlayChangeList, this.isOptimalRender);
                this.mvc.triggerEvent(qevent)
            }
        } else {
            if (this.tileGrid.baseTileZ > this.zmax) {
                this.tileGrid.baseTileZ = this.zmax;
                this.mvc.view.latlngPixelConvertor.setZoomLevel(this.zmax)
            } else {
                this.tileGrid.baseTileZ = this.zmin;
                this.mvc.view.latlngPixelConvertor.setZoomLevel(this.zmin)
            }
        }
        qevent = null
    },
    redundanceChangeList: function (item) {
        for (var i = 0; i < this.qOverlayChangeList.length(); ++i) {
            var tmqChange = this.qOverlayChangeList.at(i);
            if (tmqChange.equal(item)) {
                this.qOverlayChangeList.remove(i);
                i--
            }
        }
    },
    changeAllOverlays: function (changeType) {
        var tmpQObj, item;
        for (var i = 0; i < this._2.length(); ++i) {
            tmpQObj = this._2.at(i);
            switch (tmpQObj.className) {
            case "_a._ac._acm":
            case "_a._ac.QPolyline":
            case "_a._ac._ack":
            case "_a._ac.QCircle":
            case "_a._ac.QInfoWindow":
                item = new _a._ac._aca(changeType, tmpQObj);
                this.redundanceChangeList(item);
                this.qOverlayChangeList.push(item);
                break;
            default:
                item = new _a._ac._aca("Move", tmpQObj);
                this.redundanceChangeList(item);
                this.qOverlayChangeList.push(item);
                break
            }
        }
        tmpQObj = null
    },
    onViewSizeChanged: function (qevent) {
        this.tileGrid.changeViewSize(qevent.width, qevent.height);
        this.mvc.view.latlngPixelConvertor.setSeedPixel(qevent.width / 2, qevent.height / 2);
        this.changeAllOverlays("Move");
        qevent = null
    },
    onZoomLevelChanged: function (qevent) {
        if (qevent.zoomLevel === null) {
            this.tileGrid.setZoomLevel(targetZoomLevel);
            this.mvc.view.latlngPixelConvertor.setZoomLevel(this.tileGrid.baseTileZ)
        } else {
            this.tileGrid.setZoomLevel(qevent.zoomLevel);
            this.mvc.view.latlngPixelConvertor.setZoomLevel(qevent.zoomLevel)
        }
        this.displayBBox = this.allDisplayBBox[this.tileGrid.baseTileZ];
        this.changeAllOverlays("Zoom");
        this.model_.set('zoom', qevent.zoomLevel);
        qevent = null
    },
    onCenterChanged: function (qevent) {
        this.tileGrid.setCenterLatLng(qevent.lng, qevent.lat);
        this.model_.set('center', new _a._ac.QLngLat(qevent.lng, qevent.lat));
        this.changeAllOverlays("Move");
        qevent = null
    },
    onContextMenuItemAdded: function (qevent) {
        this.qContextMenuItemList.push(qevent.contextMenuItem);
        qevent = null
    },
    onQOverlayAdded: function (qevent) {
        var qOverlay;
        qOverlay = qevent.qOverlay;
        this._2.push(qOverlay);
        this.qOverlayChangeList.push(new _a._ac._aca("Add", qOverlay));
        qevent = null
    },
    onQOverlayModified: function (qevent) {
        var qOverlay;
        qOverlay = qevent.qOverlay;
        this.qOverlayChangeList.push(new _a._ac._aca("Modify", qOverlay));
        qevent = new _a._ab._abb.RenderEvent(this.tileGrid, this.qOverlayChangeList);
        this.mvc.triggerEvent(qevent);
        qevent = null
    },
    onQOverlayMoved: function (qevent) {
        var qOverlay;
        qOverlay = qevent.qOverlay;
        this.qOverlayChangeList.push(new _a._ac._aca("Move", qOverlay));
        qevent = null
    },
    onQOverlayRemoved: function (qevent) {
        var qOverlay;
        qOverlay = qevent.qOverlay;
        var objListLength = this._2.length();
        for (var i = 0; i < objListLength; ++i) {
            if (this._2.at(i).id === qOverlay.id) {
                this._2.remove(i);
                break
            }
        }
        var objChangeListLength = this.qOverlayChangeList.length();
        var OBJ_EXSIT = true;
        for (i = 0; i < objChangeListLength; ++i) {
            if (this.qOverlayChangeList.at(i).target.id === qOverlay.id) {
                if (this.qOverlayChangeList.at(i).operate === "Add") {
                    OBJ_EXSIT = false
                }
                this.qOverlayChangeList.remove(i);
                i = i - 1;
                objChangeListLength = this.qOverlayChangeList.length()
            }
        }
        if (OBJ_EXSIT) {
            var dummyQOverlay = {};
            dummyQOverlay.id = qOverlay.id;
            dummyQOverlay.mapNumber = qOverlay.mapNumber;
            qOverlay.bindTo && (dummyQOverlay.bindTo = qOverlay);
            this.qOverlayChangeList.push(new _a._ac._aca("Remove", dummyQOverlay))
        }
        qevent = null
    },
    onQOverlaysCleared: function () {
        this.qOverlayChangeList.clear();
        var objListLength = this._2.length();
        for (var i = 0; i < objListLength; ++i) {
            var qOverlay = this._2.at(i);
            var dummyQOverlay = {};
            dummyQOverlay.id = qOverlay.id;
            dummyQOverlay.mapNumber = qOverlay.mapNumber;
            qOverlay.bindTo && (dummyQOverlay.bindTo = qOverlay);
            this.qOverlayChangeList.push(new _a._ac._aca("Remove", dummyQOverlay))
        }
        this._2.clear()
    },
    removeQControl: function (controlId) {
        var qControlListLength, i;
        qControlListLength = this.qControlList.length();
        for (i = 0; i < qControlListLength; ++i) {
            if (this.qControlList.at(i).id === controlId) {
                this.qControlList.remove(i);
                break
            }
        }
        controlId = null;
        qControlListLength = null;
        return i
    },
    clearAllQOverlays: function () {
        qControlListLength = this.qControlList.length();
        for (i = 0; i < qControlListLength; ++i) {
            var qControl = this.qControlList.at(i);
            this.mvc.view.removeQControl(qControl.id);
            this.qControlList.remove(i)
        }
    }
});
_a._ac.QSize = _a._aa._aag({
    className: "_a._ac.QSize",
    width: null,
    height: null,
    initialize: function (width, height) {
        this.width = width;
        this.height = height;
        width = null;
        height = null
    },
    getWidth: function () {
        return this.width
    },
    getHeight: function () {
        return this.height
    },
    isValidSize: function () {
        var bValid = true;
        bValid = !((this.getWidth() === 0) && (this.getHeight() === 0));
        return bValid
    }
});
_a._ac.QPoint = _a._aa._aag({
    className: "_a._ac.QPoint",
    left: null,
    top: null,
    initialize: function (left, top) {
        this.left = left;
        this.top = top;
        left = null;
        top = null
    },
    getLeft: function () {
        return this.left
    },
    getTop: function () {
        return this.top
    }
});
_a._ac._aca = _a._aa._aag({
    className: "_a._ac._aca",
    operate: null,
    target: null,
    initialize: function (operate, target) {
        this.operate = operate;
        this.target = target;
        operate = null;
        target = null
    },
    equal: function (item) {
        return this.operate === item.operate && this.target === item.target
    }
});
_a._ac._acl = _a._aa._aag({
    className: "_a._ac._acl",
    mvc: null,
    initialize: function (mvc) {
        this.mvc = mvc;
        mvc = null
    },
    getMetaData: function (callback, this_, type) {
        if (type === undefined) {
            type = "default"
        }
        _a._aa._aaa.bind(_a._aa._aab.GetMetaDataUri, ["BLName=2&MethodName=1&type=", type].join(""), "GET", callback, true, this_, this.mvc.view._0, undefined, this.mvc);
        type = null
    },
    getWorldPixel: function (lng, lat, z) {
        var centerPoint = Math.pow(2, z + 7);
        var totalPixels = centerPoint * 2;
        var pixelsPerLngDegree = totalPixels / 360;
        var pixelsPerLngRadian = totalPixels / (2 * Math.PI);
        var siny = Math.min(Math.max(Math.sin(lat * (Math.PI / 180)), -0.9999), 0.9999);
        return [Math.round(centerPoint + lng * pixelsPerLngDegree), Math.round(centerPoint - 0.5 * Math.log((1 + siny) / (1 - siny)) * pixelsPerLngRadian)]
    },
    getSeedTileIndex: function (lng, lat, z) {
        var pixel = this.getWorldPixel(lng, lat, z);
        var pixelX = pixel[0];
        var pixelY = pixel[1];
        var x = pixelX / 256;
        var y = pixelY / 256;
        return [x, y]
    },
    getMap: function () {}
});
_a._ac._aco = _a._aa._aag({
    className: "_a._ac._aco",
    need4reInit: true,
    centerLng: null,
    centerLat: null,
    tileWidth: 0,
    tileHeight: 0,
    baseTileLeft: 0,
    baseTileTop: 0,
    baseTileX: 0,
    baseTileY: 0,
    baseTileZ: 0,
    rowCount: 0,
    columnCount: 0,
    _8: 0,
    _7: 0,
    _26: 0,
    _28: 0,
    _24: 0,
    outerEventHandlers: null,
    initialize: function () {
        this.tileWidth = _a._aa._aab._aabw;
        this.tileHeight = _a._aa._aab._aabv;
        this._24 = _a._aa._aab._aabu;
        this.outerEventHandlers = new _a._aa._aad();
        this.need4reInit = true
    },
    changeViewSize: function (width, height) {
        this._8 = width;
        this._7 = height;
        this.need4reInit = true;
        width = null;
        height = null
    },
    setCenterLocation: function (x, y) {
        this._26 = x;
        this._28 = y;
        this.need4reInit = true;
        x = null;
        y = null
    },
    setZoomLevel: function (z) {
        this.baseTileZ = z;
        this.need4reInit = true;
        this.executeOuterEventHandler("zoom_changed");
        z = null
    },
    setCenterLatLng: function (lng, lat) {
        this.centerLng = lng;
        this.centerLat = lat;
        this.need4reInit = true;
        var this_ = this;
        this.centerChangedCount = this.centerChangeCount || 0;
        if (!this.centerChangedTimer) {
            this.centerChangedTimer = window.setTimeout(function () {
                if (this_.centerChangedCount != 0) {
                    this_.executeOuterEventHandler("center_changed")
                }
                this_.centerChangedTimer = null;
                this_.centerChangedCount = 0
            }, 500);
            this.executeOuterEventHandler("center_changed")
        } else {
            this.centerChangedCount++
        }
        lng = null;
        lat = null
    },
    countOfRowColumnForViewSize: function (viewSizeWidth, viewSizeHeight) {
        var rowCountWithoutBuffer, columnCountWithoutBuffer, rowCount, columnCount;
        rowCountWithoutBuffer = Math.ceil(viewSizeHeight / this.tileHeight);
        rowCountWithoutBuffer = (rowCountWithoutBuffer % 2) ? rowCountWithoutBuffer : rowCountWithoutBuffer + 1;
        rowCount = rowCountWithoutBuffer + this._24 * 2;
        columnCountWithoutBuffer = Math.ceil(viewSizeWidth / this.tileWidth);
        columnCountWithoutBuffer = (columnCountWithoutBuffer % 2) ? columnCountWithoutBuffer : columnCountWithoutBuffer + 1;
        columnCount = columnCountWithoutBuffer + this._24 * 2;
        rowCountWithoutBuffer = null;
        columnCountWithoutBuffer = null;
        return [rowCount, columnCount]
    },
    initTileGrid: function (centerLocationX, centerLocationY) {
        var rowCountWithoutBuffer, columnCountWithoutBuffer, centerTileX, centerTileY, viewSizeLeft2CenterTileLeft, viewSizeTop2CenterTileTop;
        if (centerLocationX !== null && centerLocationY !== null) {
            this.setCenterLocation(centerLocationX, centerLocationY)
        }
        var rowColumnCountArray = this.countOfRowColumnForViewSize(this._8, this._7);
        this.rowCount = rowColumnCountArray[0];
        this.columnCount = rowColumnCountArray[1];
        rowColumnCountArray = null;
        centerLocationX = this._26;
        centerTileX = centerLocationX > 0 ? Math.floor(centerLocationX) : Math.ceil(centerLocationX);
        centerLocationY = this._28;
        centerTileY = centerLocationY > 0 ? Math.floor(centerLocationY) : Math.ceil(centerLocationY);
        this.baseTileX = centerTileX - ((this.columnCount - 1) / 2);
        this.baseTileY = centerTileY - ((this.rowCount - 1) / 2);
        var centerLeftInTile = (centerLocationX - Math.floor(centerLocationX)) * this.tileWidth;
        var centerTopInTile = (centerLocationY - Math.floor(centerLocationY)) * this.tileHeight;
        var centerTileLeft = (this._8 / 2.0) - centerLeftInTile;
        var centerTileTop = (this._7 / 2.0) - centerTopInTile;
        this.baseTileLeft = Math.round(centerTileLeft - ((this.columnCount - 1) / 2) * this.tileWidth);
        this.baseTileTop = Math.round(centerTileTop - ((this.rowCount - 1) / 2) * this.tileHeight);
        this.need4reInit = false;
        rowCountWithoutBuffer = null;
        columnCountWithoutBuffer = null;
        centerLocationX = null;
        centerLocationY = null;
        centerTileX = null;
        centerTileY = null;
        viewSizeLeft2CenterTileLeft = null;
        viewSizeTop2CenterTileTop = null
    },
    isValidEvent: function (strEventType) {
        var bValid = false;
        if (strEventType) {
            switch (strEventType) {
            case "center_changed":
            case "zoom_changed":
                bValid = true;
                break;
            default:
                bValid = false
            }
        }
        return bValid
    },
    addOuterEventListener: function (strEventType, handler, args) {
        if (this.isValidEvent(strEventType)) {
            this.outerEventHandlers.set(strEventType, [handler, args])
        }
    },
    removeOuterEventListener: function (strEventType) {
        if (this.isValidEvent(strEventType)) {
            this.outerEventHandlers.remove(strEventType)
        }
    },
    clearOuterEventListeners: function () {
        this.outerEventHandlers.clear()
    },
    executeOuterEventHandler: function (strEventType) {
        if (strEventType) {
            var handler = this.outerEventHandlers.get(strEventType);
            if (handler) {
                var func = handler[0];
                var arrArguments = handler[1];
                if (arrArguments === undefined) {
                    arrArguments = []
                }
                func.apply(null, arrArguments)
            }
        }
    }
});
_a._ac.QOverlay = _a._aa._aag({
    className: "_a._ac.QOverlay",
    mapNumber: null,
    id: null,
    left: null,
    top: null,
    width: null,
    height: null,
    zIndex: null,
    eventHandler: null,
    mvc: null,
    map: null,
    initialize: function (left, top, width, height) {
        this.mapNumber = null;
        this.id = null;
        if (left !== undefined) {
            this.left = left
        }
        if (top !== undefined) {
            this.top = top
        }
        if (width !== undefined) {
            this.width = width
        }
        if (height !== undefined) {
            this.height = height
        }
        this.zIndex = _a._aa._aab.QBasicZIndex;
        this.eventHandler = new _a._aa._aad();
        this.mvc = null;
        left = null;
        top = null;
        width = null;
        height = null
    },
    isValidEvent: function (strEventType) {
        return false
    }
});
_a._ac._acg = _a._aa._aag({
    className: "_a._ac._acg",
    mvc: null,
    infoWindow: null,
    bKeyboard: true,
    container: null,
    viewSize: null,
    DEFAULT_LNG: 116.39712896958922,
    DEFAULT_LAT: 39.9165275426627,
    DEFAULT_ZOOMLEVEL: 9,
    initialize: function (container) {
        this.container = container;
        this.mvc = new _a._ae(container);
        ++_a._aa._aaa.result.length;
        var width, height, qevent;
        width = parseInt(container.clientWidth, 10);
        height = parseInt(container.clientHeight, 10);
        this.setViewSize(width, height);
        this.setCenter(this.DEFAULT_LNG, this.DEFAULT_LAT);
        this.setZoomLevel(this.DEFAULT_ZOOMLEVEL);
        this.bindKeyboardHandler();
        this.render();
        qevent = null;
        name = null;
        container = null;
        zoomLevel = null;
        lng = null;
        lat = null;
        qevent = null;
        width = null;
        height = null
    },
    changeViewSize: function (qSize) {
        var nWidth = qSize.getWidth();
        var nHeight = qSize.getHeight();
        this.setViewSize(nWidth, nHeight);
        this.render();
        width = null;
        height = null
    },
    moveTo: function (newCenter, noAnim) {
        var lng = newCenter.getLng();
        var lat = newCenter.getLat();
        var convertor = this.mvc.view.latlngPixelConvertor;
        var pixel = convertor.LatLng2Pixel(lng, lat);
        var current = this.getCenter();
        var pixelCurrent = convertor.LatLng2Pixel(current.getLng(), current.getLat());
        var deltaX = Math.abs(pixelCurrent[0] - pixel[0]);
        var deltaY = Math.abs(pixelCurrent[1] - pixel[1]);
        if (deltaX < this.mvc.view.viewSizeWidth && deltaY < this.mvc.view.viewSizeHeight && (!noAnim)) {
            this.mvc.view.startMovingFx(pixel, newCenter)
        } else {
            this.setCenter(lng, lat);
            this.render()
        }
        lng = null;
        lat = null
    },
    setCursor: function (normalCursor, movingCursor) {
        normalCursor = normalCursor || ["url(", _a._aa._aab._aabr, "/themes/", this.mvc.view.theme, "/img/openhand.cur), default"].join("");
        movingCursor = movingCursor || ["url(", _a._aa._aab._aabr, "/themes/", this.mvc.view.theme, "/img/closedhand.cur), default"].join("");
        this.mvc.view.normalCursor = normalCursor;
        this.mvc.view.movingCursor = movingCursor;
        this.mvc.view.mapDiv.style.cursor = normalCursor
    },
    moveBy: function (qSize, duration, fxMethod, noAnim) {
        if (qSize.isValidSize()) {
            var pixel = this.mvc.view.latlngPixelConvertor.LatLng2Pixel(this.mvc.model.tileGrid.centerLng, this.mvc.model.tileGrid.centerLat);
            var lngLat = this.mvc.view.latlngPixelConvertor.Pixel2LatLng(pixel[0] - qSize.width, pixel[1] - qSize.height);
            var qLngLat = new _a._ac.QLngLat(lngLat[0], lngLat[1]);
            if (qSize.width < this.mvc.view.viewSizeWidth && qSize.height < this.mvc.view.viewSizeHeight && (!noAnim)) {
                var view = this.mvc.view;
                pixel = [view.mapDivCenterLeft - view.qOverlaysDivLeft, view.mapDivCenterTop - view.qOverlaysDivTop];
                pixel[0] -= qSize.width;
                pixel[1] -= qSize.height;
                view.startMovingFx(pixel, qLngLat, fxMethod, duration)
            } else {
                this.setCenter(qLngLat)
            }
        }
    },
    zoomIn: function (center) {
        var zoomLevel = this.mvc.view.latlngPixelConvertor._10 + 1;
        if (zoomLevel <= _a._aa._aab.MetaData.zmax) {
            this.mvc.view.startZoomFx(true, center, true)
        }
        center && this.setCenter(center.getLng(), center.getLat());
        this.setZoomLevel(zoomLevel);
        this.render();
        zoomLevel = null
    },
    zoomOut: function (center) {
        var zoomLevel = this.mvc.view.latlngPixelConvertor._10 - 1;
        if (zoomLevel >= _a._aa._aab.MetaData.zmin) {
            this.mvc.view.startZoomFx(false, center, true)
        }
        center && this.setCenter(center.getLng(), center.getLat());
        this.setZoomLevel(zoomLevel);
        this.render();
        zoomLevel = null
    },
    zoomTo: function (zoomLevel) {
        this.setZoomLevel(zoomLevel);
        this.render();
        zoomLevel = null
    },
    enableContextMenu: function (ifContextMenu) {
        if (ifContextMenu !== undefined) {
            this.mvc.view.bContextMenu = ifContextMenu
        }
        ifContextMenu = null
    },
    enableScroolWheel: function (ifScrollwheel) {
        if (ifScrollwheel !== undefined) {
            this.mvc.view.bScrollwheel = ifScrollwheel
        }
        ifScrollwheel = null
    },
    enableDrag: function (ifDraggable) {
        if (ifDraggable !== undefined) {
            this.mvc.view.bDraggable = ifDraggable
        }
        ifDraggable = null
    },
    enableZoomInByDblClick: function (ifZoomByDblclick) {
        if (ifZoomByDblclick !== undefined) {
            this.mvc.view.bZoomByDblclick = ifZoomByDblclick
        }
        ifZoomByDblclick = null
    },
    enableKeyboard: function (ifKeyboard) {
        if (ifKeyboard !== undefined) {
            this.bKeyboard = ifKeyboard
        }
        ifKeyboard = null
    },
    getViewSize: function () {
        return this.viewSize
    },
    getZoomLevel: function () {
        return this.mvc.model.tileGrid.baseTileZ
    },
    getCenter: function () {
        return new _a._ac.QLngLat(this.mvc.model.tileGrid.centerLng, this.mvc.model.tileGrid.centerLat)
    },
    getBounds: function () {
        var pixel = this.mvc.view.latlngPixelConvertor.LatLng2Pixel(this.mvc.model.tileGrid.centerLng, this.mvc.model.tileGrid.centerLat);
        var northWestLngLat = this.mvc.view.latlngPixelConvertor.Pixel2LatLng(pixel[0] - this.viewSize.getWidth() / 2, pixel[1] - this.viewSize.getHeight() / 2);
        var southEastLngLat = this.mvc.view.latlngPixelConvertor.Pixel2LatLng(pixel[0] + this.viewSize.getWidth() / 2, pixel[1] + this.viewSize.getHeight() / 2);
        var northWestQLngLat = new _a._ac.QLngLat(northWestLngLat[0], northWestLngLat[1]);
        var southEastQLngLat = new _a._ac.QLngLat(southEastLngLat[0], southEastLngLat[1]);
        return [northWestQLngLat, southEastQLngLat]
    },
    addQOverlay: function (qOverlay) {
        qOverlay.id = this.mvc.model.qOverlayCount++;
        qOverlay.mapNumber = this.mvc.view._0;
        qOverlay.mvc = this.mvc;
        qOverlay.map = this;
        var qevent = new _a._ab._abb.QOverlayAddedEvent(qOverlay);
        this.mvc.triggerEvent(qevent);
        this.render();
        qevent = null;
        qOverlay = null
    },
    removeQOverlay: function (qOverlay) {
        var qevent = new _a._ab._abb.QOverlayRemovedEvent(qOverlay);
        this.mvc.triggerEvent(qevent);
        this.render();
        qevent = null;
        qOverlay = null
    },
    clearAllQOverlays: function () {
        var qevent = new _a._ab._abb.QOverlaysClearedEvent();
        this.mvc.triggerEvent(qevent);
        this.render();
        qevent = null
    },
    addQControl: function (control, align, margin) {
        this.mvc.view.qControlRender.init = false;
        if (margin) {
            control.set('marginX', margin[0]);
            control.set('marginY', margin[1])
        }
        align && control.set('align', align);
        control.mvc = this.mvc;
        this.mvc.model.qControlList.push(control);
        control.setId(this.mvc.model.qControlIdCounter++);
        this.render();
        control = null
    },
    removeQControl: function (control) {
        this.mvc.view.removeQControl(this.mvc.model.removeQControl(control.id));
        this.render();
        control = null
    },
    clearAllQControls: function () {
        this.mvc.model.clearAllQOverlays();
        this.render()
    },
    getInfoWindow: function () {
        if (!this.infoWindow) {
            this.infoWindow = new _a._ac.QInfoWindow();
            this.addQOverlay(this.infoWindow)
        }
        return this.infoWindow
    },
    openInfoWindow: function (qLngLat, content, infoWindowStyle, deltaLeft, deltaTop) {
        if (!this.infoWindow) {
            this.infoWindow = new _a._ac.QInfoWindow();
            this.addQOverlay(this.infoWindow)
        } else {
            this.infoWindow.close()
        }
        this.infoWindow.open(content, qLngLat, infoWindowStyle);
        return this.infoWindow
    },
    closeInfoWindow: function () {
        if (this.infoWindow) {
            this.infoWindow.close()
        }
    },
    addContextMenuItem: function (contextMenuItem) {
        var qevent = new _a._ab._abb.ContextMenuItemAddedEvent(contextMenuItem);
        this.mvc.triggerEvent(qevent);
        qevent = null;
        contextMenuItem = null
    },
    bindKeyboardHandler: function () {
        var this_ = this;
        var pageUp = false;
        var pageDown = false;
        var leftkeyDown = false;
        var rightkeyDown = false;
        var upkeyDown = false;
        var downkeyDown = false;
        var pageMoveStep = this.viewSize.getHeight() / 2;
        var nOffsetX = 0;
        var nOffsetY = 0;
        var nStepX = 1;
        var nStepY = 1;
        var totalOffset = null;
        document.onkeydown = function (e) {
            if (!this_.bKeyboard) {
                return false
            }
            var currentKey = 0;
            var evt = e || event;
            if (document.activeElement.tagName !== "INPUT") {
                currentKey = evt.keyCode || evt.which || evt.charCode;
                switch (currentKey) {
                case 33:
                    pageUp = true;
                    break;
                case 34:
                    pageDown = true;
                    break;
                case 37:
                    leftkeyDown = true;
                    break;
                case 38:
                    upkeyDown = true;
                    break;
                case 39:
                    rightkeyDown = true;
                    break;
                case 40:
                    downkeyDown = true;
                    break
                }
                if (pageUp) {
                    nOffsetX = 0;
                    nOffsetY = pageMoveStep
                }
                if (pageDown) {
                    nOffsetX = 0;
                    nOffsetY = -pageMoveStep
                }
                if (leftkeyDown) {
                    nOffsetX += nStepX
                }
                if (rightkeyDown) {
                    nOffsetX += -nStepX
                }
                if (upkeyDown) {
                    nOffsetY += nStepY
                }
                if (downkeyDown) {
                    nOffsetY += -nStepY
                }
                nOffsetX > 30 && (nOffsetX = 30);
                nOffsetX < -30 && (nOffsetX = -30);
                nOffsetY > 30 && (nOffsetY = 30);
                nOffsetY < -30 && (nOffsetY = -30);
                if (nOffsetX || nOffsetY) {
                    var offset = new _a._ac.QSize(nOffsetX, nOffsetY);
                    if (totalOffset) {
                        this_.moveBy(offset, 0)
                    }
                    totalOffset = offset
                }
            }
        };
        document.onkeyup = function (e) {
            if (!this_.bKeyboard) {
                return false
            }
            var currentKey = 0;
            var evt = e || event;
            currentKey = evt.keyCode || evt.which || evt.charCode;
            switch (currentKey) {
            case 33:
                pageUp = false;
                nOffsetY = 0;
                break;
            case 34:
                pageDown = false;
                nOffsetY = 0;
                break;
            case 37:
                leftkeyDown = false;
                nOffsetX = 0;
                break;
            case 38:
                upkeyDown = false;
                nOffsetY = 0;
                break;
            case 39:
                rightkeyDown = false;
                nOffsetX = 0;
                break;
            case 40:
                downkeyDown = false;
                nOffsetY = 0;
                break;
            case 107:
                this_.zoomIn();
                break;
            case 109:
                this_.zoomOut();
                break
            }
            if (totalOffset) {
                totalOffset.width *= 5;
                totalOffset.height *= 5;
                if (totalOffset.width > 0 && totalOffset.width < 50) {
                    totalOffset.width = 100
                }
                if (totalOffset.width < 0 && totalOffset.width > -50) {
                    totalOffset.width = -100
                }
                if (totalOffset.height > 0 && totalOffset.height < 50) {
                    totalOffset.height = 100
                }
                if (totalOffset.height < 0 && totalOffset.height > -50) {
                    totalOffset.height = -100
                }
                this_.moveBy(totalOffset, 0.5, _a._aa.QFx.easeOutQuad);
                totalOffset = null;
                nOffsetX = 0;
                nOffsetY = 0
            }
        }
    },
    setViewSize: function (width, height) {
        var qevent = new _a._ab._abb.ViewSizeChangedEvent(width, height);
        this.mvc.triggerEvent(qevent);
        this.viewSize = new _a._ac.QSize(width, height);
        qevent = null;
        width = null;
        height = null
    },
    setCenter: function (lng, lat) {
        var qevent = new _a._ab._abb.CenterChangedEvent(lng, lat);
        this.mvc.triggerEvent(qevent);
        qevent = null;
        lng = null;
        lat = null
    },
    setZoomLevel: function (zoomLevel, zoomMode) {
        var qevent = new _a._ab._abb.ZoomLevelChangedEvent(zoomLevel, null, ((zoomMode === undefined) ? _a._aa._aab._aabx : zoomMode));
        this.mvc.triggerEvent(qevent);
        qevent = null;
        zoomLevel = null;
        zoomMode = null
    },
    zoom: function (deltaZoomLevel, zoomMode) {
        var qevent = new _a._ab._abb.ZoomLevelChangedEvent(null, deltaZoomLevel, ((zoomMode === undefined) ? _a._aa._aab._aabx : zoomMode));
        this.mvc.triggerEvent(qevent);
        qevent = null;
        deltaZoomLevel = null;
        zoomMode = null
    },
    setTheme: function (theme) {
        var qevent = new _a._ab._abb.ThemeChangedEvent(theme);
        this.mvc.triggerEvent(qevent);
        qevent = null;
        theme = null
    },
    render: function (isOptimal) {
        var qevent = new _a._ab._abb.RenderEvent(this.mvc.model.tileGrid, this.mvc.model.qOverlayChangeList, isOptimal);
        this.mvc.triggerEvent(qevent);
        qevent = null;
        isOptimal = null
    },
    isValidEvent: function (strEventType) {
        var nValid = 0;
        if (strEventType) {
            switch (strEventType) {
            case "click":
            case "dblclick":
            case "rightclick":
            case "mouseover":
            case "mousemove":
            case "mouseout":
                nValid = 1;
                break;
            case "center_changed":
            case "zoom_changed":
            case "drag_started":
            case "drag_ended":
            case 'move_ended':
            case 'zoom_ended':
                nValid = 2;
                break;
            default:
                nValid = 0
            }
        }
        return nValid
    },
    addOuterEventListener: function (strEventType, handler, args) {
        var nEventType = this.isValidEvent(strEventType);
        if (nEventType) {
            switch (strEventType) {
            case "click":
            case "dblclick":
            case "rightclick":
            case "mouseover":
            case "mousemove":
            case "mouseout":
            case "drag_started":
            case "drag_ended":
            case 'move_ended':
            case 'zoom_ended':
                this.mvc.view.addOuterEventListener(strEventType, handler, args);
                break;
            case "center_changed":
            case "zoom_changed":
                this.mvc.model.tileGrid.addOuterEventListener(strEventType, handler, args);
                break
            }
        }
    },
    removeOuterEventListener: function (strEventType) {
        var nEventType = this.isValidEvent(strEventType);
        if (nEventType) {
            switch (strEventType) {
            case "click":
            case "dblclick":
            case "rightclick":
            case "mouseover":
            case "mousemove":
            case "mouseout":
            case "drag_started":
            case "drag_ended":
                this.mvc.view.removeOuterEventListener(strEventType);
                break;
            case "center_changed":
            case "zoom_changed":
                this.mvc.model.tileGrid.removeOuterEventListener(strEventType);
                break
            }
        }
    },
    clearOuterEventListeners: function () {
        this.mvc.view.clearOuterEventListeners();
        this.mvc.model.tileGrid.clearOuterEventListeners()
    }
});
_a._ac.QLngLat = _a._aa._aag({
    className: "_a._ac.QLngLat",
    lng: null,
    lat: null,
    initialize: function (lng, lat) {
        this.lng = lng;
        this.lat = lat;
        lng = null;
        lat = null
    },
    getLng: function () {
        return this.lng
    },
    getLat: function () {
        return this.lat
    },
    getDistanceTo: function (qLngLat) {
        var EARTH_RADIUS = 6378137;
        var toRadian = function (delta) {
            return (Math.PI / 180) * delta
        };
        var dLat = toRadian(qLngLat.getLat() - this.getLat());
        var dLon = toRadian(qLngLat.getLng() - this.getLng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadian(this.getLat())) * Math.cos(toRadian(qLngLat.getLat())) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.asin(Math.min(1, Math.sqrt(a)));
        var d = EARTH_RADIUS * c;
        return d
    }
});
var DEF_SPACE = 5;
var DEF_MARGIN = 10;
var TLeft = DEF_MARGIN;
var TRight = DEF_MARGIN;
var BLeft = DEF_MARGIN;
var BRight = 0;
_a._ac._acd = _a._aa._aag(_a._aa.QMVCObject, {
    className: '_a._ac._acd',
    width: null,
    height: null,
    content: null,
    wrap: null,
    id: 0,
    init: false,
    mvc: null,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    zIndex: 10,
    initialize: function (mvc, left, top, width, height) {
        this.mvc = mvc;
        if (left !== undefined) {
            this.left = left
        }
        if (top !== undefined) {
            this.top = top
        }
        if (width !== undefined) {
            this.set('width', width)
        }
        if (height !== undefined) {
            this.set('height', height)
        }
        mvc = null;
        left = null;
        top = null;
        width = null;
        height = null
    },
    changed: function () {
        this.render()
    },
    setSize: function (width, height) {
        this.set('width', width);
        this.set('height', height)
    },
    setMargin: function (margin) {
        this.set('marginX', margin[0]);
        this.set('marginY', margin[1])
    },
    setAlign: function (align) {
        this.set('align', align)
    },
    show: function () {
        if (this.get('content')) {
            this.get('content').style.display = ''
        }
    },
    hide: function () {
        if (this.get('content')) {
            this.get('content').style.display = 'none'
        }
    },
    render: function (container) {
        var content = this.get('content');
        container && (this.container = container);
        container = this.get('container');
        if (container && content) {
            if (content.parentNode) {
                content.parentNode.removeChild(content)
            }
            var viewWidth = this.mvc.view.viewSizeWidth;
            var viewHeight = this.mvc.view.viewSizeHeight;
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.appendChild(content);
            var dis = content.style.display;
            content.style.display = '';
            document.body.appendChild(div);
            var width = content.offsetWidth;
            var height = content.offsetHeight;
            var pos = {
                width: this.get('width') || width,
                height: this.get('height') || height
            };
            div.removeChild(content);
            document.body.removeChild(div);
            content.style.display = dis;
            container.appendChild(content);
            var x = this.get('marginX');
            var y = this.get('marginY');
            var align = this.get('align') || _a._aa.QALIGN.TOP_LEFT;
            if (align % 3 == 0) {
                pos['left'] = x;
                if (!x && x != 0) {
                    if (align < 3) {
                        pos['left'] = TLeft;
                        TLeft += width + DEF_SPACE
                    } else if (align >= 6) {
                        pos['left'] = BLeft;
                        BLeft += width + DEF_SPACE
                    }
                    this.marginX = pos['left']
                }
            } else if (align % 3 === 2) {
                pos['left'] = x;
                if (!x && x != 0) {
                    if (align < 3) {
                        pos['right'] = TRight;
                        TRight += width + DEF_SPACE
                    } else if (align >= 6) {
                        pos['right'] = BRight;
                        BRight += width + DEF_SPACE
                    }
                }
                this.marginX = pos['left'];
                pos['left'] = viewWidth - width - pos['left']
            }
            if (align < 3) {
                pos['top'] = y || y == 0 ? y : DEF_MARGIN;
                this.marginY = pos['top']
            } else if (align >= 6) {
                pos['top'] = y || y == 0 ? y : DEF_MARGIN;
                this.marginY = pos['top'];
                pos['top'] = viewHeight - height - pos['top']
            }
            var cssText = 'overflow:hidden;';
            for (var key in pos) {
                if (pos.hasOwnProperty(key)) {
                    var value = pos[key];
                    value += typeof(pos[key]) == 'number' ? 'px' : '';
                    cssText += key + ':' + value + ';'
                }
            }
            container.style.cssText = cssText
        }
    },
    draw: function () {},
    setId: function (id) {
        this.set('id', id)
    }
});
_a._ac._acd.QCenterControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QCenterControl",
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments)
    },
    render: function (qControlDiv) {
        this.width = 4;
        this.height = 4;
        this.left = this.mvc.view.viewSizeWidth / 2 - this.width / 2;
        this.top = this.mvc.view.viewSizeHeight / 2 - this.height / 2;
        qControlDiv.style.backgroundColor = "red";
        qControlDiv.style.fontSize = "0px"
    }
});
(function () {
    var markerAll = [];

    function markerGetter(marker) {
        var pos = marker.get('position');
        return pos.getLat()
    }
    function resortMarkers(mapNumber) {
        var mks = markerAll[mapNumber];
        if (mks) {
            _a._aa._aaf.sortByGetter(mks, markerGetter);
            for (var i = 0, len = mks.length; i < len; i++) {
                mks[i].set('zindex', (len - i) + 100)
            }
        }
    }
    var Point = _a._aa._aag({
        className: 'Point',
        x: null,
        y: null,
        initialize: function (x, y) {
            this.x = x;
            this.y = y
        },
        toString: function () {
            return "(" + this.x + ", " + this.y + ")"
        },
        equals: function (point) {
            if (!point) return false;
            return point.x === this.x && point.y === this.y
        }
    });
    var Size = _a._aa._aag({
        className: 'Size',
        width: null,
        height: null,
        widthUnit: null,
        heightUnit: null,
        initialize: function (width, height, widthUnit, heightUnit) {
            this.width = width;
            this.height = height;
            this.widthUnit = widthUnit || "px";
            this.heightUnit = heightUnit || "px"
        },
        toString: function () {
            return "(" + this.width + ", " + this.heigth + ")"
        },
        equals: function (size) {
            if (!size) return false;
            return size.width === this.width && size.height === this.height
        }
    });

    function QMarkerHandler(markerModel) {
        var imageView = new QMarkerImageView();
        var markerView = new QMarkerView(markerModel);
        imageView.bindTo('modelIcon', markerModel, 'icon', true);
        imageView.bindTo('modelIconImage', markerModel, 'iconImage', true);
        imageView.bindTo('modelShape', markerModel, 'shape', true);
        imageView.bindTo('modelShadow', markerModel, 'shadow', true);
        markerView.bindTo('icon', imageView, 'viewIcon', true);
        markerView.bindTo('force', imageView, null, true);
        markerView.bindTo('shape', imageView, 'viewShape', true);
        markerView.bindTo('shadow', imageView, 'viewShadow', true);
        markerView.bindTo('panes', markerModel, 'panes', true);
        markerView.bindTo('title', markerModel, null, true);
        markerView.bindTo('draggable', markerModel, null, true);
        markerView.bindTo('position', markerModel, null, true);
        markerView.bindTo('flat', markerModel, null, true);
        markerView.bindTo('clickable', markerModel, null, true);
        markerView.bindTo('decorations', markerModel, null, true);
        markerView.bindTo('visible', markerModel, null, true);
        markerView.bindTo('zindex', markerModel, null, true);
        markerView.bindTo('customZIndex', markerModel, null, true);
        markerView.bindTo('anchorSign', markerModel, null, true);
        markerView.bindTo('cursor', markerModel, null, true);
        markerView.bindTo('redraw', markerModel, null, true)
    }
    _a._ac.QMarkerImage = _a._aa._aag({
        className: '_a._ac.QMarkerImage',
        url: null,
        size: null,
        anchor: null,
        origin: null,
        scaledSize: null,
        initialize: function (url, size, anchor, origin, scaledSize) {
            this.url = url;
            this.origin = origin || new _a._ac.QPoint(0, 0);
            this.size = size || scaledSize;
            this.anchor = anchor;
            this.scaledSize = scaledSize
        }
    });
    _a._ac.QMarkerShape = _a._aa._aag({
        className: '_a._ac.QMarkerShape',
        coord: null,
        type: null,
        initialize: function (coord, type) {
            this.coord = coord;
            this.type = type
        }
    });
    var isQMarkerImage = _a._aa.QMVCAccessor.union(_a._aa.QMVCAccessor.isString, _a._aa.QMVCAccessor.isInstanceOf(_a._ac.QMarkerImage));
    _a._ac._ach = _a._aa._aag(_a._aa.QMVCObject, {
        className: '_a._ac._ach',
        initialize: function (position, markerOptions) {
            var mo = markerOptions || {};
            if (mo['clickable'] !== false) {
                mo['clickable'] = true
            }
            mo['cursor'] = mo['cursor'] || 'pointer';
            mo['customZIndex'] = mo['zIndex'] || null;
            mo['zIndex'] = null;
            this.setValues(mo);
            this.set('visible', true);
            this.set('position', position);
            QMarkerHandler(this);
            if (_a._aa._aaf._aafj() === "IE") {
                var this_ = this
            }
        },
        setZIndex: function (zIndex) {
            this.set('customZIndex', zIndex);
            this.focus();
            this.set('zindex', zIndex + 1000)
        },
        getZIndex: function (zIndex) {
            if (this.get('customZIndex') != null) {
                return this.get('customZIndex')
            } else {
                return this.get('zindex') - 100
            }
        },
        focus: function () {
            if (this.mvc) {
                var mks = markerAll[this.mvc.view._0] || [];
                for (var i = 0, len = mks.length; i < len; i++) {
                    if (mks[i] == this) {
                        mks.splice(i, 1);
                        break
                    }
                }
                this.set('zindex', _a._aa._aab._aabd + 100000)
            }
        },
        setIconImage: function (url) {
            this.set('iconImage', url)
        },
        unfocus: function () {
            if (!this.mvc) {
                return
            }
            if (this.get('customZIndex') == null) {
                var mks = markerAll[this.mvc.view._0] || [];
                var exist = false;
                for (var i = 0, len = mks.length; i < len; i++) {
                    if (mks[i] == this) {
                        exist = true;
                        break
                    }
                }
                if (!exist) {
                    mks.push(this)
                }
                resortMarkers(this.mvc.view._0)
            } else {
                this.set('zindex', this.get('customZIndex') + 10000)
            }
        },
        enableDrag: function (draggable) {
            this.set('draggable', draggable)
        },
        openInfoWindow: function (content, infoWindowStyle) {
            var map = this.map;
            if (!map.infoWindow) {
                map.infoWindow = new _a._ac.QInfoWindow();
                map.addQOverlay(map.infoWindow)
            }
            map.infoWindow.open(content, this, infoWindowStyle);
            return map.infoWindow
        },
        closeInfoWindow: function () {
            this.map.infoWindow && this.map.infoWindow.close()
        },
        getPixelBounds: function () {
            var icon = this.get('icon');
            return [icon.anchor.left, icon.anchor.top, icon.size.width, icon.size.height]
        },
        removeDecoration: function (decoration) {
            var decos = this.get('decorations');
            if (decos) {
                for (var i = 0, len = decos.length; i < len; i++) {
                    if (decos[i] == decoration) {
                        decos[i] = null;
                        this.notify('decorations');
                        break
                    }
                }
            }
        },
        addDecoration: function (decoration) {
            var decos = this.get('decorations');
            var exist = !! decos;
            decos = decos || [];
            var decorExist = false;
            for (var i = 0, len = decos.length; i < len; i++) {
                if (decos[i] == decoration) {
                    decorExist = true;
                    break
                }
            }
            if (!decorExist) {
                decos.push(decoration);
                if (!exist) {
                    this.set('decorations', decos)
                } else {
                    this.notify('decorations')
                }
            }
        },
        map_changed: function () {
            this.set('panes', {
                floatPane: this.mvc.view.qFloatDiv,
                overlayMouseTarget: this.mvc.view.qOverlayMouseTargetDiv,
                floatShadow: this.mvc.view.qFloatShadowDiv,
                overlayImage: this.mvc.view.qOverlaysDiv,
                overlayShadow: this.mvc.view.qOverlaysShadowDiv,
                overlayLayer: null,
                mapPane: null
            })
        }
    });
    _a._aa.QMVCAccessor.set(_a._ac._ach, {
        position: _a._aa.QMVCAccessor.isInstanceOf(_a._ac.QLngLat),
        title: _a._aa.QMVCAccessor.isStringOrNull,
        icon: isQMarkerImage,
        target: null,
        shadow: isQMarkerImage,
        shape: _a._aa.QMVCAccessor.isInstanceOf(_a._ac.QMarkerShape),
        cursor: _a._aa.QMVCAccessor.isStringOrNull,
        clickable: _a._aa.QMVCAccessor.isBoolean,
        draggable: _a._aa.QMVCAccessor.isBoolean,
        visible: _a._aa.QMVCAccessor.isBoolean,
        flat: _a._aa.QMVCAccessor.isBoolean,
        decorations: null
    });
    var defaultIcon = new _a._ac.QMarkerImage(_a._aa._aab._aabr + 'themes/default/img/marker.png', new _a._ac.QSize(27, 37), new _a._ac.QPoint(2, 37), new _a._ac.QPoint(0, 0));
    var defaultShadow = new _a._ac.QMarkerImage(_a._aa._aab._aabr + 'themes/default/img/markerShadow.png', new _a._ac.QSize(31, 21), new _a._ac.QPoint(2, 21), new _a._ac.QPoint(0, 0));
    var defaultShape = new _a._ac.QMarkerShape([9, 0, 6, 1, 4, 2, 2, 4, 0, 8, 0, 12, 1, 14, 2, 16, 5, 19, 7, 23, 8, 26, 9, 30, 9, 34, 11, 34, 11, 30, 12, 26, 13, 24, 14, 21, 16, 18, 18, 16, 20, 12, 20, 8, 18, 4, 16, 2, 15, 1, 13, 0], 'poly');
    var fetchingList = [];

    function callbackFetched(view, type, mi, callback) {
        var exist = false;
        for (var i = 0, len = fetchingList.length; i < len; ++i) {
            if (fetchingList[i].view === view && fetchingList[i].type === type) {
                fetchingList[i].mi = mi;
                exist = true
            }
        }
        if (!exist) {
            fetchingList.push({
                view: view,
                type: type,
                mi: mi,
                callback: callback
            })
        }
        return function () {
            for (var i = 0, len = fetchingList.length; i < len; ++i) {
                if (fetchingList[i].view === view && fetchingList[i].type === type && fetchingList[i].mi === mi) {
                    fetchingList.splice(i, 1);
                    callback.apply(null, arguments);
                    return
                }
            }
            return
        }
    }
    function fetchMarkerImage(markerImage, view, type) {
        view[type + 'count_'] = view[type + 'count_'] ? view[type + 'count_'] + 1 : 1;
        var cur = view[type + 'count_'];
        if (markerImage) {
            typeof markerImage === 'string' && (markerImage = new _a._ac.QMarkerImage(markerImage));
            if (!markerImage.scaledSize) {
                _a._aa._aaf.fetchImage(markerImage.url, callbackFetched(view, type, markerImage, function (width, height, url) {
                    if (cur != view[type + 'count_'] || width == 0 || height == 0) {
                        return
                    }
                    var scaledSize = new Size(width, height);
                    var newIcon = new _a._ac.QMarkerImage(url, markerImage.size || scaledSize, markerImage.anchor, markerImage.origin, scaledSize);
                    view.set(type, newIcon)
                }))
            } else {
                view.set(type, markerImage)
            }
        } else {
            view.set(type, null)
        }
    }
    var QMarkerImageView = _a._aa._aag(_a._aa.QMVCView, {
        className: 'QMarkerImageView',
        initialize: function () {},
        draw: function (type) {
            var icon = this.get('modelIcon');
            if (!icon) {
                this.set('modelIcon', defaultIcon);
                return
            }
            if (this.get('modelIconImage')) {
                icon.url = this.get('modelIconImage');
                this.set('modelIconImage', null);
                return
            }
            if ((!type || type == 'modelIcon') && icon) {
                fetchMarkerImage(icon, this, 'viewIcon');
                return
            }
            var shadow = this.get('modelShadow');
            if ((icon == defaultIcon) && (!shadow)) {
                this.set('modelShadow', defaultShadow);
                return
            } else if (icon != defaultIcon && shadow == defaultShadow) {
                this.set('modelShadow', null);
                return
            }
            if ((!type || type == 'modelShadow') && shadow) {
                fetchMarkerImage(shadow, this, 'viewShadow');
                return
            }
            var shape = this.get('modelShape');
            if ((icon == defaultIcon) && (!shape)) {
                shape = defaultShape
            }
            this.set('viewShape', shape)
        },
        changed: function (key) {
            key == 'modelIconImage' && (key = 'modelIcon');
            if (key === 'modelIcon' || key === 'modelShape' || key === 'modelShadow') {
                this.draw(key)
            }
        }
    });

    function removeFromDomTree(dom, destroy) {
        var domDestroy = document.getElementById('__distroy__');
        if (!domDestroy) {
            domDestroy = document.createElement('div');
            document.body.appendChild(domDestroy);
            domDestroy.id = '__distroy__'
        }
        if (dom.parentNode) {
            dom.parentNode.removeChild(dom)
        }
        if (destroy) {
            domDestroy.appendChild(dom);
            domDestroy.innerHTML = ''
        }
    }
    function setSize(dom) {
        if (arguments.length === 2) {
            var size = arguments[1];
            dom.style.width = size.width + 'px';
            dom.style.height = size.height + 'px'
        } else {
            dom.style.width = arguments[1] + 'px';
            dom.style.height = arguments[2] + 'px'
        }
    }
    function setPosition(dom) {
        if (arguments.length === 2) {
            var pos = arguments[1];
            dom.style.left = pos.left + 'px';
            dom.style.top = pos.top + 'px'
        } else {
            dom.style.left = arguments[1] + 'px';
            dom.style.top = arguments[2] + 'px'
        }
    }
    function getPixelPosition(position, mvc) {
        if (mvc) {
            var convertor = mvc.view.latlngPixelConvertor;
            var pixels = convertor.LatLng2Pixel(position.getLng(), position.getLat());
            return {
                'x': pixels[0],
                'y': pixels[1]
            }
        }
        return null
    }
    function setMVPosition(mv, position) {
        var icon = mv.get('icon');
        var shadow = mv.get('shadow');
        position = getPixelPosition(position, mv.markerModel_.mvc);
        if (icon && position) {
            var posx = position.x - (icon.anchor ? icon.anchor.left : 0);
            var posy = position.y - (icon.anchor ? icon.anchor.top : 0);
            mv.icon_ && setPosition(mv.icon_, posx, posy);
            mv.shape_ && setPosition(mv.shape_, posx, posy);
            mv.area_ && setPosition(mv.area_, posx, posy);
            if (shadow && shadow.anchor) {
                posx = position.x - (shadow.anchor ? shadow.anchor.left : 0);
                posy = position.y - (shadow.anchor ? shadow.anchor.top : 0);
                mv.shadow_ && setPosition(mv.shadow_, posx, posy)
            }
            var index = mv.get('zindex');
            index = index || _a._aa._aab._aabi;
            mv.icon_ && (mv.icon_.style.zIndex = index);
            mv.shadow_ && (mv.shadow_.style.zIndex = index);
            mv.shape_ && (mv.shape_.style.zIndex = index);
            mv.area_ && (mv.area_.style.zIndex = index)
        }
    }
    function addDragEvents(target, obj) {
        if (!target) {
            return
        }
        target.draggable_ = obj.get('draggable');
        _a._aa.QMVCEvent.addDomListener(target, 'mousedown', function (event) {
            event = event || window.event;
            _a._aa._aaf.stopEvent(event)
        });
        _a._aa.QMVCEvent.addDomListener(target, 'mouseout', function (event) {
            event = event || window.event;
            _a._aa._aaf.stopEvent(event)
        });
        var mv = obj;
        if (obj.get('draggable') && !target.draggableAdded_) {
            target.draggableAdded_ = true;
            _a._aa.QMVCEvent.addDomListener(target, 'mousedown', function (event) {
                event = event || window.event;
                _a._aa._aaf.stopEvent(event);
                if (target.draggable_) {
                    if (event.button == 2) {
                        return false
                    }
                    event.qLngLat = mv.get('position');
                    _a._aa.QMVCEvent.trigger(obj.markerModel_, 'dragstart', event);
                    target.dragging_ = true;
                    target.oldZindex_ = obj.icon_.style.zIndex || _a._aa._aab._aabi;
                    obj.icon_ && (obj.icon_.style.zIndex = _a._aa._aab._aabd);
                    obj.shape_ && (obj.shape_.style.zIndex = _a._aa._aab._aabd);
                    obj.shadow_ && (obj.shadow_.style.zIndex = _a._aa._aab._aabd);
                    target.draggingPosition_ = getMousePosition(event);
                    target.oriPosition_ = getPixelPosition(obj.get('position'), obj.markerModel_.mvc)
                }
                return false
            });
            var pane = document;
            _a._aa.QMVCEvent.addDomListener(pane, 'mousemove', function (event) {
                event = event || window.event;
                if (target.dragging_) {
                    var curPos = getMousePosition(event);
                    var dx = curPos.x - target.draggingPosition_.x;
                    var dy = curPos.y - target.draggingPosition_.y;
                    if ((dx !== 0 || dy !== 0) && obj.get('clickable')) {
                        target.draged_ = true
                    }
                    var px = dx + target.oriPosition_.x;
                    var py = dy + target.oriPosition_.y;
                    var convertor = obj.markerModel_.mvc.view.latlngPixelConvertor;
                    var p = convertor.Pixel2LatLng(px, py);
                    target.tmpPos_ = new _a._ac.QLngLat(p[0], p[1]);
                    if (!target.timer_) {
                        target.timer_ = setTimeout(function () {
                            setMVPosition(obj, target.tmpPos_);
                            target.tmpPos_ = null;
                            target.timer_ = null
                        }, 50)
                    }
                    event.qLngLat = obj.get('position');
                    _a._aa.QMVCEvent.trigger(obj.markerModel_, 'dragging', event)
                }
            });
            _a._aa.QMVCEvent.addDomListener(pane, 'mouseup', dragEnd(obj, target, pane, true));
            _a._aa.QMVCEvent.addDomListener(pane, 'mouseout', dragEnd(obj, target, pane))
        }
    }
    var clickcount = 0;

    function dragEnd(obj, target, pane, isUp) {
        return function (event) {
            event = event || window.event;
            if (!isUp) {
                var relatedTarget = event.toElement || event.relatedTarget;
                while (relatedTarget && relatedTarget !== pane) relatedTarget = relatedTarget.parentNode
            }
            event.qLngLat = obj.get('position');
            if (target.dragging_ && (isUp || !relatedTarget)) {
                var curPos = getMousePosition(event);
                var dx = curPos.x - target.draggingPosition_.x;
                var dy = curPos.y - target.draggingPosition_.y;
                var px = dx + target.oriPosition_.x;
                var py = dy + target.oriPosition_.y;
                if (obj.get('clickable') && !target.draged_ && dx == 0 && dy == 0) {
                    clickcount++;
                    _a._aa.QMVCEvent.trigger(obj.markerModel_, 'click', event)
                }
                target.draged_ = false;
                target.dragging_ = false;
                obj.icon_.style.zIndex = target.oldZindex;
                obj.shape_ && (obj.shape_.style.zIndex = target.oldZindex);
                obj.area_ && (obj.area_.style.zIndex = target.oldZinex);
                var convertor = obj.markerModel_.mvc.view.latlngPixelConvertor;
                var pixels = convertor.Pixel2LatLng(px, py);
                obj.set('position', new _a._ac.QLngLat(pixels[0], pixels[1]));
                _a._aa.QMVCEvent.trigger(obj.markerModel_, 'dragend', event)
            }
        }
    }
    function getDomElement(tag, parent, css, size, position) {
        var dom = document.createElement(tag);
        if (css) {
            dom.style.cssText = css
        }
        if (size) {
            setSize(dom, size)
        }
        if (position) {
            setPosition(dom, position)
        }
        if (parent) {
            parent.appendChild(dom)
        }
        return dom
    }
    var mapAreaId = 0;

    function getMousePosition(event) {
        var posx = 0;
        var posy = 0;
        if (event.pageX || event.pageY) {
            posx = event.pageX;
            posy = event.pageY
        }
        if (event.clientX || event.clientY) {
            posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        return new Point(posx, posy)
    }
    function addMVEvents(model, target) {
        if (!target.eventsAdded_) {
            _a._aa.QMVCEvent.addDomListener(target, 'dragstart', function (event) {
                event = event || window.event;
                _a._aa._aaf.stopEvent(event);
                return false
            });
            _a._aa.QMVCEvent.addDomListener(target, 'mouseup', function (event) {
                event = event || window.event;
                event.qLngLat = model.get('position');
                if (event.button == 2) {
                    _a._aa.QMVCEvent.trigger(model, 'rightclick', event)
                } else {
                    _a._aa.QMVCEvent.trigger(model, 'mouseup', event)
                }
            });
            var normalEvents = ['mouseover', 'mouseout', 'mousedown', 'dblclick'];
            for (var i = 0, len = normalEvents.length; i < len; ++i) {
                var evts = normalEvents[i];
                _a._aa.QMVCEvent.addDomListener(target, evts, normalHandler(model, evts))
            }
            target.eventsAdded_ = true
        }
    }
    function normalHandler(model, evts) {
        return function (event) {
            event = event || window.event;
            event.qLngLat = model.get('position');
            _a._aa.QMVCEvent.trigger(model, evts, event)
        }
    };

    function appendDecorations(decos, parent, decorDivs) {
        if (!decos || !parent) {
            return decorDivs
        }
        decorDivs = decorDivs || [];
        var l = decos.length > decorDivs.length ? decos.length : decorDivs.length;
        for (var d = 0; d < l; d++) {
            var deco = decos[d];
            if (!deco) {
                if (decorDivs[d]) {
                    _a._aa._aaf.removeNode(decorDivs[d]);
                    decorDivs.splice(d, 1)
                }
                decos.splice(d, 1);
                continue
            }
            var decoDom = decorDivs[d];
            if (!decoDom) {
                decoDom = document.createElement('div');
                parent.appendChild(decoDom);
                decoDom.style.position = 'absolute';
                decorDivs[d] = decoDom
            }
            decoDom.style.zIndex = deco.zIndex || 0;
            decoDom.innerHTML = '';
            if (typeof deco.content == 'string') {
                decoDom.innerHTML = deco.content
            } else {
                decoDom.appendChild(deco.content)
            }
            var align = deco.align || _a._aa.QALIGN.TOP_LEFT;
            var xSymbol = _a._aa.QALIGN.isRight(align) ? 'right' : 'left';
            var ySymbol = _a._aa.QALIGN.isBottom(align) ? 'bottom' : 'top';
            deco.margin = deco.margin || [0, 0];
            var x = deco.margin[0];
            var y = deco.margin[1];
            if (parent.offsetWidth != 0) {
                var deltaX = (parent.offsetWidth - decoDom.offsetWidth) / 2;
                var deltaY = (parent.offsetHeight - decoDom.offsetHeight) / 2;
                _a._aa.QALIGN.isMiddle(align) && (x += deltaX);
                _a._aa.QALIGN.isCenter(align) && (y += deltaY);
                decoDom.style[xSymbol] = x + 'px';
                decoDom.style[ySymbol] = y + 'px'
            }
        }
        return decorDivs
    }
    var QMarkerView = _a._aa._aag(_a._aa.QMVCView, {
        className: 'QMarkerView',
        initialize: function (marker) {
            this.markerModel_ = marker;
            if (_a._aa._aaf._aafj() === "IE") {
                var this_ = this
            }
        },
        getPanes: function () {
            return this.get('panes')
        },
        draw: function () {
            var obj = this;
            var visible = this.get('visible');
            var panes = this.getPanes();
            if (panes) {
                var icon = this.get('icon');
                if (!icon) {
                    if (this.markerModel_.get('icon')) {
                        return
                    } else {
                        this.notify('force');
                        return
                    }
                }
                if (!this.ready_) {
                    _a._aa.QMVCEvent.trigger(this.markerModel_, 'ready');
                    this.ready_ = true
                }
                var position = this.get('position');
                var convertor = this.markerModel_.mvc.view.latlngPixelConvertor;
                var pixels = convertor.LatLng2Pixel(position.getLng(), position.getLat());
                if ((!pixels[0] && pixels[0] != 0) || (!pixels[1] && pixels[1] != 0)) {
                    return
                }
                if (icon) {
                    this.icon_ = this.getMarkerImageDom(icon, this.icon_);
                    if (this.icon_.parentNode != panes.overlayImage) {
                        panes.overlayImage.appendChild(this.icon_)
                    }
                    var tmp = null;
                    this.icon_.firstChild && this.icon_.firstChild.className == 'csssprite' && (tmp = this.icon_.firstChild);
                    tmp && this.icon_.appendChild(tmp);
                    if (visible) {
                        this.icon_.style.display = ''
                    } else {
                        this.icon_.style.display = 'none'
                    }
                    this.decors_ = appendDecorations(this.get('decorations'), this.icon_, this.decors_)
                }
                var shadow = this.get('shadow');
                if (!shadow && this.shadow_ && this.shadow_.parentNode) {
                    this.shadow_.parentNode.removeChild(this.shadow_)
                }
                if (icon && shadow) {
                    this.shadow_ = this.getMarkerImageDom(shadow, this.shadow_);
                    if (this.shadow_.parentNode != panes.overlayShadow) {
                        panes.overlayShadow.appendChild(this.shadow_)
                    }
                    if (this.get('flat') || (!visible)) {
                        this.shadow_.style.display = 'none'
                    } else {
                        this.shadow_.style.display = ''
                    }
                }
                var shape = this.get('shape');
                var target = null;
                var title = this.get('title');
                var cursor = this.get('cursor');
                if (this.get('draggable') || this.get('clickable')) {
                    if (icon && shape) {
                        var map, area, img;
                        if (this.area_) {
                            img = this.area_.firstChild;
                            if (this.area_.__src__ !== icon.url) {
                                img.src = icon.url;
                                this.area_.__src__ = icon.url
                            }
                            map = img.nextSibling;
                            area = map.firstChild;
                            if (this.area_.parentNode != panes.overlayMouseTarget) {
                                this.area_.parentNode.removeChild(this.area_)
                            }
                        } else {
                            this.area_ = getDomElement('div', null, 'position:absolute;overflow:hidden;' + 'opacity:0.01;filter:alpha(opacity=1);');
                            img = getDomElement('img', this.area_, 'positiion:absolute;-moz-user-select:none;' + '-khtml-user-select:none;border:none;');
                            img.unselectable = 'on';
                            img.onselectstart = function () {
                                return false
                            };
                            var token = 'qimgmap' + (mapAreaId++);
                            img.src = icon.url;
                            img.setAttribute('usemap', '#' + token);
                            if (_a._aa._aaf._aafj() == 'IE') {
                                img.setAttribute('useMap', '\#' + token);
                                map = document.createElement('<map name="' + token + '"></map>');
                                this.area_.appendChild(map)
                            } else {
                                map = getDomElement('map', this.area_);
                                map.setAttribute('name', token)
                            }
                            map.setAttribute('id', token);
                            area = getDomElement('area', map, 'cursor:' + cursor);
                            area.href = 'javascript:void(0)';
                            target = area
                        }
                        area.setAttribute('shape', shape.type);
                        area.setAttribute('coords', shape.coord.join(','));
                        title && (area.title = title);
                        if (visible) {
                            this.area_.style.display = ''
                        } else {
                            this.area_.style.display = 'none'
                        }
                        setSize(this.area_, icon.size);
                        setSize(img, icon.scaledSize);
                        setPosition(img, icon.origin);
                        if (this.area_.parentNode != panes.overlayMouseTarget) {
                            panes.overlayMouseTarget.appendChild(this.area_)
                        }
                        if (this.shape_ && this.shape_.parentNode) {
                            this.shape_.parentNode.removeChild(this.shape_)
                        }
                    } else if (icon) {
                        if (!this.shape_) {
                            this.shape_ = this.getMarkerImageDom(icon, this.shape_);
                            this.shape_.style.opacity = '0.01';
                            this.shape_.style.filter = 'alpha(opacity=1)';
                            this.shape_.style.cursor = cursor;
                            target = this.shape_
                        } else {
                            this.shape_ = this.getMarkerImageDom(icon, this.shape_)
                        }
                        var sPane = panes.overlayMouseTarget;
                        if (this.shape_.parentNode && this.shape_.parentNode != sPane) {
                            try {
                                this.shape_.parentNode.removeChild(this.shape_)
                            } catch (e) {}
                        }
                        if (this.shape_.parentNode != sPane) {
                            sPane.appendChild(this.shape_)
                        }
                        if (this.area_ && this.area_.parentNode) {
                            this.area_.parentNode.removeChild(this.area_)
                        }
                        title && (this.shape_.title = title);
                        if (visible) {
                            this.shape_.style.display = ''
                        } else {
                            this.shape_.style.display = 'none'
                        }
                    }
                }
                if (target) {
                    addDragEvents(target, this);
                    var mv = this;
                    if (this.get('clickable') && !this.get('draggable')) {
                        _a._aa.QMVCEvent.addDomListener(target, 'click', function (event) {
                            event = window.event || event;
                            _a._aa._aaf.stopEvent(event);
                            event.qLngLat = mv.get('position');
                            _a._aa.QMVCEvent.trigger(mv.markerModel_, 'click', event)
                        })
                    }
                    addMVEvents(this.markerModel_, target)
                }
                setMVPosition(this, this.get('position'))
            }
        },
        getMarkerImageDom: function (markerImage, dom) {
            !dom && (dom = document.createElement('div'));
            var position = markerImage.origin ? [markerImage.origin.left, markerImage.origin.top] : [0, 0];
            dom.style.position = 'absolute';
            _a._aa._aaf.setCssSprite(dom, markerImage.url, position);
            setSize(dom, markerImage.size);
            return dom
        },
        position_changed: function () {
            this.notify('anchorSign');
            if (this.markerModel_.mvc && this.get('panes')) {
                resortMarkers(this.markerModel_.mvc.view._0)
            }
            return
        },
        changed: function (key) {
            if (key == 'force' || key == 'customZIndex') {
                return
            }
            if (key == 'panes') {
                if (this.get(key) == null) {
                    this.icon_ && _a._aa._aaf.removeNode(this.icon_);
                    this.shadow_ && _a._aa._aaf.removeNode(this.shadow_);
                    this.shape_ && _a._aa._aaf.removeNode(this.shape_);
                    this.ready_ = false;
                    this.icon_ = this.shadow_ = this.shape_ = null;
                    if (this.markerModel_.mvc) {
                        var n = this.markerModel_.mvc.view._0;
                        if (markerAll[n]) {
                            for (var i = 0; i < markerAll[n].length; i++) {
                                if (markerAll[n][i] == this) {
                                    markerAll[n].splice(i, 1);
                                    break
                                }
                            }
                        }
                    }
                } else {
                    if (this.markerModel_.mvc) {
                        var n = this.markerModel_.mvc.view._0;
                        markerAll[n] = markerAll[n] || [];
                        if (this.get('customZIndex') == null) {
                            markerAll[n].push(this.markerModel_);
                            resortMarkers(n)
                        }
                    }
                }
            }
            this.redraw()
        }
    })
})();
(function () {
    _a._ac.QPolyline = _a._aa._aag(_a._aa.QMVCObject, {
        className: '_a._ac.QPolyline',
        initialize: function (path, options) {
            options = options || {};
            options['path'] = path || options['path'] || [];
            options['strokeColor'] = options['strokeColor'] || '#1791fc';
            options['strokeWeight'] = options['strokeWeight'] || 6;
            options['strokeOpacity'] = options['strokeOpacity'] || 0.8;
            options['strokeDashStyle'] = options['strokeDashStyle'] || 'Solid';
            options['zIndex'] = options['zIndex'] || 0;
            options['zIndex'] += _a._aa._aab.QPolylineZIndex;
            options['cursor'] = options['cursor'] || '';
            options['drawCursor'] = options['drawCursor'] || 'url()';
            options['drawCursorSize'] = options['drawCursorSize'] || [15, -5];
            options['visible'] = true;
            options['editable'] = false;
            options['drawable'] = false;
            options['hidelabel'] = options['hidelabel'] || true;
            this.setValues(options);
            this.view_ = new QPolylineView(this)
        },
        map_changed: function () {
            this.set('panes', {
                pane: this.mvc.view.qOverlaysDiv,
                edit: this.mvc.view.qOverlayMouseTargetDiv
            })
        },
        enableEditing: function () {
            this.set('editable', true)
        },
        stopDrawing: function () {
            this.view_.stopDrawing()
        },
        disableEditing: function () {
            this.set('editable', false)
        }
    });
    _a._aa.QMVCAccessor.set(_a._ac.QPolyline, {
        path: null,
        strokeColor: null,
        strokeWeight: null,
        strokeOpacity: null,
        strokeDashStyle: null,
        cursor: null,
        zIndex: null,
        visible: null
    });
    var polylineDragDiv = null;
    var polylineDragEventDiv = null;
    var polylineDrag = null;
    var polylineDL = null;
    var QPolylineView = _a._aa._aag(_a._aa.QMVCView, {
        className: 'QPolylineView',
        initialize: function (model) {
            this.bindTo('panes', model);
            this.bindTo('path', model);
            this.bindTo('strokeColor', model);
            this.bindTo('strokeWeight', model);
            this.bindTo('strokeDashStyle', model);
            this.bindTo('strokeOpacity', model);
            this.bindTo('zIndex', model);
            this.bindTo('redraw', model);
            this.bindTo('visible', model);
            this.bindTo('cursor', model);
            this.bindTo('editable', model);
            this.bindTo('drawCursorSize', model);
            this.bindTo('drawable', model);
            this.bindTo('hidelabel', model);
            this.bindTo('drawCursor', model);
            this.model_ = model
        },
        getLatLngScope: function () {
            var vertexes = this.get('path');
            var first = vertexes[0];
            if (first) {
                var minLat = first.getLat();
                var minLng = first.getLng();
                var maxLng = minLng;
                var maxLat = minLat;
                for (var i = 0, vertex; vertex = vertexes[i]; i++) {
                    var lat = vertex.getLat();
                    var lng = vertex.getLng();
                    minLat > lat && (minLat = lat);
                    minLng > lng && (minLng = lng);
                    maxLat < lat && (maxLat = lat);
                    maxLng < lng && (maxLng = lng)
                }
                return [minLng, maxLat, maxLng, minLat]
            }
            return null
        },
        getCanvas: function () {
            var view = this.model_.mvc.view;
            return [-view.qOverlaysDivLeft, -view.qOverlaysDivTop, view.viewSizeWidth, view.viewSizeHeight]
        },
        getScope: function (vertexes) {
            var first = vertexes[0];
            if (vertexes[0] || vertexes[0] == 0) {
                var minLeft = vertexes[0];
                var minTop = vertexes[1];
                var maxTop = minTop;
                var maxLeft = minLeft;
                for (var i = 0, len = vertexes.length; i < len; i++) {
                    var vertex = vertexes[i];
                    if (i % 2 == 0) {
                        minLeft > vertexes[i] && (minLeft = vertex);
                        maxLeft < vertexes[i] && (maxLeft = vertex)
                    } else {
                        minTop > vertexes[i] && (minTop = vertex);
                        maxTop < vertexes[i] && (maxTop = vertex)
                    }
                }
                return [minLeft, minTop, maxLeft - minLeft, maxTop - minTop]
            }
            return null
        },
        getPath: function (vertexes) {
            var vertexes2 = [];
            for (var v = 0, vl; vl = vertexes[v]; v++) {
                if (v == 0) {
                    if (_a._aa._aaf._aafj() != "IE") {
                        vertexes2[v] = 'M '
                    } else {
                        vertexes2[v] = 'm'
                    }
                } else if (v == 2) {
                    if (_a._aa._aaf._aafj() != "IE") {
                        vertexes2[v] = 'L '
                    } else {
                        vertexes2[v] = 'l'
                    }
                }
                vertexes2[v] = vertexes2[v] || '';
                vertexes2[v] += vertexes[v];
                if (v % 2 == 1) {
                    vertexes2[v] += ' '
                } else {
                    vertexes2[v] += ','
                }
            }
            if (_a._aa._aaf._aafj() == "IE") {
                vertexes2.push('e')
            }
            return vertexes2
        },
        drawDraw: function () {
            var this_ = this;
            var convertor = this.model_.mvc.view.latlngPixelConvertor;
            var path = this.get('path');
            var delta = parseInt(this.get('strokeWeight'));
            var pane = this.get('panes').edit;
            if (this.get('drawable') && path.length == 0 && this.drawableInit_) {
                this.drawableInit_ = false;
                if (!polylineDragEventDiv) {
                    polylineDragDiv = document.createElement('div');
                    polylineDragDiv.className = 'QPolylineDiv';
                    polylineDragDiv.style.zIndex = 1000000;
                    pane.appendChild(polylineDragDiv);
                    polylineDragEventDiv = document.createElement('div');
                    polylineDragEventDiv.className = 'QPolylineDiv';
                    polylineDragEventDiv.style.cssText = ['opacity:0.01;filter:alpha(opacity=1);', 'background:#ffffff;z-index:1000001'].join('');
                    pane.appendChild(polylineDragEventDiv)
                }
                polylineDragEventDiv.style.display = '';
                polylineDragEventDiv.style.cursor = this.get('drawCursor') + ',crosshair';
                var addVertexListener, drawendListener, drawingListener;
                var dpListener;
                var getLngLatPixel = function (event) {
                    event = event || window.event;
                    var position = _a._aa._aaf.fixEvent(event);
                    var oriPosition = [_a._aa._aaf.getDivPageLeft(pane.parentNode), _a._aa._aaf.getDivPageTop(pane.parentNode)];
                    position[0] -= this_.model_.mvc.view.qOverlaysDivLeft;
                    position[1] -= this_.model_.mvc.view.qOverlaysDivTop;
                    position[0] -= oriPosition[0];
                    position[1] -= oriPosition[1];
                    return position
                };
                var getPixel = function (event) {
                    event = event || window.event;
                    var position = _a._aa._aaf.fixEvent(event);
                    var oriPosition = [_a._aa._aaf.getDivPageLeft(pane.parentNode), _a._aa._aaf.getDivPageTop(pane.parentNode)];
                    position[0] -= oriPosition[0];
                    position[1] -= oriPosition[1];
                    return position
                };
                var add = true;
                var addVertex = function (event) {
                    _a._aa._aaf.stopEvent(event);
                    if (event.button == 2) {
                        this_.stopDrawing();
                        return
                    }
                    if (!add) {
                        return
                    }
                    add = false;
                    event = event || window.event;
                    var position = getLngLatPixel(event);
                    var ll = convertor.Pixel2LatLng(position[0], position[1]);
                    var nVertex = new _a._ac.QLngLat(ll[0], ll[1]);
                    path.push(nVertex);
                    this_.notify('path');
                    polylineDragDiv.style.display = 'none'
                };
                var moveTimer = null;
                var drawing = function (event) {
                    add = true;
                    var canvas = this_.getCanvas();
                    polylineDrag = this_.drawPolylineDiv(polylineDragDiv, polylineDrag, canvas);
                    this_.drawPolylineDiv(polylineDragEventDiv, null, canvas);
                    if (!polylineDL) {
                        polylineDL = document.createElement('div');
                        polylineDL.style.cssText = 'position:absolute;' + 'padding:2px 7px;border:1px solid #555554;' + 'background:#ffffff;line-height:20px;' + 'white-space:nowrap;font-size:12px;' + '';
                        polylineDragDiv.appendChild(polylineDL)
                    }
                    if (this_.get('hidelabel')) {
                        polylineDL.style.display = 'none'
                    } else {
                        polylineDL.style.display = ''
                    }
                    var v2 = getLngLatPixel(event);
                    moveMap(event);
                    var v2LL = convertor.Pixel2LatLng(v2[0], v2[1]);
                    v2LL = new _a._ac.QLngLat(v2LL[0], v2LL[1]);
                    if (path.length == 0) {
                        polylineDL.innerHTML = '<b>' + _a._af.Polyline[4] + '</b>'
                    }
                    if (path.length > 0) {
                        polylineDragDiv.style.display = '';
                        var v1 = convertor.LatLng2Pixel(path[path.length - 1].getLng(), path[path.length - 1].getLat());
                        v1[0] -= canvas[0] - delta;
                        v1[1] -= canvas[1] - delta;
                        v2[0] -= canvas[0] - delta;
                        v2[1] -= canvas[1] - delta;
                        var vs = [];
                        vs.push(v1[0]);
                        vs.push(v1[1]);
                        vs.push(v2[0]);
                        vs.push(v2[1]);
                        var totalDistance = 0;
                        for (var p = 0; p < path.length; p++) {
                            p != 0 && (totalDistance += path[p].getDistanceTo(path[p - 1]))
                        }
                        var dd = path[path.length - 1].getDistanceTo(v2LL) + totalDistance;
                        var unit = _a._af.Polyline[0];
                        if (dd >= 1000) {
                            dd = dd / 1000;
                            unit = _a._af.Polyline[1]
                        }
                        dd = Math.round(dd * 10) / 10;
                        dd = dd + unit;
                        polylineDL.innerHTML = '<span style="font-weight:bold;">' + _a._af.Polyline[6] + dd + '</span><br/><span style="font-weight:normal;">' + _a._af.Polyline[5] + '</span>';
                        var styleVml = 'solid';
                        var styleSvg = 'solid';
                        var weight = this_.get('strokeWeight');
                        if (true) {
                            styleVml = '1,1';
                            styleSvg = weight + ',' + (weight * 2)
                        }
                        var polylineOptions = {
                            'points': this_.getPath(vs).join(''),
                            'style_vml': styleVml,
                            'style_svg': styleSvg,
                            'opacity': this_.get('strokeOpacity'),
                            'color': this_.get('strokeColor'),
                            'weight': this_.get('strokeWeight')
                        };
                        this_.setPolylineOptions(polylineDrag, polylineOptions)
                    };
                    var dcSize = this_.get('drawCursorSize');
                    polylineDL.style.left = (v2[0] + dcSize[0]) + 'px';
                    polylineDL.style.top = (v2[1] + dcSize[1]) + 'px'
                };
                var moveMap = function (event) {
                    var v2Ori = getPixel(event);
                    var mOffset = new _a._ac.QSize(0, 0);
                    var maxWid = this_.model_.mvc.view.viewSizeWidth - 50;
                    var maxHei = this_.model_.mvc.view.viewSizeHeight - 50;
                    v2Ori[0] < 50 && (mOffset.width = 10);
                    v2Ori[0] > maxWid && (mOffset.width = -10);
                    v2Ori[1] < 50 && (mOffset.height = 10);
                    v2Ori[1] > maxHei && (mOffset.height = -10);
                    if (mOffset.height != 0 || mOffset.width != 0) {
                        if (moveTimer) {
                            window.clearInterval(moveTimer);
                            moveTimer = null
                        }
                        moveTimer = setInterval(function () {
                            add = true;
                            this_.model_.map.moveBy(mOffset, 0);
                            polylineDragDiv.style.display = 'none';
                            polylineDragEventDiv.style.left = parseInt(polylineDragEventDiv.style.left) - mOffset.width + 'px';
                            polylineDragEventDiv.style.top = parseInt(polylineDragEventDiv.style.top) - mOffset.height + 'px'
                        }, 50)
                    } else {
                        if (moveTimer) {
                            window.clearInterval(moveTimer);
                            moveTimer = null
                        }
                    }
                };
                var drawend = function (event) {
                    if (event != 'noevent') {
                        event = event || window.event;
                        _a._aa._aaf.stopEvent(event);
                        addVertex.apply(this, [event])
                    }
                    _a._aa.QMVCEvent.removeListener(addVertexListener);
                    _a._aa.QMVCEvent.removeListener(drawingListener);
                    _a._aa.QMVCEvent.removeListener(drawendListener);
                    _a._aa.QMVCEvent.removeListener(dpListener);
                    polylineDragDiv.style.display = 'none';
                    polylineDragEventDiv.style.display = 'none';
                    if (path.length == 1) {
                        this_.editDiv_.innerHTML = '';
                        path.pop()
                    }
                    if (path.length == 1) {
                        this_.editDiv_.innerHTML = '';
                        path.pop()
                    }
                    this_.notify('path');
                    if (moveTimer) {
                        window.clearInterval(moveTimer);
                        moveTimer = null
                    }
                };
                addVertexListener = _a._aa.QMVCEvent.addDomListener(polylineDragEventDiv, 'mouseup', addVertex);
                dpListener = _a._aa.QMVCEvent.addDomListener(polylineDragEventDiv, 'mousedown', function (event) {
                    event = event || window.event;
                    _a._aa._aaf.stopEvent(event)
                });
                dpListener = _a._aa.QMVCEvent.addDomListener(polylineDragEventDiv, 'click', function (event) {
                    event = event || window.event;
                    _a._aa._aaf.stopEvent(event)
                });
                drawingListener = _a._aa.QMVCEvent.addDomListener(pane.parentNode, 'mousemove', drawing);
                drawendListener = _a._aa.QMVCEvent.addDomListener(polylineDragEventDiv, 'dblclick', drawend)
            }
        },
        stopDrawing: function () {
            _a._aa.QMVCEvent.trigger(polylineDragEventDiv, 'dblclick', 'noevent')
        },
        draw: function () {
            var pane = this.get('panes');
            if (pane) {
                pane = this.get('panes').pane;
                this.model_.scopeLatLng = this.getLatLngScope();
                var this_ = this;
                var convertor = this.model_.mvc.view.latlngPixelConvertor;
                var polyline = null;
                var path = this.get('path');
                var delta = parseInt(this.get('strokeWeight'), 10);
                this.drawDraw();
                if (path.length == 0) {
                    return
                }
                var vertexes = [];
                for (var i = 0, vertex; vertex = path[i]; i++) {
                    vertexes = vertexes.concat(convertor.LatLng2Pixel(vertex.getLng(), vertex.getLat()))
                }
                var scope = this.getScope(vertexes);
                var len = vertexes.length;
                for (i = 0; i < len; i++) {
                    vertexes[i] = vertexes[i] - scope[i % 2] + delta
                }
                if (!this.polylineDiv_) {
                    this.polylineDiv_ = document.createElement('div');
                    this.polylineDiv_.className = 'QPolylineDiv'
                }
                if (this.polylineDiv_.parentNode != pane) {
                    this.polylineDiv_.parentNode && this.polylineDiv_.parentNode.removeChild(this.polylineDiv_);
                    pane && pane.appendChild(this.polylineDiv_)
                }
                if (this.get('visible')) {
                    this.polylineDiv_.style.display = ''
                } else {
                    this.polylineDiv_.style.display = 'none';
                    return
                }
                var isEventInited = !! this.polyline_;
                this.dragOriScope_ = this.getScope(vertexes);
                var styleVml = 'solid';
                var styleSvg = 'solid';
                if (this.get('strokeDashStyle').toLowerCase() != 'solid') {
                    styleVml = '1,1';
                    styleSvg = delta + ',' + (delta * 2)
                }
                var vertexes2 = this.getPath(vertexes);
                var polylineOptions = {
                    'points': vertexes2.join(''),
                    'style_vml': styleVml,
                    'style_svg': styleSvg,
                    'opacity': this.get('strokeOpacity'),
                    'color': this.get('strokeColor'),
                    'weight': delta,
                    'cursor': this.get('cursor')
                };
                this.polyline_ = this.drawPolylineDiv(this.polylineDiv_, this.polyline_, scope);
                this.setPolylineOptions(this.polyline_, polylineOptions);
                !isEventInited && this.initPolylineEvent(this.polyline_);
                var editable = this.get('editable');
                if (editable) {
                    if (!this.editDiv_) {
                        this.editDiv_ = document.createElement('div');
                        this.polylineDiv_.appendChild(this.editDiv_)
                    }
                    this.editDiv_.innerHTML = '';
                    var lastVertex = null;
                    var color = this.get('strokeColor');
                    var css = ['position:absolute;width:12px;height:12px;', 'font-size:0;left:0;top:0;cursor:pointer;'];
                    var dotUrl = _a._aa._aab._aabr + 'themes/default/img/pldot.png';
                    var appendVertexDiv = document.createElement('div');
                    this.editDiv_.appendChild(appendVertexDiv);
                    appendVertexDiv.style.cssText = css + 'z-index:0;display:none;';
                    _a._aa._aaf.setCssSprite(appendVertexDiv, dotUrl, [24, 0]);
                    var appendVertexIndex = null;
                    var appendVertexStart = null;
                    var vertexStart = null;
                    var dragstartFn = function (index, isAppend) {
                        return function (event) {
                            if (isAppend) {
                                var p = _a._aa._aaf.fixEvent(event);
                                var pageX = _a._aa._aaf.getDivPageLeft(pane);
                                var pageY = _a._aa._aaf.getDivPageTop(pane);
                                appendVertexStart = [p[0] - pageX, p[1] - pageY]
                            } else {
                                vertexStart = path[index / 2]
                            }
                        }
                    };
                    var dragendFn = function (index, isAppend) {
                        return function (event, deltaXY) {
                            var pixel = null;
                            if (!isAppend) {
                                pixel = convertor.LatLng2Pixel(vertexStart.getLng(), vertexStart.getLat())
                            } else {
                                pixel = appendVertexStart
                            }
                            var lnglat = convertor.Pixel2LatLng(pixel[0] + deltaXY[0], pixel[1] + deltaXY[1]);
                            var newVertex = new _a._ac.QLngLat(lnglat[0], lnglat[1]);
                            var pathNew = [];
                            var pathDelta = 0;
                            if (isAppend) {
                                for (var i = 0; i < path.length; i++) {
                                    if (i == appendVertexIndex) {
                                        pathNew[i] = newVertex;
                                        pathDelta = 1
                                    }
                                    pathNew[i + pathDelta] = path[i]
                                }
                                this_.set('path', pathNew)
                            } else {
                                path[index / 2] = newVertex;
                                this_.notify('path')
                            }
                        }
                    };
                    _a._aa._aaf.enableDrag(appendVertexDiv, pane.parentNode, {
                        'dragstart': dragstartFn(null, true),
                        'dragging': dragendFn(null, true)
                    });
                    var totalDistance = 0;
                    for (i = 0; i < len; i += 2) {
                        var x = vertexes[i];
                        var y = vertexes[i + 1];
                        var vertexDiv = document.createElement('div');
                        var vertexLabel = document.createElement('div');
                        var vertexWrap = document.createElement('div');
                        var labelCss = 'left:15px;position:absolute;' + 'background:#ffffff;white-space:nowrap;' + 'font-size:12px;top:-4px;color:#4b4b4b;' + 'padding:0 7px;height:20px;line-height:20px;' + '*height:22px;*line-height:22px;';
                        var redBorder = polylineDragDiv.style.display == 'none' && i == len - 2;
                        if (redBorder) {
                            labelCss += 'border:1px solid #555554;'
                        } else {
                            labelCss += 'border:1px solid #555554;'
                        }
                        vertexLabel.style.cssText = labelCss;
                        var vertexCss = ['position:absolute;left:', x - 6, 'px;top:', y - 6, 'px;z-index:1;'].join('');
                        vertexWrap.style.cssText = vertexCss;
                        vertexDiv.style.cssText = css;
                        var ori = [24, 0];
                        if (i == 0) {
                            ori = [0, 0]
                        }
                        if (i == len - 2) {
                            ori = [12, 0]
                        }
                        _a._aa._aaf.setCssSprite(vertexDiv, dotUrl, ori);
                        this.editDiv_.appendChild(vertexWrap);
                        vertexWrap.appendChild(vertexDiv);
                        vertexWrap.appendChild(vertexLabel);
                        if (i != 0) {
                            totalDistance += path[i / 2 - 1].getDistanceTo(path[i / 2])
                        }
                        var vDistance = totalDistance;
                        var vUnit = _a._af.Polyline[0];
                        if (vDistance == 0) {
                            vDistance = _a._af.Polyline[2]
                        } else {
                            if (vDistance >= 1000) {
                                vDistance = vDistance / 1000;
                                vUnit = _a._af.Polyline[1]
                            }
                            vDistance = Math.round(vDistance * 10) / 10;
                            if (redBorder) {
                                vDistance = _a._af.Polyline[3] + vDistance + vUnit
                            } else {
                                vDistance = vDistance + vUnit
                            }
                        }
                        vertexLabel.innerHTML = '<b>' + vDistance + '</b>';
                        var hidelabel = this_.get('hidelabel');
                        if (hidelabel) {
                            vertexLabel.style.display = 'none'
                        }
                        vertexLabel.style.paddingRight = '20px';
                        var vertexRemoveWrap = document.createElement('div');
                        vertexRemoveWrap.style.cssText = 'position:absolute;' + 'top:2px;right:2px;' + 'width:17px;height:17px;' + 'line-height:0;font-size:0;' + 'cursor:pointer;';
                        var vertexRemove = document.createElement('div');
                        vertexRemove.style.cssText = 'margin:5px;' + 'width:7px;height:7px;' + 'line-height:0;font-size:0;' + 'cursor:pointer;';
                        _a._aa._aaf.setCssSprite(vertexRemove, _a._aa._aab._aabr + 'themes/default/img/remove.png', [0, 0]);
                        vertexRemoveWrap.appendChild(vertexRemove);
                        if (hidelabel) {
                            vertexWrap.appendChild(vertexRemoveWrap);
                            vertexRemoveWrap.style.left = '14px';
                            vertexRemoveWrap.style.top = '-1px';
                            vertexRemoveWrap.style.display = 'none';
                            var vTimer = null;
                            var removeAction = function (type, remove) {
                                return function () {
                                    if (type == 1) {
                                        vTimer && window.clearTimeout(vTimer);
                                        vTimer = null;
                                        remove.style.display = ''
                                    } else if (type == 2) {
                                        vTimer && window.clearTimeout(vTimer);
                                        vTimer = window.setTimeout(function () {
                                            remove.style.display = 'none'
                                        }, 500)
                                    } else if (type == 3) {
                                        vTimer && window.clearTimeout(vTimer)
                                    }
                                }
                            };
                            _a._aa.QMVCEvent.addDomListener(vertexDiv, 'mouseover', removeAction(1, vertexRemoveWrap));
                            _a._aa.QMVCEvent.addDomListener(vertexDiv, 'mouseout', removeAction(2, vertexRemoveWrap));
                            _a._aa.QMVCEvent.addDomListener(vertexRemoveWrap, 'mouseover', removeAction(3, vertexRemoveWrap));
                            _a._aa.QMVCEvent.addDomListener(vertexRemoveWrap, 'mouseout', removeAction(2, vertexRemoveWrap))
                        } else {
                            vertexLabel.appendChild(vertexRemoveWrap)
                        }
                        var removeVertexFn = function (index) {
                            return function () {
                                if (path.length > 2) {
                                    path.splice(index, 1);
                                    this_.notify('path')
                                } else {
                                    this_.model_.map.removeQOverlay(this_.model_)
                                }
                            }
                        };
                        _a._aa.QMVCEvent.addDomListener(vertexRemoveWrap, 'click', removeVertexFn(i / 2));
                        _a._aa._aaf.enableDrag(vertexDiv, pane.parentNode, {
                            'dragstart': dragstartFn(i),
                            'dragging': dragendFn(i)
                        })
                    }
                    var moveTimer = null;
                    _a._aa.QMVCEvent.clearListeners(this.polylineDiv_, 'mousemove');
                    var moveCounter = 0;
                    var mouseXY = null;
                    var mouseTestFn = function (event) {
                        var baseXY = [_a._aa._aaf.getDivPageLeft(this_.polylineDiv_), _a._aa._aaf.getDivPageTop(this_.polylineDiv_)];
                        mouseXY = mouseXY || _a._aa._aaf.fixEvent(event);
                        var p3 = [mouseXY[0] - baseXY[0], mouseXY[1] - baseXY[1]];
                        var target = null;
                        var distance1 = null;
                        var distance2 = null;
                        var x = 0;
                        var y = 0;
                        var onPolyline = false;
                        var cd = function (p1, p2) {
                            var dx = p1[0] - p2[0];
                            var dy = p1[1] - p2[1];
                            return dx * dx + dy * dy
                        };
                        for (var v = 2, l = vertexes.length; v < l; v += 2) {
                            var p1 = [vertexes[v - 2], vertexes[v - 1]];
                            var p2 = [vertexes[v], vertexes[v + 1]];
                            var l12 = cd(p1, p3);
                            var l22 = cd(p2, p3);
                            var l32 = cd(p1, p2);
                            if (l32 + l12 >= l22 && l32 + l12 >= l22) {
                                var k = (l12 + l32 - l22) / (2 * l32);
                                x = k * (p2[0] - p1[0]) + p1[0];
                                y = k * (p2[1] - p1[1]) + p1[1];
                                var distance = cd([x, y], p3);
                                distance1 = cd(p1, [x, y]);
                                distance2 = cd(p2, [x, y]);
                                if (((x >= p1[0] && x <= p2[0]) || (x >= p2[0] && x <= p1[0])) && ((y >= p1[1] && y <= p2[1]) || (y >= p2[1] && y <= p1[1])) && distance < (delta) * (delta)) {
                                    appendVertexIndex = v / 2;
                                    onPolyline = true;
                                    break
                                }
                            }
                        }
                        if (onPolyline && distance1 > 81 && distance2 > 81) {
                            appendVertexDiv.style.display = '';
                            appendVertexDiv.style.left = Math.round(x - 6) + 'px';
                            appendVertexDiv.style.top = Math.round(y - 6) + 'px';
                            this_.polylineDiv_.style.cursor = 'pointer'
                        } else {
                            appendVertexDiv.style.display = 'none';
                            this_.polylineDiv_.style.cursor = ''
                        }
                    };
                    _a._aa.QMVCEvent.addDomListener(this.polylineDiv_, 'mouseout', function (event) {
                        event = event || window.event;
                        var relatedTarget = event.toElement || event.relatedTarget;
                        while (relatedTarget && relatedTarget !== this) relatedTarget = relatedTarget.parentNode;
                        if (!relatedTarget) {
                            appendVertexDiv.style.display = 'none';
                            this_.polylineDiv_.style.cursor = ''
                        }
                    });
                    _a._aa.QMVCEvent.addDomListener(this.polylineDiv_, 'mousemove', function (event) {
                        event = event || window.event;
                        if (!moveTimer) {
                            moveTimer = window.setTimeout(function () {
                                if (moveCounter != 0) {
                                    mouseTestFn()
                                }
                                moveTimer = null;
                                moveCounter = 0;
                                mouseXY = null
                            }, 10);
                            mouseTestFn(event)
                        } else {
                            moveCounter++;
                            mouseXY = _a._aa._aaf.fixEvent(event);
                            return
                        }
                    })
                }
            }
        },
        setPolylineOptions: function (polyline, opts) {
            if (_a._aa._aaf._aafj() === "IE") {
                var stroke = polyline.firstChild;
                opts['style_vml'] && (stroke.dashstyle = opts['style_vml']);
                opts['opacity'] && (stroke.opacity = opts['opacity']);
                polyline.path.value = opts['points'].toLowerCase();
                opts['color'] && (polyline.strokecolor = opts['color']);
                opts['weight'] && (polyline.strokeweight = opts['weight'] + 'px');
                opts['cursor'] && (polyline.style.cursor = opts['cursor'])
            } else {
                polyline.setAttribute('d', opts['points']);
                opts['color'] && polyline.setAttribute('stroke', opts['color']);
                opts['weight'] && polyline.setAttribute('stroke-width', opts['weight'] + 'px');
                opts['opacity'] && polyline.setAttribute('stroke-opacity', opts['opacity']);
                opts['style_svg'] && polyline.setAttribute('stroke-dasharray', opts['style_svg']);
                opts['cursor'] && polyline.setAttribute('cursor', opts['cursor'])
            }
        },
        initPolylineEvent: function (polyline) {
            var this_ = this;
            _a._aa.QMVCEvent.addDomListener(polyline, 'click', function (event) {
                _a._aa.QMVCEvent.trigger(this_.model_, 'click', event)
            });
            _a._aa.QMVCEvent.addDomListener(polyline, 'mouseover', function (event) {
                _a._aa.QMVCEvent.trigger(this_.model_, 'mouseover', event)
            });
            _a._aa.QMVCEvent.addDomListener(polyline, 'mouseout', function (event) {
                _a._aa.QMVCEvent.trigger(this_.model_, 'mouseout', event)
            })
        },
        drawPolylineDiv: function (polylineDiv, polyline, scope) {
            var delta = parseInt(this.get('strokeWeight'));
            var this_ = this;
            var wid = scope[2] + delta * 2;
            var hei = scope[3] + delta * 2;
            polylineDiv.style.left = (scope[0] - delta) + 'px';
            polylineDiv.style.top = (scope[1] - delta) + 'px';
            polylineDiv.style.width = wid + 'px';
            polylineDiv.style.height = hei + 'px';
            if (!polyline) {
                polylineDiv.innerHTML = '';
                if (_a._aa._aaf._aafj() === "IE") {
                    polyline = ['<q_vml:shape style="position:absolute;', 'display:inline-block;" filled="false">', '<q_vml:stroke', ' endcap="round" /></q_vml:shape>'].join('');
                    polylineDiv.innerHTML = polyline;
                    polyline = polylineDiv.lastChild
                } else {
                    var polylineWrap = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    polylineWrap.style.position = 'absolute';
                    polylineWrap.setAttribute('version', '1.1');
                    polylineWrap.setAttribute('baseProfile', 'full');
                    polylineWrap.setAttribute('width', '100%');
                    polylineWrap.setAttribute('height', '100%');
                    polyline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    polyline.setAttribute('fill', 'none');
                    polyline.setAttribute('stroke-linejoin', 'round');
                    polyline.setAttribute('stroke-linecap', 'round');
                    polylineWrap.appendChild(polyline);
                    polylineDiv.appendChild(polylineWrap)
                }
            }
            if (_a._aa._aaf._aafj() === "IE") {
                polyline.style.width = wid + 'px';
                polyline.style.height = hei + 'px';
                polyline.coordsize = wid + ' ' + hei
            }
            return polyline
        },
        changed: function (key) {
            if (key == 'panes' && this.get(key) == null) {
                if (this.polylineDiv_ && this.polylineDiv_.parentNode) {
                    this.polylineDiv_.parentNode.removeChild(this.polylineDiv_)
                }
            }
            if (key == 'drawable' && this.get('drawable')) {
                this.drawableInit_ = true
            }
            if (key != 'path') {
                this.redraw()
            } else {
                this.draw()
            }
        }
    })
})();
_a._ac.QCircle = _a._aa._aag(_a._ac.QOverlay, {
    className: "_a._ac.QCircle",
    strokeColor: "#1791fc",
    strokeWeight: "1px",
    strokeOpacity: 0.8,
    strokeDashStyle: "Solid",
    fillColor: "#1791fc",
    fillOpacity: 0.2,
    centerLngLat: null,
    radiusDistance: null,
    center: null,
    radius: null,
    cursor: '',
    visible: true,
    bEnableRadius: false,
    nHalfRadiusEnd: 3,
    scopeLatLng: null,
    outerEventHandlers: null,
    initialize: function (centerLngLat, radiusDistance) {
        _a._ac.QOverlay.prototype.initialize.apply(this, []);
        this.zIndex = _a._aa._aab.QCircleZIndex;
        this.centerLngLat = centerLngLat;
        this.radiusDistance = radiusDistance;
        this.delta = parseInt(this.strokeWeight, 10);
        this.scopeLatLng = this.getLatLngScope();
        this.outerEventHandlers = new _a._aa._aad()
    },
    setCursor: function (cursor) {
        this.cursor = cursor
    },
    getCursor: function () {
        return this.cursor
    },
    getCenter: function () {
        return this.centerLngLat
    },
    getRadius: function () {
        return this.radiusDistance
    },
    getStrokeColor: function () {
        return this.strokeColor
    },
    getStrokeWeight: function () {
        return this.strokeWeight
    },
    getStrokeOpacity: function () {
        return this.strokeOpacity
    },
    getStrokeDashStyle: function () {
        return this.strokeDashStyle
    },
    getFillColor: function () {
        return this.fillColor
    },
    getFillOpacity: function () {
        return this.fillOpacity
    },
    setCenter: function (centerLngLat) {
        if (centerLngLat !== undefined) {
            this.centerLngLat = centerLngLat;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent)
        }
    },
    setRadius: function (radiusDistance) {
        if (radiusDistance !== undefined) {
            this.radiusDistance = radiusDistance;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent)
        }
    },
    setStrokeColor: function (strokeColor) {
        if (strokeColor !== undefined) {
            this.strokeColor = strokeColor;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeColor = null
        }
    },
    setStrokeWeight: function (strokeWeight) {
        if (strokeWeight !== undefined) {
            this.strokeWeight = strokeWeight;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeWeight = null
        }
    },
    setStrokeOpacity: function (strokeOpacity) {
        if (strokeOpacity !== undefined) {
            this.strokeOpacity = strokeOpacity;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeOpacity = null
        }
    },
    setStrokeDashStyle: function (strokeDashStyle) {
        if (strokeDashStyle !== undefined) {
            this.strokeDashStyle = strokeDashStyle;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeDashStyle = null
        }
    },
    setFillColor: function (fillColor) {
        if (fillColor !== undefined) {
            this.fillColor = fillColor;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            fillColor = null
        }
    },
    setFillOpacity: function (fillOpacity) {
        if (fillOpacity !== undefined) {
            this.fillOpacity = fillOpacity;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            fillOpacity = null
        }
    },
    enableRadiusIndicator: function (bIfEnableRadius) {
        if (bIfEnableRadius !== undefined) {
            this.bEnableRadius = bIfEnableRadius
        }
    },
    setVisible: function (visible) {
        this.visible = visible;
        this.render()
    },
    render: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        if (!qOverlayDiv) {
            return
        }
        if (this.visible) {
            qOverlayDiv.style.display = ''
        } else {
            qOverlayDiv.style.display = 'none';
            return
        }
        qOverlayDiv.innerHTML = "";
        var circleId = _a._aa._aaf._aafg("QCircle_" + this.id, this.mapNumber);
        var centerX = this.radius + this.delta;
        var centerY = centerX;
        var circle = null;
        var circleDiv = document.createElement("div");
        circleDiv.setAttribute("id", _a._aa._aaf._aafg("QCircleDiv_" + this.id, this.mapNumber));
        circleDiv.setAttribute("class", "QCircleDiv");
        circleDiv.setAttribute("style", "width:100%;height:100%;");
        qOverlayDiv.appendChild(circleDiv);
        if (_a._aa._aaf._aafj() === "IE") {
            var width = (this.radius + this.delta) * 2;
            var circleStr = [" <q_vml:oval id='", circleId, "' style='cursor:", this.cursor, ";position:absolute;left:0px;top:0px;width:", width, "px;height:", width, "px;' filled='true' fillcolor='", this.fillColor, "' strokecolor='", this.strokeColor, "' strokeweight='", this.strokeWeight, "' ><q_vml:fill opacity='", this.fillOpacity, "' />", "<q_vml:stroke opacity='", this.strokeOpacity, "' dashstyle='", this.strokeDashStyle, "' endcap='round'/></q_vml:oval>"].join("");
            if (this.bEnableRadius) {
                var nHalfCross = Math.round((this.radius) / 10);
                if (nHalfCross > 10) {
                    nHalfCross = 10
                }
                var vmlRadiusPointsStr = [centerX - nHalfCross, centerY, centerX + this.radius - this.nHalfRadiusEnd, centerY].join(",");
                radiusStr = ["<q_vml:polyline style='cursor:", this.cursor, ";position:absolute' points='", vmlRadiusPointsStr, "' filled='false' strokecolor='", this.strokeColor, "' strokeweight='", this.strokeWeight, "' ><q_vml:stroke dashstyle='", this.strokeDashStyle, "' endcap='round' opacity='", this.strokeOpacity, "'/></q_vml:polyline>"].join("");
                var distance = this.radiusDistance;
                var unit = 'm';
                if (distance >= 1000) {
                    distance = distance / 1000;
                    unit = 'km'
                }
                var vmlTextStr = distance + unit;
                var nFontSize = 10;
                if (this.radius > 40 && this.radius < 100) {
                    nFontSize = 12
                } else if (this.radius > 100 && this.radius < 200) {
                    nFontSize = 14
                } else if (this.radius > 200) {
                    nFontSize = 16
                }
                var textStr = ["<q_vml:textbox style='position:absolute;font-size:", nFontSize, ";left:", centerX + Math.round(this.radius * 1 / 2), ";top:", centerY - 16, ";color:", this.strokeColor, "'>", vmlTextStr, "</q_vml:textbox>"].join("");
                var vmlYCrossStr = [centerX, centerY - nHalfCross, centerX, centerY + nHalfCross].join(",");
                yCrossStr = ["<q_vml:polyline style='cursor:", this.cursor, ";position:absolute' points='", vmlYCrossStr, "' filled='false' strokecolor='", this.strokeColor, "' strokeweight='", this.strokeWeight, "' ><q_vml:stroke dashstyle='", this.strokeDashStyle, "' endcap='round' opacity='", this.strokeOpacity, "'/></q_vml:polyline>"].join("");
                var nXMin = centerX + this.radius - this.nHalfRadiusEnd;
                var nXMax = centerX + this.radius + this.nHalfRadiusEnd;
                var nYMin = centerY - this.nHalfRadiusEnd - parseInt(this.strokeWeight, 10);
                var nYMax = centerY + this.nHalfRadiusEnd - parseInt(this.strokeWeight, 10);
                var vmlPointsStr = [nXMin, nYMax, nXMax, nYMax, nXMax, nYMin, nXMin, nYMin, nXMin, nYMax].join(",");
                var polygonStr = [" <q_vml:polyline style='cursor:", this.cursor, ";' points='", vmlPointsStr, "' filled='true' fillcolor='", this.fillColor, "' strokecolor='", this.strokeColor, "' strokeweight='", this.strokeWeight, "' ><q_vml:fill opacity='", this.fillOpacity, "' />", "<q_vml:stroke opacity='", this.strokeOpacity, "' dashstyle='", this.strokeDashStyle, "' endcap='round'/></q_vml:polyline>"].join("");
                circleStr = [circleStr, radiusStr, textStr, yCrossStr, polygonStr].join("")
            }
            circleDiv.innerHTML = circleStr
        } else {
            circle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            circle.setAttribute("version", "1.1");
            circle.setAttribute("baseProfile", "full");
            circle.setAttribute("width", "100%");
            circle.setAttribute("height", "100%");
            var svgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            svgCircle.setAttribute("id", circleId);
            svgCircle.setAttribute("cx", centerX);
            svgCircle.setAttribute("cy", centerY);
            svgCircle.setAttribute("r", this.radius);
            svgCircle.setAttribute("stroke", this.strokeColor);
            svgCircle.setAttribute("stroke-width", this.strokeWeight);
            svgCircle.setAttribute("stroke-opacity", this.strokeOpacity);
            var svgDasharray = "";
            switch (this.strokeDashStyle) {
            case "Solid":
                break;
            case "ShortDot":
                svgDasharray = parseInt(this.strokeWeight, 10);
                break
            }
            svgCircle.setAttribute("stroke-dasharray", svgDasharray);
            svgCircle.setAttribute("fill", this.fillColor);
            svgCircle.setAttribute("fill-opacity", this.fillOpacity);
            svgCircle.setAttribute("cursor", this.cursor);
            circle.appendChild(svgCircle);
            if (this.bEnableRadius) {
                var nHalfCross = Math.round((this.radius) / 10);
                if (nHalfCross > 10) {
                    nHalfCross = 10
                }
                var svgRadiusStr = [centerX - nHalfCross, centerY, centerX + this.radius - this.nHalfRadiusEnd, centerY].join(",");
                var svgRadius = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                svgRadius.setAttribute("points", svgRadiusStr);
                svgRadius.setAttribute("fill", "none");
                svgRadius.setAttribute("stroke", this.strokeColor);
                svgRadius.setAttribute("stroke-width", this.strokeWeight);
                svgRadius.setAttribute("stroke-opacity", this.strokeOpacity);
                circle.appendChild(svgRadius);
                var distance = this.radiusDistance;
                var unit = 'm';
                if (distance >= 1000) {
                    distance = distance / 1000;
                    unit = 'km'
                }
                var svgTextStr = distance + unit;
                var svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                svgText.appendChild(document.createTextNode(svgTextStr));
                svgText.setAttribute("x", centerX + Math.round(this.radius * 1 / 2));
                svgText.setAttribute("y", centerY - 10);
                var nFontSize = 10;
                if (this.radius > 40 && this.radius < 100) {
                    nFontSize = 12
                } else if (this.radius > 100 && this.radius < 200) {
                    nFontSize = 14
                } else if (this.radius > 200) {
                    nFontSize = 16
                }
                svgText.setAttribute("font-size", nFontSize);
                svgText.setAttribute("fill", this.strokeColor);
                circle.appendChild(svgText);
                var svgYCrossStr = [centerX, centerY - nHalfCross, centerX, centerY + nHalfCross].join(",");
                var svgYCross = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                svgYCross.setAttribute("points", svgYCrossStr);
                svgYCross.setAttribute("fill", "none");
                svgYCross.setAttribute("stroke", this.strokeColor);
                svgYCross.setAttribute("stroke-width", this.strokeWeight);
                svgYCross.setAttribute("stroke-opacity", this.strokeOpacity);
                circle.appendChild(svgYCross);
                var nXMin = centerX + this.radius - this.nHalfRadiusEnd;
                var nXMax = centerX + this.radius + this.nHalfRadiusEnd;
                var nYMin = centerY - this.nHalfRadiusEnd;
                var nYMax = centerY + this.nHalfRadiusEnd;
                var svgRadiusEndStr = [nXMin, nYMax, nXMax, nYMax, nXMax, nYMin, nXMin, nYMin].join(",");
                var svgRadiusEnd = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                svgRadiusEnd.setAttribute("points", svgRadiusEndStr);
                svgRadiusEnd.setAttribute("stroke", this.strokeColor);
                svgRadiusEnd.setAttribute("stroke-width", this.strokeWeight);
                svgRadiusEnd.setAttribute("stroke-opacity", this.strokeOpacity);
                svgRadiusEnd.setAttribute("fill-opacity", 0);
                circle.appendChild(svgRadiusEnd)
            }
            circleDiv.appendChild(circle)
        }
    },
    addActionListener: function () {
        var polyline = document.getElementById(_a._aa._aaf._aafg("QPolyline_" + this.id, this.mapNumber));
        var this_ = this;
        polyline.onclick = function (event) {
            event = event || window.event;
            event = this_.generateQMouseEvent(event);
            this_.executeOuterEventHandler("click", event)
        };
        polyline.onmouseover = function (event) {
            event = event || window.event;
            event = this_.generateQMouseEvent(event);
            this_.executeOuterEventHandler("mouseover", event)
        };
        polyline.onmouseout = function (event) {
            event = event || window.event;
            event = this_.generateQMouseEvent(event);
            this_.executeOuterEventHandler("mouseout", event)
        }
    },
    getLatLngScope: function () {
        var centerLng = this.centerLngLat.getLng();
        var centerLat = this.centerLngLat.getLat();
        var centerGeoLng = _a._aa._aaf._aafa.lngFrom4326ToProjection(centerLng);
        var centerGeoLat = _a._aa._aaf._aafa.latFrom4326ToProjection(centerLat);
        var minGeoLng = centerGeoLng - this.radiusDistance;
        var maxGeoLng = centerGeoLng + this.radiusDistance;
        var minGeoLat = centerGeoLat - this.radiusDistance;
        var maxGeoLat = centerGeoLat + this.radiusDistance;
        var minLng = _a._aa._aaf._aafa.lngFromProjectionTo4326(minGeoLng);
        var maxLng = _a._aa._aaf._aafa.lngFromProjectionTo4326(maxGeoLng);
        var minLat = _a._aa._aaf._aafa.latFromProjectionTo4326(minGeoLat);
        var maxLat = _a._aa._aaf._aafa.latFromProjectionTo4326(maxGeoLat);
        var scope = [minLng, maxLat, maxLng, minLat];
        return scope
    },
    getOptimalZoomLevel: function () {
        var scope = this.getLatLngScope();
        return this.mvc.view.latlngPixelConvertor.getOptimalZoomLevel(scope[0], scope[3], scope[2], scope[1], this.mvc.model.tileGrid._8, this.mvc.model.tileGrid._7)
    },
    isValidEvent: function (strEventType) {
        var nValid = false;
        if (strEventType) {
            switch (strEventType) {
            case "click":
            case "mouseover":
            case "mouseout":
            case 'ready':
                nValid = true;
                break;
            default:
                nValid = false
            }
        }
        return nValid
    },
    addOuterEventListener: function (strEventType, handler, args) {
        if (this.isValidEvent(strEventType)) {
            this.outerEventHandlers.set(strEventType, [handler, args])
        }
    },
    generateQMouseEvent: function (event) {
        var mvc = this.mvc;
        var arrPageXY = _a._aa._aaf.fixEvent(event);
        var arrMapXY = [arrPageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft, arrPageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop];
        var convertor = mvc.view.latlngPixelConvertor;
        var arrLngLat = convertor.Pixel2LatLng(arrMapXY[0], arrMapXY[1]);
        event.qLngLat = new _a._ac.QLngLat(arrLngLat[0], arrLngLat[1]);
        return event
    },
    executeOuterEventHandler: function (strEventType, event) {
        if (strEventType) {
            var handler = this.outerEventHandlers.get(strEventType);
            if (handler) {
                var func = handler[0];
                var arrArguments = handler[1];
                if (arrArguments === undefined) {
                    arrArguments = []
                }
                if (event) {
                    arrArguments = [event].concat(arrArguments)
                }
                func.apply(null, arrArguments)
            }
        }
    }
});
_a._ac._acp = _a._aa._aag({
    className: "_a._ac._acp"
});
_a._ac._acp.addEventListener = function (source, strEventType, handler, args) {
    if (source.isValidEvent(strEventType)) {
        source.addOuterEventListener(strEventType, handler, args)
    }
};
_a._ac._acp.removeEventListener = function (source, strEventType) {
    if (source && strEventType) {
        if (source.isValidEvent(strEventType)) {
            source.removeOuterEventListener(strEventType)
        }
    }
};
_a._ac._acp.clearEventListeners = function (source) {
    source.clearOuterEventListeners()
};
(function () {
    if (_a._ad === undefined) {
        _a._ad = {}
    }
    _a._ad.ViewMgr = _a._aa._aag({
        className: "_a._ad.ViewMgr",
        mvc: null,
        drag: false,
        dragStartX: 0,
        dragStartY: 0,
        tileGridDiv: null,
        qOverlaysDiv: null,
        qOverlaysShadowDiv: null,
        _22: null,
        _29: null,
        _16: null,
        qControlRender: null,
        _0: 0,
        latlngPixelConvertor: null,
        qOverlaysDivLeft: 0,
        qOverlaysDivTop: 0,
        mapDivPageLeft: 0,
        mapDivPageTop: 0,
        mapDivCenterLeft: null,
        mapDivCenterTop: null,
        theme: "default",
        container: null,
        mapDiv: null,
        viewSizeWidth: 0,
        viewSizeHeight: 0,
        bDraggable: true,
        bScrollwheel: true,
        bZoomByDblclick: true,
        bContextMenu: false,
        outerEventHandlers: null,
        bDragEndedListenerNotified: false,
        strTileServer: null,
        strTileSuffix: null,
        model: null,
        initialize: function (mvc, container) {
            this.mvc = mvc;
            this._0 = _a._aa._aaf._aafb++;
            this._22 = new _a._ad.TileGridRender(this.mvc);
            this._29 = new _a._ad.QOverlayRender();
            this._16 = new _a._ad.ContextMenuRender(this.mvc);
            this.qControlRender = new _a._ad.QControlRender(this.mvc);
            this.latlngPixelConvertor = new _a._aa._aaf.LatLngPixelConvertor();
            var this_ = this;
            if (_a._aa._aaf._aafj() === "IE") {
                this.initVml()
            }
            this.initContainer(container);
            this.mapDiv = document.getElementById(_a._aa._aaf._aafg("MapDiv", this._0));
            this._16.initContextMenu();
            this.outerEventHandlers = new _a._aa._aad();
            this.initMouseWheel(this.mapDiv);
            mvc = null;
            container = null
        },
        initVml: function () {
            if (!document.namespaces['q_vml']) {
                document.namespaces.add('q_vml', 'urn:schemas-microsoft-com:vml', '#default#VML')
            }
        },
        onViewSizeChanged: function (qevent) {
            var prevViewSizeWidth = this.viewSizeWidth,
                prevViewSizeHeight = this.viewSizeHeight;
            this.viewSizeWidth = qevent.width;
            this.viewSizeHeight = qevent.height;
            if (prevViewSizeWidth > 0 && prevViewSizeHeight > 0 && (qevent.width != prevViewSizeWidth || qevent.height != prevViewSizeHeight)) {
                var mapDiv = document.getElementById(_a._aa._aaf._aafg("MapDiv", this._0));
                var mapDivStyle = mapDiv.style;
                mapDivStyle.width = qevent.width + "px";
                mapDivStyle.height = qevent.height + "px";
                mapDiv.mapDivCenterLeft = Math.round(parseInt(mapDivStyle.width, 10) / 2);
                mapDiv.mapDivCenterTop = Math.round(parseInt(mapDivStyle.height, 10) / 2);
                this.mapDivCenterLeft = mapDiv.mapDivCenterLeft;
                this.mapDivCenterTop = mapDiv.mapDivCenterTop;
                this.mapDivPageLeft = _a._aa._aaf.getDivPageLeft(mapDiv);
                this.mapDivPageTop = _a._aa._aaf.getDivPageTop(mapDiv);
                this.mvc.view.latlngPixelConvertor.setSeedLatLng(this.mvc.model.tileGrid.centerLng, this.mvc.model.tileGrid.centerLat);
                this.mvc.view.latlngPixelConvertor.setSeedPixel(this.mapDivCenterLeft - this.qOverlaysDivLeft, this.mapDivCenterTop - this.qOverlaysDivTop);
                var rowColumnCountArray = this.mvc.model.tileGrid.countOfRowColumnForViewSize(qevent.width, qevent.height);
                if (rowColumnCountArray[0] != this.mvc.model.tileGrid.rowCount || rowColumnCountArray[1] != this.mvc.model.tileGrid.columnCount) {
                    this.mvc.model.tileGrid.need4reInit = true;
                    this._22.init = false
                }
                rowColumnCountArray = null;
                qevent = new _a._ab._abb.RenderEvent(this.mvc.model.tileGrid);
                this.mvc.triggerEvent(qevent);
                this.qControlRender.forceRedraw(this.mvc.model.qControlList)
            }
            mapDiv = null;
            mapDivStyle = null;
            qevent = null
        },
        onCenterChanged: function (qevent) {
            this.setSeed(qevent.lng, qevent.lat, this.mapDivCenterLeft - this.qOverlaysDivLeft, this.mapDivCenterTop - this.qOverlaysDivTop);
            qevent = null
        },
        onZoomLevelChanged: function (qevent) {},
        onRender: function (qevent) {
            if (qevent.tileGrid.need4reInit) {
                qevent = new _a._ab._abb.TileGridReInitEvent(qevent.isOptimal);
                this.mvc.triggerEvent(qevent);
                this.bindEventHandlersForMapDiv();
                if (this.bContextMenu) {
                    this._16.render(this._0, this.mapDiv, this.mvc.model.qContextMenuItemList, this.mvc, true)
                }
            } else if (qevent.isOptimal === true) {
                var scope = this.mvc.model.getLatLngScope();
                if (scope) {
                    var z = this.latlngPixelConvertor.getOptimalZoomLevel(scope[0], scope[1], scope[2], scope[3], this.mvc.model.tileGrid._8, this.mvc.model.tileGrid._7);
                    qevent = new _a._ab._abb.ZoomLevelChangedEvent(z);
                    this.mvc.triggerEvent(qevent);
                    qevent = new _a._ab._abb.CenterChangedEvent((scope[0] + (scope[2] - scope[0]) / 2.0), (scope[1] + (scope[3] - scope[1]) / 2.0));
                    this.mvc.triggerEvent(qevent)
                }
                qevent = new _a._ab._abb.RenderEvent(this.mvc.model.tileGrid, this.mvc.model.qOverlayChangeList);
                this.mvc.triggerEvent(qevent)
            } else {
                this._22.render(this._0, qevent.tileGrid);
                this._29.render(this._0, qevent.qOverlayChangeList);
                if (this.bContextMenu) {
                    this._16.render(this._0, this.mapDiv, this.mvc.model.qContextMenuItemList, this.mvc, false)
                }
                this.qControlRender.render(this._0, document.getElementById(_a._aa._aaf._aafg("QControlsDiv", this._0)), this.mvc.model.qControlList)
            }
            qevent = null
        },
        onThemeChanged: function (qevent) {
            this.theme = qevent.theme;
            qevent = null
        },
        initContainer: function (container) {
            var mapDiv, mapDivStyle;
            this.container = container;
            container.innerHTML = ["<div id=\"", _a._aa._aaf._aafg("MapDiv", this._0), "\" class=\"MapDiv\"><div id=\"", _a._aa._aaf._aafg("TileGridDiv", this._0), "\" class=\"TileGridDiv\" style=\"left: 0px; top: 0px;\"></div><div id=\"", _a._aa._aaf._aafg("QOverlaysShadowDiv", this._0), "\" class=\"QOverlaysShadowDiv\" style=\"left: 0px; top: 0px;\"></div><div id=\"", _a._aa._aaf._aafg("QOverlaysDiv", this._0), "\" class=\"QOverlaysDiv\" style=\"left: 0px; top: 0px;\"></div><div id=\"", _a._aa._aaf._aafg("QFloatShadowDiv", this._0), "\" class=\"QFloatShadowDiv\" style=\"left: 0px; top: 0px;\"></div><div id=\"", _a._aa._aaf._aafg("QOverlayMouseTargetDiv", this._0), "\" class=\"QOverlayMouseTargetDiv\" style=\"left: 0px; top: 0px;\"></div><div id=\"", _a._aa._aaf._aafg("QFloatDiv", this._0), "\" class=\"QFloatDiv\" style=\"left: 0px;cursor:default; top: 0px;\"></div><div id=\"", _a._aa._aaf._aafg("QControlsDiv", this._0), "\" class=\"QControlsDiv\"><input id=\"", _a._aa._aaf._aafg("QMapFocus", this._0), "\" style=\"opacity:0.01;filter:alpha(opacity=1);width:0px;height:0px;\" type=\"button\"></input></div>"].join("");
            var mapNumbers = this._0;
            mapDiv = document.getElementById(_a._aa._aaf._aafg("MapDiv", this._0));
            var tgDiv = document.getElementById(_a._aa._aaf._aafg("TileGridDiv", this._0));
            _a._aa.QMVCEvent.addDomListener(container, 'click', function () {
                var inp = document.getElementById(_a._aa._aaf._aafg("QMapFocus", mapNumbers));
                inp.focus();
                inp.blur()
            });
            mapDivStyle = mapDiv.style;
            mapDivStyle.width = (parseInt(container.clientWidth, 10)) + "px";
            mapDivStyle.height = (parseInt(container.clientHeight, 10)) + "px";
            mapDiv.mapDivCenterLeft = Math.round(parseInt(mapDivStyle.width, 10) / 2);
            mapDiv.mapDivCenterTop = Math.round(parseInt(mapDivStyle.height, 10) / 2);
            this.mapDivCenterLeft = mapDiv.mapDivCenterLeft;
            this.mapDivCenterTop = mapDiv.mapDivCenterTop;
            this.mapDivPageLeft = _a._aa._aaf.getDivPageLeft(mapDiv);
            this.mapDivPageTop = _a._aa._aaf.getDivPageTop(mapDiv);
            mapDivStyle = null;
            container = null
        },
        bindEventHandlersForMapDiv: function () {
            var mapDiv = this.mapDiv;
            this.initDnD(mapDiv, document.getElementById(_a._aa._aaf._aafg("TileGridDiv", this._0)), document.getElementById(_a._aa._aaf._aafg("QOverlaysShadowDiv", this._0)), document.getElementById(_a._aa._aaf._aafg("QOverlaysDiv", this._0)), document.getElementById(_a._aa._aaf._aafg("QFloatShadowDiv", this._0)), document.getElementById(_a._aa._aaf._aafg("QOverlayMouseTargetDiv", this._0)), document.getElementById(_a._aa._aaf._aafg("QFloatDiv", this._0)), document.getElementById(_a._aa._aaf._aafg("QControlsDiv", this._0)));
            this.initOtherEvents(mapDiv)
        },
        moveZoomDiv: function (deltaX, deltaY) {
            if (this.tileContainerClone_) {
                this.tileContainerClone_.style.left = parseInt(this.tileContainerClone_.style.left) + deltaX + "px";
                this.tileContainerClone_.style.top = parseInt(this.tileContainerClone_.style.top) + deltaY + "px"
            }
        },
        showTileContainerClone: function (deltaXY) {
            deltaXY = deltaXY || [0, 0];
            this.toggleQOverlaysDiv(true);
            var mapNumber = this._0;
            var tileContainerId = _a._aa._aaf._aafg('TileContainerDiv', mapNumber);
            var tileGrid = this.mvc.model.tileGrid;
            var tileContainer = document.getElementById(tileContainerId);
            if (!this.tileContainerClone_) {
                this.tileContainerClone_ = document.createElement('div');
                this.tileContainerClone_.style.cssText = 'position:absolute;z-index:10;background:#F2EFE9;'
            }
            if (this.tileContainerClone_.parentNode != tileContainer.parentNode) {
                tileContainer.parentNode.appendChild(this.tileContainerClone_)
            }
            this.tileContainerClone_.innerHTML = '';
            this.tileZoomImages_ = [];
            this.tileContainerClone_.style.left = tileGrid.baseTileLeft + 'px';
            this.tileContainerClone_.style.top = tileGrid.baseTileTop + 'px';
            this.tileContainerClone_.style.width = -tileGrid.baseTileLeft + 2 * this.viewSizeWidth + 'px';
            this.tileContainerClone_.style.height = -tileGrid.baseTileTop + 2 * this.viewSizeHeight + 'px';
            var divs = tileContainer.getElementsByTagName('div');
            var imgs = tileContainer.getElementsByTagName('img');
            for (var i = 0, len = divs.length; i < len; i++) {
                var lf = parseInt(divs[i].style.left, 10) + tileGrid.baseTileLeft;
                var tp = parseInt(divs[i].style.top, 10) + tileGrid.baseTileTop;
                if (lf + tileGrid.tileWidth < deltaXY[0] || lf > this.viewSizeWidth + deltaXY[0] || tp + tileGrid.tileHeight < deltaXY[1] || tp > this.viewSizeHeight + deltaXY[1]) {
                    continue
                }
                var img = document.createElement('img');
                img.src = imgs[i].src;
                img.style.cssText = 'position:absolute;';
                img.style.left = divs[i].style.left;
                img.style.top = divs[i].style.top;
                this.tileContainerClone_.appendChild(img);
                this.tileZoomImages_.push(img)
            }
            this.tileContainerClone_.style.display = '';
            this.tileContainerClone_.style.cursor = this.normalCursor
        },
        startMovingFx: function (pixel, newCenter, fxMethod, duration) {
            fxMethod = fxMethod || _a._aa.QFx.easeInOutSine;
            var pixelCurrent = [this.mapDivCenterLeft - this.qOverlaysDivLeft, this.mapDivCenterTop - this.qOverlaysDivTop];
            var deltaX = pixelCurrent[0] - pixel[0];
            var deltaY = pixelCurrent[1] - pixel[1];
            var obj = this;
            if (this.zoomFxs_) {
                this.zoomFxs_.stop()
            }
            if (!this.moveQFx_) {
                var options = {
                    'callback': function (values, deltas) {
                        var deltaX_ = obj.mapDivCenterLeft - obj.qOverlaysDivLeft - values[0];
                        var deltaY_ = obj.mapDivCenterTop - obj.qOverlaysDivTop - values[1];
                        obj.move(deltaX_, deltaY_)
                    }
                };
                this.moveQFx_ = new _a._aa.QFx(options)
            } else {
                _a._aa.QMVCEvent.clearListeners(this.moveQFx_, 'end');
                this.moveQFx_.stop()
            }
            _a._aa.QMVCEvent.addListener(this.moveQFx_, 'end', function () {
                if (newCenter) {
                    var lng = newCenter.getLng();
                    var lat = newCenter.getLat();
                    var qevent = new _a._ab._abb.CenterChangedEvent(lng, lat);
                    obj.mvc.triggerEvent(qevent)
                } else {
                    obj.move(0, 0)
                }
                var qevent = new _a._ab._abb.RenderEvent(obj.mvc.model.tileGrid, obj.mvc.model.qOverlayChangeList);
                obj.mvc.triggerEvent(qevent);
                _a._aa.QMVCEvent.clearListeners(this, 'end');
                obj.executeOuterEventHandler('move_ended')
            });
            var qFx = this.moveQFx_;
            var SPEED = 800;
            var dur = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / SPEED;
            dur < 0.2 && (dur = 0.2);
            dur > 0.5 && (dur = 0.5);
            if (duration != 0) {
                duration = duration || dur
            }
            qFx.set('begins', pixelCurrent);
            qFx.set('ends', pixel);
            qFx.set('duration', duration);
            qFx.set('method', fxMethod);
            qFx.set('fps', 50);
            qFx.start()
        },
        startZoomFx: function (isZoomIn, newCenter, isMove) {
            var tileGrid = this.mvc.model.tileGrid;
            var this_ = this;
            var cPosLeft = this.mapDivCenterLeft;
            var cPosTop = this.mapDivCenterTop;
            var center = {
                x: cPosLeft - tileGrid.baseTileLeft,
                y: cPosTop - tileGrid.baseTileTop
            };
            var mul = 1;
            var deltaCX, deltaCY;
            if (newCenter) {
                var lng = newCenter.getLng();
                var lat = newCenter.getLat();
                var convertor = this.latlngPixelConvertor;
                var pixel = convertor.LatLng2Pixel(lng, lat);
                center.x = pixel[0] + this.qOverlaysDivLeft - tileGrid.baseTileLeft;
                center.y = pixel[1] + this.qOverlaysDivTop - tileGrid.baseTileTop;
                deltaCX = pixel[0] + this.qOverlaysDivLeft - cPosLeft;
                deltaCY = pixel[1] + this.qOverlaysDivTop - cPosTop
            }
            if (this.zoomFxs_ && this.zoomFxs_.isZoomIn == isZoomIn) {
                this.zoomFxs_.stop(true);
                mul = this.zoomFxs_.mul;
                center = this.zoomFxs_.center
            } else {
                this.zoomFxs_ && this.zoomFxs_.stop();
                this.showTileContainerClone(isMove && newCenter ? [deltaCX, deltaCY] : null)
            }
            var tileClone = this.tileContainerClone_;
            if (this.moveQFx_) {
                this.moveQFx_.stop()
            }
            mul = isZoomIn ? 1.7 : 0.7;
            var fxOptions = {
                duration: zoomFxOptions.duration,
                fps: zoomFxOptions.fps,
                method: zoomFxOptions.method,
                items: []
            };
            var deltaSize = 0;
            for (var i = 0, len = this.tileZoomImages_.length; i < len; i++) {
                var img = this.tileZoomImages_[i];
                var start = [];
                start.push(parseInt(img.style.left));
                start.push(parseInt(img.style.top));
                if (img.style.width && this.zoomFxs_) {
                    var iw = parseInt(img.style.width, 10);
                    start.push(iw)
                } else {
                    start.push(tileGrid.tileWidth)
                }
                if (img.style.height && this.zoomFxs_) {
                    start.push(parseInt(img.style.height))
                } else {
                    start.push(tileGrid.tileHeight)
                }
                var end = [];
                end.push((start[0] - center.x) * mul + center.x);
                end.push((start[1] - center.y) * mul + center.y);
                end.push(start[2] * mul + 3);
                end.push(start[3] * mul + 3);
                fxOptions.items.push({
                    element: img,
                    styles: ['left', 'top', 'width', 'height'],
                    units: ['px', 'px', 'px', 'px'],
                    begins: start,
                    ends: end
                })
            }
            if (newCenter && isMove) {
                var lng = newCenter.getLng();
                var lat = newCenter.getLat();
                var convertor = this.latlngPixelConvertor;
                var pixel = convertor.LatLng2Pixel(lng, lat);
                var pixelCurrent = [cPosLeft - this.qOverlaysDivLeft, cPosTop - this.qOverlaysDivTop];
                var deltaX = pixelCurrent[0] - pixel[0];
                var deltaY = pixelCurrent[1] - pixel[1];
                var ends = [tileGrid.baseTileLeft + deltaX, tileGrid.baseTileTop + deltaY];
                var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                var dur = distance / 1000;
                dur < 0.1 && (dur = 0.1);
                dur > 0.25 && (dur = 0.25);
                fxOptions.items.push({
                    element: tileClone,
                    styles: ['left', 'top'],
                    units: ['px', 'px'],
                    begins: [tileGrid.baseTileLeft, tileGrid.baseTileTop],
                    ends: ends
                });
                fxOptions.fps = 40;
                fxOptions.duration = dur
            }
            var fx = new _a._aa.QCssFx(fxOptions);
            this.zoomFxs_ = fx;
            this.zoomFxs_.center = center;
            this.zoomFxs_.isZoomIn = isZoomIn;
            this.zoomFxs_.mul = mul;
            fx.count = mul;
            _a._aa.QMVCEvent.addListener(fx, 'end', function () {
                tileClone.style.display = 'none';
                this_.toggleQOverlaysDiv();
                this_.zoomFxs_ = null;
                this_.executeOuterEventHandler('zoom_ended')
            });
            fx.start();
            if (this.zoomFrameFx_) {
                if (this.zoomFrameFx_.zoom != isZoomIn) {
                    this.zoomFrameFx_.stop()
                }
            }
            if (!isMove && (!this.zoomFrameFx_)) {
                this.zoomFrameFx_ = showZoomFrameFx(tileClone.parentNode, [center.x + tileGrid.baseTileLeft, center.y + tileGrid.baseTileTop], this, isZoomIn)
            }
        },
        initMouseWheel: function (mapDiv) {
            var mousewheelEventCount = 0;
            var this_ = this;
            var wheelFun = function (event) {
                if (this_.bScrollwheel === false) {
                    return
                }
                if (_a._aa._aaf._aafj() === "OPERA") {
                    if (mousewheelEventCount === 1) {
                        mousewheelEventCount = 0;
                        return false
                    }++mousewheelEventCount
                }
                if (this_.mvc === undefined) {
                    return
                }
                var qevent, deltaZoomLevel;
                event = event || window.event;
                event.returnValue = false;
                event.preventDefault && event.preventDefault();
                if (event.wheelDelta <= 0 || event.detail > 0) {
                    deltaZoomLevel = -1
                } else {
                    deltaZoomLevel = 1
                }
                var evt = this_.generateQMouseEvent(event);
                var focus = evt.qLngLat;
                var targetZoomLevel = this_.mvc.model.tileGrid.baseTileZ + deltaZoomLevel;
                if (targetZoomLevel >= _a._aa._aab.MetaData.zmin && targetZoomLevel <= _a._aa._aab.MetaData.zmax) {
                    if (deltaZoomLevel == -1) {
                        this_.startZoomFx(false, focus, null)
                    } else {
                        this_.startZoomFx(true, focus, null)
                    }
                    var convertor = this_.latlngPixelConvertor;
                    var focusPixel = convertor.LatLng2Pixel(focus.getLng(), focus.getLat());
                    var cPosLeft = this_.mapDivCenterLeft - this_.qOverlaysDivLeft;
                    var cPosTop = this_.mapDivCenterTop - this_.qOverlaysDivTop;
                    var delta = [focusPixel[0] - cPosLeft, focusPixel[1] - cPosTop];
                    convertor.setZoomLevel(targetZoomLevel);
                    focusPixel = convertor.LatLng2Pixel(focus.getLng(), focus.getLat());
                    var centerPixel = [focusPixel[0] - delta[0], focusPixel[1] - delta[1]];
                    var centerLngLat = convertor.Pixel2LatLng(centerPixel[0], centerPixel[1]);
                    convertor.setZoomLevel(this_.mvc.model.tileGrid.baseTileZ);
                    var qevt = new _a._ab._abb.CenterChangedEvent(centerLngLat[0], centerLngLat[1]);
                    this_.mvc.triggerEvent(qevt);
                    qevent = new _a._ab._abb.ZoomLevelChangedEvent(null, deltaZoomLevel, _a._aa._aab._aaby);
                    this_.mvc.triggerEvent(qevent);
                    qevent = new _a._ab._abb.RenderEvent(this_.mvc.model.tileGrid);
                    this_.mvc.triggerEvent(qevent)
                }
                qevent = null;
                deltaZoomLevel = null;
                event = null;
                return false
            };
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'mousewheel', wheelFun);
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'DOMMouseScroll', wheelFun)
        },
        initDnD: function (mapDiv, tileGridDiv, qOverlaysShadowDiv, qOverlaysDiv, qFloatShadowDiv, qOverlayMouseTargetDiv, qFloatDiv, qControlsDiv) {
            if (mapDiv.initDnD) {
                return
            } else {
                mapDiv.initDnD = true
            }
            var empty = function (evt) {
                evt = evt || window.evt;
                _a._aa._aaf.stopEvent(evt);
                return false
            };
            this.tileGridDiv = tileGridDiv;
            this.qOverlaysDiv = qOverlaysDiv;
            this.qOverlaysShadowDiv = qOverlaysShadowDiv;
            this.qFloatShadowDiv = qFloatShadowDiv;
            this.qOverlayMouseTargetDiv = qOverlayMouseTargetDiv;
            this.qFloatDiv = qFloatDiv;
            _a._aa.QMVCEvent.addDomListener(this.qFloatDiv, 'mousedown', empty);
            _a._aa.QMVCEvent.addDomListener(this.qFloatDiv, 'mouseup', empty);
            _a._aa.QMVCEvent.addDomListener(this.qFloatDiv, 'click', empty);
            _a._aa.QMVCEvent.addDomListener(this.qFloatDiv, 'contextmenu', empty);
            _a._aa.QMVCEvent.addDomListener(this.qFloatDiv, 'dblclick', empty);
            _a._aa.QMVCEvent.addDomListener(this.qOverlayMouseTargetDiv, 'click', empty);
            _a._aa.QMVCEvent.addDomListener(this.qOverlayMouseTargetDiv, 'dblclick', empty);
            _a._aa.QMVCEvent.addDomListener(this.qOverlayMouseTargetDiv, 'mousedown', empty);
            _a._aa.QMVCEvent.addDomListener(this.qOverlayMouseTargetDiv, 'mouseup', empty);
            _a._aa.QMVCEvent.addDomListener(this.qOverlayMouseTargetDiv, 'contextmenu', empty);
            _a._aa.QMVCEvent.addDomListener(qControlsDiv, 'mousedown', empty);
            _a._aa.QMVCEvent.addDomListener(qControlsDiv, 'contextmenu', empty);
            _a._aa.QMVCEvent.addDomListener(qControlsDiv, 'click', empty);
            _a._aa.QMVCEvent.addDomListener(qControlsDiv, 'dblclick', empty);
            _a._aa.QMVCEvent.addDomListener(qControlsDiv, 'mouseup', empty);
            this.normalCursor = this.normalCursor || ["url(", _a._aa._aab._aabr, "/themes/", this.theme, "/img/openhand.cur), default"].join("");
            this.movingCursor = this.movingCursor || ["url(", _a._aa._aab._aabr, "/themes/", this.theme, "/img/closedhand.cur), default"].join("");
            this.mapDiv.style.cursor = this.normalCursor;
            var this_ = this;
            var timer = null;
            var disX = null;
            var disY = null;
            var disTime = null;
            var moved = false;
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'mousedown', function (event) {
                event = event || window.event;
                _a._aa._aaf.stopEvent(event);
                if (event.button == 2) {
                    return false
                }
                moved = false;
                this_.moveQFx_ && this_.moveQFx_.stop();
                timer = new Date().getTime();
                this_.mvc.view.drag = true;
                this_.mvc.view.mapDiv.style.cursor = this_.movingCursor;
                this_.mvc.view.dragStartX = event.clientX;
                this_.mvc.view.dragStartY = event.clientY;
                return false
            });
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'mouseup', function (event) {
                event = event || window.event;
                if (event.button === 2) {
                    event = this_.generateQMouseEvent(event);
                    this_.executeOuterEventHandler("rightclick", event)
                }
                if (this_.mvc.view.drag === true) {
                    this_.mvc.view.drag = false;
                    this_.bDragEndedListenerNotified = false;
                    this_.executeOuterEventHandler("drag_ended");
                    var tmp = new Date().getTime();
                    var fDisTime = tmp - timer;
                    if (fDisTime > 100) {
                        disX = 0;
                        disY = 0
                    }
                    disTime = fDisTime < 5 ? disTime : fDisTime;
                    if (disTime == 0 && (disX != 0 || disY != 0)) {
                        disTime = 1
                    }
                    if (disTime) {
                        var tx = -(120 / disTime) * disX;
                        var ty = -(120 / disTime) * disY;
                        tx > this_.viewSizeWidth / 2 && (tx = this_.viewSizeWidth / 2);
                        tx < -this_.viewSizeWidth / 2 && (tx = -this_.viewSizeWidth / 2);
                        ty > this_.viewSizeHeight / 2 && (ty = this_.viewSizeHeight / 2);
                        ty < -this_.viewSizeHeight / 2 && (ty = -this_.viewSizeHeight / 2);
                        var pixel = [this_.mapDivCenterLeft - this_.qOverlaysDivLeft + tx, this_.mapDivCenterTop - this_.qOverlaysDivTop + ty];
                        if (moved) {
                            this_.startMovingFx(pixel, null, _a._aa.QFx.easeOutQuad, 0.8)
                        }
                    }
                    disX = 0;
                    disY = 0;
                    disTime = 0;
                    timer = null
                }
                if (!moved && event.button !== 2) {
                    event = this_.generateQMouseEvent(event);
                    this_.executeOuterEventHandler('click', event)
                }
                this_.mvc.view.mapDiv.style.cursor = this_.normalCursor;
                return false
            });
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'mousemove', function (event) {
                event = event || window.event;
                event = this_.generateQMouseEvent(event);
                this_.executeOuterEventHandler("mousemove", event);
                if (this_.bDraggable === false) {
                    return true
                }
                var deltaX, deltaY, qevent, newCenterLatLng;
                var view = this_.mvc.view;
                if (view.drag) {
                    moved = true;
                    deltaX = event.clientX - view.dragStartX;
                    deltaY = event.clientY - view.dragStartY;
                    if (!view.tmTimer_) {
                        view.tmTimer_ = setTimeout(function () {
                            view.tmTimer_ = null
                        }, 50)
                    } else {
                        return false
                    }
                    view.dragStartX = event.clientX;
                    view.dragStartY = event.clientY;
                    if (!this_.bDragEndedListenerNotified) {
                        this_.executeOuterEventHandler("drag_started");
                        this_.bDragEndedListenerNotified = true
                    }
                    this_.mvc.view.move(deltaX, deltaY);
                    var tmp = new Date().getTime();
                    if (tmp != null) {
                        disTime = tmp - timer;
                        timer = tmp;
                        disX = deltaX;
                        disY = deltaY
                    }
                }
                return false
            });
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'mouseout', function (event) {
                event = event || window.event;
                var relatedTarget = event.toElement || event.relatedTarget;
                try {
                    if (relatedTarget !== undefined && relatedTarget !== null && relatedTarget.id.indexOf(_a._aa._aab._aabg) === -1) {
                        event = this_.generateQMouseEvent(event);
                        this_.executeOuterEventHandler("mouseout", event);
                        if (this_.mvc.view.drag) {
                            try {
                                while (relatedTarget && relatedTarget !== this) relatedTarget = relatedTarget.parentNode
                            } catch (e) {
                                relatedTarget = null
                            }
                            if (relatedTarget) {
                                return true
                            }
                            this_.mvc.view.drag = false;
                            this_.bDragEndedListenerNotified = false;
                            this_.executeOuterEventHandler("drag_ended");
                            this_.mvc.view.dragStartX = 0;
                            this_.mvc.view.dragStartY = 0;
                            var fDisTime = new Date().getTime() - timer;
                            if (fDisTime > 10 || disTime > 100) {
                                disX = 0;
                                disY = 0
                            }
                            disTime = fDisTime < 10 ? disTime : fDisTime;
                            if (disTime) {
                                var tx = -(150 / disTime) * disX;
                                var ty = -(150 / disTime) * disY;
                                tx > this_.viewSizeWidth / 2 && (tx = this_.viewSizeWidth / 2);
                                tx < -this_.viewSizeWidth / 2 && (tx = -this_.viewSizeWidth / 2);
                                ty > this_.viewSizeHeight / 2 && (ty = this_.viewSizeHeight / 2);
                                ty < -this_.viewSizeHeight / 2 && (ty = -this_.viewSizeHeight / 2);
                                var pixel = [this_.mapDivCenterLeft - this_.qOverlaysDivLeft + tx, this_.mapDivCenterTop - this_.qOverlaysDivTop + ty];
                                this_.startMovingFx(pixel, null, _a._aa.QFx.easeOutQuad, 0.8)
                            }
                            disX = 0;
                            disY = 0;
                            disTime = 0;
                            timer = null
                        }
                        this_.mvc.view.mapDiv.style.cursor = this_.normalCursor
                    }
                } catch (e) {}
                relatedTarget = null;
                return false
            })
        },
        initOtherEvents: function (mapDiv) {
            var this_ = this;
            mapDiv.ondblclick = function (event) {
                event = event || window.event;
                event = this_.generateQMouseEvent(event);
                this_.executeOuterEventHandler("dblclick", event);
                if (this_.bZoomByDblclick === false) {
                    return
                } else {
                    var qevent;
                    var targetZoomLevel = this_.mvc.model.tileGrid.baseTileZ + 1;
                    if (targetZoomLevel <= _a._aa._aab.MetaData.zmax) {
                        this_.startZoomFx(true, event.qLngLat, true)
                    } else {
                        return
                    }
                    qevent = new _a._ab._abb.CenterChangedEvent(event.qLngLat.lng, event.qLngLat.lat);
                    this_.mvc.triggerEvent(qevent);
                    qevent = new _a._ab._abb.ZoomLevelChangedEvent(null, 1, _a._aa._aab._aaby);
                    this_.mvc.triggerEvent(qevent);
                    qevent = new _a._ab._abb.RenderEvent(this_.mvc.model.tileGrid, this_.mvc.model.qOverlayChangeList);
                    this_.mvc.triggerEvent(qevent)
                }
            };
            mapDiv.onmouseover = function (event) {
                event = event || window.event;
                var relatedTarget = event.toElement || event.relatedTarget;
                try {
                    if (relatedTarget !== undefined && relatedTarget !== null && relatedTarget.id.indexOf(_a._aa._aab._aabg) === -1) {
                        event = this_.generateQMouseEvent(event);
                        this_.executeOuterEventHandler("mouseover", event)
                    }
                } catch (e) {}
            }
        },
        generateQMouseEvent: function (event) {
            var mvc = this.mvc;
            var arrPageXY = _a._aa._aaf.fixEvent(event);
            var arrMapXY = [arrPageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft, arrPageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop];
            var convertor = mvc.view.latlngPixelConvertor;
            var arrLngLat = convertor.Pixel2LatLng(arrMapXY[0], arrMapXY[1]);
            event.qLngLat = new _a._ac.QLngLat(arrLngLat[0], arrLngLat[1]);
            return event
        },
        toggleQOverlaysDiv: function (isHide) {
            var value = isHide ? 'none' : '';
            this.mvc.view.qOverlaysDiv.style.display = value;
            this.mvc.view.qOverlaysShadowDiv.style.display = value;
            this.mvc.view.qFloatShadowDiv.style.display = value;
            this.mvc.view.qOverlayMouseTargetDiv.style.display = value;
            this.mvc.view.qFloatDiv.style.display = value
        },
        moveQOverlaysDiv: function (deltaX, deltaY) {
            this.qOverlaysDivLeft += deltaX;
            this.qOverlaysDivTop += deltaY;
            this.mvc.view.qOverlaysDiv.style.left = this.qOverlaysDivLeft + "px";
            this.mvc.view.qOverlaysDiv.style.top = this.qOverlaysDivTop + "px";
            this.mvc.view.qOverlaysShadowDiv.style.left = this.qOverlaysDivLeft + "px";
            this.mvc.view.qOverlaysShadowDiv.style.top = this.qOverlaysDivTop + "px";
            this.mvc.view.qFloatShadowDiv.style.left = this.qOverlaysDivLeft + "px";
            this.mvc.view.qFloatShadowDiv.style.top = this.qOverlaysDivTop + "px";
            this.mvc.view.qOverlayMouseTargetDiv.style.left = this.qOverlaysDivLeft + "px";
            this.mvc.view.qOverlayMouseTargetDiv.style.top = this.qOverlaysDivTop + "px";
            this.mvc.view.qFloatDiv.style.left = this.qOverlaysDivLeft + "px";
            this.mvc.view.qFloatDiv.style.top = this.qOverlaysDivTop + "px";
            deltaX = null;
            deltaY = null
        },
        setSeed: function (lng, lat, left, top) {
            if (lng !== null) {
                this.mvc.view.latlngPixelConvertor.setSeedLatLng(lng, lat)
            }
            if (left !== null) {
                this.mvc.view.latlngPixelConvertor.setSeedPixel(left, top)
            }
            lng = null;
            lat = null;
            left = null;
            top = null
        },
        move: function (deltaX, deltaY, animation, this_) {
            if (this_ === undefined) {
                this_ = this
            }
            if (animation !== true) {
                var newCenterLatLng, qevent, tileGridDivPreLeft, tileGridDivPreTop;
                tileGridDivPreLeft = this_.tileGridDiv.style.left;
                tileGridDivPreTop = this_.tileGridDiv.style.top;
                this_.tileGridDiv.style.left = (parseInt(tileGridDivPreLeft, 10) + deltaX) + "px";
                this_.tileGridDiv.style.top = (parseInt(tileGridDivPreTop, 10) + deltaY) + "px";
                this_.moveQOverlaysDiv(deltaX, deltaY);
                newCenterLatLng = this_.latlngPixelConvertor.Pixel2LatLng(this_.mapDivCenterLeft - this_.qOverlaysDivLeft, this_.mapDivCenterTop - this_.qOverlaysDivTop);
                if (!_a._aa._aaf.isCenterInDisplayBBox(newCenterLatLng[0], newCenterLatLng[1], this_.mvc.model.displayBBox)) {
                    this_.tileGridDiv.style.left = tileGridDivPreLeft;
                    this_.tileGridDiv.style.top = tileGridDivPreTop;
                    this_.moveQOverlaysDiv(0 - deltaX, 0 - deltaY);
                    var oldCenterLng = this.mvc.model.tileGrid.centerLng;
                    var oldCenterLat = this.mvc.model.tileGrid.centerLat;
                    qevent = new _a._ab._abb.CenterChangedEvent(oldCenterLng, oldCenterLat);
                    this_.mvc.triggerEvent(qevent);
                    return false
                }
                qevent = new _a._ab._abb.CenterChangedEvent(newCenterLatLng[0], newCenterLatLng[1]);
                this_.mvc.triggerEvent(qevent);
                if (Math.abs(parseInt(this_.tileGridDiv.style.left, 10)) >= 2 * _a._aa._aab._aabw || Math.abs(parseInt(this_.tileGridDiv.style.top, 10)) >= 2 * _a._aa._aab._aabv) {
                    qevent = new _a._ab._abb.RenderEvent(this_.mvc.model.tileGrid, this_.mvc.model.qOverlayChangeList);
                    this_.mvc.triggerEvent(qevent)
                }
                deltaX = null;
                deltaY = null;
                newCenterLatLng = null;
                qevent = null
            } else {
                var step = 3;
                var stepX = step,
                    stepY = step;
                var timeInterval = 7;
                if (deltaX < 0) {
                    stepX = 0 - stepX
                }
                if (deltaY < 0) {
                    stepY = 0 - stepY
                }
                var stepsX = Math.floor(deltaX / stepX);
                var stepsY = Math.floor(deltaY / stepY);
                if (deltaX === 0) {
                    for (var j = 0; j < stepsY; ++j) {
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * j, 0, stepY, undefined, this_)
                    }
                    var remainderY = deltaY % stepY;
                    if (remainderY !== 0) {
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * j, 0, remainderY, undefined, this_)
                    }
                } else if (deltaY === 0) {
                    for (j = 0; j < stepsX; ++j) {
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * j, stepX, 0, undefined, this_)
                    }
                    var remainderX = deltaX % stepX;
                    if (remainderX !== 0) {
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * j, remainderX, 0, undefined, this_)
                    }
                } else {
                    var steps = (stepsX < stepsY) ? stepsX : stepsY;
                    var isStepsX = (stepsX < stepsY) ? true : false;
                    var i;
                    for (i = 0; i < steps; ++i) {
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * i, stepX, stepY, undefined, this_)
                    }
                    if (isStepsX) {
                        remainderX = deltaX % stepX;
                        if (remainderX !== 0) {
                            _a._aa._aaf.setTimeout(this_.move, timeInterval * i, remainderX, 0, undefined, this_)
                        }
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * i + 1, 0, deltaY - steps * stepY, true, this_)
                    } else {
                        remainderY = deltaY % stepY;
                        if (remainderY !== 0) {
                            _a._aa._aaf.setTimeout(this_.move, timeInterval * i, 0, remainderY, undefined, this_)
                        }
                        _a._aa._aaf.setTimeout(this_.move, timeInterval * i + 1, deltaX - steps * stepX, 0, true, this_)
                    }
                }
            }
            return true
        },
        removeQControl: function (index) {
            this.qControlRender.removeQControl(index, this._0);
            index = null
        },
        isValidEvent: function (strEventType) {
            var bValid = false;
            if (strEventType) {
                switch (strEventType) {
                case "click":
                case "dblclick":
                case "rightclick":
                case "mouseover":
                case "mousemove":
                case "mouseout":
                case "drag_started":
                case "drag_ended":
                case 'move_ended':
                case 'zoom_ended':
                    bValid = true;
                    break;
                default:
                    bValid = false
                }
            }
            return bValid
        },
        addOuterEventListener: function (strEventType, handler, args) {
            if (this.isValidEvent(strEventType)) {
                this.outerEventHandlers.set(strEventType, [handler, args])
            }
        },
        removeOuterEventListener: function (strEventType) {
            if (this.isValidEvent(strEventType)) {
                this.outerEventHandlers.remove(strEventType)
            }
        },
        clearOuterEventListeners: function () {
            this.outerEventHandlers.clear()
        },
        executeOuterEventHandler: function (strEventType, event) {
            if (strEventType) {
                var handler = this.outerEventHandlers.get(strEventType);
                if (handler) {
                    var func = handler[0];
                    var arrArguments = handler[1];
                    if (arrArguments === undefined) {
                        arrArguments = []
                    }
                    if (event) {
                        arrArguments = [event].concat(arrArguments)
                    }
                    func.apply(null, arrArguments)
                }
            }
        }
    });
    var zoomFxOptions = {
        duration: 0.15,
        fps: 30,
        method: _a._aa.QFx.easeOutQuad
    };

    function showZoomFrameFx(parentNode, center, view, isZoomIn) {
        var borderX = ['border-left', 'border-right'];
        var borderY = ['border-top', 'border-bottom'];
        var zoom = isZoomIn ? 0 : 1;
        var distanceX = view.viewSizeHeight < view.viewSizeWidth ? 20 : view.viewSizeWidth / view.viewSizeHeight * 20;
        var distanceY = view.viewSizeHeight / view.viewSizeWidth * distanceX;
        distanceX < 5 && (distanceX = 5);
        distanceY < 5 && (distanceY = 5);
        var enlarge = 3;
        var size = 5;
        var fxOptions = {
            duration: zoomFxOptions.duration + 0.3,
            fps: zoomFxOptions.fps,
            method: zoomFxOptions.method,
            items: []
        };
        var fxs = view.zoomFrameFx_;
        var elements = [];
        for (var i = 0; i < 4; i++) {
            var element = document.createElement('div');
            var x = borderX[1 - zoom];
            if (i % 2 == 0) {
                x = borderX[zoom]
            }
            var y = borderY[1 - zoom];
            if (i < 2) {
                y = borderY[zoom]
            }
            var bs = ':2px solid red;';
            element.style.cssText = 'font-size:0;line-height:0;' + 'position:absolute;z-index:100;width:' + size + 'px;height:' + size + 'px;' + x + bs + y + bs;
            elements.push(element);
            parentNode.appendChild(element);
            var begins = [];
            var ends = [];
            var be = [begins, ends];
            var signX = i % 2 == 0 ? -1 : 1;
            var signY = i > 1 ? 1 : -1;
            be[zoom].push(center[0] + signX * distanceX);
            be[zoom].push(center[1] + signY * distanceY);
            be[1 - zoom].push(center[0] + enlarge * signX * distanceX);
            be[1 - zoom].push(center[1] + enlarge * signY * distanceY);
            var option = {
                element: element,
                begins: begins,
                ends: ends,
                styles: ['left', 'top'],
                units: ['px', 'px']
            };
            fxOptions.items.push(option)
        }
        fxs = new _a._aa.QCssFx(fxOptions);
        fxs.zoom = isZoomIn;
        _a._aa.QMVCEvent.addListener(fxs, 'end', function () {
            for (var i = 0; i < 4; i++) {
                if (elements[i] && elements[i].parentNode == parentNode) {
                    //_a._aa._aaf.removeNode(elements[i])
                }
            }
            view.zoomFrameFx_ = null
        });
        fxs.start();
        return fxs
    }
})();
_a._ad.QOverlayRender = _a._aa._aag({
    className: "_a._ad.QOverlayRender",
    qOverlayCount: null,
    initialize: function () {
        this.qOverlayCount = 0
    },
    render: function (mapNumber, qOverlayChangeList) {
        var qOverlayChangeListLength = qOverlayChangeList.length();
        var qAddedOverlayList = new _a._aa._aac(qOverlayChangeListLength);
        var tmpChangeItem;
        var tmpOperate;
        var tmpQOverlay;
        var QOVERLAY_ADDED = false;
        var qOverlayDocumentFragment = document.createDocumentFragment();
        var qOverlayShadowDocumentFragment = document.createDocumentFragment();
        for (var i = 0; i < qOverlayChangeListLength; ++i) {
            tmpChangeItem = qOverlayChangeList.at(i);
            tmpOperate = tmpChangeItem.operate;
            tmpQOverlay = tmpChangeItem.target;
            var qOverlaysDiv = document.getElementById(_a._aa._aaf._aafg("QOverlaysDiv", mapNumber));
            var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + tmpQOverlay.id, tmpQOverlay.mapNumber));
            var qOverlaysShadowDiv = document.getElementById(_a._aa._aaf._aafg("QOverlaysShadowDiv", mapNumber));
            var qOverlayShadowDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayShadowDiv_" + tmpQOverlay.id, tmpQOverlay.mapNumber));
            switch (tmpOperate) {
            case "Add":
                if (tmpQOverlay.bindTo) {
                    tmpQOverlay.notify('map');
                    if (tmpQOverlay.className != '_a._ac._ach') {
                        _a._aa.QMVCEvent.trigger(tmpQOverlay, 'ready')
                    }
                    continue
                }
                this.caculateQOverlayDivPosition(tmpQOverlay);
                qOverlayDiv = document.createElement("div");
                qOverlayDiv.id = _a._aa._aaf._aafg("QOverlayDiv_" + tmpQOverlay.id, mapNumber);
                qOverlayDiv.className = 'QOverlayDiv';
                qOverlayDiv.style.left = tmpQOverlay.left + "px";
                qOverlayDiv.style.top = tmpQOverlay.top + "px";
                qOverlayDiv.style.width = tmpQOverlay.width + "px";
                qOverlayDiv.style.height = tmpQOverlay.height + "px";
                qOverlayDiv.style.zIndex = tmpQOverlay.zIndex;
                qOverlayDocumentFragment.appendChild(qOverlayDiv);
                if (tmpQOverlay.className === "_a._ac._ach" || tmpQOverlay.className === "_a._ac.QInfoWindow") {
                    qOverlayShadowDiv = document.createElement("div");
                    qOverlayShadowDiv.id = _a._aa._aaf._aafg("QOverlayShadowDiv_" + tmpQOverlay.id, mapNumber);
                    if (_a._aa._aaf._aafj() !== "IE") {
                        qOverlayShadowDiv.setAttribute("class", "QOverlayShadowDiv")
                    } else {
                        qOverlayShadowDiv.setAttribute("className", "QOverlayShadowDiv")
                    }
                    qOverlayShadowDiv.style.left = tmpQOverlay.left + "px";
                    qOverlayShadowDiv.style.top = tmpQOverlay.top + "px";
                    qOverlayShadowDiv.style.zIndex = _a._aa._aab._aaba;
                    qOverlayShadowDocumentFragment.appendChild(qOverlayShadowDiv)
                }
                tmpQOverlay.executeOuterEventHandler("ready");
                QOVERLAY_ADDED = true;
                break;
            case "Modify":
                if (tmpQOverlay.bindTo) {
                    tmpQOverlay.tmpQOverlay.notify('redraw');
                    continue
                }
                switch (tmpQOverlay.className) {
                case "_a._ac.QCircle":
                    if (qOverlayDiv !== null) {
                        this.caculateQOverlayDivPosition(tmpQOverlay);
                        qOverlayDiv.style.left = tmpQOverlay.left + "px";
                        qOverlayDiv.style.top = tmpQOverlay.top + "px";
                        qOverlayDiv.style.width = tmpQOverlay.width + "px";
                        qOverlayDiv.style.height = tmpQOverlay.height + "px";
                        if (qOverlayShadowDiv) {
                            qOverlayShadowDiv.style.left = tmpQOverlay.left + "px";
                            qOverlayShadowDiv.style.top = tmpQOverlay.top + "px"
                        }
                    }
                    break;
                default:
                    if (qOverlayDiv !== null) {
                        qOverlayDiv.style.zIndex = tmpQOverlay.zIndex;
                        if (qOverlayShadowDiv) {
                            qOverlayShadowDiv.style.zIndex = tmpQOverlay.zIndex
                        }
                    }
                }
                break;
            case "Move":
                if (tmpQOverlay.bindTo) {
                    tmpQOverlay.notify('redraw');
                    continue
                }
                if (qOverlayDiv !== null) {
                    this.caculateQOverlayDivPosition(tmpQOverlay);
                    qOverlayDiv.style.left = tmpQOverlay.left + "px";
                    qOverlayDiv.style.top = tmpQOverlay.top + "px";
                    if (qOverlayShadowDiv) {
                        qOverlayShadowDiv.style.left = tmpQOverlay.left + "px";
                        qOverlayShadowDiv.style.top = tmpQOverlay.top + "px"
                    }
                }
                break;
            case "Zoom":
                if (tmpQOverlay.bindTo) {
                    tmpQOverlay.notify('redraw');
                    continue
                }
                if (qOverlayDiv !== null) {
                    this.caculateQOverlayDivPosition(tmpQOverlay);
                    qOverlayDiv.style.left = tmpQOverlay.left + "px";
                    qOverlayDiv.style.top = tmpQOverlay.top + "px";
                    qOverlayDiv.style.width = tmpQOverlay.width + "px";
                    qOverlayDiv.style.height = tmpQOverlay.height + "px";
                    if (qOverlayShadowDiv) {
                        qOverlayShadowDiv.style.left = tmpQOverlay.left + "px";
                        qOverlayShadowDiv.style.top = tmpQOverlay.top + "px"
                    }
                }
                break;
            case "Remove":
                if (tmpQOverlay.bindTo) {
                    tmpQOverlay.bindTo.set('panes', null);
                    continue
                }
                if (qOverlayDiv !== null) {
                    qOverlayDiv.parentNode.removeChild(qOverlayDiv);
                    if (qOverlayShadowDiv) {
                        qOverlayShadowDiv.parentNode.removeChild(qOverlayShadowDiv)
                    }
                }
                break
            }
            qOverlayDiv = null
        }
        if (QOVERLAY_ADDED) {
            qOverlaysDiv.appendChild(qOverlayDocumentFragment);
            qOverlaysShadowDiv.appendChild(qOverlayShadowDocumentFragment)
        }
        for (i = 0; i < qOverlayChangeListLength; ++i) {
            tmpChangeItem = qOverlayChangeList.at(i);
            tmpOperate = tmpChangeItem.operate;
            tmpQOverlay = tmpChangeItem.target;
            if (tmpQOverlay.bindTo) {
                continue
            }
            switch (tmpOperate) {
            case "Add":
            case "Modify":
                tmpQOverlay.render();
                break;
            case "Zoom":
                if (!(tmpQOverlay.className === "_a._ac.QInfoWindow" || tmpQOverlay.className === "_a._ac._ach")) {
                    tmpQOverlay.render()
                }
                break;
            case "Move":
            case "Remove":
                break;
            default:
            }
        }
        qOverlayChangeList.clear();
        _a._aa._aaf._aafl();
        tmpOperate = null;
        tmpQOverlay = null;
        tmpChangeItem = null;
        qOverlayChangeListLength = null;
        qAddedOverlayList = null;
        mapNumber = null;
        qOverlayChangeList = null
    },
    caculateQOverlayDivPosition: function (qOverlay) {
        var convertor = qOverlay.mvc.view.latlngPixelConvertor;
        var pixel;
        switch (qOverlay.className) {
        case "_a._ac._ach":
            pixel = convertor.LatLng2Pixel(qOverlay.position.getLng(), qOverlay.position.getLat());
            qOverlay.left = pixel[0];
            qOverlay.top = pixel[1];
            break;
        case "_a._ac.QInfoWindow":
            pixel = convertor.LatLng2Pixel(qOverlay.position.getLng(), qOverlay.position.getLat());
            qOverlay.left = pixel[0] - qOverlay.deltaLeft;
            qOverlay.top = pixel[1] - qOverlay.deltaTop;
            break;
        case "_a._ac._aci":
            pixel = convertor.LatLng2Pixel(qOverlay.marker.position.getLng(), qOverlay.marker.position.getLat());
            qOverlay.left = pixel[0] + qOverlay.deltaLeft;
            qOverlay.top = pixel[1] + qOverlay.deltaTop;
            break;
        case "_a._ac._acn":
        case "_a._ac.QTip2":
            pixel = convertor.LatLng2Pixel(qOverlay.lng, qOverlay.lat);
            qOverlay.left = pixel[0] - 70 - qOverlay.deltaLeft;
            qOverlay.top = pixel[1] - qOverlay.height - qOverlay.deltaTop;
            break;
        case "_a._ac._acm":
            switch (qOverlay.target.className) {
            case "_a._ac._ach":
                qOverlay.left = qOverlay.target.left - 70 - qOverlay.deltaLeft;
                qOverlay.top = qOverlay.target.top - qOverlay.height - qOverlay.deltaTop;
                break;
            case "_a._ac.QPolyline":
            case "_a._ac._ack":
                var qLatLngLength = qOverlay.target.pathLatLng.length;
                pixel = convertor.LatLng2Pixel(qOverlay.target.pathLatLng[qLatLngLength - 2], qOverlay.target.pathLatLng[qLatLngLength - 1]);
                qOverlay.left = pixel[0] - 70 - qOverlay.deltaLeft;
                qOverlay.top = pixel[1] - qOverlay.height - qOverlay.deltaTop;
                break
            }
            break;
        case "_a._ac.QPolyline":
            var length = qOverlay.pathLatLng.length;
            for (var i = 0; i < length; ++i) {
                pixel = convertor.LatLng2Pixel(qOverlay.pathLatLng[i], qOverlay.pathLatLng[i + 1]);
                qOverlay.path[i] = pixel[0];
                qOverlay.path[++i] = pixel[1]
            }
            var scope = this.getScope(qOverlay.path);
            qOverlay.delta = parseInt(qOverlay.strokeWeight, 10) / 2;
            qOverlay.left = scope[2] - qOverlay.delta;
            qOverlay.top = scope[3] - qOverlay.delta;
            qOverlay.width = scope[0] + 2 * qOverlay.delta;
            qOverlay.height = scope[1] + 2 * qOverlay.delta;
            length = null;
            scope = null;
            break;
        case "_a._ac._ack":
            length = qOverlay.pathLatLng.length;
            for (i = 0; i < length; ++i) {
                pixel = convertor.LatLng2Pixel(qOverlay.pathLatLng[i], qOverlay.pathLatLng[i + 1]);
                qOverlay.path[i] = pixel[0];
                qOverlay.path[++i] = pixel[1]
            }
            scope = this.getScope(qOverlay.path);
            qOverlay.delta = parseInt(qOverlay.strokeWeight, 10);
            qOverlay.left = scope[2] - qOverlay.delta;
            qOverlay.top = scope[3] - qOverlay.delta;
            qOverlay.width = scope[0] + 3 * qOverlay.delta;
            qOverlay.height = scope[1] + 3 * qOverlay.delta;
            length = null;
            scope = null;
            break;
        case "_a._ac.QCircle":
            pixel = convertor.LatLng2Pixel(qOverlay.centerLngLat.getLng(), qOverlay.centerLngLat.getLat());
            qOverlay.center = new _a._ac.QPoint(pixel[0], pixel[1]);
            qOverlay.radius = convertor.distanceToPixels(qOverlay.radiusDistance);
            qOverlay.left = qOverlay.center.getLeft() - qOverlay.radius - qOverlay.delta;
            qOverlay.top = qOverlay.center.getTop() - qOverlay.radius - qOverlay.delta;
            qOverlay.width = (qOverlay.radius + qOverlay.delta) * 2 + qOverlay.nHalfRadiusEnd;
            qOverlay.height = (qOverlay.radius + qOverlay.delta) * 2;
            break
        }
        convertor = null;
        qOverlay = null
    },
    getScope: function (points) {
        var minX = points[0],
            minY = points[1],
            maxX = points[0],
            maxY = points[1];
        var length = points.length;
        for (var i = 0; i < length; i += 2) {
            if (points[i] < minX) {
                minX = points[i]
            }
            if (points[i] > maxX) {
                maxX = points[i]
            }
        }
        for (i = 1; i < length; i += 2) {
            if (points[i] < minY) {
                minY = points[i]
            }
            if (points[i] > maxY) {
                maxY = points[i]
            }
        }
        var scope = new Array();
        scope[0] = maxX - minX;
        scope[1] = maxY - minY;
        scope[2] = minX;
        scope[3] = minY;
        minX = null;
        minY = null;
        maxX = null;
        maxY = null;
        length = null;
        return scope
    }
});
(function () {
    _a._ad.TileGridRender = _a._aa._aag({
        className: "_a._ad.TileGridRender",
        mvc: null,
        init: false,
        need4reInit: false,
        tileImgIList: null,
        tileImgJList: null,
        tileDivList: null,
        tileDivIndexList: null,
        tileDivIndexSwapTmpList: null,
        previousBaseTileX: null,
        previousBaseTileY: null,
        previousBaseTileZ: null,
        tileCache: null,
        initialize: function (mvc) {
            this.mvc = mvc;
            mvc = null;
            var this_ = this;
            QEventUtil.addDomListener(window, 'unload', function (event) {
                this_.tileDivList = null
            })
        },
        tileDivHTML: function (mapNumber, i, j, tileGrid) {
            var html = ["<div id=\"", _a._aa._aaf._aafg("TileDiv_" + i + "_" + j, mapNumber), "\" class=\"TileDiv\" style=\"width: ", tileGrid.tileWidth, "px; height: ", tileGrid.tileHeight, "px; left: ", j * tileGrid.tileWidth, "px; top: ", i * tileGrid.tileHeight, "px;\"><img id=\"", _a._aa._aaf._aafg("TileImg_" + i + "_" + j, mapNumber), "\" class=\"TileImg\"></img></div>"].join("");
            return html
        },
        tileContainerDivHTML: function (mapNumber, tileGrid, tileHTMLArray) {
            var html = ["<div id=\"", _a._aa._aaf._aafg("TileContainerDiv", mapNumber), "\" class=\"TileContainerDiv\" style=\"left: ", tileGrid.baseTileLeft, "px; top: ", tileGrid.baseTileTop, "px;\">", tileHTMLArray.join(""), "</div>"].join("");
            return html
        },
        isTileDivInView: function (tileDiv) {
            var tileGrid = this.mvc.model.tileGrid;
            var left = parseInt(tileDiv.style.left, 10) + tileGrid.baseTileLeft;
            var top = parseInt(tileDiv.style.top, 10) + tileGrid.baseTileTop;
            var vWidth = this.mvc.view.viewSizeWidth;
            var vHeight = this.mvc.view.viewSizeHeight;
            if (left + tileGrid.tileWidth < 0 || left > vWidth || top + tileGrid.tileHeight < 0 || top > vHeight) {
                return false
            }
            return true
        },
        render: function (mapNumber, tileGrid) {
            var rowCount, columnCount, tileArrayHTML, tileArrayLength;
            var i, j, tileGridDiv, tileContainerDiv;
            tileGridDiv = document.getElementById(_a._aa._aaf._aafg("TileGridDiv", mapNumber));
            rowCount = tileGrid.rowCount;
            columnCount = tileGrid.columnCount;
            tileArrayLength = rowCount * columnCount;
            if (this.init === false) {
                tileHTMLArray = new _a._aa._aac(tileArrayLength);
                for (i = 0; i < rowCount; ++i) {
                    for (j = 0; j < columnCount; ++j) {
                        tileHTMLArray.set(j + i * columnCount, this.tileDivHTML(mapNumber, i, j, tileGrid))
                    }
                }
                tileGridDiv.innerHTML = this.tileContainerDivHTML(mapNumber, tileGrid, tileHTMLArray);
                this.tileCache = new _a._ad._aabs(this.mvc, mapNumber, tileGridDiv, rowCount, columnCount);
                this.calcTileLoadingOrder(mapNumber, tileGrid);
                this.previousBaseTileX = tileGrid.baseTileX;
                this.previousBaseTileY = tileGrid.baseTileY;
                this.previousBaseTileZ = tileGrid.baseTileZ
            }
            var ifReloadAllTiles = true;
            if (this.isDragging(tileGrid)) {
                var deltaBaseTileX = tileGrid.baseTileX - this.previousBaseTileX;
                if (deltaBaseTileX < 0 && (0 - deltaBaseTileX) < columnCount) {
                    for (i = 0; i < (0 - deltaBaseTileX); ++i) {
                        this.shiftRight(tileGrid, tileGridDiv)
                    }
                    ifReloadAllTiles = false
                } else if (deltaBaseTileX > 0 && deltaBaseTileX < columnCount) {
                    for (i = 0; i < deltaBaseTileX; ++i) {
                        this.shiftLeft(tileGrid, tileGridDiv)
                    }
                    ifReloadAllTiles = false
                }
                var deltaBaseTileY = tileGrid.baseTileY - this.previousBaseTileY;
                var b = (deltaBaseTileY > 0 && deltaBaseTileY < rowCount);
                if (deltaBaseTileY < 0 && (0 - deltaBaseTileY) < rowCount) {
                    for (i = 0; i < (0 - deltaBaseTileY); ++i) {
                        this.shiftDown(tileGrid, tileGridDiv)
                    }
                    ifReloadAllTiles = false
                } else if (deltaBaseTileY > 0 && deltaBaseTileY < rowCount) {
                    for (i = 0; i < deltaBaseTileY; ++i) {
                        this.shiftUp(tileGrid, tileGridDiv)
                    }
                    ifReloadAllTiles = false
                }
            } else if (tileGrid.baseTileZ === this.previousBaseTileZ && tileGrid.baseTileX === this.previousBaseTileX && tileGrid.baseTileY === this.previousBaseTileY) {
                if (this.init === false) {
                    this.init = true
                } else if (this.need4reInit === true) {
                    this.need4reInit = false
                } else {
                    ifReloadAllTiles = false
                }
            }
            var tileDivIndex, controlArray;
            controlArray = [];
            var cacheImages = [];
            var viewImages = [];
            for (i = tileArrayLength - 1; i >= 0; --i) {
                var x = this.tileImgIList.at(i);
                var y = this.tileImgJList.at(i);
                tileDivIndex = this.tileDivIndexList.at(x, y);
                var tileDiv = this.tileDivList.at(tileDivIndex[0], tileDivIndex[1]);
                if (ifReloadAllTiles === true) {
                    var tileUrl = this.tileCache.getTile(tileGrid.baseTileX + y, tileGrid.baseTileY + x, tileGrid.baseTileZ);
                    var tileImg = tileDiv.firstChild;
                    if (this.isTileDivInView(tileDiv)) {
                        viewImages.push([tileImg, tileUrl])
                    } else {
                        cacheImages.push([tileImg, tileUrl])
                    }
                } else if (tileDiv.reload === true) {
                    var tileImage = tileDiv.firstChild;
                    tileImage.src = [_a._aa._aab._aabr, "/themes/", this.mvc.view.theme, "/img/loading.png"].join("");
                    var controlInfo = [tileDiv.getElementsByTagName("img")[0], this.tileCache.getTile(tileGrid.baseTileX + y, tileGrid.baseTileY + x, tileGrid.baseTileZ)];
                    controlArray.push(controlInfo);
                    tileDiv.reload = false
                }
            }
            viewImages = viewImages.concat(cacheImages);
            if (viewImages.length > 0) {
                this.viewQuene = this.viewQuene || new ImageRequestQuene();
                this.viewQuene.stop();
                this.viewQuene.concat(viewImages)
            }
            if (ifReloadAllTiles === false && controlArray.length !== 0) {
                this.renderQuene = this.renderQuene || new ImageRequestQuene();
                window.setTimeout(_a._aa._aaf.callback(this, function () {
                    this.renderQuene.concat(controlArray)
                }), 50)
            }
            this.previousBaseTileX = tileGrid.baseTileX;
            this.previousBaseTileY = tileGrid.baseTileY;
            this.previousBaseTileZ = tileGrid.baseTileZ;
            if (_a._aa._aab._aabs === "BrowserTileCache") {
                _a._aa._aaf.setTimeout(this.tileCache.loadTileCache, _a._aa._aab._aabt, this.tileImgIList, this.tileImgJList, rowCount, columnCount, tileGrid.baseTileX, tileGrid.baseTileY, tileGrid.baseTileZ, this.tileCache)
            }
            tileContainerDiv = document.getElementById(_a._aa._aaf._aafg("TileContainerDiv", mapNumber));
            tileGridDiv.style.left = "0px";
            tileContainerDiv.style.left = tileGrid.baseTileLeft + "px";
            tileGridDiv.style.top = "0px";
            tileContainerDiv.style.top = tileGrid.baseTileTop + "px";
            tileGrid = null
        },
        isDragging: function (tileGrid) {
            var isDragging = false;
            isDragging = (tileGrid.baseTileZ === this.previousBaseTileZ) && (tileGrid.baseTileX !== this.previousBaseTileX || tileGrid.baseTileY !== this.previousBaseTileY);
            var deltaX = Math.abs(tileGrid.baseTileX - this.previousBaseTileX);
            var deltaY = Math.abs(tileGrid.baseTileY - this.previousBaseTileY);
            if (deltaX >= tileGrid.rowCount - 2 || deltaY >= tileGrid.columnCount - 2) {
                isDragging = false
            }
            return isDragging
        },
        calcTileLoadingOrder: function (mapNumber, tileGrid) {
            var rowCount = tileGrid.rowCount;
            var columnCount = tileGrid.columnCount;
            var tileArrayLength = rowCount * columnCount;
            this.initDSForSpiralLoading(mapNumber, rowCount, columnCount, tileArrayLength)
        },
        initDSForSpiralLoading: function (mapNumber, rowCount, columnCount, tileArrayLength) {
            this.tileDivList = new _a._aa.QArray2D(rowCount, columnCount);
            for (i = 0; i < rowCount; ++i) {
                for (j = 0; j < columnCount; ++j) {
                    var tileDiv = document.getElementById(_a._aa._aaf._aafg("TileDiv_" + i + "_" + j, mapNumber));
                    tileDiv.reload = false;
                    this.tileDivList.set(i, j, tileDiv)
                }
            }
            this.tileDivIndexList = new _a._aa.QArray2D(rowCount, columnCount);
            this.tileDivIndexSwapTmpList = new _a._aa.QArray2D(rowCount, columnCount);
            for (i = 0; i < rowCount; ++i) {
                for (j = 0; j < columnCount; ++j) {
                    this.tileDivIndexList.set(i, j, [i, j])
                }
            }
            this.tileImgIList = new _a._aa._aac();
            this.tileImgJList = new _a._aa._aac();
            var imgFlagList = new _a._aa._aac(tileArrayLength);
            for (i = 0; i < tileArrayLength; ++i) {
                imgFlagList.set(i, false)
            }
            var m1 = 0,
                n1 = 0;
            var m2 = 0,
                n2 = columnCount - 1;
            var m3 = rowCount - 1,
                n3 = columnCount - 1;
            var m4 = rowCount - 1,
                n4 = 0;
            var breaker = false;
            while (!breaker) {
                for (i = n1; i < n2; ++i) {
                    if (imgFlagList.at(i + m1 * columnCount) === true) {
                        breaker = true;
                        break
                    }
                    imgFlagList.set(i + m1 * columnCount, true);
                    this.tileImgIList.push(m1);
                    this.tileImgJList.push(i)
                }
                for (i = m2; i < m3; ++i) {
                    if (imgFlagList.at(n2 + i * columnCount) === true) {
                        breaker = true;
                        break
                    }
                    imgFlagList.set(n2 + i * columnCount, true);
                    this.tileImgIList.push(i);
                    this.tileImgJList.push(n2)
                }
                for (i = n3; i > n4; --i) {
                    if (imgFlagList.at(i + m3 * columnCount) === true) {
                        breaker = true;
                        break
                    }
                    imgFlagList.set(i + m3 * columnCount, true);
                    this.tileImgIList.push(m3);
                    this.tileImgJList.push(i)
                }
                for (i = m4; i > m1; --i) {
                    if (imgFlagList.at(n4 + i * columnCount) === true) {
                        breaker = true;
                        break
                    }
                    imgFlagList.set(n4 + i * columnCount, true);
                    this.tileImgIList.push(i);
                    this.tileImgJList.push(n4)
                }++m1;
                ++n1;
                ++m2;
                --n2;
                --m3;
                --n3;
                --m4;
                ++n4;
                if (m1 === n2 && n2 === m3 && m3 === n4) {
                    breaker = true;
                    imgFlagList.set(m1 + m1 * columnCount, true);
                    this.tileImgIList.push(m1);
                    this.tileImgJList.push(m1)
                }
            }
            m1 = null;
            m2 = null;
            m3 = null;
            m4 = null;
            n1 = null;
            n2 = null;
            n3 = null;
            n4 = null;
            breaker = null;
            imgFlagList = null
        },
        shiftLeft: function (tileGrid, tileGridDiv) {
            var rowCount = this.tileDivIndexList.lengthX();
            var columnCount = this.tileDivIndexList.lengthY();
            var i, j, tileDiv, tileDivIndex;
            for (i = 0; i < rowCount; ++i) {
                for (j = 0; j < columnCount; ++j) {
                    tileDivIndex = this.tileDivIndexList.at(i, j);
                    tileDiv = this.tileDivList.at(tileDivIndex[0], tileDivIndex[1]);
                    if (j === 0) {
                        tileDiv.reload = true;
                        tileDiv.style.left = ((columnCount - 1) * tileGrid.tileWidth) + "px";
                        this.tileDivIndexSwapTmpList.set(i, columnCount - 1, this.tileDivIndexList.at(i, j))
                    } else {
                        tileDiv.style.left = (parseInt(tileDiv.style.left, 10) - tileGrid.tileWidth) + "px";
                        this.tileDivIndexSwapTmpList.set(i, j - 1, this.tileDivIndexList.at(i, j))
                    }
                }
            }
            tileGridDiv.style.left = (parseInt(tileGridDiv.style.left, 10) + tileGrid.tileWidth) + "px";
            var tmp = this.tileDivIndexList;
            this.tileDivIndexList = this.tileDivIndexSwapTmpList;
            this.tileDivIndexSwapTmpList = tmp
        },
        shiftRight: function (tileGrid, tileGridDiv) {
            var rowCount = this.tileDivIndexList.lengthX();
            var columnCount = this.tileDivIndexList.lengthY();
            var i, j, tileDiv, tileDivIndex;
            for (i = 0; i < rowCount; ++i) {
                for (j = 0; j < columnCount; ++j) {
                    tileDivIndex = this.tileDivIndexList.at(i, j);
                    tileDiv = this.tileDivList.at(tileDivIndex[0], tileDivIndex[1]);
                    if (j === columnCount - 1) {
                        tileDiv.reload = true;
                        tileDiv.style.left = "0px";
                        this.tileDivIndexSwapTmpList.set(i, 0, this.tileDivIndexList.at(i, j))
                    } else {
                        tileDiv.style.left = (parseInt(tileDiv.style.left, 10) + tileGrid.tileWidth) + "px";
                        this.tileDivIndexSwapTmpList.set(i, j + 1, this.tileDivIndexList.at(i, j))
                    }
                }
            }
            tileGridDiv.style.left = (parseInt(tileGridDiv.style.left, 10) - tileGrid.tileWidth) + "px";
            var tmp = this.tileDivIndexList;
            this.tileDivIndexList = this.tileDivIndexSwapTmpList;
            this.tileDivIndexSwapTmpList = tmp
        },
        shiftUp: function (tileGrid, tileGridDiv) {
            var rowCount = this.tileDivIndexList.lengthX();
            var columnCount = this.tileDivIndexList.lengthY();
            var i, j, tileDiv, tileDivIndex;
            for (i = 0; i < rowCount; ++i) {
                for (j = 0; j < columnCount; ++j) {
                    tileDivIndex = this.tileDivIndexList.at(i, j);
                    tileDiv = this.tileDivList.at(tileDivIndex[0], tileDivIndex[1]);
                    if (i === 0) {
                        tileDiv.reload = true;
                        tileDiv.style.top = ((rowCount - 1) * tileGrid.tileHeight) + "px";
                        this.tileDivIndexSwapTmpList.set(rowCount - 1, j, this.tileDivIndexList.at(i, j))
                    } else {
                        tileDiv.style.top = (parseInt(tileDiv.style.top, 10) - tileGrid.tileHeight) + "px";
                        this.tileDivIndexSwapTmpList.set(i - 1, j, this.tileDivIndexList.at(i, j))
                    }
                }
            }
            tileGridDiv.style.top = (parseInt(tileGridDiv.style.left, 10) + tileGrid.tileHeight) + "px";
            var tmp = this.tileDivIndexList;
            this.tileDivIndexList = this.tileDivIndexSwapTmpList;
            this.tileDivIndexSwapTmpList = tmp
        },
        shiftDown: function (tileGrid, tileGridDiv) {
            var rowCount = this.tileDivIndexList.lengthX();
            var columnCount = this.tileDivIndexList.lengthY();
            var i, j, tileDiv, tileDivIndex;
            for (i = 0; i < rowCount; ++i) {
                for (j = 0; j < columnCount; ++j) {
                    tileDivIndex = this.tileDivIndexList.at(i, j);
                    tileDiv = this.tileDivList.at(tileDivIndex[0], tileDivIndex[1]);
                    if (i === rowCount - 1) {
                        tileDiv.reload = true;
                        tileDiv.style.top = "0px";
                        this.tileDivIndexSwapTmpList.set(0, j, this.tileDivIndexList.at(i, j))
                    } else {
                        tileDiv.style.top = (parseInt(tileDiv.style.top, 10) + tileGrid.tileHeight) + "px";
                        this.tileDivIndexSwapTmpList.set(i + 1, j, this.tileDivIndexList.at(i, j))
                    }
                }
            }
            tileGridDiv.style.top = (parseInt(tileGridDiv.style.left, 10) - tileGrid.tileHeight) + "px";
            var tmp = this.tileDivIndexList;
            this.tileDivIndexList = this.tileDivIndexSwapTmpList;
            this.tileDivIndexSwapTmpList = tmp
        }
    });
    ImageRequestQuene = _a._aa._aag(_a._aa.QMVCObject, {
        className: 'ImageRequestQuene',
        AMOUNT: 5,
        initialize: function () {
            this.stop()
        },
        push: function (img, url, ifNoNotify) {
            this.get('quene').push([img, url]);
            !ifNoNotify && this.notify('quene')
        },
        concat: function (imgs) {
            this.set('quene', this.get('quene').concat(imgs))
        },
        stop: function () {
            var timer = this.get('timer');
            timer && window.clearTimeout(timer);
            this.set('timer', null);
            this.set('quene', [])
        },
        quene_changed: function () {
            !this.get('timer') && this.render()
        },
        getLength: function () {
            return this.get('quene').length
        },
        render: function () {
            var quene = this.get('quene');
            if (quene.length != 0) {
                var len = quene.length > this.AMOUNT ? this.AMOUNT : quene.length;
                for (var i = 0; i < len; i++) {
                    var image = quene.shift();
                    image[0].src = image[1]
                }
                this.set('timer', window.setTimeout(_a._aa._aaf.callback(this, this.render), 0))
            } else {
                this.set('timer', null)
            }
        }
    })
})();
_a._ad._aabs = _a._aa._aag({
    className: "_a._ad._aabs",
    mvc: null,
    _32: null,
    _33: 0,
    _31: 0,
    _20: null,
    initialize: function (mvc, mapNumber, tileGridDiv, tileRowCount, tileColumnCount) {
        var i, j, tileCacheImg, documentFragment;
        this.mvc = mvc;
        this._32 = new _a._aa._aad();
        this._33 = tileRowCount;
        this._31 = tileColumnCount;
        this._20 = new _a._aa._aac();
        tileGridDiv.innerHTML += ["<div id=\"", _a._aa._aaf._aafg("TileCacheDiv", mapNumber), "\" class=\"TileDiv\" style=\"display: none;\"></div>"].join("");
        if (_a._aa._aab._aabs === "BrowserTileCache") {
            documentFragment = document.createDocumentFragment();
            for (i = 0; i < tileRowCount; ++i) {
                for (j = 0; j < tileColumnCount; ++j) {
                    tileCacheImg = document.createElement("img");
                    tileCacheImg.setAttribute("class", "TileImg");
                    tileCacheImg.id = _a._aa._aaf._aafg("TileCacheImg" + (j + i * tileColumnCount), mapNumber);
                    documentFragment.appendChild(tileCacheImg);
                    this._20.push(tileCacheImg)
                }
            }
            document.getElementById(_a._aa._aaf._aafg("TileCacheDiv", mapNumber)).appendChild(documentFragment)
        }
        mvc = null;
        mapNumber = null;
        tileGridDiv = null;
        tileRowCount = null;
        tileColumnCount = null;
        i = null;
        j = null;
        tileCacheImg = null;
        documentFragment = null
    },
    getTile: function (x, y, z) {
        var tile;
        var index = z * 4;
        var xmin = this.mvc.model.scope[index++];
        var xmax = this.mvc.model.scope[index++];
        var ymin = this.mvc.model.scope[index++];
        var ymax = this.mvc.model.scope[index];
        if (x >= xmin && x <= xmax && y >= ymin && y <= ymax) {
            var separatorBackslash = "/";
            var separatorUnderline = "_";
            var strTileServer = _a._aa._aab._aabe[0];
            var tileType = _a._aa._aab.GetMapSuffix;
            var yStr = y.toString();
            var lastYNumber = yStr.charAt(yStr.length - 1);
            var serverIndex = lastYNumber % 4;
            if (serverIndex >= 0 && serverIndex < 4) {
                strTileServer = _a._aa._aab._aabe[serverIndex]
            }
            if (this.mvc.view.strTileServer) {
                strTileServer = this.mvc.view.strTileServer;
                tileType = this.mvc.view.strTileSuffix
            }
            tile = [strTileServer, z, separatorBackslash, Math.floor(x / 10), separatorBackslash, Math.floor(y / 10), separatorBackslash, x, separatorUnderline, y, tileType].join("")
        } else {
            tile = [_a._aa._aab._aabr, "/themes/", this.mvc.view.theme, "/img/no_data.gif"].join("")
        }
        x = null;
        y = null;
        z = null;
        index = null;
        xmin = null;
        xmax = null;
        ymin = null;
        ymax = null;
        return tile
    },
    getTileBase64: function () {},
    loadTileCache: function (tileImgIList, tileImgJList, rowCount, columnCount, x, y, z, this_) {
        var tileArrayLength, i, zoomInX, zoomInY, zoomInZ, zoomOutX, zoomOutY, zoomOutZ;
        tileArrayLength = rowCount * columnCount;
        zoomInX = 2 * x + Math.round(columnCount / 2);
        zoomInY = 2 * y + Math.round(rowCount / 2);
        zoomInZ = z + 1;
        for (i = tileArrayLength - 1; i >= 0; --i) {
            _a._aa._aaf.setTimeout(this_.loadOneTileInCache, 500, zoomInX + tileImgJList.at(i), zoomInY + tileImgIList.at(i), zoomInZ, i, this_)
        }
        zoomOutX = Math.round(x / 2) - Math.round(columnCount / 2) + 2;
        zoomOutY = Math.round(y / 2) - Math.round(rowCount / 2) + 1;
        zoomOutZ = z - 1;
        for (i = tileArrayLength - 1; i >= 0; --i) {
            _a._aa._aaf.setTimeout(this_.loadOneTileInCache, _a._aa._aab._aabt, zoomOutX + tileImgJList.at(i), zoomOutY + tileImgIList.at(i), zoomOutZ, i, this_)
        }
        tileImgIList = null;
        tileImgJList = null;
        rowCount = null;
        columnCount = null;
        x = null;
        y = null;
        z = null;
        this_ = null;
        tileArrayLength = null;
        i = null;
        zoomInX = null;
        zoomInY = null;
        zoomInZ = null;
        zoomOutX = null;
        zoomOutY = null;
        zoomOutZ = null
    },
    loadOneTileInCache: function (x, y, z, i, this_) {
        this_._20.at(i).src = this_.getTile(x, y, z);
        x = null;
        y = null;
        z = null;
        i = null;
        this_ = null
    }
});
_a._ad.ContextMenuRender = _a._aa._aag({
    className: "_a._ad.ContextMenuRender",
    mvc: null,
    initialize: function (mvc) {
        this.mvc = mvc;
        mvc = null
    },
    render: function (mapNumber, mapDiv, qContextMenuItemList, mvc, bIfReRender) {
        var contextMenu, table, tbody, tr, td, qContextMenuItemListLength;
        var i, qContextMenuItem, tds;
        var contextMenuContainer = document.getElementById(_a._aa._aaf._aafg("ContextMenuContainer", mapNumber));
        if (bIfReRender) {
            if (!contextMenuContainer) {
                contextMenuContainer = document.createElement("div");
                contextMenuContainer.id = _a._aa._aaf._aafg("ContextMenuContainer", mapNumber);
                contextMenuContainer.setAttribute("class", "contextMenuContainer");
                contextMenuContainer.setAttribute("className", "contextMenuContainer");
                contextMenuContainer.style.display = 'none';
                var contextMenuHeadDiv = document.createElement("div");
                contextMenuHeadDiv.id = _a._aa._aaf._aafg("ContextMenuHead", mapNumber);
                contextMenuHeadDiv.setAttribute("class", "contextMenuHead");
                contextMenuHeadDiv.setAttribute("className", "contextMenuHead");
                if (_a._aa._aaf._aafj() === "IE") {
                    contextMenuHeadDiv.style.position = "absolute";
                    contextMenuHeadDiv.style.left = "0px";
                    contextMenuHeadDiv.style.top = "-6px"
                }
                contextMenuContainer.appendChild(contextMenuHeadDiv);
                contextMenu = document.createElement("div");
                contextMenu.id = _a._aa._aaf._aafg("ContextMenu", mapNumber);
                contextMenu.setAttribute("class", "contextMenu");
                contextMenu.setAttribute("className", "contextMenu");
                table = document.createElement("table");
                tbody = document.createElement("tbody");
                var contextMenuTailDiv = document.createElement("div");
                contextMenuTailDiv.id = _a._aa._aaf._aafg("ContextMenuTail", mapNumber);
                contextMenuTailDiv.setAttribute("class", "contextMenuTail");
                contextMenuTailDiv.setAttribute("className", "contextMenuTail");
                contextMenuContainer.appendChild(contextMenuTailDiv)
            }
            this.items = this.items || [];
            var len = qContextMenuItemList.length > this.items.length ? qContextMenuItemList.length : this.items.length;
            for (i = len - 1; i >= 0; --i) {
                if (!qContextMenuItemList[i]) {
                    var item = this.items[i];
                    if (item) {
                        _a._aa._aaf.removeNode(item.parentNode);
                        this.items.splice(i, 1)
                    }
                    qContextMenuItemList.remove(i);
                    continue
                }
                if (this.items[i]) {
                    td = this.items[i]
                } else {
                    tr = document.createElement("tr");
                    td = document.createElement("td");
                    tr.appendChild(td);
                    this.items.push(td);
                    tbody.appendChild(tr)
                }
                td.setAttribute("index", i);
                td.setAttribute("mapNumber", mapNumber);
                if (qContextMenuItemList.at(i).menuText !== "separator") {
                    td.innerHTML = qContextMenuItemList.at(i).menuText;
                    _a._aa.QMVCEvent.addDomListener(td, 'mouseover', function (event) {
                        event = event || window.event;
                        this.style.color = "#76a045"
                    });
                    _a._aa.QMVCEvent.addDomListener(td, 'mouseout', function (event) {
                        event = event || window.event;
                        this.style.color = "#56695b"
                    });
                    var handler = qContextMenuItemList.at(i).handler;
                    _a._aa.QMVCEvent.addDomListener(td, 'click', _a._aa._aaf.callback(td, function (event, handler) {
                        event = event || window.event;
                        contextMenuContainer.style.display = "none";
                        handler(event)
                    }), [handler])
                } else {
                    td.innerHTML = "<div style='border-top:1px dashed " + "#cccccc;height: 1px;overflow:hidden'></div>"
                }
            }
            contextMenu.innerHTML = "";
            table.appendChild(tbody);
            contextMenu.appendChild(table);
            contextMenuContainer.appendChild(contextMenu);
            mapDiv.parentNode.appendChild(contextMenuContainer);
            contextMenuContainer.oncontextmenu = function (event) {
                return false
            };
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'contextmenu', function (event) {
                event = event || window.event;
                var pageXY = _a._aa._aaf.fixEvent(event);
                contextMenuContainer.style.left = (pageXY[0] - mvc.view.mapDivPageLeft) + "px";
                contextMenuContainer.style.top = (pageXY[1] - mvc.view.mapDivPageTop) + "px";
                contextMenuContainer.style.display = "block";
                _a._aa._aaf.stopEvent(event);
                pageXY = null;
                event = null;
                return false
            });
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'mousedown', function () {
                contextMenuContainer.style.display = "none"
            });
            _a._aa.QMVCEvent.addDomListener(mapDiv, 'keyup', function (event) {
                event = event || window.event;
                if (event.keyCode === 27) {
                    contextMenuContainer.style.display = "none"
                }
                event = null
            })
        }
        mapNumber = null;
        mapDiv = null;
        table = null;
        tbody = null;
        tr = null;
        td = null;
        i = null;
        qContextMenuItem = null
    },
    initContextMenu: function () {}
});
_a._ad.QControlRender = _a._aa._aag({
    className: "_a._ad.QControlRender",
    mvc: null,
    init: false,
    initialize: function (mvc) {
        this.mvc = mvc;
        this.initQControl();
        mvc = null
    },
    render: function (mapNumber, qControlsDiv, qControlList) {
        if (this.init === false) {
            var qControlListLength = qControlList.length();
            for (var i = 0; i < qControlListLength; ++i) {
                var qControl = qControlList.at(i);
                if (qControl.init === false) {
                    var qControlDiv = document.createElement("div");
                    if (qControl.className == '_a._ac._acd' || qControl.bindTo) {
                        qControl.draw()
                    }
                    qControl.render(qControlDiv);
                    qControlDiv.setAttribute("class", "qControlDiv");
                    qControlDiv.setAttribute("className", "qControlDiv");
                    if (qControl.className != '_a._ac._acd' && (!qControl.bindTo)) {
                        qControlDiv.style.left = qControl.left + "px";
                        qControlDiv.style.top = qControl.top + "px";
                        qControlDiv.style.width = qControl.width + "px";
                        qControlDiv.style.height = qControl.height + "px"
                    }
                    qControlDiv.style.zIndex = qControl.zIndex;
                    qControlsDiv.appendChild(qControlDiv);
                    if (qControl.postAddControl) {
                        qControl.postAddControl()
                    }
                    qControl.init = true
                }
            }
            this.init = true
        }
    },
    forceRedraw: function (qControlList) {
        for (var i = 0, len = qControlList.length(); i < len; ++i) {
            var qControl = qControlList.at(i);
            qControl.render()
        }
    },
    removeQControl: function (index, mapNumber) {
        var qControlsDiv;
        qControlsDiv = document.getElementById(_a._aa._aaf._aafg("qControlsDiv", mapNumber));
        if (index >= 0 && index < qControlsDiv.childNodes.length) {
            qControlsDiv.removeChild(qControlsDiv.childNodes[index])
        }
        index = null;
        mapNumber = null;
        qControlsDiv = null
    },
    initQControl: function () {
        control = null
    }
});
_a._ad.LoadingMask = _a._aa._aag({
    className: "_a._ad.LoadingMask",
    loadMaskDiv: null,
    loadingMaskOpacityDiv: null,
    initialize: function (view, mapDiv) {
        this.loadMaskDiv = document.createElement("div");
        this.loadMaskDiv.className = "loadingMaskDiv";
        this.loadMaskDiv.setAttribute("class", "loadingMaskDiv");
        this.loadMaskDiv.onmousedown = function (event) {
            event = event || window.event;
            _a._aa._aaf.stopBubble(event)
        };
        this.loadMaskDiv.innerHTML = ["<table width=\"100%\" height=\"100%\" cellspacing=\"0\" cellpadding=\"0\"><tr><td><center>", "<img src=", [_a._aa._aab._aabr, "/themes/", view.theme, "/img/loading2.gif"].join(""), "></img>", "</center></td></tr></table>"].join("");
        this.loadingMaskOpacityDiv = document.createElement("div");
        this.loadingMaskOpacityDiv.className = "loadingMaskOpacityDiv";
        this.loadingMaskOpacityDiv.setAttribute("class", "loadingMaskOpacityDiv");
        this.unmask();
        mapDiv.appendChild(this.loadingMaskOpacityDiv);
        mapDiv.appendChild(this.loadMaskDiv)
    },
    mask: function () {
        this.loadMaskDiv.style.display = "block";
        this.loadingMaskOpacityDiv.style.display = "block"
    },
    unmask: function () {
        this.loadMaskDiv.style.display = "none";
        this.loadingMaskOpacityDiv.style.display = "none"
    }
});
if (_a._ab === undefined) {
    _a._ab = {}
}
_a._ab._aba = _a._aa._aag({
    className: "_a._ab._aba",
    mvc: null,
    _6: null,
    _15: null,
    _9: null,
    initialize: function (mvc) {
        this.mvc = mvc;
        this._6 = new _a._aa._aad();
        this._15 = new _a._aa._aae();
        this._9 = new _a._aa._aad();
        mvc = null
    },
    registerEventHandler: function (eventName, eventHandler) {
        var handlerList;
        if ((handlerList = this._6.get(eventName)) !== null) {
            handlerList.push(eventHandler)
        } else {
            handlerList = new _a._aa._aac();
            handlerList.push(eventHandler);
            this._6.set(eventName, handlerList)
        }
        eventName = null;
        eventHandler = null;
        handlerList = null
    },
    triggerEvent: function (qevent) {
        var handlerList, listenerList, i, handlerListLength, listenerListLength;
        switch (qevent.eventType) {
        case "ViewSizeChanged":
            if ((handlerList = this._6.get(qevent.eventType)) !== null) {
                handlerListLength = handlerList.length();
                for (i = 0; i < handlerListLength; ++i) {
                    handlerList.at(i).onViewSizeChanged(qevent)
                }
            }
            if ((listenerList = this._9.get('bounds_changed')) !== null) {
                listenerListLength = listenerList.length();
                for (i = 0; i < listenerListLength; ++i) {
                    listenerList.at(i).apply(null, [])
                }
            }
            break;
        case "CenterChanged":
            _a._aa._aaf.centerChangedFixDisplayBBox(qevent, this.mvc.model.displayBBox);
            if ((handlerList = this._6.get(qevent.eventType)) !== null) {
                handlerListLength = handlerList.length();
                for (i = 0; i < handlerListLength; ++i) {
                    handlerList.at(i).onCenterChanged(qevent)
                }
            }
            if ((listenerList = this._9.get('center_changed')) !== null) {
                listenerListLength = listenerList.length();
                for (i = 0; i < listenerListLength; ++i) {
                    listenerList.at(i).apply(null, [])
                }
            }
            break;
        default:
            this._15.enqueue(qevent);
            _a._aa._aaf.setTimeout(this.dispatchEvent, _a._aa._aab._aabc, this)
        }
        qevent = null;
        handlerList = null;
        listenerList = null;
        i = null;
        handlerListLength = null;
        listenerListLength = null
    },
    dispatchEvent: function (this_) {
        var qevent, handlerList, handlerListLength, listenerList, listenerListLength, i, renderEvent = null,
            zoomLevelChangedEvent = null;
        var bOptimalRenderEvent = false;
        while (!this_._15.empty()) {
            qevent = this_._15.dequeue();
            if (qevent.eventType === "Render") {
                if (qevent.isOptimal) {
                    bOptimalRenderEvent = true
                }
                renderEvent = qevent;
                continue
            } else if (qevent.eventType === "ZoomLevelChanged") {
                if (zoomLevelChangedEvent === null) {
                    zoomLevelChangedEvent = new _a._ab._abb.ZoomLevelChangedEvent(qevent.zoomLevel, qevent.deltaZoomLevel, qevent.zoomMode, qevent.mousePositionLeft, qevent.mousePositionTop)
                } else {
                    if (qevent.zoomLevel !== null) {
                        zoomLevelChangedEvent.zoomLevel = qevent.zoomLevel;
                        zoomLevelChangedEvent.deltaZoomLevel = 0
                    } else {
                        zoomLevelChangedEvent.deltaZoomLevel += qevent.deltaZoomLevel
                    }
                }
                continue
            }
            if ((handlerList = this_._6.get(qevent.eventType)) !== null) {
                handlerListLength = handlerList.length();
                for (i = 0; i < handlerListLength; ++i) {
                    switch (qevent.eventType) {
                    case "TileGridReInit":
                        handlerList.at(i).onTileGridReInit(qevent);
                        break;
                    case "ThemeChanged":
                        handlerList.at(i).onThemeChanged(qevent);
                        break;
                    case "ContextMenuItemAdded":
                        handlerList.at(i).onContextMenuItemAdded(qevent);
                        break;
                    case "QOverlayAdded":
                        handlerList.at(i).onQOverlayAdded(qevent);
                        break;
                    case "QOverlayModified":
                        handlerList.at(i).onQOverlayModified(qevent);
                        break;
                    case "QOverlayMoved":
                        handlerList.at(i).onQOverlayMoved(qevent);
                        break;
                    case "QOverlayRemoved":
                        handlerList.at(i).onQOverlayRemoved(qevent);
                        break;
                    case "QOverlaysCleared":
                        handlerList.at(i).onQOverlaysCleared(qevent);
                        break;
                    default:
                        break
                    }
                }
            }
        }
        if (zoomLevelChangedEvent !== null) {
            if ((handlerList = this_._6.get(zoomLevelChangedEvent.eventType)) !== null) {
                if (zoomLevelChangedEvent.zoomLevel === undefined || zoomLevelChangedEvent.zoomLevel === null) {
                    zoomLevelChangedEvent.zoomLevel = this_.mvc.model.tileGrid.baseTileZ + zoomLevelChangedEvent.deltaZoomLevel;
                    zoomLevelChangedEvent.deltaZoomLevel = undefined
                }
                if (this_.mvc.model.zmin !== null) {
                    if (zoomLevelChangedEvent.zoomLevel < this_.mvc.model.zmin) {
                        zoomLevelChangedEvent.zoomLevel = this_.mvc.model.zmin
                    } else if (zoomLevelChangedEvent.zoomLevel > this_.mvc.model.zmax) {
                        zoomLevelChangedEvent.zoomLevel = this_.mvc.model.zmax
                    }
                }
                handlerListLength = handlerList.length();
                for (i = 0; i < handlerListLength; ++i) {
                    handlerList.at(i).onZoomLevelChanged(zoomLevelChangedEvent)
                }
            }
            if ((listenerList = this_._9.get('zoom_changed')) !== null) {
                listenerListLength = listenerList.length();
                for (i = 0; i < listenerListLength; ++i) {
                    listenerList.at(i).apply(null, [])
                }
            }
        }
        if (renderEvent !== null) {
            renderEvent.isOptimal = bOptimalRenderEvent;
            if ((handlerList = this_._6.get(renderEvent.eventType)) !== null) {
                handlerListLength = handlerList.length();
                for (i = 0; i < handlerListLength; ++i) {
                    handlerList.at(i).onRender(renderEvent)
                }
            }
        }
        _a._aa._aaf.gc();
        this_ = null;
        qevent = null;
        handlerList = null;
        handlerListLength = null;
        listenerList = null;
        listenerListLength = null;
        i = null;
        renderEvent = null;
        zoomLevelChangedEvent = null
    },
    addEventListener: function (eventName, callback) {
        var listenerList;
        if ((listenerList = this._9.get(eventName)) !== null) {
            listenerList.push(callback)
        } else {
            listenerList = new _a._aa._aac();
            listenerList.push(callback);
            this._9.set(eventName, listenerList)
        }
        listenerList = null;
        var eventListener = new _a._ab.EventListener(eventName, callback);
        return eventListener
    },
    removeEventListener: function (eventListener) {
        var i, listenerList, len;
        var eventName = eventListener.eventName;
        var callback = eventListener.callback;
        if ((listenerList = this._9.get(eventName)) !== null) {
            len = listenerList.length();
            for (i = 0; i < len; i++) {
                if (listenerList.at(i) == callback) {
                    listenerList.remove(i);
                    break
                }
            }
        }
    }
});
_a._ab._abb = _a._aa._aag({
    className: "_a._ab._abb	",
    eventType: null,
    initialize: function () {}
});
_a._ab._abb.ViewSizeChangedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.ViewSizeChangedEvent",
    eventType: "ViewSizeChanged",
    width: null,
    height: null,
    initialize: function (width, height) {
        this.width = width;
        this.height = height;
        width = null;
        height = null
    }
});
_a._ab._abb.CenterChangedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.CenterChangedEvent",
    eventType: "CenterChanged",
    lng: null,
    lat: null,
    initialize: function (p1, p2) {
        this.lng = p1;
        this.lat = p2;
        p1 = null;
        p2 = null
    }
});
_a._ab._abb.ZoomLevelChangedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.ZoomLevelChangedEvent",
    eventType: "ZoomLevelChanged",
    zoomLevel: null,
    deltaZoomLevel: 0,
    zoomMode: null,
    mousePositionLeft: null,
    mousePositionTop: null,
    initialize: function (zoomLevel, deltaZoomLevel, zoomMode, mousePositionLeft, mousePositionTop) {
        this.zoomLevel = zoomLevel;
        this.deltaZoomLevel = deltaZoomLevel;
        this.zoomMode = zoomMode;
        this.mousePositionLeft = mousePositionLeft;
        this.mousePositionTop = mousePositionTop;
        zoomLevel = null;
        deltaZoomLevel = null;
        zoomMode = null;
        mousePositionLeft = null;
        mousePositionTop = null
    }
});
_a._ab._abb.RenderEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.RenderEvent",
    eventType: "Render",
    isOptimal: false,
    tileGrid: null,
    qOverlayChangeList: null,
    initialize: function (tileGrid, qOverlayChangeList, isOptimal) {
        if (isOptimal === true) {
            this.isOptimal = true
        }
        this.tileGrid = tileGrid;
        this.qOverlayChangeList = qOverlayChangeList;
        isOptimal = null;
        tileGrid = null;
        qOverlayChangeList = null
    }
});
_a._ab._abb.TileGridReInitEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.TileGridReInitEvent",
    isOptimal: false,
    eventType: "TileGridReInit",
    initialize: function (isOptimal) {
        this.isOptimal = isOptimal;
        isOptimal = null
    }
});
_a._ab._abb.ThemeChangedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.ThemeChangedEvent",
    eventType: "ThemeChanged",
    theme: "default",
    initialize: function (theme) {
        this.theme = theme;
        theme = null
    }
});
_a._ab._abb.ContextMenuItemAddedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.ContextMenuItemAddedEvent",
    eventType: "ContextMenuItemAdded",
    contextMenuItem: null,
    initialize: function (contextMenuItem) {
        this.contextMenuItem = contextMenuItem;
        contextMenuItem = null
    }
});
_a._ab._abb.QOverlayAddedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.QOverlayAddedEvent",
    eventType: "QOverlayAdded",
    qOverlay: null,
    initialize: function (qOverlay) {
        this.qOverlay = qOverlay;
        qOverlay = null
    }
});
_a._ab._abb.QOverlayModifiedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.QOverlayModifiedEvent",
    eventType: "QOverlayModified",
    qOverlay: null,
    initialize: function (qOverlay) {
        this.qOverlay = qOverlay;
        qOverlay = null
    }
});
_a._ab._abb.QOverlayMovedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.QOverlayMovedEvent",
    eventType: "QOverlayMoved",
    qOverlay: null,
    initialize: function (qOverlay) {
        this.qOverlay = qOverlay;
        qOverlay = null
    }
});
_a._ab._abb.QOverlayRemovedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.QOverlayRemovedEvent",
    eventType: "QOverlayRemoved",
    qOverlay: null,
    initialize: function (qOverlay) {
        this.qOverlay = qOverlay;
        qOverlay = null
    }
});
_a._ab._abb.QOverlaysClearedEvent = _a._aa._aag(_a._ab._abb, {
    className: "_a._ab._abb	.QOverlaysClearedEvent",
    eventType: "QOverlaysCleared",
    initialize: function (qOverlay) {}
});
if (_a.Search === undefined) {
    _a.Search = {}
}
_a.Search.VERSION_NUMBER = "1.0.0";
_a.Search.ServiceUri = "http://map.qq.com/";
_a.Search._aafj = function () {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("msie") >= 0) {
        return "IE"
    } else if (agent.indexOf("firefox") >= 0) {
        return "FF"
    } else if (agent.indexOf("opera") >= 0) {
        return "OPERA"
    } else if (agent.indexOf("chrome") >= 0) {
        return "CHROME"
    } else if (agent.indexOf("safari") >= 0) {
        return "SAFARI"
    } else {
        return "FF"
    }
};
_a.Search._aafj.isIE6 = function () {
    if (_a.Search._aafj() === "IE") {
        var arVersion = navigator.appVersion.split("MSIE");
        var version = parseFloat(arVersion[1]);
        if ((version >= 5.5 && version < 7.0) && (document.body.filters)) {
            return true
        }
    }
    return false
};
_a.Search.bind = function (pars, onComplete, argus) {
    var url = _a.Search.ServiceUri;
    var proxy;
    var params;
    proxy = document.createElement("script");
    proxy.setAttribute("charset", "gbk");
    proxy.id = Math.random();
    document.getElementsByTagName("head")[0].appendChild(proxy);
    params = pars + "&randomKey=" + Math.random();
    proxy.src = url + "?" + params;
    window.OLR = undefined;
    if (_a.Search._aafj() === "IE") {
        proxy.onreadystatechange = function () {
            if (proxy.readyState == "loaded") {
                if (OLR === undefined || OLR !== null) {
                    onComplete(argus, OLR)
                }
                document.getElementsByTagName("head")[0].removeChild(proxy);
                proxy = null
            }
        }
    } else {
        proxy.onload = function () {
            if (onComplete !== null) {
                onComplete(argus, OLR)
            }
            document.getElementsByTagName("head")[0].removeChild(proxy)
        }
    }
    url = null;
    pars = null;
    asynchronous = null
};
_a.Search.QRequest = _a._aa._aag({
    className: "_a.Search.QRequest",
    strQueryType: null,
    initialize: function (queryType) {
        this.strQueryType = queryType
    },
    isValid: function () {
        return false
    },
    toQueryString: function () {
        return null
    }
});
_a.Search.QPOISearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QPOISearchRequest",
    strCity: null,
    strKeyword: null,
    iType: null,
    iFirstPageNum: null,
    iResultCount: null,
    initialize: function (city, keyword, type, option) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["poi"]);
        this.strCity = city;
        this.strKeyword = keyword;
        this.iType = type;
        if (option) {
            if (option.pageNum !== undefined) {
                this.iFirstPageNum = option.pageNum
            }
            if (option.resultCount !== undefined) {
                this.iResultCount = option.resultCount
            }
        }
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.strKeyword;
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity)].join("");
        if (this.strKeyword) {
            queryString += ("&wd=" + encodeURIComponent(this.strKeyword))
        }
        if (this.iType !== undefined) {
            queryString += ("&tp=" + this.iType)
        }
        if (this.iFirstPageNum) {
            queryString += ("&pn=" + this.iFirstPageNum)
        }
        if (this.iResultCount) {
            queryString += ("&rn=" + this.iResultCount)
        }
        return queryString
    }
});
_a.Search.QPOISearchRequestOption = {
    pageNum: null,
    resultCount: null
};
_a.Search.QResult = _a._aa._aag({
    className: "_a.Search.QResult",
    type: null,
    error: null,
    time: null,
    initialize: function (obj) {
        if (obj && obj.info) {
            this.type = obj.info.type;
            this.error = obj.info.error;
            this.time = obj.info.time
        }
        obj = null
    }
});
if (_a.Search.QPOISearchResult === undefined) {
    _a.Search.QPOISearchResult = {}
}
_a.Search.QPOISearchResult.NormalResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QPOISearchResult.NormalResult",
    totalCount: 0,
    currentCount: 0,
    pois: null,
    city: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            result = null;
            return
        }
        this.totalCount = result.info.total;
        this.currentCount = result.info.rnum;
        if (this.totalCount > 0 && this.currentCount > 0) {
            this.pois = [];
            var i;
            var nCurrentPOIs = result.detail.pois.length;
            for (i = 0; i < nCurrentPOIs; i++) {
                this.pois.push(new _a.Search.QPOISearchResult.POI(result.detail.pois[i]))
            }
            i = null;
            nCurrentPOIs = null
        }
        if (result.detail.city !== undefined) {
            this.city = new _a.Search.QPOISearchResult.City(result.detail.city)
        }
        obj = null
    }
});
_a.Search.QPOISearchResult.MultiResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QPOISearchResult.MultiResult",
    what_query: null,
    cities: null,
    indp_cities: null,
    city: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            result = null;
            return
        }
        if (result.info.what_query) {
            this.what_query = result.info.what_query
        }
        this.cities = result.detail.result.cities;
        this.indp_cities = result.detail.result.indp_cities;
        this.city = result.detail.city;
        this.area = result.detail.area
    }
});
_a.Search.QPOISearchResult.DivisionResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QPOISearchResult.DivisionResult",
    query: null,
    what_query: null,
    city: null,
    area: null,
    hints: null,
    brief: null,
    pictures: null,
    children: null,
    parent: null,
    segements: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            result = null;
            return
        }
        if (result.info !== undefined) {
            if (result.info.query) {
                this.query = result.info.query
            }
            if (result.info.what_query) {
                this.what_query = result.info.what_query
            }
        }
        this.city = new _a.Search.QPOISearchResult.City(result.detail.city);
        this.area = result.detail.area;
        this.hints = result.detail.hints;
        this.brief = result.detail.brief;
        this.pictures = result.detail.pictures;
        this.children = result.detail.children;
        this.parent = result.detail.parent;
        this.segements = result.detail.segements
    }
});
_a.Search.QPOISearchResult.POI = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.POI",
    uid: null,
    name: null,
    address: '',
    phone: '',
    classes: null,
    zip: '',
    info: '',
    pointx: null,
    pointy: null,
    geotype: null,
    poitype: null,
    source: '',
    ifDetail: 0,
    distance: 0,
    initialize: function (obj) {
        this.uid = obj.uid;
        this.name = obj.name;
        this.address = obj.addr;
        this.phone = obj.phone;
        this.classes = obj.classes;
        this.zip = obj.zip;
        this.info = obj.pinfo;
        this.pointx = _a._aa._aaf._aafa.lngFromProjectionTo4326(obj.pointx);
        this.pointy = _a._aa._aaf._aafa.latFromProjectionTo4326(obj.pointy);
        this.geotype = obj.geotype;
        this.poitype = obj.poitype;
        this.source = obj.src;
        this.ifDetail = obj.detail;
        this.distance = obj.dis;
        obj = null
    }
});
_a.Search.QPOISearchResult.Division = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.Division",
    code: null,
    name: null,
    type: null,
    level: null,
    pointx: null,
    pointy: null,
    geotype: null,
    cities: null,
    path: null,
    initialize: function (obj) {
        this.code = obj.ccode;
        this.name = obj.cname;
        this.type = obj.ctype;
        this.level = obj.level;
        this.pointx = _a._aa._aaf._aafa.lngFromProjectionTo4326(obj.pointx);
        this.pointy = _a._aa._aaf._aafa.latFromProjectionTo4326(obj.pointy);
        this.geotype = obj.geotype;
        if (obj.cities !== undefined) {
            this.cities = obj.cities
        }
        this.path = obj.path;
        obj = null
    }
});
_a.Search.QPOISearchResult.DivisionIndex = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.DivisionIndex",
    code: null,
    name: null,
    type: null,
    initialize: function (obj) {
        this.code = obj.ccode;
        this.name = obj.cname;
        this.type = obj.ctype;
        obj = null
    }
});
_a.Search.QPOISearchResult.City = _a._aa._aag(_a.Search.QPOISearchResult.Division, {
    className: "_a.Search.QPOISearchResult.City",
    bus: null,
    initialize: function (obj) {
        _a.Search.QPOISearchResult.Division.prototype.initialize.apply(this, [obj]);
        if (obj.bus !== undefined) {
            this.bus = obj.bus
        }
        obj = null
    }
});
_a.Search.QPOISearchResult.OtherPOICity = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.OtherPOICity",
    code: null,
    name: null,
    poiCount: null,
    initialize: function (obj) {
        this.code = obj.ccode;
        this.name = obj.cname;
        this.poiCount = obj.cnum;
        obj = null
    }
});
_a.Search.QPOISearchResult.Province = _a._aa._aag(_a.Search.QPOISearchResult.Division, {
    className: "_a.Search.QPOISearchResult.Province",
    initialize: function (obj) {
        _a.Search.QPOISearchResult.Division.prototype.initialize.apply(this, [obj]);
        obj = null
    }
});
_a.Search.QPOISearchResult.OtherPOIProvince = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.OtherPOIProvince",
    code: null,
    name: null,
    poiCount: null,
    cities: null,
    initialize: function (obj) {
        this.code = obj.pcode;
        this.name = obj.pname;
        this.poiCount = obj.pnum;
        this.cities = [];
        var i;
        var cities_length = obj.cities.length;
        var tmpCity = null;
        for (i = 0; i < cities_length; i++) {
            tmpCity = new _a.Search.QPOISearchResult.OtherPOICity(obj.cities[i]);
            this.cities.push(tmpCity)
        }
        i = null;
        cities_length = null;
        obj = null
    }
});
_a.Search.QPOIDetailResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QPOIDetailResult",
    poiDetail: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            return
        }
        this.poiDetail = new _a.Search.QPOISearchResult.POIDetail(result.detail);
        result = null
    }
});
_a.Search.QPOISearchResult.POIDetail = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.POIDetail",
    uid: null,
    name: null,
    address: '',
    phone: '',
    classes: null,
    zip: '',
    info: '',
    pointx: null,
    pointy: null,
    geotype: null,
    source: '',
    ext: null,
    initialize: function (obj) {
        this.uid = obj.uid;
        this.name = obj.name;
        this.address = obj.addr;
        this.phone = obj.phone;
        this.classes = obj.classes;
        this.zip = obj.zip;
        this.info = obj.pinfo;
        this.pointx = _a._aa._aaf._aafa.lngFromProjectionTo4326(obj.pointx);
        this.pointy = _a._aa._aaf._aafa.latFromProjectionTo4326(obj.pointy);
        this.geotype = obj.geotype;
        this.source = obj.src;
        this.ext = obj.ext;
        obj = null
    }
});
_a.Search.QChangeCityResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QChangeCityResult",
    city: null,
    sample: null,
    end: null,
    initialize: function (obj) {
        _a.Search.QResult.prototype.initialize.apply(this, [obj]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        this.city = new _a.Search.QPOISearchResult.City(obj.detail);
        if (obj.detail !== undefined) {
            if (obj.detail.sample !== undefined) {
                this.sample = obj.detail.sample
            }
            if (obj.detail.end !== undefined) {
                this.end = obj.detail.end
            }
        }
        obj = null
    }
});
_a.Search.QGetDefaultCityResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QGetDefaultCityResult",
    city: null,
    initialize: function (obj) {
        _a.Search.QResult.prototype.initialize.apply(this, [obj]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        this.city = new _a.Search.QPOISearchResult.City(obj.detail);
        obj = null
    }
});
_a.Search.QIndexResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QIndexResult",
    city: null,
    cities: null,
    sample: null,
    initialize: function (obj) {
        _a.Search.QResult.prototype.initialize.apply(this, [obj]);
        if (this.error !== 0) {
            return
        }
        this.city = new _a.Search.QPOISearchResult.City(obj.detail);
        this.cities = obj.detail.cities;
        this.sample = obj.detail.sample;
        obj = null
    }
});
_a.Search.QLASearchResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QLASearchResult",
    uid: null,
    pointsType: null,
    bound: null,
    patterns: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        this.uid = result.detail.uid;
        var strPXYs = result.detail.pxys;
        var arrRawString = strPXYs.split("|");
        this.pointsType = parseInt(arrRawString[0], 10);
        this.bound = [];
        var arrBoundPoints = arrRawString[1].split(";");
        var arrBoundPoint1 = arrBoundPoints[0].split(",");
        var arrBoundPoint2 = arrBoundPoints[1].split(",");
        var lng1 = _a._aa._aaf._aafa.lngFromProjectionTo4326(parseInt(arrBoundPoint1[0], 10));
        var lat1 = _a._aa._aaf._aafa.latFromProjectionTo4326(parseInt(arrBoundPoint1[1], 10));
        var lng2 = _a._aa._aaf._aafa.lngFromProjectionTo4326(parseInt(arrBoundPoint2[0], 10));
        var lat2 = _a._aa._aaf._aafa.latFromProjectionTo4326(parseInt(arrBoundPoint2[1], 10));
        this.bound.push(lng1);
        this.bound.push(lat1);
        this.bound.push(lng2);
        this.bound.push(lat2);
        this.patterns = [];
        var arrPatterns = arrRawString[2].split(";");
        var nPatternCount = arrPatterns.length;
        for (var i = 0; i < nPatternCount - 1; ++i) {
            this.patterns[i] = [];
            var arrPoints = arrPatterns[i].split(",");
            var nPointCount = arrPoints.length;
            for (var j = 0; j < nPointCount; ++j) {
                var lng = _a._aa._aaf._aafa.lngFromProjectionTo4326(parseInt(arrPoints[j], 10));
                var lat = _a._aa._aaf._aafa.latFromProjectionTo4326(parseInt(arrPoints[++j], 10));
                this.patterns[i].push(lng);
                this.patterns[i].push(lat)
            }
        }
        result = null
    }
});
_a.Search.QQuerySuggestResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QQuerySuggestResult",
    suggestions: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        this.suggestions = [];
        var result_length = result.detail.length;
        for (var i = 0; i < result_length; i++) {
            var suggest = new _a.Search.QQuerySuggestResult.Suggest(result.detail[i]);
            this.suggestions.push(suggest)
        }
        result = null
    }
});
_a.Search.QQuerySuggestResult.Suggest = _a._aa._aag({
    className: "_a.Search.QPOISearchResult.Suggest",
    name: null,
    initialize: function (obj) {
        this.name = obj.name;
        obj = null
    }
});
_a.Search.QSetDefaultCityResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QSetDefaultCityResult",
    initialize: function (obj) {
        _a.Search.QResult.prototype.initialize.apply(this, [obj]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        obj = null
    }
});﻿_a.Search.getDefaultCity = function (callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = new _a.Search.QGetDefaultCityResult(result);
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = "qt=gc";
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.setDefaultCity = function (city, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = new _a.Search.QSetDefaultCityResult(result);
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=sc", "&c=", encodeURIComponent(city)].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.setCurrentCity = function (city, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = new _a.Search.QChangeCityResult(result);
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=cc", "&c=", encodeURIComponent(city)].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.querySuggest = function (city, keyword, type, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = result;
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=sg", "&c=", city, "&wd=", encodeURIComponent(keyword), "&tp=", type].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.poiSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = null;
            switch (result.info.type) {
            case 6:
                resultObject = new _a.Search.QPOISearchResult.NormalResult(result);
                break;
            case 8:
                resultObject = new _a.Search.QPOISearchResult.MultiResult(result);
                break;
            case 9:
                resultObject = new _a.Search.QPOISearchResult.DivisionResult(result);
                break;
            default:
                resultObject = result
            }
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.poiDetail = function (guid, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = new _a.Search.QPOIDetailResult(result);
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=dt", "&guid=", guid].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.LASearch = function (level, guid, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = new _a.Search.QLASearchResult(result);
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=la", "&l=", level, "&guid=", guid].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.nearBySearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = new _a.Search.QNearBySearchResult(result);
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.sightSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = new _a.Search.QSightSearchResult(result);
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.roamSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = new _a.Search.QRoamSearchResult(result);
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.startEndBusSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = result;
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.startOrEndBusSearch = function (city, keyword, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = result;
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=bus", "&c=", city, "&wd=", keyword].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.transferBusSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = result;
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.startEndDriveSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = result;
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.startOrEndDriveSearch = function (city, keyword, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = result;
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=driveft", "&c=", city, "&wd=", keyword].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.driveSearch = function (request, callback, args) {
    if (request.isValid()) {
        var onComplete = function (argus, result) {
            var resultObject = result;
            if (argus && result) {
                argus = [resultObject].concat(argus);
                callback.apply(null, argus)
            }
        };
        var queryString = request.toQueryString();
        if (!args) {
            args = []
        }
        _a.Search.bind(queryString, onComplete, args)
    }
};
_a.Search.getTaxiFee = function (city, startLng, startLat, destLng, destLat, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = result;
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=taxfee", "&c=", city, "&start=", startLng, ",", startLat, "&dest=", destLng, ",", destLat].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a.Search.geoCoding = function (keyword, callback, args) {
    var onComplete = function (argus, result) {
        var resultObject = result;
        if (argus && result) {
            argus = [resultObject].concat(argus);
            callback.apply(null, argus)
        }
    };
    var queryString = ["qt=geoc", "&wd=", keyword].join("");
    if (!args) {
        args = []
    }
    _a.Search.bind(queryString, onComplete, args)
};
_a._ac._acd.QAddPolylineControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QAddPolylineControl",
    img: null,
    opacity: null,
    onAddPolyline: null,
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments);
        this.img = _a._aa._aab._aabr + "/themes/default/img/addPolylineBtn.gif";
        this.opacity = _a._aa._aab.QPaintControlOpacity
    },
    render: function (qControlDiv) {
        var documentFragment = document.createDocumentFragment();
        var mvc = this.mvc;
        var this_ = this;
        this.createAddPolylineBtn(documentFragment, function () {
            var mapDiv = document.getElementById(_a._aa._aaf._aafg("MapDiv", mvc.view._0));
            var addPolylineLayerDiv = document.createElement("div");
            addPolylineLayerDiv.id = "addPolylineLayerDiv";
            addPolylineLayerDiv.setAttribute("style", "z-index:" + _a._aa._aab._aabl);
            addPolylineLayerDiv.style.position = "absolute";
            addPolylineLayerDiv.style.width = "100%";
            addPolylineLayerDiv.style.height = "100%";
            addPolylineLayerDiv.style.cursor = "pointer";
            mapDiv.appendChild(addPolylineLayerDiv);
            var newLine;
            var strokeColor = "blue";
            var strokeWeight = "3px";
            var FIRST_CLICK = true;
            var points = new Array();
            var points_count = 0;
            if (_a._aa._aaf._aafj() !== "IE") {
                var svgNS = "http://www.w3.org/2000/svg";
                var panel = document.createElementNS(svgNS, "svg");
                panel.setAttribute("version", "1.1");
                panel.setAttribute("baseProfile", "full");
                panel.setAttribute("width", "100%");
                panel.setAttribute("height", "100%");
                addPolylineLayerDiv.appendChild(panel);
                addPolylineLayerDiv.onclick = function (click_event) {
                    var pageXY = _a._aa._aaf.fixEvent(click_event);
                    if (FIRST_CLICK) {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                        newLine = document.createElementNS(svgNS, "line");
                        newLine.setAttribute("x1", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y1", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("stroke", strokeColor);
                        newLine.setAttribute("stroke-width", strokeWeight);
                        var newVertex = document.createElementNS(svgNS, "rect");
                        newVertex.setAttribute("x", (points[points_count] + mvc.view.qOverlaysDivLeft - 5) + "px");
                        newVertex.setAttribute("y", (points[points_count + 1] + mvc.view.qOverlaysDivTop - 5) + "px");
                        newVertex.setAttribute("width", 10);
                        newVertex.setAttribute("height", 10);
                        newVertex.setAttribute("fill", "none");
                        newVertex.setAttribute("stroke", "black");
                        newVertex.setAttribute("stroke-width", "2");
                        panel.appendChild(newVertex);
                        points_count += 2;
                        FIRST_CLICK = false
                    } else {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                        newLine.setAttribute("x2", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y2", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("style", "stroke");
                        panel.appendChild(newLine);
                        var newVertex = document.createElementNS(svgNS, "rect");
                        newVertex.setAttribute("x", (points[points_count] + mvc.view.qOverlaysDivLeft - 5) + "px");
                        newVertex.setAttribute("y", (points[points_count + 1] + mvc.view.qOverlaysDivTop - 5) + "px");
                        newVertex.setAttribute("width", 10);
                        newVertex.setAttribute("height", 10);
                        newVertex.setAttribute("fill", "none");
                        newVertex.setAttribute("stroke", "black");
                        newVertex.setAttribute("stroke-width", "2");
                        panel.appendChild(newVertex);
                        newLine = document.createElementNS(svgNS, "line");
                        newLine.setAttribute("x1", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y1", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("stroke", strokeColor);
                        newLine.setAttribute("stroke-width", strokeWeight);
                        points_count += 2
                    }
                    if (_a._aa._aaf._aafj() === "SAFARI" || _a._aa._aaf._aafj() === "CHROME") {
                        var qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList, true);
                        mvc.triggerEvent(qevent)
                    }
                };
                addPolylineLayerDiv.onmousemove = function (mousemove_event) {
                    if (!FIRST_CLICK) {
                        var pageXY = _a._aa._aaf.fixEvent(mousemove_event);
                        var posX = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                        var posY = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                        newLine.setAttribute("x2", posX + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y2", posY + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("style", "stroke-dasharray:6");
                        panel.appendChild(newLine);
                        if (_a._aa._aaf._aafj() === "SAFARI" || _a._aa._aaf._aafj() === "CHROME") {
                            var qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList);
                            mvc.triggerEvent(qevent)
                        }
                    }
                };
                addPolylineLayerDiv.ondblclick = function (dblClick_event) {
                    var pageXY = _a._aa._aaf.fixEvent(dblClick_event);
                    points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                    points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                    newLine.setAttribute("x2", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                    newLine.setAttribute("y2", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                    panel.appendChild(newLine);
                    FIRST_CLICK = true;
                    points_count += 2;
                    if (points_count > 7) {
                        var convertor = mvc.view.latlngPixelConvertor;
                        var pointsLatLng = new Array(points_count - 4);
                        for (var i = 0; i < points_count - 5; i += 2) {
                            var pixel = convertor.Pixel2LatLng(points[i], points[i + 1]);
                            pointsLatLng[i] = pixel[0];
                            pointsLatLng[i + 1] = pixel[1]
                        }
                        var newPolyline = new _a._ac.QPolyline(pointsLatLng);
                        newPolyline.id = mvc.model.qOverlayCount++;
                        newPolyline.mapNumber = mvc.view._0;
                        newPolyline.mvc = mvc;
                        var qevent = new _a._ab._abb.QOverlayAddedEvent(newPolyline);
                        newPolyline.mvc.triggerEvent(qevent);
                        qevent = new _a._ab._abb.RenderEvent(newPolyline.mvc.model.tileGrid, newPolyline.mvc.model.qOverlayChangeList);
                        newPolyline.mvc.triggerEvent(qevent);
                        if (this_.onAddPolyline !== null) {
                            this_.onAddPolyline.apply(this_, [newPolyline])
                        }
                    }
                    addPolylineLayerDiv.parentNode.removeChild(addPolylineLayerDiv);
                    points_count = 0
                };
                addPolylineLayerDiv.onmousedown = function (event) {
                    event.cancelBubble = true
                };
                addPolylineLayerDiv.onmouseup = function (event) {
                    event.cancelBubble = true
                }
            } else {
                var panel = addPolylineLayerDiv;
                var IEDataDelta = 7;
                var vertexPaintDelta = 3;
                var panel2 = document.createElement("div");
                panel2.id = "panel2";
                panel2.style.position = "absolute";
                panel2.style.width = "100%";
                panel2.style.height = "100%";
                panel2.style.background = "white";
                panel2.style.filter = "Alpha(opacity=0)";
                panel.appendChild(panel2);
                panel2.onclick = function (click_event) {
                    click_event = event || window.event;
                    var pageXY = _a._aa._aaf.fixEvent(click_event);
                    if (FIRST_CLICK) {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                        newLine = document.createElement("v:line");
                        newLine.from = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        var newVertex = document.createElement("v:rect");
                        newVertex.style.position = "absolute";
                        newVertex.style.left = (points[points_count] + mvc.view.qOverlaysDivLeft - vertexPaintDelta) + "px";
                        newVertex.style.top = (points[points_count + 1] + mvc.view.qOverlaysDivTop - vertexPaintDelta) + "px";
                        newVertex.style.width = "10px";
                        newVertex.style.height = "10px";
                        newVertex.strokecolor = "black";
                        newVertex.strokeweight = "2px";
                        var newFill = document.createElement("<v:fill on='off'></v:fill>");
                        newVertex.appendChild(newFill);
                        panel.appendChild(newVertex);
                        points_count += 2;
                        FIRST_CLICK = false
                    } else {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                        newLine.to = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        var newStroke = document.createElement("v:stroke");
                        newStroke.dashstyle = "Solid";
                        newLine.appendChild(newStroke);
                        panel.appendChild(newLine);
                        _a._aa._aaf.setTimeout(function test(points_count) {
                            var newVertex = document.createElement("v:rect");
                            newVertex.style.position = "absolute";
                            newVertex.style.left = (points[points_count] + mvc.view.qOverlaysDivLeft - vertexPaintDelta);
                            newVertex.style.top = (points[points_count + 1] + mvc.view.qOverlaysDivTop - vertexPaintDelta);
                            newVertex.style.width = 10;
                            newVertex.style.height = 10;
                            newVertex.strokecolor = "black";
                            newVertex.strokeweight = "2px";
                            var newFill = document.createElement("v:fill");
                            newFill.on = "off";
                            newVertex.appendChild(newFill);
                            panel.appendChild(newVertex)
                        }, 100, points_count);
                        newLine = document.createElement("v:line");
                        newLine.from = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        points_count += 2
                    }
                };
                panel2.onmousemove = function (mousemove_event) {
                    mousemove_event = event || window.event;
                    if (!FIRST_CLICK) {
                        var pageXY = _a._aa._aaf.fixEvent(mousemove_event);
                        var posX = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                        var posY = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                        newLine.to = (posX + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (posY + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        var newStroke = document.createElement("v:stroke");
                        newStroke.dashstyle = "ShortDash";
                        newLine.appendChild(newStroke);
                        newLine.onclick = panel2.onclick;
                        newLine.ondblclick = panel.ondblclick;
                        panel.appendChild(newLine)
                    }
                };
                panel.ondblclick = function (dblClick_event) {
                    dblClick_event = event || window.event;
                    var pageXY = _a._aa._aaf.fixEvent(dblClick_event);
                    points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                    points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                    newLine.to = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                    panel.appendChild(newLine);
                    FIRST_CLICK = true;
                    points_count += 2;
                    if (points_count > 5) {
                        var convertor = mvc.view.latlngPixelConvertor;
                        var pointsLatLng = new Array(points_count - 2);
                        for (var i = 0; i < points_count - 3; i += 2) {
                            var pixel = convertor.Pixel2LatLng(points[i], points[i + 1]);
                            pointsLatLng[i] = pixel[0];
                            pointsLatLng[i + 1] = pixel[1]
                        }
                        var newPolyline = new _a._ac.QPolyline(pointsLatLng);
                        newPolyline.id = mvc.model.qOverlayCount++;
                        newPolyline.mapNumber = mvc.view._0;
                        newPolyline.mvc = mvc;
                        var qevent = new _a._ab._abb.QOverlayAddedEvent(newPolyline);
                        newPolyline.mvc.triggerEvent(qevent);
                        qevent = new _a._ab._abb.RenderEvent(newPolyline.mvc.model.tileGrid, newPolyline.mvc.model.qOverlayChangeList);
                        newPolyline.mvc.triggerEvent(qevent);
                        if (this_.onAddPolyline !== null) {
                            this_.onAddPolyline.apply(this_, [newPolyline])
                        }
                    }
                    addPolylineLayerDiv.parentNode.removeChild(addPolylineLayerDiv);
                    points_count = 0
                };
                panel2.onmousedown = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                };
                panel2.onmouseup = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                };
                panel.onmousedown = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                };
                panel.onmouseup = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                }
            }
        });
        qControlDiv.appendChild(documentFragment)
    },
    createAddPolylineBtn: function (documentFragment, func) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.cursor = "pointer";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.zIndex = this.zIndex;
        div.style.opacity = this.opacity;
        div.style.filter = "Alpha(opacity=" + this.opacity * 100 + ");";
        var img = document.createElement("img");
        img.src = this.img;
        div.appendChild(img);
        div.onclick = func;
        documentFragment.appendChild(div)
    },
    setOnAddPolyline: function (func) {
        this.onAddPolyline = func;
        func = null
    }
});
_a.Search.QQuerySuggestRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QQuerySuggestRequest",
    strCity: null,
    strKeyword: null,
    nKeywordType: 0,
    initialize: function (city, keyword, keywordType) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["sg"]);
        this.strCity = city;
        this.strKeyword = keyword;
        if (keywordType !== undefined) {
            this.nKeywordType = keywordType
        }
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.strKeyword;
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&wd=", encodeURIComponent(this.strKeyword), "&lc=", this.nKeywordType].join("");
        return queryString
    }
});
_a._ac._ack = _a._aa._aag(_a._ac.QOverlay, {
    className: "_a._ac._ack",
    strokeColor: "#1791fc",
    strokeWeight: "3px",
    strokeOpacity: 1,
    strokeDashStyle: "Solid",
    fillColor: "#1791fc",
    fillOpacity: 0.2,
    arrQLngLats: null,
    pathLatLng: null,
    path: null,
    scopeLatLng: null,
    delta: null,
    outerEventHandlers: null,
    initialize: function (arrPoints) {
        _a._ac.QOverlay.prototype.initialize.apply(this, []);
        this.zIndex = _a._aa._aab._aabm;
        this.arrQLngLats = [];
        this.pathLatLng = [];
        var nCountOfPoints = arrPoints.length;
        if (nCountOfPoints > 2) {
            this.arrQLngLats = arrPoints;
            var tmpQLngLat;
            var j = 0;
            for (var i = 0; i < nCountOfPoints; ++i) {
                tmpQLngLat = this.arrQLngLats[i];
                this.pathLatLng[j++] = tmpQLngLat.getLng();
                this.pathLatLng[j++] = tmpQLngLat.getLat()
            }
            this.scopeLatLng = this.getLatLngScope(this.pathLatLng)
        }
        this.path = [];
        this.delta = parseInt(this.strokeWeight, 10);
        this.outerEventHandlers = new _a._aa._aad()
    },
    getStrokeColor: function () {
        return this.strokeColor
    },
    getStrokeWidth: function () {
        return this.strokeWeight
    },
    getStrokeOpacity: function () {
        return this.strokeOpacity
    },
    getStrokeDashStyle: function () {
        return this.strokeDashStyle
    },
    getFillColor: function () {
        return this.fillColor
    },
    getFillOpacity: function () {
        return this.fillOpacity
    },
    setStrokeColor: function (strokeColor) {
        if (strokeColor !== undefined) {
            this.strokeColor = strokeColor;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeColor = null
        }
    },
    setStrokeWidth: function (strokeWeight) {
        if (strokeWeight !== undefined) {
            this.strokeWeight = strokeWeight;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeWeight = null
        }
    },
    setStrokeOpacity: function (strokeOpacity) {
        if (strokeOpacity !== undefined) {
            this.strokeOpacity = strokeOpacity;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeOpacity = null
        }
    },
    setStrokeDashStyle: function (strokeDashStyle) {
        if (strokeDashStyle !== undefined) {
            this.strokeDashStyle = strokeDashStyle;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            strokeDashStyle = null
        }
    },
    setFillColor: function (fillColor) {
        if (fillColor !== undefined) {
            this.fillColor = fillColor;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            fillColor = null
        }
    },
    setFillOpacity: function (fillOpacity) {
        if (fillOpacity !== undefined) {
            this.fillOpacity = fillOpacity;
            var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
            this.mvc.triggerEvent(qevent);
            fillOpacity = null
        }
    },
    render: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        qOverlayDiv.innerHTML = "";
        var polygonId = _a._aa._aaf._aafg("QPolygon_" + this.id, this.mapNumber);
        var pointsStr = "";
        var length = this.path.length;
        for (var i = 0; i < length; ++i) {
            pointsStr += (this.path[i] - this.left) + "," + (this.path[++i] - this.top) + " "
        }
        var polygon;
        var qPolygonDiv = document.createElement("div");
        qPolygonDiv.setAttribute("id", _a._aa._aaf._aafg("QPolygonDiv_" + this.id, this.mapNumber));
        qPolygonDiv.setAttribute("class", "QPolygonDiv");
        qPolygonDiv.setAttribute("style", "width:100%;height:100%;");
        qOverlayDiv.appendChild(qPolygonDiv);
        if (_a._aa._aaf._aafj() === "IE") {
            pointsStr += (this.path[0] - this.left) + "," + (this.path[1] - this.top);
            var polygonStr = [" <q_vml:polyline id='", polygonId, "' style='cursor:pointer;display:inline-block;' points='", pointsStr, "' filled='true' fillcolor='", this.fillColor, "' strokecolor='", this.strokeColor, "' strokeweight='", this.strokeWeight, "' ><q_vml:fill opacity='", this.fillOpacity, "' />", "<q_vml:stroke opacity='", this.strokeOpacity, "' dashstyle='", this.strokeDashStyle, "' endcap='round'/></q_vml:polyline>"].join("");
            qPolygonDiv.innerHTML = polygonStr
        } else {
            polygon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            polygon.setAttribute("version", "1.1");
            polygon.setAttribute("baseProfile", "full");
            polygon.setAttribute("width", "100%");
            polygon.setAttribute("height", "100%");
            var svgPolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            svgPolygon.setAttribute("id", polygonId);
            svgPolygon.setAttribute("points", pointsStr);
            svgPolygon.setAttribute("stroke", this.strokeColor);
            svgPolygon.setAttribute("stroke-width", this.strokeWeight);
            svgPolygon.setAttribute("stroke-opacity", this.strokeOpacity);
            var svgDasharray = "";
            switch (this.strokeDashStyle) {
            case "Solid":
                break;
            case "ShortDot":
                svgDasharray = parseInt(this.strokeWeight, 10);
                break
            }
            svgPolygon.setAttribute("stroke-dasharray", svgDasharray);
            svgPolygon.setAttribute("fill", this.fillColor);
            svgPolygon.setAttribute("fill-opacity", this.fillOpacity);
            svgPolygon.setAttribute("cursor", "pointer");
            polygon.appendChild(svgPolygon);
            qPolygonDiv.appendChild(polygon)
        }
        this.addActionListener();
        length = null;
        pointsStr = null;
        polygonId = null;
        qPolygonDiv = null;
        svgPolygon = null;
        svg = null;
        qOverlayDiv = null
    },
    addActionListener: function () {
        var polygon = document.getElementById(_a._aa._aaf._aafg("QPolygon_" + this.id, this.mapNumber));
        var this_ = this;
        polygon.onclick = function (event) {
            event = event || window.event;
            event = this_.generateQMouseEvent(event);
            this_.executeOuterEventHandler("click", event)
        };
        polygon.onmouseover = function (event) {
            event = event || window.event;
            event = this_.generateQMouseEvent(event);
            this_.executeOuterEventHandler("mouseover", event)
        };
        polygon.onmouseout = function (event) {
            event = event || window.event;
            event = this_.generateQMouseEvent(event);
            this_.executeOuterEventHandler("mouseout", event)
        }
    },
    getLatLngScope: function (points) {
        var minLng = points[0],
            minLat = points[1],
            maxLng = points[0],
            maxLat = points[1];
        var length = points.length;
        for (var i = 0; i < length; i += 2) {
            if (points[i] < minLng) {
                minLng = points[i]
            }
            if (points[i] > maxLng) {
                maxLng = points[i]
            }
        }
        for (i = 1; i < length; i += 2) {
            if (points[i] < minLat) {
                minLat = points[i]
            }
            if (points[i] > maxLat) {
                maxLat = points[i]
            }
        }
        var scope = new Array(minLng, maxLat, maxLng, minLat);
        minLng = null;
        minLat = null;
        maxLng = null;
        maxLat = null;
        length = null;
        return scope
    },
    isValidEvent: function (strEventType) {
        var nValid = false;
        if (strEventType) {
            switch (strEventType) {
            case "click":
            case "mouseover":
            case "mouseout":
            case 'ready':
                nValid = true;
                break;
            default:
                nValid = false
            }
        }
        return nValid
    },
    addOuterEventListener: function (strEventType, handler, args) {
        if (this.isValidEvent(strEventType)) {
            this.outerEventHandlers.set(strEventType, [handler, args])
        }
    },
    removeOuterEventListener: function (strEventType) {
        if (this.isValidEvent(strEventType)) {
            this.outerEventHandlers.remove(strEventType)
        }
    },
    clearOuterEventListeners: function () {
        this.outerEventHandlers.clear()
    },
    generateQMouseEvent: function (event) {
        var mvc = this.mvc;
        var arrPageXY = _a._aa._aaf.fixEvent(event);
        var arrMapXY = [arrPageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft, arrPageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop];
        var convertor = mvc.view.latlngPixelConvertor;
        var arrLngLat = convertor.Pixel2LatLng(arrMapXY[0], arrMapXY[1]);
        event.qLngLat = new _a._ac.QLngLat(arrLngLat[0], arrLngLat[1]);
        return event
    },
    executeOuterEventHandler: function (strEventType, event) {
        if (strEventType) {
            var handler = this.outerEventHandlers.get(strEventType);
            if (handler) {
                var func = handler[0];
                var arrArguments = handler[1];
                if (arrArguments === undefined) {
                    arrArguments = []
                }
                if (event) {
                    arrArguments = [event].concat(arrArguments)
                }
                func.apply(null, arrArguments)
            }
        }
    }
});
_a._ac._acd.QAddMarkerControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QAddMarkerControl",
    img: null,
    newMarkerImg: null,
    opacity: null,
    onAddMarker: null,
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments);
        this.width = 36;
        this.height = 32;
        this.img = _a._aa._aab._aabr + "/themes/default/img/addMarkerBtn.gif";
        this.newMarkerImg = _a._aa._aab._aabr + "/themes/default/img/newMarker.gif";
        this.opacity = _a._aa._aab.QPaintControlOpacity
    },
    render: function (qControlDiv) {
        var this_ = this;
        var documentFragment = document.createDocumentFragment();
        var mvc = this.mvc;
        var newMarekrImg = this.newMarkerImg;
        this.createAddMarkerBtn(documentFragment, function () {
            var mapDiv = document.getElementById(_a._aa._aaf._aafg("MapDiv", mvc.view._0));
            var addMarkerLayerDiv = document.createElement("div");
            addMarkerLayerDiv.id = "addMarkerLayerDiv";
            addMarkerLayerDiv.setAttribute("style", "z-index:" + _a._aa._aab._aabl);
            addMarkerLayerDiv.style.position = "absolute";
            addMarkerLayerDiv.style.width = "100%";
            addMarkerLayerDiv.style.height = "100%";
            mapDiv.appendChild(addMarkerLayerDiv);
            var movingMarkerDiv = document.createElement("div");
            movingMarkerDiv.style.position = "absolute";
            movingMarkerDiv.style.width = "30px";
            movingMarkerDiv.style.height = "40px";
            movingMarkerDiv.style.opacity = "0.8";
            movingMarkerDiv.style.filter = "Alpha(opacity=80);";
            movingMarkerDiv.style.display = "none";
            var movingMarkerImg = document.createElement("img");
            movingMarkerImg.src = newMarekrImg;
            movingMarkerDiv.appendChild(movingMarkerImg);
            addMarkerLayerDiv.appendChild(movingMarkerDiv);
            var blankImg = document.createElement("img");
            blankImg.src = _a._aa._aab._aabr + "/themes/default/img/blank.gif";
            blankImg.style.width = "100%";
            blankImg.style.height = "100%";
            addMarkerLayerDiv.appendChild(blankImg);
            addMarkerLayerDiv.onmousemove = function (event) {
                event = event || window.event;
                var pageXY = _a._aa._aaf.fixEvent(event);
                if (_a._aa._aaf._aafj() !== "IE") {
                    movingMarkerDiv.style.left = (pageXY[0] - mvc.view.mapDivPageLeft - 17) + "px";
                    movingMarkerDiv.style.top = (pageXY[1] - mvc.view.mapDivPageTop - 45) + "px";
                    event.stopPropagation()
                } else {
                    movingMarkerDiv.style.left = (pageXY[0] - mvc.view.mapDivPageLeft - 19) + "px";
                    movingMarkerDiv.style.top = (pageXY[1] - mvc.view.mapDivPageTop - 47) + "px";
                    event.cancelBubble = true
                }
                mapDiv.style.cursor = "pointer";
                movingMarkerDiv.style.display = "block"
            };
            addMarkerLayerDiv.onclick = function (event) {
                event = event || window.event;
                var newMarker = new _a._ac._ach();
                newMarker.id = mvc.model.qOverlayCount++;
                newMarker.mapNumber = mvc.view._0;
                newMarker.mvc = mvc;
                var pageXY = _a._aa._aaf.fixEvent(event);
                if (_a._aa._aaf._aafj() !== "IE") {
                    newMarker.left = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - 3;
                    newMarker.top = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - 5
                } else {
                    newMarker.left = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - 5;
                    newMarker.top = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - 7
                }
                var convertor = newMarker.mvc.view.latlngPixelConvertor;
                var pixel = convertor.Pixel2LatLng(newMarker.left, newMarker.top);
                newMarker.lng = pixel[0];
                newMarker.lat = pixel[1];
                var qevent = new _a._ab._abb.QOverlayAddedEvent(newMarker);
                newMarker.mvc.triggerEvent(qevent);
                qevent = new _a._ab._abb.RenderEvent(newMarker.mvc.model.tileGrid, newMarker.mvc.model.qOverlayChangeList);
                newMarker.mvc.triggerEvent(qevent);
                addMarkerLayerDiv.parentNode.removeChild(addMarkerLayerDiv);
                if (this_.onAddMarker !== null) {
                    this_.onAddMarker.apply(this_, [newMarker])
                }
            }
        });
        qControlDiv.appendChild(documentFragment)
    },
    createAddMarkerBtn: function (documentFragment, func) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.cursor = "pointer";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.zIndex = this.zIndex;
        div.style.opacity = this.opacity;
        div.style.filter = "Alpha(opacity=" + this.opacity * 100 + ");";
        var img = document.createElement("img");
        img.src = this.img;
        div.appendChild(img);
        div.onclick = func;
        documentFragment.appendChild(div)
    },
    setOnAddMarker: function (func) {
        this.onAddMarker = func;
        func = null
    }
});
_a._ac._acd.QCopyrightControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QCopyrightControl",
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments)
    },
    draw: function () {
        this.width = 250;
        this.height = 20;
        var copyright = document.createElement('span');
        copyright.style.cssText = 'background:transparent;font:11px arial,simsun;color:#333333';
        copyright.innerHTML = [_a._af._acd.TencentText, " - ", _a._af._acd.DataText].join('');
        this.set('content', copyright)
    }
});
_a._ac._acm = _a._aa._aag(_a._ac.QOverlay, {
    className: "_a._ac._acm",
    target: null,
    deltaLeft: null,
    deltaTop: null,
    textImg: null,
    textSubmitBtnImg: null,
    textDeleteBtnImg: null,
    visible: null,
    isNew: null,
    onSubmit: null,
    onDelete: null,
    initialize: function (target) {
        _a._ac.QOverlay.prototype.initialize.apply(this, []);
        this.target = target;
        this.width = 180;
        this.height = 130;
        switch (target.className) {
        case "_a._ac._ach":
            this.deltaLeft = -15;
            this.deltaTop = 0;
            break;
        default:
            if (_a._aa._aaf._aafj() === "IE") {
                this.deltaLeft = -3;
                this.deltaTop = -5
            } else {
                this.deltaLeft = 0;
                this.deltaTop = 0
            }
        }
        this.textImg = _a._aa._aab._aabr + "/themes/default/img/textarea.gif";
        this.textSubmitBtnImg = _a._aa._aab._aabr + "/themes/default/img/submitBtn.gif";
        this.textDeleteBtnImg = _a._aa._aab._aabr + "/themes/default/img/deleteBtn.gif";
        this.visible = false;
        this.isNew = false;
        target = null
    },
    render: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        qOverlayDiv.innerHTML = "";
        var qTextTipDivStr = ["<div id='", _a._aa._aaf._aafg("QTextTipDiv_" + this.id, this.mapNumber), "' class='QTextTipDiv' style='width:100%;height:100%;z-index:", _a._aa._aab._aabd, ";'>", "<img src='", this.textImg, "' style ='width:100%;height:100%'/>", "<textarea id='", _a._aa._aaf._aafg("QTextTip_TextArea_" + this.id, this.mapNumber), "' style='position:absolute;left:13px;top:8px;width:152px;height:72px;'>", _a._af.Name_Ch + ":", this.target.name, "\n", _a._af.Description_Ch + ":", this.target.description, "</textarea>", "<div id='", _a._aa._aaf._aafg("QTextTip_SubmitBtnDiv_" + this.id, this.mapNumber), "' style='position:absolute;left:140px;top:85px;width:30px;height:20px;cursor:pointer;'>", "<img src='", this.textSubmitBtnImg, "' style ='width:100%;height:100%'/>", "</div>", "<div id='", _a._aa._aaf._aafg("QTextTip_DeleteBtnDiv_" + this.id, this.mapNumber), "' style='position:absolute;left:13px;top:85px;width:30px;height:20px;cursor:pointer;'>", "<img src='", this.textDeleteBtnImg, "' style ='width:100%;height:100%'/>", "</div>", "</div>"].join("");
        qOverlayDiv.innerHTML = qTextTipDivStr;
        this.addActionListener();
        qTextTipDivStr = null;
        qOverlayDiv = null
    },
    addActionListener: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        var textDiv = document.getElementById(_a._aa._aaf._aafg("QTextTipDiv_" + this.id, this.mapNumber));
        var textArea = document.getElementById(_a._aa._aaf._aafg("QTextTip_TextArea_" + this.id, this.mapNumber));
        var submitBtnDiv = document.getElementById(_a._aa._aaf._aafg("QTextTip_SubmitBtnDiv_" + this.id, this.mapNumber));
        var deleteBtnDiv = document.getElementById(_a._aa._aaf._aafg("QTextTip_DeleteBtnDiv_" + this.id, this.mapNumber));
        var this_ = this;
        var eventTarget;
        var qObjsDiv = document.getElementById(_a._aa._aaf._aafg("QOverlaysDiv", this.mapNumber));
        var targetQObjDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.target.id, this.mapNumber));
        switch (this.target.className) {
        case "_a._ac.QPolyline":
            eventTarget = document.getElementById(_a._aa._aaf._aafg("QPolyline_" + this.target.id, this.mapNumber));
            break;
        case "_a._ac._ack":
            eventTarget = document.getElementById(_a._aa._aaf._aafg("QPolygon_" + this.target.id, this.mapNumber));
            break;
        default:
            eventTarget = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.target.id, this.mapNumber))
        }
        var CLICKED = false;
        if (this.visible) {
            textDiv.style.display = "block";
            textArea.focus();
            CLICKED = true
        } else {
            textDiv.style.display = "none"
        }
        submitBtnDiv.onclick = function (event) {
            event = event || window.event;
            textDiv.style.display = "none";
            this_.visible = false;
            qOverlayDiv.style.zIndex = _a._aa._aab._aaba;
            CLICKED = false;
            if (this_.onSubmit !== null) {
                this_.onSubmit.apply(this_, [textArea])
            }
        };
        deleteBtnDiv.onclick = function (event) {
            event = event || window.event;
            var alertStr = _a._af.DeleteConfirm_Ch;
            var DELETE_CONFIRMED = confirm(alertStr);
            if (DELETE_CONFIRMED) {
                textDiv.parentNode.removeChild(textDiv);
                var qevent = new _a._ab._abb.QOverlayRemovedEvent(this_);
                this_.mvc.triggerEvent(qevent);
                if (targetQObjDiv !== undefined) {
                    targetQObjDiv.parentNode.removeChild(targetQObjDiv);
                    qevent = new _a._ab._abb.QOverlayRemovedEvent(this_.target);
                    this_.target.mvc.triggerEvent(qevent)
                }
                if (this_.onDelete !== null) {
                    this_.onDelete.apply(this_, [])
                }
            }
        };
        if (eventTarget !== undefined) {
            this_ = this;
            eventTarget.onclick = function (event) {
                event = event || window.event;
                submitBtnDiv.style.display = "block";
                deleteBtnDiv.style.display = "block";
                if (this_.target.className !== "_a._ac._ach") {
                    qOverlayDiv.style.left = event.clientX - this_.mvc.view.mapDivPageLeft - parseInt(qObjsDiv.style.left, 10) - 70 + "px";
                    qOverlayDiv.style.top = event.clientY - this_.mvc.view.mapDivPageTop - parseInt(qObjsDiv.style.top, 10) - 130 + "px"
                }
                textDiv.style.display = "block";
                qOverlayDiv.style.zIndex = _a._aa._aab._aabd;
                textArea.focus();
                CLICKED = true
            };
            eventTarget.onmouseover = function (event) {
                event = event || window.event;
                if (!CLICKED) {
                    submitBtnDiv.style.display = "none";
                    deleteBtnDiv.style.display = "none";
                    if (this_.target.className === "_a._ac._ach") {
                        textDiv.style.display = "block";
                        qOverlayDiv.style.zIndex = _a._aa._aab._aabd
                    }
                }
            };
            eventTarget.onmouseout = function (event) {
                event = event || window.event;
                if (!CLICKED) {
                    textDiv.style.display = "none";
                    qOverlayDiv.style.zIndex = _a._aa._aab._aaba
                }
            }
        }
    },
    setVisible: function (visible) {
        this.visible = visible;
        if (this.visible) {
            this.zIndex = _a._aa._aab._aabd
        } else {
            this.zIndex = _a._aa._aab._aaba
        }
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    setOnSubmit: function (args, func) {
        func.args = args;
        this.onSubmit = func.bind();
        func = null
    },
    setOnDelete: function (args, func) {
        func.args = args;
        this.onDelete = func.bind();
        func = null
    }
});
_a.Search.QTransferBusSearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QTransferBusSearchRequest",
    strCity: null,
    strStart: null,
    strEnd: null,
    iCondition: null,
    iNosub: null,
    initialize: function (city, startString, endString, condition, nosub) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["bus"]);
        this.strCity = city;
        this.strStart = startString;
        this.strEnd = endString;
        this.iCondition = condition;
        this.iNosub = nosub
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.strStart && this.strEnd && (this.iCondition >= 0) && (this.iCondition <= 2);
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&start=", encodeURIComponent(this.strStart), "&dest=", encodeURIComponent(this.strEnd), "&cond=", this.iCondition, "&nosub=", this.iNosub].join("");
        return queryString
    }
});
_a._ac.QLngLatBounds = _a._aa._aag({
    className: "_a._ac.QLngLatBounds",
    northWest: null,
    southEest: null,
    initialize: function (northWest, southEest) {
        this.northWest = northWest;
        this.southEest = southEest;
        northWest = null;
        southEest = null
    }
});
_a.Search.QSightSearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QSightSearchRequest",
    strCity: null,
    arrBound: null,
    strKeyword: null,
    strType: null,
    iFirstPageNum: null,
    iResultCount: null,
    iSortType: null,
    initialize: function (city, lng1, lat1, lng2, lat2, keyword, type, option) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["rg"]);
        this.strCity = city;
        this.arrBound = [];
        this.arrBound[0] = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng1);
        this.arrBound[1] = _a._aa._aaf._aafa.latFrom4326ToProjection(lat1);
        this.arrBound[2] = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng2);
        this.arrBound[3] = _a._aa._aaf._aafa.latFrom4326ToProjection(lat2);
        this.strKeyword = keyword;
        this.strType = type;
        if (option) {
            if (option.pageNum !== undefined) {
                this.iFirstPageNum = option.pageNum
            }
            if (option.resultCount !== undefined) {
                this.iResultCount = option.resultCount
            }
            if (option.sortType !== undefined) {
                this.iSortType = option.iSortType
            }
        }
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.arrBound[0] && this.arrBound[1] && this.arrBound[2] && this.arrBound[3] && (this.strKeyword || this.strType);
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&b=", this.arrBound.join(",")].join("");
        if (this.strKeyword) {
            queryString += ("&wd=" + encodeURIComponent(this.strKeyword))
        }
        if (this.strType) {
            queryString += ("&tp=" + encodeURIComponent(this.strType))
        }
        if (this.iFirstPageNum) {
            queryString += ("&pn=" + this.iFirstPageNum)
        }
        if (this.iResultCount) {
            queryString += ("&rn=" + this.iResultCount)
        }
        if (this.iSortType) {
            queryString += ("&st=" + this.iSortType)
        }
        return queryString
    }
});
_a.Search.QSightSearchRequestOption = {
    pageNum: null,
    resultCount: null,
    sortType: null
};
_a.Search.QRoamSearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QRoamSearchRequest",
    arrBound: null,
    nLevel: null,
    initialize: function (lng1, lat1, lng2, lat2, level) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["roam"]);
        this.arrBound = [];
        this.arrBound[0] = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng1);
        this.arrBound[1] = _a._aa._aaf._aafa.latFrom4326ToProjection(lat1);
        this.arrBound[2] = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng2);
        this.arrBound[3] = _a._aa._aaf._aafa.latFrom4326ToProjection(lat2);
        this.nLevel = level
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.arrBound[0] && this.arrBound[1] && this.arrBound[2] && this.arrBound[3] && this.nLevel;
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&b=", this.arrBound.join(","), "&l=", this.nLevel].join("");
        return queryString
    }
});
_a._ac._acd.QContextMenuControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QContextMenuControl",
    index: -1,
    items: [],
    width: '0px',
    height: '0px',
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments);
        this.cont = document.createElement("div");
        this.cont.className = "contextMenuContainer";
        this.cont.style.display = 'none';
        var headDiv = document.createElement("div");
        headDiv.className = "contextMenuHead";
        if (_a._aa._aaf._aafj() === "IE") {
            headDiv.style.position = "absolute";
            headDiv.style.left = "0px";
            headDiv.style.top = "-6px"
        }
        this.cont.appendChild(headDiv);
        var contextMenu = document.createElement("div");
        contextMenu.className = "contextMenu";
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        contextMenu.appendChild(table);
        table.appendChild(tbody);
        this.cont.appendChild(contextMenu);
        this.tbody = tbody;
        var tailDiv = document.createElement("div");
        tailDiv.className = "contextMenuTail";
        this.cont.appendChild(tailDiv);
        _a._aa.QMVCEvent.addDomListener(this.cont, 'contextmenu', function (event) {
            event = event || window.event;
            _a._aa._aaf.stopEvent(event);
            return false
        });
        this.items = []
    },
    addSeparator: function () {
        this.items.push({
            content: 'separator',
            type: 1
        });
        this.index++;
        this.renderItems();
        return this.index
    },
    addItem: function (text, handler) {
        this.items.push({
            content: text,
            handler: handler,
            type: 0
        });
        this.index++;
        this.renderItems();
        return this.index
    },
    removeItem: function (index) {
        this.items[index] && (this.items[index].content = null);
        this.renderItems()
    },
    disableItem: function (index) {
        this.items[index].disabled = true;
        this.renderItems()
    },
    enableItem: function (index) {
        this.items[index].disabled = false;
        this.renderItems()
    },
    renderItems: function () {
        var tr, td;
        var this_ = this;
        for (var len = this.items.length, i = len - 1; i >= 0; --i) {
            if (!this.items[i].content) {
                var item = this.items[i].dom;
                if (item) {
                    _a._aa._aaf.removeNode(item.parentNode)
                }
                this.items[i] = null;
                continue
            }
            if (this.items[i].dom) {
                td = this.items[i].dom
            } else {
                tr = document.createElement("tr");
                td = document.createElement("td");
                tr.appendChild(td);
                this.items[i].dom = td;
                this.tbody.appendChild(tr)
            }
            _a._aa.QMVCEvent.clearListeners(td);
            if (this.items[i].type == 0) {
                td.innerHTML = this.items[i].content;
                if (!this.items[i].disabled) {
                    td.style.color = '#56695b';
                    td.style.cursor = 'pointer';
                    _a._aa.QMVCEvent.addDomListener(td, 'mouseover', function (event) {
                        event = event || window.event;
                        this.style.color = "#76a045"
                    });
                    _a._aa.QMVCEvent.addDomListener(td, 'mouseout', function (event) {
                        event = event || window.event;
                        this.style.color = "#56695b"
                    });
                    var handler = this.items[i].handler;
                    _a._aa.QMVCEvent.addDomListener(td, 'click', _a._aa._aaf.callback(td, function (event, handler) {
                        event = event || window.event;
                        this_.cont.style.display = "none";
                        handler(event);
                        _a._aa._aaf.stopEvent(event)
                    }, [null, handler], true))
                } else {
                    td.style.color = '#999999';
                    td.style.cursor = 'default'
                }
            } else {
                td.innerHTML = "<div style='border-top:1px dashed " + "#cccccc;height: 1px;overflow:hidden'></div>"
            }
        }
    },
    show: function (event) {
        _a._aa.QMVCEvent.trigger(this, 'show');
        var pageXY = _a._aa._aaf.fixEvent(event);
        var container = this.cont;
        container.style.display = "block";
        var left = pageXY[0] - this.mvc.view.mapDivPageLeft;
        var top = pageXY[1] - this.mvc.view.mapDivPageTop;
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        if (left + width > this.mvc.view.viewSizeWidth) {
            left = left - width
        }
        if (top + height > this.mvc.view.viewSizeHeight) {
            top = top - height
        }
        container.style.left = left + "px";
        container.style.top = top + "px";
        container.parentNode.style.position = 'static';
        container.parentNode.style.overflow = 'visible'
    },
    hide: function () {
        this.cont.style.display = 'none'
    },
    draw: function () {
        this.set('content', this.cont);
        var mvc = this.mvc;
        var mapNumber = mvc.view._0;
        var mapId = _a._aa._aaf._aafg("MapDiv", mapNumber);
        var mapDiv = document.getElementById(mapId);
        var container = this.cont;
        var this_ = this;
        _a._aa.QMVCEvent.addDomListener(mapDiv, 'contextmenu', function (event) {
            event = event || window.event;
            this_.show(event);
            _a._aa._aaf.stopEvent(event);
            return false
        });
        _a._aa.QMVCEvent.addDomListener(mapDiv, 'mousedown', function () {
            this_.hide()
        });
        _a._aa.QMVCEvent.addDomListener(mapDiv, 'keyup', function (event) {
            event = event || window.event;
            if (event.keyCode === 27) {
                container.style.display = "none"
            }
        });
        this.renderItems()
    }
});
_a._ac._acd.QNavControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QNavControl",
    defaultLng: 0,
    defaultLat: 0,
    defaultZoomLevel: 0,
    initialize: function (defaultLng, defaultLat, defaultZoomLevel) {
        if (defaultLng !== undefined) {
            this.defaultLng = defaultLng
        }
        if (defaultLat !== undefined) {
            this.defaultLat = defaultLat
        }
        if (defaultZoomLevel !== undefined) {
            this.defaultZoomLevel = defaultZoomLevel
        }
        _a._ac._acd.prototype.initialize.apply(this, arguments);
        defaultLng = null;
        defaultLat = null;
        defaultZoomLevel = null
    },
    postAddControl: function () {
        this.mvc.controller.registerEventHandler("ZoomLevelChanged", this)
    },
    render: function (qControlDiv) {
        this.width = 100;
        this.height = 385;
        this.left = 10;
        this.top = 10;
        var mvc = this.mvc;
        qControlDiv.style.fontSize = "14px";
        var documentFragment = document.createDocumentFragment();
        var imgDiv = document.createElement("div");
        if (_a._aa._aaf._aafj.isIE6()) {
            imgDiv.style.backgroundImage = "none";
            imgDiv.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + _a._aa._aab._aabr + "/themes/default/img/qNavControl_ie6.gif,sizingMethod='scale');";
            imgDiv.style.left = "-8px";
            imgDiv.style.top = "-9px";
            imgDiv.style.width = "80px";
            imgDiv.style.height = "400px"
        } else {
            imgDiv.style.backgroundImage = "url(" + _a._aa._aab._aabr + "/themes/default/img/qNavControl.gif)";
            imgDiv.style.backgroundRepeat = "no-repeat";
            imgDiv.style.left = "0px";
            imgDiv.style.top = "0px";
            imgDiv.style.width = "100px";
            imgDiv.style.height = "385px"
        }
        imgDiv.style.position = "absolute";
        documentFragment.appendChild(imgDiv);
        var defaultLng = this.defaultLng;
        var defaultLat = this.defaultLat;
        var defaultZoomLevel = this.defaultZoomLevel;
        this.createNavDiv(documentFragment, 20, 0, function (event) {
            mvc.view.move(0, _a._aa._aab._aabj, true)
        });
        this.createNavDiv(documentFragment, 20, 40, function (event) {
            mvc.view.move(0, 0 - _a._aa._aab._aabj, true)
        });
        this.createNavDiv(documentFragment, 0, 20, function (event) {
            mvc.view.move(_a._aa._aab._aabj, 0, true)
        });
        this.createNavDiv(documentFragment, 40, 20, function (event) {
            mvc.view.move(0 - _a._aa._aab._aabj, 0, true)
        });
        this.createNavDiv(documentFragment, 20, 20, function (event) {
            var qevent = new _a._ab._abb.ZoomLevelChangedEvent(defaultZoomLevel);
            mvc.triggerEvent(qevent);
            qevent = new _a._ab._abb.CenterChangedEvent(defaultLng, defaultLat);
            mvc.triggerEvent(qevent);
            qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList);
            mvc.triggerEvent(qevent)
        });
        this.createNavDiv(documentFragment, 20, 62, function () {
            var qevent = new _a._ab._abb.ZoomLevelChangedEvent(null, 1);
            mvc.triggerEvent(qevent);
            qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList);
            mvc.triggerEvent(qevent);
            qevent = null
        });
        this.createNavDiv(documentFragment, 20, 362, function () {
            var qevent = new _a._ab._abb.ZoomLevelChangedEvent(null, -1);
            mvc.triggerEvent(qevent);
            qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList);
            mvc.triggerEvent(qevent);
            qevent = null
        });
        this.zRange = this.mvc.model.zmax - this.mvc.model.zmin;
        this.slideDivStepPixel = Math.floor(280 / (this.zRange + 1), 10);
        this.slide = this.mvc.model.tileGrid.baseTileZ;
        this.createSlideDiv(this.createSlideContainerDiv(documentFragment));
        if (this.slide !== -1) {
            this.movSlideDiv(this.slide);
            this.slide = -1
        }
        qControlDiv.appendChild(documentFragment);
        qControlDiv.style.overflow = "hidden"
    },
    createNavDiv: function (documentFragment, left, top, func) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = left + "px";
        div.style.top = top + "px";
        div.style.width = "20px";
        div.style.height = "20px";
        div.style.cursor = "pointer";
        div.onclick = func;
        documentFragment.appendChild(div);
        documentFragment = null;
        div = null;
        left = null;
        top = null
    },
    createSlideDiv: function (documentFragment) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.fontSize = "10";
        if (_a._aa._aaf._aafj.isIE6()) {
            div.style.backgroundImage = "none";
            div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + _a._aa._aab._aabr + "/themes/default/img/qNavControl_slide_ie6.gif,sizingMethod='scale');";
            div.style.left = "7px";
            div.style.top = "0px";
            div.style.width = "20px";
            div.style.height = "11px"
        } else {
            div.style.backgroundImage = "url(" + _a._aa._aab._aabr + "/themes/default/img/qNavControl.gif)";
            div.style.backgroundRepeat = "no-repeat";
            div.style.backgroundPosition = "-1px -385px";
            div.style.left = "5px";
            div.style.top = "0px";
            div.style.width = "20px";
            div.style.height = "10px"
        }
        div.isSlideDiv = true;
        this.slideDiv = div;
        documentFragment.appendChild(div);
        documentFragment = null;
        div = null;
        img = null
    },
    slideDiv: null,
    slide: 0,
    slideDivStepPixel: 16,
    zRange: 0,
    movSlideDiv: function (zoomLevel) {
        if (this.slideDiv === null) {
            this.slide = zoomLevel
        }
        if (zoomLevel <= this.mvc.model.zmax && zoomLevel >= this.mvc.model.zmin) {
            this.slideDiv.style.top = (9 + (this.zRange - zoomLevel) * this.slideDivStepPixel) + "px"
        } else if (zoomLevel > this.mvc.model.zmax) {
            zoomLevel = this.mvc.model.zmax;
            this.slideDiv.style.top = (9 + (this.zRange - zoomLevel) * this.slideDivStepPixel) + "px"
        } else {
            zoomLevel = this.mvc.model.zmin;
            this.slideDiv.style.top = (9 + (this.zRange - zoomLevel) * this.slideDivStepPixel) + "px"
        }
    },
    movSlideDivPx: function (px) {
        this.slideDiv.style.top = px + "px";
        px = null
    },
    onZoomLevelChanged: function (qevent) {
        this.movSlideDiv(this.mvc.model.tileGrid.baseTileZ)
    },
    slideDivTop: 0,
    drag: false,
    createSlideContainerDiv: function (documentFragment) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = "15px";
        div.style.top = "82px";
        div.style.width = "28px";
        div.style.height = "280px";
        div.style.cursor = "pointer";
        var mvc = this.mvc;
        var this_ = this;
        div.onmousedown = function (event) {
            event = event || window.event;
            this_.drag = true;
            var pageXY = _a._aa._aaf.fixEvent(event);
            this_.slideDivTop = pageXY[1] - mvc.view.mapDivPageTop - 99;
            this_.movSlideDivPx(this_.slideDivTop)
        };
        div.onmousemove = function (event) {
            event = event || window.event;
            if (_a._aa._aaf._aafj() === "IE") {
                event.cancelBubble = true
            } else {
                event.stopPropagation()
            }
            if (this_.drag === true) {
                var pageXY = _a._aa._aaf.fixEvent(event);
                this_.slideDivTop = pageXY[1] - mvc.view.mapDivPageTop - 99;
                this_.movSlideDivPx(this_.slideDivTop)
            }
        };
        div.onmouseup = function (event) {
            event = event || window.event;
            this_.drag = false;
            var zoomLevel = Math.round(this_.zRange - ((this_.slideDivTop - 9) / this_.slideDivStepPixel));
            var qevent = new _a._ab._abb.ZoomLevelChangedEvent(zoomLevel);
            mvc.triggerEvent(qevent);
            qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList);
            mvc.triggerEvent(qevent)
        };
        div.onmouseout = function (event) {
            event = event || window.event;
            if (this_.drag === true) {
                if (_a._aa._aaf._aafj() !== "IE") {
                    if (event.relatedTarget.isSlideDiv !== true && event.target.isSlideDiv !== true) {
                        div.onmouseup(event)
                    }
                } else {}
            }
        };
        documentFragment.appendChild(div);
        documentFragment = null;
        return div
    }
});
_a.Search.QDriveSearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QDriveSearchRequest",
    strCity: null,
    startString: null,
    endString: null,
    iCondition: 0,
    initialize: function (city, startString, endString, condition) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["drive"]);
        this.strCity = city;
        this.startString = startString;
        this.endString = endString;
        this.iCondition = condition
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.startString && this.endString;
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&start=", encodeURIComponent(this.startString), "&dest=", encodeURIComponent(this.endString), "&cond=", this.iCondition].join("");
        return queryString
    }
});
_a._ab.EventListener = _a._aa._aag({
    className: "_a._ab.EventListener",
    eventName: null,
    callback: null,
    initialize: function (eventName, callback) {
        this.eventName = eventName;
        this.callback = callback;
        eventName = null;
        callback = null
    }
});
_a.Search.QSightSearchResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QSightSearchResult",
    totalCount: null,
    currentCount: null,
    pois: null,
    city: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        this.totalCount = result.info.total;
        this.currentCount = result.info.rnum;
        if (this.totalCount > 0 && this.currentCount > 0) {
            this.pois = [];
            var i;
            var nCurrentPOIs = result.detail.pois.length;
            for (i = 0; i < nCurrentPOIs; i++) {
                this.pois.push(new _a.Search.QPOISearchResult.POI(result.detail.pois[i]))
            }
            i = null;
            nCurrentPOIs = null
        }
        this.city = new _a.Search.QPOISearchResult.City(result.detail.city);
        obj = null
    }
});
_a._ac._acc = _a._aa._aag({
    className: "_a._ac._acc",
    menuText: "",
    handler: null,
    disabled: false,
    initialize: function (menuText, handler) {
        this.menuText = menuText;
        this.handler = handler;
        menuText = null;
        handler = null
    }
});
_a._ac._acd.QAddPolygonControl = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QAddPolygonControl",
    img: null,
    opacity: null,
    onAddPolygon: null,
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments);
        this.img = _a._aa._aab._aabr + "/themes/default/img/addPolygonBtn.gif";
        this.opacity = _a._aa._aab.QPaintControlOpacity
    },
    render: function (qControlDiv) {
        var documentFragment = document.createDocumentFragment();
        var mvc = this.mvc;
        var this_ = this;
        this.createAddPolygonBtn(documentFragment, function () {
            var mapDiv = document.getElementById(_a._aa._aaf._aafg("MapDiv", mvc.view._0));
            var addPolygonLayerDiv = document.createElement("div");
            addPolygonLayerDiv.id = "addPolygonLayerDiv";
            addPolygonLayerDiv.setAttribute("style", "z-index:" + _a._aa._aab._aabl);
            addPolygonLayerDiv.style.position = "absolute";
            addPolygonLayerDiv.style.width = "100%";
            addPolygonLayerDiv.style.height = "100%";
            addPolygonLayerDiv.style.cursor = "pointer";
            mapDiv.appendChild(addPolygonLayerDiv);
            var newLine;
            var strokeColor = "blue";
            var strokeWeight = "3px";
            var FIRST_CLICK = true;
            var points = new Array();
            var points_count = 0;
            if (_a._aa._aaf._aafj() !== "IE") {
                var svgNS = "http://www.w3.org/2000/svg";
                var panel = document.createElementNS(svgNS, "svg");
                panel.setAttribute("version", "1.1");
                panel.setAttribute("baseProfile", "full");
                panel.setAttribute("width", "100%");
                panel.setAttribute("height", "100%");
                addPolygonLayerDiv.appendChild(panel);
                addPolygonLayerDiv.onclick = function (click_event) {
                    var pageXY = _a._aa._aaf.fixEvent(click_event);
                    if (FIRST_CLICK) {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                        newLine = document.createElementNS(svgNS, "line");
                        newLine.setAttribute("x1", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y1", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("stroke", strokeColor);
                        newLine.setAttribute("stroke-width", strokeWeight);
                        var newVertex = document.createElementNS(svgNS, "rect");
                        newVertex.setAttribute("x", (points[points_count] + mvc.view.qOverlaysDivLeft - 5) + "px");
                        newVertex.setAttribute("y", (points[points_count + 1] + mvc.view.qOverlaysDivTop - 5) + "px");
                        newVertex.setAttribute("width", 10);
                        newVertex.setAttribute("height", 10);
                        newVertex.setAttribute("fill", "none");
                        newVertex.setAttribute("stroke", "black");
                        newVertex.setAttribute("stroke-width", "2");
                        panel.appendChild(newVertex);
                        points_count += 2;
                        FIRST_CLICK = false
                    } else {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                        newLine.setAttribute("x2", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y2", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("style", "stroke");
                        panel.appendChild(newLine);
                        var newVertex = document.createElementNS(svgNS, "rect");
                        newVertex.setAttribute("x", (points[points_count] + mvc.view.qOverlaysDivLeft - 5) + "px");
                        newVertex.setAttribute("y", (points[points_count + 1] + mvc.view.qOverlaysDivTop - 5) + "px");
                        newVertex.setAttribute("width", 10);
                        newVertex.setAttribute("height", 10);
                        newVertex.setAttribute("fill", "none");
                        newVertex.setAttribute("stroke", "black");
                        newVertex.setAttribute("stroke-width", "2");
                        panel.appendChild(newVertex);
                        newLine = document.createElementNS(svgNS, "line");
                        newLine.setAttribute("x1", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y1", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("stroke", strokeColor);
                        newLine.setAttribute("stroke-width", strokeWeight);
                        points_count += 2
                    }
                    if (_a._aa._aaf._aafj() === "SAFARI" || _a._aa._aaf._aafj() === "CHROME") {
                        var qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList, true);
                        mvc.triggerEvent(qevent)
                    }
                };
                addPolygonLayerDiv.onmousemove = function (mousemove_event) {
                    var pageXY = _a._aa._aaf.fixEvent(mousemove_event);
                    if (!FIRST_CLICK) {
                        var posX = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                        var posY = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                        newLine.setAttribute("x2", posX + mvc.view.qOverlaysDivLeft + "px");
                        newLine.setAttribute("y2", posY + mvc.view.qOverlaysDivTop + "px");
                        newLine.setAttribute("style", "stroke-dasharray:6");
                        panel.appendChild(newLine);
                        if (_a._aa._aaf._aafj() === "SAFARI" || _a._aa._aaf._aafj() === "CHROME") {
                            var qevent = new _a._ab._abb.RenderEvent(mvc.model.tileGrid, mvc.model.qOverlayChangeList, true);
                            mvc.triggerEvent(qevent)
                        }
                    }
                };
                addPolygonLayerDiv.ondblclick = function (dblClick_event) {
                    var pageXY = _a._aa._aaf.fixEvent(dblClick_event);
                    points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft;
                    points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop;
                    newLine.setAttribute("x2", points[points_count] + mvc.view.qOverlaysDivLeft + "px");
                    newLine.setAttribute("y2", points[points_count + 1] + mvc.view.qOverlaysDivTop + "px");
                    panel.appendChild(newLine);
                    FIRST_CLICK = true;
                    points_count += 2;
                    if (points_count > 9) {
                        var convertor = mvc.view.latlngPixelConvertor;
                        var pointsLatLng = new Array(points_count - 4);
                        for (var i = 0; i < points_count - 5; i += 2) {
                            var pixel = convertor.Pixel2LatLng(points[i], points[i + 1]);
                            pointsLatLng[i] = pixel[0];
                            pointsLatLng[i + 1] = pixel[1]
                        }
                        var newPolygon = new _a._ac._ack(pointsLatLng);
                        newPolygon.id = mvc.model.qOverlayCount++;
                        newPolygon.mapNumber = mvc.view._0;
                        newPolygon.mvc = mvc;
                        var qevent = new _a._ab._abb.QOverlayAddedEvent(newPolygon);
                        newPolygon.mvc.triggerEvent(qevent);
                        qevent = new _a._ab._abb.RenderEvent(newPolygon.mvc.model.tileGrid, newPolygon.mvc.model.qOverlayChangeList);
                        newPolygon.mvc.triggerEvent(qevent);
                        if (this_.onAddPolygon !== null) {
                            this_.onAddPolygon.apply(this_, [newPolygon])
                        }
                    }
                    addPolygonLayerDiv.parentNode.removeChild(addPolygonLayerDiv);
                    points_count = 0
                };
                addPolygonLayerDiv.onmousedown = function (event) {
                    event.cancelBubble = true
                };
                addPolygonLayerDiv.onmouseup = function (event) {
                    event.cancelBubble = true
                }
            } else {
                var panel = addPolygonLayerDiv;
                var IEDataDelta = 7;
                var vertexPaintDelta = 3;
                var panel2 = document.createElement("div");
                panel2.id = "panel2";
                panel2.style.position = "absolute";
                panel2.style.width = "100%";
                panel2.style.height = "100%";
                panel2.style.background = "white";
                panel2.style.filter = "Alpha(opacity=0)";
                panel.appendChild(panel2);
                panel2.onclick = function (click_event) {
                    click_event = event || window.event;
                    var pageXY = _a._aa._aaf.fixEvent(click_event);
                    if (FIRST_CLICK) {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                        newLine = document.createElement("v:line");
                        newLine.from = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        var newVertex = document.createElement("v:rect");
                        newVertex.style.position = "absolute";
                        newVertex.style.left = (points[points_count] + mvc.view.qOverlaysDivLeft - vertexPaintDelta);
                        newVertex.style.top = (points[points_count + 1] + mvc.view.qOverlaysDivTop - vertexPaintDelta);
                        newVertex.style.width = 10;
                        newVertex.style.height = 10;
                        newVertex.strokecolor = "black";
                        newVertex.strokeweight = "2px";
                        var newFill = document.createElement("v:fill");
                        newFill.on = "off";
                        newVertex.appendChild(newFill);
                        panel.appendChild(newVertex);
                        points_count += 2;
                        FIRST_CLICK = false
                    } else {
                        points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                        points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                        newLine.to = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        var newStroke = document.createElement("v:stroke");
                        newStroke.dashstyle = "Solid";
                        newLine.appendChild(newStroke);
                        panel.appendChild(newLine);
                        _a._aa._aaf.setTimeout(function test(points_count) {
                            var newVertex = document.createElement("v:rect");
                            newVertex.style.position = "absolute";
                            newVertex.style.left = (points[points_count] + mvc.view.qOverlaysDivLeft - vertexPaintDelta);
                            newVertex.style.top = (points[points_count + 1] + mvc.view.qOverlaysDivTop - vertexPaintDelta);
                            newVertex.style.width = 10;
                            newVertex.style.height = 10;
                            newVertex.strokecolor = "black";
                            newVertex.strokeweight = "2px";
                            var newFill = document.createElement("v:fill");
                            newFill.on = "off";
                            newVertex.appendChild(newFill);
                            panel.appendChild(newVertex)
                        }, 100, points_count);
                        newLine = document.createElement("v:line");
                        newLine.from = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        points_count += 2
                    }
                };
                panel2.onmousemove = function (mousemove_event) {
                    mousemove_event = event || window.event;
                    if (!FIRST_CLICK) {
                        var pageXY = _a._aa._aaf.fixEvent(mousemove_event);
                        var posX = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                        var posY = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                        newLine.to = (posX + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (posY + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                        newLine.strokecolor = "blue";
                        newLine.strokeweight = "3px";
                        var newStroke = document.createElement("v:stroke");
                        newStroke.dashstyle = "ShortDash";
                        newLine.appendChild(newStroke);
                        newLine.onclick = panel2.onclick;
                        newLine.ondblclick = panel.ondblclick;
                        panel.appendChild(newLine)
                    }
                };
                panel.ondblclick = function (dblClick_event) {
                    dblClick_event = event || window.event;
                    var pageXY = _a._aa._aaf.fixEvent(dblClick_event);
                    points[points_count] = pageXY[0] - mvc.view.mapDivPageLeft - mvc.view.qOverlaysDivLeft - IEDataDelta;
                    points[points_count + 1] = pageXY[1] - mvc.view.mapDivPageTop - mvc.view.qOverlaysDivTop - IEDataDelta;
                    newLine.to = (points[points_count] + mvc.view.qOverlaysDivLeft + vertexPaintDelta) + "," + (points[points_count + 1] + mvc.view.qOverlaysDivTop + vertexPaintDelta);
                    panel.appendChild(newLine);
                    FIRST_CLICK = true;
                    points_count += 2;
                    if (points_count > 7) {
                        var convertor = mvc.view.latlngPixelConvertor;
                        var pointsLatLng = new Array(points_count - 2);
                        for (var i = 0; i < points_count - 3; i += 2) {
                            var pixel = convertor.Pixel2LatLng(points[i], points[i + 1]);
                            pointsLatLng[i] = pixel[0];
                            pointsLatLng[i + 1] = pixel[1]
                        }
                        var newPolygon = new _a._ac._ack(pointsLatLng);
                        newPolygon.id = mvc.model.qOverlayCount++;
                        newPolygon.mapNumber = mvc.view._0;
                        newPolygon.mvc = mvc;
                        var qevent = new _a._ab._abb.QOverlayAddedEvent(newPolygon);
                        newPolygon.mvc.triggerEvent(qevent);
                        qevent = new _a._ab._abb.RenderEvent(newPolygon.mvc.model.tileGrid, newPolygon.mvc.model.qOverlayChangeList);
                        newPolygon.mvc.triggerEvent(qevent);
                        if (this_.onAddPolygon !== null) {
                            this_.onAddPolygon.apply(this_, [newPolygon])
                        }
                    }
                    addPolygonLayerDiv.parentNode.removeChild(addPolygonLayerDiv);
                    points_count = 0
                };
                panel2.onmousedown = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                };
                panel2.onmouseup = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                };
                panel.onmousedown = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                };
                panel.onmouseup = function (event) {
                    event = window.event;
                    event.cancelBubble = true
                }
            }
        });
        qControlDiv.appendChild(documentFragment)
    },
    createAddPolygonBtn: function (documentFragment, func) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.cursor = "pointer";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.zIndex = this.zIndex;
        div.style.opacity = this.opacity;
        div.style.filter = "Alpha(opacity=" + this.opacity * 100 + ");";
        var img = document.createElement("img");
        img.src = this.img;
        div.appendChild(img);
        div.onclick = func;
        documentFragment.appendChild(div);
        documentFragment = null;
        func = null
    },
    setOnAddPolygon: function (func) {
        this.onAddPolygon = func;
        func = null
    }
});
_a.Search.QNearBySearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QNearBySearchRequest",
    strCity: null,
    lng: null,
    lat: null,
    fRadio: null,
    strKeyword: null,
    strType: null,
    iFirstPageNum: null,
    iResultCount: null,
    iSortType: null,
    initialize: function (city, lng, lat, radio, keyword, type, option) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["rn"]);
        this.strCity = city;
        this.lng = _a._aa._aaf._aafa.lngFrom4326ToProjection(lng);
        this.lat = _a._aa._aaf._aafa.latFrom4326ToProjection(lat);
        this.fRadio = radio;
        this.strKeyword = keyword;
        this.strType = type;
        if (option) {
            if (option.pageNum !== undefined) {
                this.iFirstPageNum = option.pageNum
            }
            if (option.resultCount !== undefined) {
                this.iResultCount = option.resultCount
            }
            if (option.sortType !== undefined) {
                this.iSortType = option.iSortType
            }
        }
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.lng && this.lat && this.fRadio && (this.strKeyword || this.strType);
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&px=", this.lng, "&py=", this.lat, "&r=", this.fRadio].join("");
        if (this.strKeyword) {
            queryString += ("&wd=" + encodeURIComponent(this.strKeyword))
        }
        if (this.strType) {
            queryString += ("&tp=" + encodeURIComponent(this.strType))
        }
        if (this.iFirstPageNum) {
            queryString += ("&pn=" + this.iFirstPageNum)
        }
        if (this.iResultCount) {
            queryString += ("&rn=" + this.iResultCount)
        }
        if (this.iSortType) {
            queryString += ("&st=" + this.iSortType)
        }
        return queryString
    }
});
_a.Search.QNearBySearchRequestOption = {
    pageNum: null,
    resultCount: null,
    sortType: null
};
_a._ac._aci = _a._aa._aag(_a._ac.QOverlay, {
    className: "_a._ac._aci",
    marker: null,
    deltaLeft: null,
    deltaTop: null,
    visible: true,
    text: null,
    initialize: function (qMarkerObj, textStr) {
        _a._ac.QOverlay.prototype.initialize.apply(this, []);
        this.width = 0;
        this.height = 0;
        if (qMarkerObj.className === "_a._ac._ach") {
            this.marker = qMarkerObj;
            this.deltaLeft = 15;
            this.deltaTop = -22
        }
        this.text = textStr;
        this.zIndex = _a._aa._aab.QMarkerTipZIndex;
        qMarkerObj = null;
        textStr = null
    },
    render: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        if (qOverlayDiv) {
            qOverlayDiv.innerHTML = "";
            var qMarkerTipDivStr = ["<div id='", _a._aa._aaf._aafg("QMarkerTipDiv_" + this.id, this.mapNumber), "' class='QTipDiv' style='position:absolute;background-color:white;border:#AEAEAE 1px solid;cursor:pointer;z-index:", _a._aa._aab._aabd, ";'>", "<font size='2' align='center' color='#AEAEAE'><nobr>", this.text, "</nobr></font>", "</div>"].join("");
            qOverlayDiv.innerHTML = qMarkerTipDivStr;
            this.addActionListener()
        }
        qMarkerTipDivStr = null;
        qOverlayDiv = null
    },
    addActionListener: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        var qMarkerTipDiv = document.getElementById(_a._aa._aaf._aafg("QMarkerTipDiv_" + this.id, this.mapNumber));
        if (this.visible) {
            qMarkerTipDiv.style.display = "block"
        } else {
            qMarkerTipDiv.style.display = "none"
        }
    },
    setVisible: function (visible) {
        this.visible = visible;
        if (this.visible) {
            this.zIndex = _a._aa._aab._aabd
        } else {
            this.zIndex = _a._aa._aab._aaba
        }
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    isVisible: function () {
        return this.visible
    },
    setText: function (textStr) {
        this.text = textStr;
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    getText: function () {
        return this.text
    }
});
(function () {
    var defaultStyle = {
        'url': _a._aa._aab._aabr + 'themes/default/img/infoWindow.png',
        'TOP_LEFT': [0, 0, 10, 10],
        'TOP_RIGHT': [630, 0, 10, 10],
        'BOTTOM_LEFT': [0, 386, 10, 10],
        'BOTTOM_RIGHT': [630, 386, 10, 10],
        'minWidth': 220,
        'minHeight': 60,
        'maxWidth': 500,
        'maxHeight': 400,
        'stem': {
            'side': _a._aa.QALIGN.BOTTOM,
            'trangle': [
                [306, 396],
                [354, 396],
                [280, 455]
            ]
        },
        'shadow': {
            'url': _a._aa._aab._aabr + 'themes/default/img/infoWindowShadow.png',
            'TOP_LEFT': [276, 0, 20, 10],
            'TOP_RIGHT': [906, 0, 20, 10],
            'BOTTOM_LEFT': [4, 274, 20, 10],
            'BOTTOM_RIGHT': [634, 274, 20, 10],
            'offset': [-18, -8],
            'stem': {
                'area': [248, 275, 112, 55],
                'offset': 35
            }
        },
        'offset': [-5, 4],
        'contentmargin': [15, 15]
    };

    function setCoordinates(element, coordinates, align) {
        var xSymbol = _a._aa.QALIGN.isLeft(align) ? 'left' : 'right';
        var ySymbol = _a._aa.QALIGN.isBottom(align) ? 'bottom' : 'top';
        element.style[xSymbol] = parseInt(coordinates[0], 10) + 'px';
        element.style[ySymbol] = parseInt(coordinates[1], 10) + 'px';
        try {
            element.style.width = parseInt(coordinates[2], 10) + 'px';
            element.style.height = parseInt(coordinates[3], 10) + 'px'
        } catch (e) {}
    }
    function destroyCssSprite(dom) {
        dom && dom.firstChild && _a._aa._aaf.removeNode(dom.firstChild);
        dom && dom.parentNode && _a._aa._aaf.removeNode(dom)
    }
    function getCssSprite(sprite, coordinates, align, zIndex, parent, element) {
        zIndex = zIndex || 1;
        align = align || _a._aa.QALIGN.TOP_LEFT;
        var img = null;
        if (element) {
            img = element.firstChild
        } else {
            element = document.createElement('div');
            element.style.cssText = 'position:absolute;overflow:hidden;z-index:' + zIndex
        }!element.parentNode && parent && coordinates[2] != 0 && coordinates[3] != 0 && parent.appendChild(element);
        if (sprite) {
            img = _a._aa._aaf.getCssSpriteImage(sprite['url'], sprite['normal'], img);
            !img.parentNode && element.appendChild(img);
            if (sprite['mouseover']) {
                _a._aa.QMVCEvent.clearListeners(element, 'mouseover');
                _a._aa.QMVCEvent.clearListeners(element, 'mouseout');
                _a._aa.QMVCEvent.addDomListener(element, 'mouseover', function () {
                    img.style.left = -sprite['mouseover'][0] + 'px';
                    img.style.top = -sprite['mouseover'][1] + 'px'
                });
                _a._aa.QMVCEvent.addDomListener(element, 'mouseout', function () {
                    img.style.left = -sprite['normal'][0] + 'px';
                    img.style.top = -sprite['normal'][1] + 'px'
                })
            }
        }
        setCoordinates(element, coordinates, align);
        return element
    }
    function delta(a, b) {
        return a > b ? a - b : b - a
    }
    var STEM_PIECE = 10;

    function getNodesByStyle(style, size, doms, blur) {
        doms = doms || {};
        blur = parseInt(blur, 10) || 0;
        var width = size.width;
        var height = size.height;
        var perspective = style['BOTTOM_LEFT'][0] != style['TOP_LEFT'][0];
        var stem = style['stem'];
        var root = doms['root'];
        if (!root) {
            root = document.createElement('div');
            root.style.cssText = 'position:absolute;';
            doms['root'] = root
        }
        doms['stems'] = doms['stems'] || [];
        for (var k = 0, slen = doms['stems'].length; k < slen; ++k) {
            var item = doms['stems'][k];
            destroyCssSprite(item);
            doms['stems'][k] = null
        }
        doms['stems'] = [];
        var theta = 1.414;
        perspective && (height = parseInt(height / theta));
        var widths = [style['TOP_LEFT'][2], width, style['TOP_RIGHT'][2]];
        widths.push(height);
        var middleWidth = widths[0] + widths[1] + widths[2] - style['TOP_LEFT'][3] - height;
        widths.push(middleWidth);
        widths.push(height + 2 * blur);
        widths.push(widths[0]);
        widths.push(widths[1]);
        widths.push(widths[2]);
        var posxs = [style['TOP_LEFT'][0], style['TOP_LEFT'][0] + style['TOP_LEFT'][2], style['TOP_RIGHT'][0]];
        posxs.push(style['TOP_LEFT'][0] - height);
        posxs.push(style['TOP_LEFT'][0]);
        posxs.push(style['TOP_RIGHT'][0] + style['TOP_RIGHT'][2] - style['TOP_RIGHT'][3] - height);
        posxs.push(style['BOTTOM_LEFT'][0]);
        posxs.push(style['BOTTOM_LEFT'][0] + style['BOTTOM_LEFT'][2]);
        posxs.push(style['BOTTOM_RIGHT'][0]);
        var heights = [style['TOP_LEFT'][3], height, style['BOTTOM_LEFT'][3]];
        var posys = [style['TOP_LEFT'][1], style['TOP_LEFT'][1] + style['TOP_LEFT'][3], style['BOTTOM_RIGHT'][1]];
        for (var i = 0; i < 9; i++) {
            if (i % 2 == 1) {
                if (doms[i] && doms[i].parentNode) {
                    destroyCssSprite(doms[i]);
                    doms[i] = null
                }
            }
            var h = i % 3;
            var v = parseInt(i / 3, 10);
            var x = 0,
                y = 0;
            for (var j = 0; j < h; j++) {
                var ind = perspective ? v * 3 + j : j;
                x += widths[ind]
            }
            if (perspective) {
                for (j = 0; j < v; j++) {
                    x -= heights[j + 1]
                }
                if (j == 2) {
                    x += blur
                }
            }
            for (j = 0; j < v; j++) {
                y += heights[j]
            }
            x = parseInt(x, 10);
            y = parseInt(y, 10);
            if (stem && i == stem['side']) {
                var stemOffset = stem['offset'] || 0;
                var trangle = stem['trangle'];
                var area = stem['area'];
                var index = _a._aa.QALIGN.isTop(i) || _a._aa.QALIGN.isBottom(i) ? 0 : 1;
                var wh = [widths, heights];
                var hv = [h, v];
                var xy = [posxs, posys];
                var ind = perspective && index == 1 ? i : hv[1 - index];
                var ind_ = perspective && index == 1 ? i : hv[index];
                var pos = [null, null];
                var distance = parseInt(trangle ? delta(trangle[0][index], trangle[1][index]) : area[2 + index], 10);
                var block = parseInt((wh[index][ind_] - distance) / 2, 10);
                pos[1 - index] = xy[1 - index][ind];
                pos[index] = trangle ? trangle[1][index] : area[index] + area[2 + index];
                var imgInfo = {
                    'url': style['url'],
                    'normal': pos
                };
                var coord = [x, y, null, null];
                coord[2 + index] = block;
                coord[2 + index] -= stemOffset;
                coord[3 - index] = wh[1 - index][ind];
                var ft = i + 'front',
                    bk = i + 'back';
                doms[ft] = getCssSprite(imgInfo, coord, null, null, root, doms[ft]);
                coord[index] = coord[index] + distance + block - stemOffset;
                block = wh[index][ind_] - distance - block;
                coord[2 + index] = block + stemOffset;
                doms[bk] = getCssSprite(imgInfo, coord, null, null, root, doms[bk]);
                coord[index] -= distance;
                coord[2 + index] = distance;
                pos[index] = trangle ? trangle[0][index] : area[index];
                imgInfo['normal'] = pos;
                var stems = doms['stems'];
                doms['stemblank'] = getCssSprite(imgInfo, coord, null, null, root, doms['stemblank']);
                var sign = _a._aa.QALIGN.isTop(i) || _a._aa.QALIGN.isLeft(i) ? -1 : 1;
                if (area) {
                    pos[1 - index] += sign == 1 ? coord[3 - index] : -area[3 - index];
                    pos[index] = area[index];
                    coord[1 - index] += sign == 1 ? coord[3 - index] : -area[3 - index];
                    coord[3 - index] = area[3 - index];
                    doms['stems'].push(getCssSprite(imgInfo, coord, null, null, root))
                } else {
                    var deltaStem = delta(trangle[0][1 - index], trangle[2][1 - index]);
                    var pieces = deltaStem / STEM_PIECE;
                    pieces = deltaStem % STEM_PIECE == 0 ? pieces : parseInt(pieces, 10) + 1;
                    theta = STEM_PIECE / deltaStem;
                    var delta02 = parseInt(theta * (trangle[0][index] - trangle[2][index]));
                    var delta12 = parseInt(theta * (trangle[2][index] - trangle[1][index]));
                    coord[1 - index] += (sign + 1) * coord[3 - index] / 2;
                    coord[1 - index] += (sign - 1) * STEM_PIECE / 2;
                    coord[3 - index] = STEM_PIECE;
                    pos[1 - index] = trangle[0][1 - index] + (sign - 1) * STEM_PIECE / 2;
                    if (delta02 > 0) {
                        coord[index] -= delta02;
                        coord[2 + index] += delta02;
                        pos[index] -= delta02
                    }
                    if (delta12 > 0) {
                        coord[2 + index] += delta12
                    }
                    for (var m = 0; m < pieces; m++) {
                        doms['stems'].push(getCssSprite(imgInfo, coord, null, null, root));
                        coord[1 - index] += sign * STEM_PIECE;
                        coord[index] -= delta02;
                        coord[2 + index] += (delta02 + delta12);
                        pos[index] -= delta02;
                        pos[1 - index] += sign * STEM_PIECE;
                        imgInfo['normal'] = pos
                    }
                }
            } else {
                var ind = perspective ? i : h;
                var coord = [x, y, widths[ind], heights[v]];
                var pos = [posxs[ind], posys[v]];
                if (perspective && i == _a._aa.QALIGN.CENTER && blur != 0) {
                    var widRight = parseInt(widths[ind] / 2);
                    var coordRight = [x + widRight, y, widths[ind] - widRight, heights[v]];
                    var posRight = [posxs[ind + 1] - widRight, posys[v]];
                    var imgInfoRight = {
                        'url': style['url'],
                        'normal': posRight
                    };
                    doms['right' + i] = getCssSprite(imgInfoRight, coordRight, null, null, root, doms['right' + i]);
                    coord[2] = widRight
                }
                var imgInfo = {
                    'url': style['url'],
                    'normal': pos
                };
                if (doms[i + 'front']) {
                    destroyCssSprite(doms[i + 'front']);
                    doms[i + 'front'] = null
                }
                if (doms[i + 'back']) {
                    destroyCssSprite(doms[i + 'back']);
                    doms[i + 'back'] = null
                }
                doms[i] = getCssSprite(imgInfo, coord, null, null, root, doms[i])
            }
        }
        return doms
    }
    function getBlur(style) {
        var ss = style['shadow'];
        if (!ss) {
            return 0
        }
        var pers = !(ss['TOP_LEFT'][0] == ss['BOTTOM_LEFT'][0]);
        return !pers ? ss['TOP_LEFT'][2] - style['BOTTOM_LEFT'][2] : ss['TOP_LEFT'][3] - style['TOP_LEFT'][3] / 1.414
    }
    function getInfoWindowNodes(style, size, doms) {
        doms = doms || {
            'window': null,
            'shadow': null
        };
        var blur = getBlur(style);
        if (style['shadow']) {
            if (style['shadow']['stem'] && style['stem']) {
                style['shadow']['stem']['side'] = style['stem']['side']
            }
            doms['shadow'] = getNodesByStyle(style['shadow'], size, doms['shadow'], blur)
        }
        doms['window'] = getNodesByStyle(style, size, doms['window']);
        return doms
    }
    function getStemOffset(style, size) {
        var stem = style['stem'];
        var side = stem ? stem['side'] : _a._aa.QALIGN.BOTTOM;
        var index = _a._aa.QALIGN.isTop(side) || _a._aa.QALIGN.isBottom(side) ? 0 : 1;
        var sign = _a._aa.QALIGN.isTop(side) || _a._aa.QALIGN.isLeft(side) ? -1 : 1;
        var wh = [size.width, size.height];
        var offset = [0, 0];
        offset[1 - index] = (1 + sign) * (style['TOP_LEFT'][3 - index] + style['BOTTOM_LEFT'][3 - index] + wh[1 - index]) / 2;
        if (stem) {
            var trangle = stem['trangle'];
            offset[1 - index] += sign * (trangle[2][1 - index] - trangle[0][1 - index]);
            offset[index] = (trangle[0][index] + trangle[1][index]) / 2 - trangle[2][index]
        }
        offset[1 - index] = -sign * offset[1 - index];
        offset[index] -= (wh[index] / 2 + style['TOP_LEFT'][2 + index]);
        return offset
    }
    function getCloseButton(style, element, infoView) {
        var coordinate = style['margin'].concat(style['size']);
        var attached = false;
        if (element) {
            attached = true
        }
        element = getCssSprite(style, coordinate, style.align, 3, null, element);
        element.style.cursor = 'pointer';
        !attached && _a._aa.QMVCEvent.addDomListener(element, 'click', function () {
            infoView.close()
        });
        return element
    }
    function getShadowOffset(style, size, height) {
        var ss = style['shadow'];
        var offset = size.height / 1.414 + ss['TOP_LEFT'][3] + ss['BOTTOM_LEFT'][3];
        var pers = !(ss['TOP_LEFT'][0] == ss['BOTTOM_LEFT'][0]);
        if (ss['stem']) {
            offset += ss['stem']['area'][3]
        }
        var blur = getBlur(style);
        var result = ss['offset'] ? ss['offset'].slice(0) : [0, 0];
        if (pers) {
            result[0] += offset - ss['TOP_LEFT'][3] - blur + height / 1.414;
            result[1] += offset * 0.414 - blur + height / 1.414
        }
        result[0] -= blur;
        result[1] -= blur;
        return result
    }
    function getInfoWindowSize(style, size) {
        var result = [];
        var margin = style['contentmargin'];
        result.push(size['width'] + margin[0] * 2);
        result.push(size['height'] + margin[1] * 2);
        return result
    }
    function getInnerSize(size, style) {
        var margin = style['contentmargin'];
        var wid = size.width + margin[0] * 2 - style['TOP_LEFT'][2] - style['TOP_RIGHT'][2];
        var hei = size.height + margin[1] * 2 - style['TOP_LEFT'][3] - style['BOTTOM_RIGHT'][3];
        return {
            width: wid,
            height: hei
        }
    }
    _a._ac.QInfoWindow = _a._aa._aag(_a._aa.QMVCObject, {
        className: 'QQImpl._ac.QInfoWindow',
        initialize: function (style) {
            style = style || defaultStyle;
            this.set('style', style);
            this.set('ifAutoPan', true);
            this.set('autoPanBorder', {
                'left': 5,
                'right': 5,
                'top': 5,
                'bottom': 5
            });
            this.view_ = new QInfoWindowView(this)
        },
        map_changed: function () {
            this.set('panes', {
                floatPane: this.mvc.view.qFloatDiv,
                overlayMouseTarget: this.mvc.view.qOverlayMouseTargetDiv,
                floatShadow: this.mvc.view.qFloatShadowDiv,
                overlayImage: this.mvc.view.qOverlaysDiv,
                overlayShadow: this.mvc.view.qOverlaysShadowDiv,
                overlayLayer: null,
                mapPane: null
            })
        },
        open: function (content, position, style) {
            if (content) {
                this.set('content', content)
            }
            style && this.set('style', style);
            if (position) {
                if (position.className != '_a._ac._ach') {
                    this.set('position', position)
                } else {
                    this.unbind('anchorSign');
                    this.set('anchor', position);
                    this.bindTo('anchorSign', position, 'anchorSign')
                }
            }
            this.set('ifresetpos', true);
            this.set('visible', true)
        },
        close: function () {
            this.view_.close()
        },
        notifyContentChange: function (ifNoAutoPan) {
            !ifNoAutoPan && this.set('ifresetpos', true);
            this.notify('content')
        },
        setDeltaHeight: function () {},
        getVisible: function () {
            return this.get('visible')
        }
    });
    _a._aa.QMVCAccessor.set(_a._ac.QInfoWindow, {
        position: _a._aa.QMVCAccessor.isInstanceOf(_a._ac.QLngLat),
        visible: null,
        content: null
    });
    var qInfoWindows = [];

    function getNatureSize(content, max, container) {
        container = container || document.body;
        var tmpDom = document.createElement('table');
        tmpDom.style.cssText = 'margin:0;padding:0;';
        tmpDom.cellSpacing = 0;
        tmpDom.cellPadding = 0;
        var tr = tmpDom.insertRow(-1);
        tr.style.cssText = 'margin:0;padding:0;';
        var cell = tr.insertCell(-1);
        cell.style.cssText = 'font-size:12px;margin:0;padding:0;line-height:18px;';
        var parent = content.parentNode;
        var nextSibling = content.nextSibling;
        if (parent) {
            parent.removeChild(content)
        }
        cell.appendChild(content);
        container.appendChild(tmpDom);
        tmpDom.offsetWidth > max && (cell.style.width = max + 'px');
        var width = tmpDom.offsetWidth + 2;
        var height = tmpDom.offsetHeight + 2;
        var size = {
            'width': width,
            'height': height
        };
        if (parent) {
            nextSibling && parent.insertBefore(content, nextSibling);
            nextSibling || parent.appendChild(content)
        }
        _a._aa._aaf.removeNode(tmpDom);
        return size
    }
    var QInfoWindowView = _a._aa._aag(_a._aa.QMVCView, {
        className: 'QInfoWindowView',
        initialize: function (infoWindow) {
            this.bindTo('panes', infoWindow);
            this.bindTo('content', infoWindow);
            this.bindTo('position', infoWindow);
            this.bindTo('anchor', infoWindow);
            this.bindTo('visible', infoWindow);
            this.bindTo('ifresetpos', infoWindow);
            this.bindTo('style', infoWindow);
            this.bindTo('map', infoWindow);
            this.bindTo('anchorSign', infoWindow);
            this.bindTo('autoPanBorder', infoWindow);
            this.bindTo('ifAutoPan', infoWindow);
            this.bindTo('disableAutoPan', infoWindow);
            this.bindTo('redraw', infoWindow);
            this.infoWindowModel_ = infoWindow;
            qInfoWindows.push(this)
        },
        draw: function () {
            var style = this.get('style');
            if (!style) {
                this.set('style', defaultStyle);
                return
            }
            style.offset = style.offset || [0, 0];
            var size = this.get('size');
            var anchor = this.get('anchor');
            var panes = this.get('panes');
            var pos;
            if (panes) {
                var convertor = this.infoWindowModel_.mvc.view.latlngPixelConvertor;
                var anchorSize = [0, 0];
                if (anchor) {
                    var lnglat = anchor.get('position');
                    var bounds = anchor.getPixelBounds();
                    anchorSize = [bounds[2], bounds[3]];
                    var sideI = _a._aa.QALIGN.BOTTOM;
                    style['stem'] && style['stem']['side'] && (sideI = style['stem']['side']);
                    var anchorX = parseInt(bounds[2] / 2, 10);
                    if (sideI == _a._aa.QALIGN.LEFT) {
                        anchorX = bounds[2]
                    }
                    if (sideI == _a._aa.QALIGN.RIGHT) {
                        anchorX = 0
                    }
                    var anchorY = parseInt(bounds[3] / 2, 10);
                    if (sideI == _a._aa.QALIGN.BOTTOM) {
                        anchorY = 0
                    }
                    if (sideI == _a._aa.QALIGN.TOP) {
                        anchorY = bounds[3]
                    }
                    var pixels = convertor.LatLng2Pixel(lnglat.getLng(), lnglat.getLat());
                    var ll = convertor.Pixel2LatLng(pixels[0] - bounds[0] + anchorX, pixels[1] - bounds[1] + anchorY);
                    pos = {
                        'x': pixels[0] - bounds[0] + anchorX,
                        'y': pixels[1] - bounds[1] + anchorY
                    }
                } else if (this.get('position')) {
                    pos = this.get('position');
                    pos = convertor.LatLng2Pixel(pos.getLng(), pos.getLat());
                    pos = {
                        'x': pos[0],
                        'y': pos[1]
                    }
                } else {
                    return
                }
                if ((!pos.y && pos.y != 0) || (!pos.x && pos.x != 0)) {
                    return
                }!style['contentmargin'] && (style['contentmargin'] = [10, 10]);
                var wrapSize = getInfoWindowSize(style, size);
                size = getInnerSize(size, style);
                var stemOffset = getStemOffset(style, size);
                this.dom_ = getInfoWindowNodes(style, size, this.dom_);
                var win = this.dom_['window']['root'];
                if (this.get('visible')) {
                    win.style.display = ''
                } else {
                    win.style.display = 'none'
                }
                if (win.parentNode != panes.floatPane) {
                    win.parentNode && win.parentNode.removeChild(win);
                    panes.floatPane.appendChild(win)
                }
                var winLeft = parseInt(pos.x + stemOffset[0], 10);
                var winTop = parseInt(pos.y + stemOffset[1], 10);
                winLeft += style.offset[0];
                winTop += style.offset[1];
                var ifresetpos = this.get('ifresetpos');
                if (ifresetpos) {
                    this.set('ifresetpos', false);
                    var found = false;
                    var lastInfoWIndex = 0;
                    for (var i = 0, len = qInfoWindows.length; i < len; i++) {
                        var infoW = qInfoWindows[i];
                        if (infoW.get('visible')) {
                            var infoWDom = infoW.dom_['window']['root'];
                            if (found) {
                                qInfoWindows[i] = qInfoWindows[lastInfoWIndex];
                                qInfoWindows[lastInfoWIndex] = infoW;
                                var infoWDomLast = qInfoWindows[i].dom_['window']['root'];
                                infoWDomLast.style.zIndex = i + 1;
                                infoWDom.style.zIndex = i
                            } else {
                                infoWDom.style.zIndex = i + 1
                            }
                            infoW == this && (found = true);
                            lastInfoWIndex = i
                        }
                    }
                }
                if (ifresetpos && this.get('ifAutoPan')) {
                    var winWidth = wrapSize[0];
                    var winHeight = wrapSize[1];
                    var maxW = this.infoWindowModel_.mvc.view.viewSizeWidth;
                    var maxH = this.infoWindowModel_.mvc.view.viewSizeHeight;
                    var disW = 0;
                    var disH = 0;
                    var v = this.infoWindowModel_.mvc.view;
                    var maxLeft = winLeft + v.qOverlaysDivLeft;
                    var maxTop = winTop + v.qOverlaysDivTop;
                    var stem = style['stem'];
                    var side = stem ? stem['side'] : _a._aa.QALIGN.BOTTOM;
                    var index = _a._aa.QALIGN.isTop(side) || _a._aa.QALIGN.isBottom(side) ? 0 : 1;
                    var sign = _a._aa.QALIGN.isTop(side) || _a._aa.QALIGN.isLeft(side) ? -1 : 1;
                    var stemHeight = 0;
                    if (stem) {
                        var trangle = stem['trangle'];
                        stemHeight = sign * (trangle[2][1 - index] - trangle[0][1 - index])
                    }
                    switch (stem['side']) {
                    case _a._aa.QALIGN.TOP:
                        maxTop -= stemHeight;
                        maxTop -= anchorSize[1];
                    case _a._aa.QALIGN.BOTTOM:
                        winHeight += stemHeight;
                        winHeight += anchorSize[1];
                        break;
                    case _a._aa.QALIGN.LEFT:
                        maxLeft -= stemHeight;
                        maxLeft -= anchorSize[0];
                    case _a._aa.QALIGN.RIGHT:
                        winWidth += stemHeight;
                        winWidth += anchorSize[0];
                        break
                    }
                    var border = this.get('autoPanBorder');
                    !border.left && border.left != 0 && (border.left = 5);
                    !border.right && border.right != 0 && (border.right = 5);
                    !border.top && border.top != 0 && (border.top = 5);
                    !border.bottom && border.bottom != 0 && (border.bottom = 5);
                    if (maxLeft < border.left) {
                        disW = maxLeft - border.left
                    } else if (maxLeft + winWidth > maxW - border.right) {
                        disW = maxLeft + winWidth - maxW + border.right
                    }
                    if (maxTop < border.top) {
                        disH = maxTop - border.top
                    } else if (maxTop + winHeight > maxH - border.bottom) {
                        disH = maxTop + winHeight - maxH + border.bottom
                    }
                    var mapCenter = [v.mapDivCenterLeft - v.qOverlaysDivLeft + disW, v.mapDivCenterTop - v.qOverlaysDivTop + disH];
                    mapCenter = convertor.Pixel2LatLng(mapCenter[0], mapCenter[1]);
                    mapCenter = new _a._ac.QLngLat(mapCenter[0], mapCenter[1]);
                    if (disW != 0 || disH != 0) {
                        this.get('map').moveTo(mapCenter)
                    }
                }
                win.style.left = winLeft + 'px';
                win.style.top = winTop + 'px';
                wrapSize.unshift(0, 0);
                this.wrap_ = getCssSprite(null, wrapSize, null, 3, win, this.wrap_);
                this.wrap_.style.cursor = 'auto';
                this.wrap_.onclick = function (event) {
                    event = event || window.event;
                    event.cancelBubble = true;
                    event.stopPropagation && event.stopPropagation()
                };
                this.wrap_.onmousedown = function (event) {
                    event = event || window.event;
                    event.cancelBubble = true;
                    event.stopPropagation && event.stopPropagation()
                };
                this.wrap_.ondblclick = function (event) {
                    event = event || window.event;
                    event.cancelBubble = true;
                    event.stopPropagation && event.stopPropagation()
                };
                var margin = style['contentmargin'];
                var coord = [margin[0], margin[1], wrapSize[2] - margin[0] * 2, wrapSize[3] - margin[1] * 2];
                this.content_ = getCssSprite(null, coord, null, null, this.wrap_, this.content_);
                this.content_.style.overflow = 'hidden';
                var content = this.get('content');
                if (content != this.content_.firstChild) {
                    this.content_.innerHTML = '';
                    this.content_.style.lineHeight = '18px';
                    this.content_.appendChild(content);
                    var obj = this;
                    _a._aa._aaf.getDomSize(content, function () {
                        var max = obj.get('style')['maxWidth'] || 600;
                        var nSize = getNatureSize(obj.get('content'), max, panes.floatPane);
                        obj.set('size', nSize)
                    })
                }
                style['closebutton'] = style['closebutton'] || {
                    'align': _a._aa.QALIGN.TOP_RIGHT,
                    'margin': [15, 15],
                    'size': [9, 9],
                    'url': _a._aa._aab._aabr + 'themes/default/img/close.gif',
                    'normal': [0, 0]
                };
                this.close_ = getCloseButton(style['closebutton'], this.close_, this);
                this.wrap_.appendChild(this.close_);
                if (this.dom_['shadow']) {
                    var shadow = this.dom_['shadow']['root'];
                    if (shadow && shadow.parentNode != panes.floatPane) {
                        shadow.parentNode && shadow.parentNode.removeChild(shadow);
                        panes.floatShadow.appendChild(shadow)
                    }
                    if (this.get('visible')) {
                        shadow.style.display = ''
                    } else {
                        shadow.style.display = 'none'
                    }
                    var shadowOffset = getShadowOffset(style, size, anchorSize[1]);
                    shadowOffset[0] += style.offset[0];
                    shadowOffset[1] += style.offset[1];
                    shadow.style.left = parseInt(pos.x + shadowOffset[0] + stemOffset[0], 10) + 'px';
                    shadow.style.top = parseInt(pos.y + shadowOffset[1] + stemOffset[1], 10) + 'px'
                }
            }
            _a._aa._aaf.gc()
        },
        content_changed: function () {
            var content = this.get('content');
            if (!content) {
                return
            }
            if (typeof content == 'string') {
                var tmp = document.createElement('div');
                tmp.innerHTML = content;
                this.set('content', tmp)
            } else {
                var max = this.get('style')['maxWidth'] || 600;
                var container = this.get('panes');
                container = container ? container.floatPane : null;
                this.set('size', getNatureSize(content, max, container))
            }
        },
        ifresetpos_changed: function () {},
        ifAutoPan_changed: function () {},
        autoPanBorder_changed: function () {},
        changed: function (key) {
            var notDraw = false;
            if (!this.get('content')) {
                return
            }
            switch (key) {
            case 'size':
                var style = this.get('style');
                var minWidth = style['minWidth'] || 200;
                var minHeight = style['minHeight'] || 80;
                var maxWidth = style['maxWidth'] || 600;
                var maxHeight = style['maxHeight'] || 400;
                var size = this.get('size');
                if (size.width < minWidth || size.width > maxWidth || size.height < minHeight || size.height > maxHeight) {
                    notDraw = true;
                    size.width = size.width > maxWidth ? maxWidth : size.width;
                    size.width < minWidth && (size.width = minWidth);
                    size.height > maxHeight && (size.height = maxHeight);
                    size.height < minHeight && (size.height = minHeight);
                    this.set('size', size)
                } else {
                    if (size.width < size.height / 1.5) {
                        size.width = size.height / 1.5;
                        notDraw = true;
                        this.set('size', size)
                    }
                }
                break;
            case 'position':
                if (this.get('position')) {
                    this.set('anchor', null)
                } else {
                    noDraw = true
                }
                break;
            case 'anchor':
                if (this.get('anchor')) {
                    this.set('position', null)
                } else {
                    noDraw = true
                }
                break;
            case 'panes':
                break
            }!notDraw && this.redraw()
        },
        close: function () {
            this.set('visible', false)
        }
    })
})();
_a.Search.QStartEndDriveSearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QStartEndDriveSearchRequest",
    strCity: null,
    startString: null,
    endString: null,
    initialize: function (city, startString, endString) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["drive"]);
        this.strCity = city;
        this.startString = startString;
        this.endString = endString
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.startString && this.endString;
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&start=", this.startString, "&dest=", this.endString].join("");
        return queryString
    }
});
_a._ac._acn = _a._aa._aag(_a._ac.QOverlay, {
    className: "_a._ac._acn",
    lng: null,
    lat: null,
    deltaLeft: null,
    deltaTop: null,
    visible: null,
    content: null,
    tipImg: null,
    tipCloseBtnImg: null,
    initialize: function (qObj) {
        _a._ac.QOverlay.prototype.initialize.apply(this, []);
        this.width = 180;
        this.height = 130;
        switch (qObj.className) {
        case "_a._ac._ach":
            this.lng = qObj.lng;
            this.lat = qObj.lat;
            this.deltaLeft = 0;
            this.deltaTop = qObj.height;
            break;
        case "_a._ac.QPolyline":
            this.lng = qObj.pathLatLng[0];
            this.lat = qObj.pathLatLng[1];
            this.deltaLeft = 0;
            this.deltaTop = 0;
            break;
        case "_a._ac._ack":
            this.lng = qObj.pathLatLng[0];
            this.lat = qObj.pathLatLng[1];
            this.deltaLeft = 0;
            this.deltaTop = 0;
            break;
        case "_a._ac.QLngLat":
            this.lng = qObj.lng;
            this.lat = qObj.lat;
            this.deltaLeft = 0;
            this.deltaTop = 0;
            break;
        default:
            this.lng = qObj.lng;
            this.lat = qObj.lat;
            this.deltaLeft = 0;
            this.deltaTop = 0
        }
        this.tipImg = _a._aa._aab._aabr + "/themes/default/img/textarea.gif";
        this.tipCloseBtnImg = _a._aa._aab._aabr + "/themes/default/img/closeBtn.gif";
        this.visible = false;
        this.content = "";
        qObj = null
    },
    render: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        qOverlayDiv.innerHTML = "";
        var qTipDivStr = ["<div id='", _a._aa._aaf._aafg("QTipDiv_" + this.id, this.mapNumber), "' class='QTipDiv' style='width:100%;height:100%;z-index:", _a._aa._aab._aabd, ";'>", "<img src='", this.tipImg, "' style ='width:100%;height:100%'/>", "<div id='", _a._aa._aaf._aafg("QTip_CloseBtnDiv_" + this.id, this.mapNumber), "' style='position:absolute;left:150px;top:1px;width:16px;height:16px;z-index:", _a._aa._aab._aabd, ";cursor:pointer'>", "<img src='", this.tipCloseBtnImg, "' style ='width:100%;height:100%'/>", "</div>", this.content, "</div>"].join("");
        qOverlayDiv.innerHTML = qTipDivStr;
        this.addActionListener();
        qTipDivStr = null;
        qOverlayDiv = null
    },
    addActionListener: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        var closeBtnDiv = document.getElementById(_a._aa._aaf._aafg("QTip_CloseBtnDiv_" + this.id, this.mapNumber));
        var tipDiv = document.getElementById(_a._aa._aaf._aafg("QTipDiv_" + this.id, this.mapNumber));
        if (this.visible) {
            tipDiv.style.display = "block"
        } else {
            tipDiv.style.display = "none"
        }
        var this_ = this;
        closeBtnDiv.onclick = function (event) {
            event = event || window.event;
            this_.visible = false;
            qOverlayDiv.style.zIndex = _a._aa._aab._aaba;
            tipDiv.style.display = "none"
        };
        closeBtnDiv = null
    },
    setVisible: function (visible) {
        this.visible = visible;
        if (this.visible) {
            this.zIndex = _a._aa._aab._aabd
        } else {
            this.zIndex = _a._aa._aab._aaba
        }
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    addContent: function (htmlStr) {
        this.content += htmlStr;
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    setLocation: function (qLngLat) {
        if (qLngLat.className === "_a._ac.QLngLat") {
            this.lng = qLngLat.lng;
            this.lat = qLngLat.lat;
            var qevent = new _a._ab._abb.QOverlayMovedEvent(this);
            this.mvc.triggerEvent(qevent)
        }
        qLngLat = null
    }
});
_a.Search.QStartEndBusSearchRequest = _a._aa._aag(_a.Search.QRequest, {
    className: "_a.Search.QStartEndBusSearchRequest",
    strCity: null,
    strStartKeyword: null,
    strEndKeyword: null,
    iStartType: 2,
    iEndType: 2,
    initialize: function (city, startKeyword, endKeyword) {
        _a.Search.QRequest.prototype.initialize.apply(this, ["bus"]);
        this.strCity = city;
        this.strStartKeyword = startKeyword;
        this.strEndKeyword = endKeyword
    },
    isValid: function () {
        var bValid = false;
        bValid = this.strQueryType && this.strCity && this.strStartKeyword && this.strEndKeyword;
        return bValid
    },
    toQueryString: function () {
        var queryString = ["qt=", this.strQueryType, "&c=", encodeURIComponent(this.strCity), "&start=", this.iStartType, "$$$$$", encodeURIComponent(this.strStartKeyword), "&end=", this.iEndType, "$$$$$", encodeURIComponent(this.strEndKeyword)].join("");
        return queryString
    }
});
_a.Search.QRoamSearchResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QRoamSearchResult",
    city: null,
    sample: null,
    end: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            result = null;
            return
        }
        this.city = new _a.Search.QPOISearchResult.City(result.detail);
        if (result.detail !== undefined) {
            if (result.detail.sample !== undefined) {
                this.sample = result.detail.sample
            }
            if (result.detail.end !== undefined) {
                this.end = result.detail.end
            }
        }
        result = null
    }
});
(function () {
    _a._ac._acd.QScaleControl = _a._aa._aag(_a._ac._acd, {
        className: '_a._ac.QScaleControl',
        initialize: function () {},
        draw: function () {
            var cont = document.createElement('div');
            cont.style.width = '100px';
            var text = document.createElement('div');
            var ruler = document.createElement('div');
            text.style.cssText = 'font:11px arial,simsun;' + 'color:#333333;text-align:center;';
            ruler.style.cssText = 'position:relative;height:8px;width:84px;';
            var rl = document.createElement('div');
            rl.style.cssText = 'position:absolute;border:1px solid #ffffff;' + 'width:1px;*width:3px;height:6px;*height:8px;background:#333333;' + 'font-size:0;line-height:0;';
            rl.style.left = 0;
            var rr = document.createElement('div');
            rr.style.cssText = rl.style.cssText;
            rr.style.left = '81px';
            var rm = document.createElement('div');
            rm.style.cssText = rl.style.cssText;
            rm.style.left = '2px';
            rm.style.width = '80px';
            rm.style.height = '2px';
            rm.style.top = '2px';
            rm.style.borderLeft = 'none';
            rm.style.borderRight = 'none';
            ruler.appendChild(rl);
            ruler.appendChild(rr);
            ruler.appendChild(rm);
            cont.appendChild(text);
            cont.appendChild(ruler);
            this.set('content', cont);
            this.set('text', text);
            this.set('rr', rr);
            this.set('rm', rm);
            this.set('widths', [52, 52, 52, 52, 52, 41, 82, 82, 82, 65, 65, 65, 52, 52, 52, 41, 82, 82, 82]);
            this.bindTo('zoom', this.mvc.model.model_);
            this.bindTo('center', this.mvc.model.model_)
        },
        changed: function (key) {
            if (key == 'zoom' || key == 'center') {
                if (!this.get('center') || !this.get('zoom')) {
                    return
                }
                var lat = this.get('center').getLat();
                var zoom = this.get('zoom') || '';
                var text = this.get('text');
                text && (text.innerHTML = _a._af._acd.ScaleText[zoom]);
                var rr = this.get('rr');
                var rm = this.get('rm');
                var widths = this.get('widths');
                var wid = widths[zoom] / Math.cos(lat / 180);
                text.style.width = wid + 4 + 'px';
                rm.style.width = wid + 'px';
                rr.style.left = wid + 1 + 'px';
                this.render()
            }
        }
    })
})();
_a.Search.QNearBySearchResult = _a._aa._aag(_a.Search.QResult, {
    className: "_a.Search.QNearBySearchResult",
    totalCount: null,
    currentCount: null,
    pois: null,
    city: null,
    initialize: function (result) {
        _a.Search.QResult.prototype.initialize.apply(this, [result]);
        if (this.error !== 0) {
            obj = null;
            return
        }
        this.totalCount = result.info.total;
        this.currentCount = result.info.rnum;
        if (this.totalCount > 0 && this.currentCount > 0) {
            this.pois = [];
            var i;
            var nCurrentPOIs = result.detail.pois.length;
            for (i = 0; i < nCurrentPOIs; i++) {
                this.pois.push(new _a.Search.QPOISearchResult.POI(result.detail.pois[i]))
            }
            i = null;
            nCurrentPOIs = null
        }
        this.city = new _a.Search.QPOISearchResult.City(result.detail.city);
        obj = null
    }
});
getTextMaxCols = function (content) {
    if (!content || content === "") {
        return 0
    }
    var arrayText = content.split('\n');
    var maxCols = 0;
    for (i = 0, size = arrayText.length; i < size; i++) {
        var text = arrayText[i];
        var tByteLen = 0;
        for (var j = 0, tLen = text.length; j < tLen; j++) {
            if (text.charCodeAt(j) > 255) {
                tByteLen += 2
            } else {
                tByteLen++
            }
        }
        if (maxCols < tByteLen) {
            maxCols = tByteLen
        }
    }
    return maxCols
};
getTextMaxRows = function (content) {
    if (!content || content === "") {
        return 0
    }
    var arrayText = content.split('\n');
    return arrayText.length
};
_a._ac.QTip2 = _a._aa._aag(_a._ac.QOverlay, {
    className: "_a._ac.QTip2",
    lng: null,
    lat: null,
    deltaLeft: null,
    deltaTop: null,
    direction: null,
    visible: null,
    content: null,
    tipImg: null,
    tipCloseBtnImg: null,
    initialize: function (qObj) {
        this.qObjId = qObj.id;
        _a._ac.QOverlay.prototype.initialize.apply(this, []);
        this.width = 200;
        this.height = 150;
        nameMaxCols = getTextMaxCols(qObj.name);
        desMaxCols = getTextMaxCols(qObj.description);
        this.width = Math.max((Math.max(nameMaxCols, desMaxCols) + 2) * 13 / 2 + 32, 200);
        this.height = Math.max((getTextMaxRows(qObj.name) + getTextMaxRows(qObj.description) + 2) * 13 + 32, 150);
        if (this.width > 700) {
            this.width = 700
        }
        if (this.height > 500) {
            this.height = 500
        }
        this.defaultDeltaLeft = 70;
        switch (qObj.className) {
        case "_a._ac._ach":
            this.lng = qObj.lng;
            this.lat = qObj.lat;
            this.deltaLeft = 25 - this.defaultDeltaLeft;
            this.deltaTop = qObj.height + 66;
            break;
        case "_a._ac.QPolyline":
            this.lng = qObj.pathLatLng[0];
            this.lat = qObj.pathLatLng[1];
            this.deltaLeft = 25 - this.defaultDeltaLeft;
            this.deltaTop = 66;
            break;
        case "_a._ac._ack":
            this.lng = qObj.pathLatLng[0];
            this.lat = qObj.pathLatLng[1];
            this.deltaLeft = 25 - this.defaultDeltaLeft;
            this.deltaTop = 66;
            break;
        case "_a._ac.QLngLat":
            this.lng = qObj.lng;
            this.lat = qObj.lat;
            this.deltaLeft = 25 - this.defaultDeltaLeft;
            this.deltaTop = 66;
            break;
        default:
            this.lng = qObj.lng;
            this.lat = qObj.lat;
            this.deltaLeft = 25 - this.defaultDeltaLeft;
            this.deltaTop = 66
        }
        this.direction = 1;
        this.tipImg = _a._aa._aab._aabr + "/themes/default/img/tipImg1.gif";
        this.tipCloseBtnImg = _a._aa._aab._aabr + "/themes/default/img/controlButton.png";
        this.shadowImg = _a._aa._aab._aabr + "/themes/default/img/shadow1.png";
        this.visible = false;
        this.name = "";
        if (qObj.name !== null) {
            this.name = qObj.name
        }
        this.content = "";
        qObj = null
    },
    render: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        var tipWidth = this.width;
        var tipHeight = this.height;
        var shadowImg = this.shadowImg;
        var tipImg = this.tipImg;
        var shadowWidth = tipWidth;
        var shadowHeight = tipHeight / 2;
        var dShadowW = shadowWidth - 334;
        var dShadowH = shadowHeight - 110;
        this.shadowOpacity = 0.6;
        var bottomLeftWidthPercent = 0;
        var dBottomLeftW = dShadowW * bottomLeftWidthPercent;
        var dBottomRightW = dShadowW * (1 - bottomLeftWidthPercent);
        qOverlayDiv.innerHTML = "";
        var qTipDivStr = ["<div id=\"", _a._aa._aaf._aafg("QTipDiv_" + this.id, this.mapNumber), "\" class=\"QTipDiv\" style=\"width:100%;height:100%; z-index:", _a._aa._aab._aabd, ";opacity:1;filter: Alpha(opacity=100);\">", "<div style=\"position: relative; left: 0px; top: 0px; z-index: 10; width: ", tipWidth, "px; height: ", tipHeight, "px;\">", "<div id=\"", _a._aa._aaf._aafg("QTip_CloseBtnDiv_" + this.id, this.mapNumber), "\" style=\"background:transparent url(", this.tipCloseBtnImg, ") no-repeat scroll -24px 0; ", "float:left; height:12px; width:12px;cursor: pointer; position: absolute; left: ", tipWidth - 24, "px; top: 11px; z-index:", _a._aa._aab._aabd, "\">", "</div>", "<div style=\"position: absolute; left: 16px; top: 16px; width: ", tipWidth - 32, "px; height: ", tipHeight - 32, "px; z-index: 10;\">", "<b>", this.name, "</b><br><br>", this.content, "</div>", "</div>", "<div style=\"overflow: hidden; width: 25px; height: 25px; z-index: 1; position: absolute; left: 0px; top: 0px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 690px; height: 786px; -moz-user-select: none;\" src=\"", tipImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: 25px; height: 25px; z-index: 1; position: absolute; left: ", tipWidth - 25, "px; top: 0px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -665px; top: 0px; width: 690px; height: 786px; -moz-user-select: none;\" src=\"", tipImg, "\"/>", "</div>", "<div id=\"", _a._aa._aaf._aafg("QTip_tipPointer_" + this.id, this.mapNumber), "\" style=\"overflow: hidden; width: 97px; height: 96px; z-index: 1; position: absolute; left: 25px; top: ", tipHeight - 25, "px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: 0px; top: -691px; width: 690px; height: 786px; -moz-user-select: none; cursor: url(", _a._aa._aab._aabr + "/themes/default/img/openhand.cur", "), default;\" src=\"", tipImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: 25px; height: 25px; z-index: 1; position: absolute; left: 0px; top: ", tipHeight - 25, "px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: 0px; top: -665px; width: 690px; height: 786px; -moz-user-select: none;\" src=\"", tipImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: 25px; height: 25px; z-index: 1; position: absolute; left: ", tipWidth - 25, "px; top: ", tipHeight - 25, "px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -665px; top: -665px; width: 690px; height: 786px; -moz-user-select: none;\" src=\"", tipImg, "\"/>", "</div>", "<div style=\"border-top: 1px solid rgb(171, 171, 171); position: absolute; left: 25px; top: 0px; width: ", tipWidth - 50, "px; height: 25px; background-color: white;\">", "</div>", "<div style=\"border-left: 1px solid rgb(171, 171, 171); border-right: 1px solid rgb(171, 171, 171); position: absolute; left: 0px; top: 25px; width: ", tipWidth - 2, "px; height: ", tipHeight - 50, "px; background-color: white;\">", "</div>", "<div style=\"border-bottom: 1px solid rgb(171, 171, 171); position: absolute; left: 25px; top: ", tipHeight - 25, "px; width: ", tipWidth - 50, "px; height: 24px; background-color: white;\"></div>", "<div id=\"", _a._aa._aaf._aafg("QTip_shadow_" + this.id, this.mapNumber), "\"  style=\"position: absolute; left:  ", (tipWidth - 98) / 2 - 94, "px; top: ", tipHeight - 25 - 55, "px; z-index:", _a._aa._aab._aabd + 1, "; opacity:", this.shadowOpacity, ";filter: Alpha(opacity=", this.shadowOpacity * 100, ");\">", "<div style=\"overflow: hidden; width: ", 314 + dShadowW, "px; height: 30px; position: absolute; left: ", 104 - dBottomLeftW + dShadowH, "px; top: ", 0 - dShadowH, "px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -323px; top: 0px; width: 1144px; height: 370px; -moz-user-select: none;\" src=\"", shadowImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: 70px; height: 30px; position: absolute; left: ", 418 + dShadowH + dBottomRightW, "px; top: ", 0 - dShadowH, "px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; right: -41px; top: 0px; width: 1144px; height: 370px; -moz-user-select: none;\" src=\"", shadowImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: ", 344 + dShadowW, "px; height: ", 65 + dShadowH, "px; bottom: -1px; position: absolute; left: ", 29 - dBottomLeftW, "px; bottom: -95px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -33px; bottom: -60px; -moz-user-select: none; width: 1144px; height: 370px;\" src=\"", shadowImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: ", 100 + dShadowH, "px; height: ", 65 + dShadowH, "px; bottom: -1px; position: absolute; left: ", 373 + dBottomRightW, "px; top: ", 30 - dShadowH, "px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; right: -56px; top: -30px; -moz-user-select: none; width: 1144px; height: 370px;\" src=\"", shadowImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: ", 20, "px; height: 60px; position: absolute; left: ", 40 - dBottomLeftW, "px; top: 95px; bottom: -155px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -44px; top: -310px; width: 1144px; height: 370px; -moz-user-select: none;\" src=\"", shadowImg, "\"/>", "</div>", "<div   style=\"overflow: hidden; width: 140px; height: 60px; position: absolute; left: 60px; top: 95px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; left: -119px; top: -310px; width: 1144px; height: 370px; -moz-user-select: none;\" src=\"", shadowImg, "\"/>", "</div>", "<div style=\"overflow: hidden; width: ", 142 + dBottomRightW + 62, "px; height: 60px; position: absolute; left: 200px; top: 95px;\">", "<img style=\"border: 0px none ; margin: 0px; padding: 0px; position: absolute; right: -340px; top: -310px; width: 1144px; height: 370px; -moz-user-select: none;\" src=\"", shadowImg, "\"/>", "</div>", "</div>", "</div>"].join("");
        qOverlayDiv.innerHTML = qTipDivStr;
        this.direction = this.getDirection();
        this.rotate(this.direction);
        this.addActionListener();
        tipWidth = null;
        tipHeight = null;
        shadowImg = null;
        tipImg = null;
        shadowWidth = null;
        shadowHeight = null;
        dBottomLeftW = null;
        dBottomRightW = null;
        dShadowW = null;
        dShadowH = null;
        qTipDivStr = null;
        qOverlayDiv = null
    },
    rotate: function (direction) {
        var tipPointerDiv = document.getElementById(_a._aa._aaf._aafg("QTip_tipPointer_" + this.id, this.mapNumber));
        var imgElement = tipPointerDiv.getElementsByTagName("img")[0];
        imgElement.src = _a._aa._aab._aabr + "/themes/default/img/tipImg" + direction + ".gif";
        if (direction == 2) {
            tipPointerDiv.style.left = "-71px";
            tipPointerDiv.style.top = "25px";
            imgElement.style.width = "786px";
            imgElement.style.height = "690px";
            imgElement.style.left = "1px";
            imgElement.style.right = "";
            imgElement.style.top = "0";
            imgElement.style.bottom = "";
            this.deltaLeft = -71;
            this.deltaTop = -(this.height - 25)
        } else if (direction == 3) {
            tipPointerDiv.style.left = (this.width - 96 - 25) + "px";
            tipPointerDiv.style.top = "-71px";
            imgElement.style.width = "690px";
            imgElement.style.height = "786px";
            imgElement.style.left = "";
            imgElement.style.right = "0px";
            imgElement.style.top = "1px";
            imgElement.style.bottom = "";
            this.deltaLeft = this.width - 25;
            this.deltaTop = -(this.height + 96 - 25)
        } else if (direction == 4) {
            tipPointerDiv.style.left = (this.width - 25) + "px";
            tipPointerDiv.style.top = this.height - 96 - 25 + "px";
            imgElement.style.width = "786px";
            imgElement.style.height = "690px";
            imgElement.style.left = "";
            imgElement.style.right = "1px";
            imgElement.style.top = "";
            imgElement.style.bottom = "0";
            this.deltaLeft = 96 - 25 + this.width;
            this.deltaTop = -25 + this.qObjDiv.clientWidth
        } else if (direction == 1) {
            tipPointerDiv.style.left = "25px";
            tipPointerDiv.style.top = (this.height - 25) + "px";
            imgElement.style.width = "690px";
            imgElement.style.height = "786px";
            imgElement.style.left = "0";
            imgElement.style.right = "";
            imgElement.style.top = "";
            imgElement.style.bottom = "1px";
            this.deltaLeft = 25;
            this.deltaTop = 71 + this.qObjDiv.clientWidth
        }
        this.deltaLeft -= this.defaultDeltaLeft;
        var convertor = this.mvc.view.latlngPixelConvertor;
        var pixel = convertor.LatLng2Pixel(this.lng, this.lat);
        this.left = pixel[0] - 70 - this.deltaLeft;
        this.top = pixel[1] - this.height - this.deltaTop;
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        qOverlayDiv.style.left = this.left + "px";
        qOverlayDiv.style.top = this.top + "px";
        if (direction == 1) document.getElementById(_a._aa._aaf._aafg("QTip_shadow_" + this.id, this.mapNumber)).style.display = "block";
        else document.getElementById(_a._aa._aaf._aafg("QTip_shadow_" + this.id, this.mapNumber)).style.display = "none";
        qOverlayDiv = null;
        convertor = null;
        tipPointerDiv = null;
        imgElement = null;
        direction = null
    },
    getDirection: function () {
        if (this.qObjDiv === undefined) this.qObjDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.qObjId, this.mapNumber));
        if (this.qOverlaysDiv === undefined) this.qOverlaysDiv = document.getElementById(_a._aa._aaf._aafg("QOverlaysDiv", this.mapNumber));
        var qObjDivStyle = this.qObjDiv.style;
        var qOverlaysDivStyle = this.qOverlaysDiv.style;
        var qObjPointLeft = parseInt(qObjDivStyle.left) + parseInt(qOverlaysDivStyle.left) + parseInt(qObjDivStyle.width) / 2;
        var qObjPointTop = parseInt(qObjDivStyle.top) + parseInt(qOverlaysDivStyle.top) + parseInt(qObjDivStyle.height);
        var halfQMapWidth = this.qOverlaysDiv.clientWidth / 2;
        var halfQMapHeight = this.qOverlaysDiv.clientHeight / 2;
        var direction = 1;
        if (qObjPointLeft <= halfQMapWidth && qObjPointTop < halfQMapHeight) {
            direction = 2
        } else if (qObjPointLeft > halfQMapWidth && qObjPointTop <= halfQMapHeight) {
            direction = 3
        } else if (qObjPointLeft >= halfQMapWidth && qObjPointTop > halfQMapHeight) {
            direction = 4
        } else if (qObjPointLeft < halfQMapWidth && qObjPointTop >= halfQMapHeight) {
            direction = 1
        }
        qObjDivStyle = null;
        qOverlaysDivStyle = null;
        qObjPointLeft = null;
        qObjPointTop = null;
        halfQMapWidth = null;
        halfQMapHeight = null;
        return direction
    },
    addActionListener: function () {
        var qOverlayDiv = document.getElementById(_a._aa._aaf._aafg("QOverlayDiv_" + this.id, this.mapNumber));
        var closeBtnDiv = document.getElementById(_a._aa._aaf._aafg("QTip_CloseBtnDiv_" + this.id, this.mapNumber));
        var tipDiv = document.getElementById(_a._aa._aaf._aafg("QTipDiv_" + this.id, this.mapNumber));
        if (this.visible) {
            tipDiv.style.display = "block"
        } else {
            tipDiv.style.display = "none"
        }
        var this_ = this;
        closeBtnDiv.onclick = function (event) {
            event = event || window.event;
            this_.visible = false;
            qOverlayDiv.style.zIndex = _a._aa._aab._aaba;
            tipDiv.style.display = "none"
        };
        closeBtnDiv = null
    },
    setWidth: function (width) {
        if (width <= 150) width = 150;
        else if (width >= 700) width = 500;
        this.width = width
    },
    setHeight: function (height) {
        if (height <= 150) height = 150;
        else if (height >= 500) height = 500;
        this.height = height
    },
    getWidth: function () {
        return this.width
    },
    getHeight: function () {
        return this.height
    },
    setVisible: function (visible) {
        this.visible = visible;
        if (this.visible) {
            this.zIndex = _a._aa._aab._aabd
        } else {
            this.zIndex = _a._aa._aab._aaba
        }
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    addContent: function (htmlStr) {
        this.content += htmlStr;
        this.content = this.content.replace(/\n/g, "<br>");
        var qevent = new _a._ab._abb.QOverlayModifiedEvent(this);
        this.mvc.triggerEvent(qevent)
    },
    setLocation: function (qLngLat) {
        if (qLngLat.className === "_a._ac.QLngLat") {
            this.lng = qLngLat.lng;
            this.lat = qLngLat.lat;
            var qevent = new _a._ab._abb.QOverlayMovedEvent(this);
            this.mvc.triggerEvent(qevent)
        }
        qLngLat = null
    }
});
_a._ac._acd.QOverviewMap = _a._aa._aag(_a._ac._acd, {
    className: "_a._ac._acd.QOverviewMap",
    originalCenterLng: null,
    originalCenterLat: null,
    originalZ: null,
    deltaZ: null,
    minImg: null,
    maxImg: null,
    overviewMap: null,
    overviewMapDiv: null,
    mapNumber: null,
    OVM_OPERATING: null,
    log: null,
    initialize: function () {
        _a._ac._acd.prototype.initialize.apply(this, arguments);
        this.width = 200;
        this.height = 150;
        this.deltaZ = 3;
        this.minImg = _a._aa._aab._aabr + "/themes/default/img/ovm_min.gif";
        this.maxImg = _a._aa._aab._aabr + "/themes/default/img/ovm_max.gif";
        this.OVM_OPERATING = false;
        this.log = ""
    },
    render: function (qControlDiv) {
        if (_a._aa._aaf._aafj() === "IE") {
            this.left = this.mvc.model.tileGrid._8 - this.width;
            this.top = this.mvc.model.tileGrid._7 - this.height
        } else {
            this.left = this.mvc.model.tileGrid._8 - this.width - 2;
            this.top = this.mvc.model.tileGrid._7 - this.height - 2
        }
        var parentMvc = this.mvc;
        var parentMapWidth = parentMvc.model.tileGrid._8;
        var parentMapHeight = parentMvc.model.tileGrid._7;
        var originalCenterLng = parentMvc.model.tileGrid.centerLng;
        var originalCenterLat = parentMvc.model.tileGrid.centerLat;
        var parentMapZ = parentMvc.model.tileGrid.baseTileZ;
        var parentMapResolution = parentMvc.model.resolution[parentMapZ];
        this.originalCenterLng = originalCenterLng;
        this.originalCenterLat = originalCenterLat;
        var absoluteZ = parentMapZ - this.deltaZ;
        this.originalZ = (absoluteZ > 0) ? absoluteZ : 0;
        var ovfWidth = parentMapWidth * (parentMapResolution / parentMvc.model.resolution[this.originalZ]);
        var ovfHeight = parentMapHeight * (parentMapResolution / parentMvc.model.resolution[this.originalZ]);
        var documentFragment = document.createDocumentFragment();
        var div = document.createElement("div");
        div.id = "ovmBaseDiv";
        div.style.border = "solid 1px black";
        div.style.background = "gray";
        div.style.display = "block";
        div.style.filter = "Alpha(opacity=" + 100 + ");";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.zIndex = this.zIndex;
        var ovmDiv = document.createElement("div");
        ovmDiv.id = "overviewMapDiv";
        ovmDiv.style.border = "solid 1px black";
        ovmDiv.style.position = "absolute";
        ovmDiv.style.left = 12 + "px";
        ovmDiv.style.top = 12 + "px";
        ovmDiv.style.width = this.width - 24 + "px";
        ovmDiv.style.height = this.height - 24 + "px";
        ovmDiv.style.zIndex = this.zIndex;
        ovmDiv.style.filter = "Alpha(opacity=" + 100 + ");";
        div.appendChild(ovmDiv);
        this.overviewMapDiv = ovmDiv;
        var shieldDiv = ovmDiv.cloneNode(true);
        shieldDiv.id = "shieldDiv";
        shieldDiv.style.overflow = "hidden";
        if (_a._aa._aaf._aafj() === "IE") {
            var blankImg = document.createElement("img");
            blankImg.src = _a._aa._aab._aabr + "/themes/default/img/blank.gif";
            blankImg.style.width = "100%";
            blankImg.style.height = "100%";
            shieldDiv.appendChild(blankImg)
        }
        div.appendChild(shieldDiv);
        var ovfLeft = (parseInt(shieldDiv.style.width, 10) - ovfWidth) / 2;
        var ovfTop = (parseInt(shieldDiv.style.height, 10) - ovfHeight) / 2;
        var ovfDiv = document.createElement("div");
        ovfDiv.id = "overviewFrameDiv";
        ovfDiv.style.border = "solid 2px blue";
        ovfDiv.style.background = "#6666CC";
        ovfDiv.style.opacity = 0.6;
        ovfDiv.style.filter = "Alpha(opacity=" + 60 + ");";
        ovfDiv.style.position = "absolute";
        ovfDiv.style.left = ovfLeft + "px";
        ovfDiv.style.top = ovfTop + "px";
        ovfDiv.style.width = ovfWidth + "px";
        ovfDiv.style.height = ovfHeight + "px";
        ovfDiv.style.cursor = "move";
        ovfDiv.style.zIndex = this.zIndex;
        if (absoluteZ < 0) {
            ovfDiv.style.display = "none"
        } else {
            ovfDiv.style.display = "block"
        }
        shieldDiv.appendChild(ovfDiv);
        var ovfDragDiv = ovfDiv.cloneNode(true);
        ovfDragDiv.id = "overviewFrameDragDiv";
        ovfDragDiv.style.display = "none";
        ovfDragDiv.style.background = "white";
        ovfDragDiv.style.opacity = 0.35;
        ovfDragDiv.style.filter = "Alpha(opacity=" + 35 + ");";
        ovfDragDiv.style.zIndex = this.zIndex;
        shieldDiv.appendChild(ovfDragDiv);
        var opImg = document.createElement("img");
        opImg.src = this.minImg;
        opImg.style.position = "absolute";
        opImg.style.filter = "Alpha(opacity=" + 100 + ");";
        opImg.style.display = "block";
        opImg.style.cursor = "pointer";
        if (_a._aa._aaf._aafj() !== "IE") {
            opImg.style.left = 190 + "px";
            opImg.style.top = 140 + "px"
        } else {
            opImg.style.left = 188 + "px";
            opImg.style.top = 138 + "px"
        }
        qControlDiv.appendChild(opImg);
        var minImgSrc = this.minImg;
        var maxImgSrc = this.maxImg;
        var IS_MIN = true;
        opImg.onclick = function () {
            if (IS_MIN) {
                opImg.src = maxImgSrc;
                div.style.display = "none";
                IS_MIN = false
            } else {
                opImg.src = minImgSrc;
                div.style.display = "block";
                IS_MIN = true
            }
        };
        div.oncontextmenu = function (event) {
            var e = event || window.event;
            _a._aa._aaf.stopBubble(e);
            return false
        };
        div.onmousedown = div.oncontextmenu;
        div.onmouseup = div.oncontextmenu;
        div.onmousemove = div.oncontextmenu;
        div.onmouseout = div.oncontextmenu;
        opImg.oncontextmenu = div.oncontextmenu;
        var lastX = 0;
        var lastY = 0;
        var deltaX = 0;
        var deltaY = 0;
        var this_ = this;
        var OVM_MOVING = false;
        var MOUSE_UPED = false;
        var movingDeltaX = 0;
        var movingDeltaY = 0;
        var movingDelta = 2;
        var timeDelta = 70;
        var ovmLeft = parseInt(ovmDiv.style.left, 10);
        var ovmTop = parseInt(ovmDiv.style.top, 10);
        var ovmWidth = parseInt(ovmDiv.style.width, 10);
        var ovmHeight = parseInt(ovmDiv.style.height, 10);
        var ovfOriginalLeft = parseInt(ovfDiv.style.left, 10);
        var ovfOriginalTop = parseInt(ovfDiv.style.top, 10);
        ovfDiv.onmousedown = function (e) {
            var event = e || window.event;
            var pageXY = _a._aa._aaf.fixEvent(event);
            ovfDragDiv.style.display = "block";
            lastX = pageXY[0];
            lastY = pageXY[1];
            MOUSE_UPED = true
        };
        if (_a._aa._aaf._aafj() === "IE") {
            shieldDiv.onmousemove = function (e) {
                var event = e || window.event;
                var pageXY = _a._aa._aaf.fixEvent(event);
                var mouseX = pageXY[0] - parentMvc.view.mapDivPageLeft - parseInt(qControlDiv.style.left, 10) - parseInt(shieldDiv.style.left, 10);
                var mouseY = pageXY[1] - parentMvc.view.mapDivPageTop - parseInt(qControlDiv.style.top, 10) - parseInt(shieldDiv.style.top, 10);
                var edgeDelta = 0;
                var minX = parseInt(ovfDiv.style.left, 10) + edgeDelta;
                var maxX = parseInt(ovfDiv.style.left, 10) + parseInt(ovfDiv.style.width, 10) - edgeDelta;
                var minY = parseInt(ovfDiv.style.top, 10) + edgeDelta;
                var maxY = parseInt(ovfDiv.style.top, 10) + parseInt(ovfDiv.style.height, 10) - edgeDelta;
                if (minX < mouseX && mouseX < maxX && minY < mouseY && mouseY < maxY) {} else {
                    if (ovfDragDiv.style.display === "block" && MOUSE_UPED === true) {
                        ovfDragDiv.style.display = "none"
                    }
                }
            }
        }
        ovfDragDiv.onmousemove = function (e) {
            var event = e || window.event;
            MOUSE_UPED = false;
            var ovmMvc = this_.overviewMap.mvc;
            var pageXY = _a._aa._aaf.fixEvent(event);
            deltaX = pageXY[0] - lastX;
            deltaY = pageXY[1] - lastY;
            lastX = pageXY[0];
            lastY = pageXY[1];
            var ovfDragLeft = parseInt(ovfDragDiv.style.left, 10) + deltaX;
            var ovfDragTop = parseInt(ovfDragDiv.style.top, 10) + deltaY;
            var ovfDragWidth = parseInt(ovfDragDiv.style.width, 10);
            var ovfDragHeight = parseInt(ovfDragDiv.style.height, 10);
            ovfDragDiv.style.left = ovfDragLeft + "px";
            ovfDragDiv.style.top = ovfDragTop + "px";
            var LEFT_SIDE_OUT = ovfDragLeft < 0;
            var TOP_SIDE_OUT = ovfDragTop < 0;
            var RIGHT_SIDE_OUT = (ovfDragLeft + ovfDragWidth) > parseInt(shieldDiv.style.width, 10);
            var BOTTOM_SIDE_OUT = (ovfDragTop + ovfDragHeight) > parseInt(shieldDiv.style.height, 10);
            if (LEFT_SIDE_OUT || TOP_SIDE_OUT || RIGHT_SIDE_OUT || BOTTOM_SIDE_OUT) {
                movingDeltaX = 0;
                movingDeltaY = 0;
                if (LEFT_SIDE_OUT) {
                    movingDeltaX = -movingDelta
                }
                if (RIGHT_SIDE_OUT) {
                    movingDeltaX = movingDelta
                }
                if (TOP_SIDE_OUT) {
                    movingDeltaY = -movingDelta
                }
                if (BOTTOM_SIDE_OUT) {
                    movingDeltaY = movingDelta
                }
                var keepMoving = function () {
                    this_.OVM_OPERATING = true;
                    if (OVM_MOVING) {
                        var MOVED = ovmMvc.view.move(-movingDeltaX, -movingDeltaY);
                        if (!MOVED) {
                            OVM_MOVING = false
                        } else {
                            ovfDiv.style.left = parseInt(ovfDiv.style.left, 10) - movingDeltaX + "px";
                            ovfDiv.style.top = parseInt(ovfDiv.style.top, 10) - movingDeltaY + "px";
                            _a._aa._aaf.setTimeout(keepMoving, timeDelta)
                        }
                    }
                };
                if (!OVM_MOVING) {
                    OVM_MOVING = true;
                    keepMoving()
                }
            }
        };
        ovfDragDiv.onmouseup = function (e) {
            var event = e || window.event;
            var ovmMvc = this_.overviewMap.mvc;
            var steps = 3;
            var chaseAndRecoverAnimation = function () {
                this_.OVM_OPERATING = true;
                var chaseMovingDeltaX = parseInt(ovfDragDiv.style.left, 10) - parseInt(ovfDiv.style.left, 10);
                var chaseMovingDeltaY = parseInt(ovfDragDiv.style.top, 10) - parseInt(ovfDiv.style.top, 10);
                var recoverMovingDeltaX = parseInt(ovfDragDiv.style.left, 10) - ovfOriginalLeft;
                var recoverMovingDeltaY = parseInt(ovfDragDiv.style.top, 10) - ovfOriginalTop;
                var chaseMovingDeltaUnitX = chaseMovingDeltaX / steps;
                var chaseMovingDeltaUnitY = chaseMovingDeltaY / steps;
                var recoverMovingDeltaUnitX = recoverMovingDeltaX / steps;
                var recoverMovingDeltaUnitY = recoverMovingDeltaY / steps;
                var parentZ = parentMvc.model.tileGrid.baseTileZ;
                var ovmZ = ovmMvc.model.tileGrid.baseTileZ;
                var parentMapMovingDeltaUnitX = chaseMovingDeltaUnitX * (parentMvc.model.resolution[ovmZ] / parentMvc.model.resolution[parentZ]);
                var parentMapMovingDeltaUnitY = chaseMovingDeltaUnitY * (parentMvc.model.resolution[ovmZ] / parentMvc.model.resolution[parentZ]);
                var chaseMoveToOvfDragDiv = function () {
                    ovfDiv.style.left = parseInt(ovfDiv.style.left, 10) + chaseMovingDeltaUnitX + "px";
                    ovfDiv.style.top = parseInt(ovfDiv.style.top, 10) + chaseMovingDeltaUnitY + "px"
                };
                for (var i = 1; i <= steps; ++i) {
                    _a._aa._aaf.setTimeout(chaseMoveToOvfDragDiv, timeDelta * i);
                    if (i === steps) {
                        var hideOvfDragDiv = function () {
                            ovfDragDiv.style.display = "none";
                            OVM_MOVING = false
                        };
                        _a._aa._aaf.setTimeout(hideOvfDragDiv, timeDelta * i + 1);
                        for (var j = 1; j <= steps; ++j) {
                            if (j < steps) {
                                var recoverOvfDivAndMoveMap = function () {
                                    ovfDiv.style.left = parseInt(ovfDiv.style.left, 10) - recoverMovingDeltaUnitX + "px";
                                    ovfDiv.style.top = parseInt(ovfDiv.style.top, 10) - recoverMovingDeltaUnitY + "px";
                                    ovmMvc.view.move(-recoverMovingDeltaUnitX, -recoverMovingDeltaUnitY);
                                    parentMvc.view.move(-parentMapMovingDeltaUnitX, -parentMapMovingDeltaUnitY)
                                };
                                _a._aa._aaf.setTimeout(recoverOvfDivAndMoveMap, timeDelta * (i + j))
                            } else {
                                var ovfDivDirectJumpToOrigianl = function () {
                                    ovmMvc.view.move(-recoverMovingDeltaUnitX, -recoverMovingDeltaUnitY);
                                    ovfDiv.style.left = ovfOriginalLeft;
                                    ovfDiv.style.top = ovfOriginalTop
                                };
                                _a._aa._aaf.setTimeout(ovfDivDirectJumpToOrigianl, timeDelta * (i + j) + 1);
                                var mapDirectJumpToNewCenter = function () {
                                    var newLng = ovmMvc.model.tileGrid.centerLng;
                                    var newLat = ovmMvc.model.tileGrid.centerLat;
                                    var qevent1 = new _a._ab._abb.CenterChangedEvent(newLng, newLat);
                                    parentMvc.triggerEvent(qevent1);
                                    var tmpQObj;
                                    for (var i = 0; i < parentMvc.model._2.length(); ++i) {
                                        tmpQObj = parentMvc.model._2.at(i);
                                        parentMvc.model.qOverlayChangeList.push(new _a._ac._aca("Move", tmpQObj))
                                    }
                                    var qevent2 = new _a._ab._abb.RenderEvent(parentMvc.model.tileGrid, parentMvc.model.qOverlayChangeList);
                                    parentMvc.triggerEvent(qevent2)
                                };
                                _a._aa._aaf.setTimeout(mapDirectJumpToNewCenter, timeDelta * (i + j) + 20);
                                var recoverOvfDragDiv = function () {
                                    ovfDragDiv.style.left = ovfDiv.style.left;
                                    ovfDragDiv.style.top = ovfDiv.style.top
                                };
                                _a._aa._aaf.setTimeout(recoverOvfDragDiv, timeDelta * (i + j) + 21);
                                var delockOvmOperateFromParentMap = function () {
                                    this_.OVM_OPERATING = false;
                                    var tmpDivForMouseUp = document.getElementById("tmpDivForMouseUp");
                                    if (tmpDivForMouseUp !== null) {
                                        tmpDivForMouseUp.parentNode.removeChild(tmpDivForMouseUp)
                                    }
                                };
                                _a._aa._aaf.setTimeout(delockOvmOperateFromParentMap, timeDelta * (i + j) + 400)
                            }
                        }
                    }
                }
            };
            var recoverAnimation = function () {
                this_.OVM_OPERATING = true;
                var recoverMovingDeltaX = parseInt(ovfDragDiv.style.left, 10) - ovfOriginalLeft;
                var recoverMovingDeltaY = parseInt(ovfDragDiv.style.top, 10) - ovfOriginalTop;
                var recoverMovingDeltaUnitX = recoverMovingDeltaX / steps;
                var recoverMovingDeltaUnitY = recoverMovingDeltaY / steps;
                var parentZ = parentMvc.model.tileGrid.baseTileZ;
                var ovmZ = ovmMvc.model.tileGrid.baseTileZ;
                var parentMapMovingDeltaUnitX = recoverMovingDeltaUnitX * (parentMvc.model.resolution[ovmZ] / parentMvc.model.resolution[parentZ]);
                var parentMapMovingDeltaUnitY = recoverMovingDeltaUnitY * (parentMvc.model.resolution[ovmZ] / parentMvc.model.resolution[parentZ]);
                var hideOvfDragDiv = function () {
                    ovfDragDiv.style.display = "none";
                    ovfDiv.style.left = ovfDragDiv.style.left;
                    ovfDiv.style.top = ovfDragDiv.style.top
                };
                _a._aa._aaf.setTimeout(hideOvfDragDiv, timeDelta - 1);
                for (var j = 1; j <= steps; ++j) {
                    if (j < steps) {
                        var recoverOvfDivAndMoveMap = function () {
                            ovfDiv.style.left = parseInt(ovfDiv.style.left, 10) - recoverMovingDeltaUnitX + "px";
                            ovfDiv.style.top = parseInt(ovfDiv.style.top, 10) - recoverMovingDeltaUnitY + "px";
                            ovmMvc.view.move(-recoverMovingDeltaUnitX, -recoverMovingDeltaUnitY);
                            parentMvc.view.move(-parentMapMovingDeltaUnitX, -parentMapMovingDeltaUnitY)
                        };
                        _a._aa._aaf.setTimeout(recoverOvfDivAndMoveMap, timeDelta * j)
                    } else {
                        var recoverOvfDivAndMoveMap = function () {
                            ovfDiv.style.left = ovfOriginalLeft;
                            ovfDiv.style.top = ovfOriginalTop;
                            ovmMvc.view.move(-recoverMovingDeltaUnitX, -recoverMovingDeltaUnitY)
                        };
                        _a._aa._aaf.setTimeout(recoverOvfDivAndMoveMap, timeDelta * j + 1);
                        var mapDirectJumpToNewCenter = function () {
                            var newLng = ovmMvc.model.tileGrid.centerLng;
                            var newLat = ovmMvc.model.tileGrid.centerLat;
                            var qevent1 = new _a._ab._abb.CenterChangedEvent(newLng, newLat);
                            parentMvc.triggerEvent(qevent1);
                            var qevent2 = new _a._ab._abb.RenderEvent(parentMvc.model.tileGrid, parentMvc.model.qOverlayChangeList);
                            parentMvc.triggerEvent(qevent2)
                        };
                        _a._aa._aaf.setTimeout(mapDirectJumpToNewCenter, timeDelta * j + 20);
                        var recoverOvfDragDiv = function () {
                            ovfDragDiv.style.left = ovfDiv.style.left;
                            ovfDragDiv.style.top = ovfDiv.style.top;
                            this_.OVM_OPERATING = false
                        };
                        _a._aa._aaf.setTimeout(recoverOvfDragDiv, timeDelta * j + 21)
                    }
                }
            };
            if (OVM_MOVING) {
                OVM_MOVING = false;
                var ovfDivCenterX = parseInt(ovfDiv.style.left, 10) + parseInt(ovfDiv.style.width, 10) / 2;
                var ovfDivCenterY = parseInt(ovfDiv.style.top, 10) + parseInt(ovfDiv.style.height, 10) / 2;
                if ((0 < ovfDivCenterX) && (ovfDivCenterX < parseInt(shieldDiv.style.width, 10)) && (0 < ovfDivCenterY) && (ovfDivCenterY < parseInt(shieldDiv.style.height, 10))) {
                    chaseAndRecoverAnimation()
                } else {
                    recoverAnimation()
                }
            } else {
                chaseAndRecoverAnimation()
            }
        };
        ovfDragDiv.onmouseout = function (e) {
            var event = e || window.event;
            if (OVM_MOVING === true) {
                var tmpDivForMouseUp = document.createElement("div");
                tmpDivForMouseUp.id = "tmpDivForMouseUp";
                tmpDivForMouseUp.style.background = "#6666CC";
                tmpDivForMouseUp.style.opacity = 0.01;
                tmpDivForMouseUp.style.filter = "Alpha(opacity=" + 1 + ");";
                tmpDivForMouseUp.style.position = "absolute";
                tmpDivForMouseUp.style.left = -parseInt(qControlDiv.style.left, 10) + "px";
                tmpDivForMouseUp.style.top = -parseInt(qControlDiv.style.top, 10) + "px";
                tmpDivForMouseUp.style.width = parentMapWidth + "px";
                tmpDivForMouseUp.style.height = parentMapHeight + "px";
                tmpDivForMouseUp.style.cursor = "move";
                tmpDivForMouseUp.style.zIndex = this.zIndex;
                div.appendChild(tmpDivForMouseUp);
                tmpDivForMouseUp.onmouseout = function (e) {
                    var event = e || window.event;
                    this_.log += "O";
                    tmpDivForMouseUp.parentNode.removeChild(tmpDivForMouseUp);
                    ovfDragDiv.onmouseup(e)
                };
                tmpDivForMouseUp.onmouseup = function (e) {
                    var event = e || window.event;
                    this_.log += "U";
                    tmpDivForMouseUp.parentNode.removeChild(tmpDivForMouseUp);
                    ovfDragDiv.onmouseup(e)
                }
            } else {
                ovfDragDiv.style.display = "none";
                ovfDragDiv.style.left = ovfOriginalLeft;
                ovfDragDiv.style.top = ovfOriginalTop
            }
        };
        documentFragment.appendChild(div);
        qControlDiv.appendChild(documentFragment)
    },
    postAddControl: function () {
        this.mvc.controller.registerEventHandler("ZoomLevelChanged", this);
        this.mvc.controller.registerEventHandler("CenterChanged", this);
        var overviewMap = new _a._ac._acg(this.overviewMapDiv, this.originalZ);
        overviewMap.setCenter(this.originalCenterLng, this.originalCenterLat);
        overviewMap.render();
        this.overviewMap = overviewMap;
        this.mapNumber = overviewMap.mvc.view._0
    },
    onZoomLevelChanged: function (qevent) {
        var absoluteZ = this.mvc.model.tileGrid.baseTileZ - this.deltaZ;
        var ovfDiv = document.getElementById("overviewFrameDiv");
        if (absoluteZ < 0) {
            ovfDiv.style.display = "none"
        } else {
            ovfDiv.style.display = "block";
            ovfDiv.focus()
        }
        this.overviewMap.setZoomLevel(absoluteZ);
        this.overviewMap.render();
        qevent = null
    },
    onCenterChanged: function (qevent) {
        if (!this.OVM_OPERATING) {
            this.overviewMap.setCenter(qevent.lng, qevent.lat);
            this.overviewMap.render()
        }
        qevent = null
    }
});﻿
_a._af = _a._aa._aag({
    className: "_a._af",
    initialize: function () {}
});
_a._af.ProjectNameCh = "QQ地图项目";
_a._af.Name_Ch = "名称";
_a._af.Description_Ch = "描述";
_a._af.DeleteConfirm_Ch = "确定删除？";
_a._af.ContextMenu = {};
_a._af.ContextMenu.AboutQQMap = "关于QQMap";
_a._af.ContextMenu.AboutQQMapContent = "QQMap Alpha 2.0\n\n\n   腾讯研究院\n\n智能计算研究室";
_a._af.ContextMenu.GetLatLng = "获取当前点经纬度";
_a._af.ContextMenu.GetLatLng2 = "获取当前点的投影坐标";
_a._af.ContextMenu.GetLatLngLng = "经度: ";
_a._af.ContextMenu.GetLatLngLat = "纬度: ";
_a._af.ContextMenu.ZoomIn = "Zoom  In (+)";
_a._af.ContextMenu.ZoomOut = "Zoom Out (-)";
_a._af.Polyline = ['米', '公里', '起点', '共', '单击选择起点', '单击继续，双击确定终点', '当前'];
_a._af._acd = {};
_a._af._acd.TencentText = "&copy 2010 Tencent";
_a._af._acd.DataText = "地图数据 &copy 2010 Mapabc";
_a._af._acd.ScaleText = ["1000公里", "1000公里", "1000公里", "1000公里", "500公里", "200公里", "200公里", "100公里", "50公里", "20公里", "10公里", "5公里", "2公里", "1公里", "500米", "200米", "200米", "100米", "50米"];
_a._af.LatLngOutOfRange = "请求的经纬度不在服务器支持的范围内，请重试！";
window.QQMap = {};
QQMap.QMap = _a._aa._aag({
    className: "QQMap.QMap",
    impl: null,
    initialize: function (container) {
        this.impl = new _a._ac._acg(container);
    },
    getCenter: function () {
        var lnglat = this.impl.getCenter();
        return new QQMap.QLngLat(lnglat.lng, lnglat.lat);
    },
    getZoomLevel: function () {
        return this.impl.getZoomLevel();
    },
    getViewSize: function () {
        var viewSize = this.impl.getViewSize();
        return new QQMap.QSize(viewSize.width, viewSize.height);
    },
    getBounds: function () {
        return this.impl.getBounds();
    },
    moveTo: function (newCenter, noAnim) {
        this.impl.moveTo(newCenter, noAnim);
    },
    moveBy: function (offset, noAnim) {
        this.impl.moveBy(offset.impl, null, null, noAnim);
    },
    zoomIn: function (center) {
        this.impl.zoomIn(center);
    },
    zoomOut: function (center) {
        this.impl.zoomOut(center);
    },
    zoomTo: function (zoomLevel) {
        this.impl.zoomTo(zoomLevel);
    },
    changeViewSize: function (newSize) {
        this.impl.changeViewSize(newSize);
    },
    optimalDisplay: function () {
        this.impl.render(true);
    },
    enableContextMenu: function (ifContextMenu) {
        this.impl.enableContextMenu(ifContextMenu);
    },
    enableScroolWheel: function (ifScrollwheel) {
        this.impl.enableScroolWheel(ifScrollwheel);
    },
    enableDrag: function (ifDraggable) {
        this.impl.enableDrag(ifDraggable);
    },
    enableZoomInByDblClick: function (ifZoomByDblclick) {
        this.impl.enableZoomInByDblClick(ifZoomByDblclick);
    },
    enableKeyboard: function (ifKeyboard) {
        this.impl.enableKeyboard(ifKeyboard);
    },
    addQOverlay: function (qOverlay) {
        this.impl.addQOverlay(qOverlay.impl);
    },
    removeQOverlay: function (qOverlay) {
        this.impl.removeQOverlay(qOverlay.impl);
    },
    clearAllQOverlays: function () {
        this.impl.clearAllQOverlays();
    },
    addQControl: function (qControl, align, margin) {
        this.impl.addQControl(qControl.impl, align, margin);
    },
    removeQControl: function (qControl) {
        this.impl.removeQControl(qControl.impl);
    },
    clearAllQControls: function () {
        this.impl.clearAllQControls();
    },
    setCursor: function (normalCursor, movingCursor) {
        this.impl.setCursor(normalCursor, movingCursor);
    },
    openInfoWindow: function (content, qLngLat, style) {
        qLngLat.impl && (qLngLat = qLngLat.impl);
        var newInfo = new QQMap.QInfoWindow(null, this.impl.openInfoWindow(qLngLat, content, style));
        return newInfo;
    },
    getInfoWindow: function () {
        return new QQMap.QInfoWindow(null, this.impl.getInfoWindow());
    },
    closeInfoWindow: function () {
        this.impl.closeInfoWindow();
    },
    addContextMenuItem: function (contextMenuItem) {
        this.impl.addContextMenuItem(contextMenuItem.impl);
        contextMenuItem = null;
    }
});
QQMap.QContextMenuItem = _a._aa._aag({
    className: "QQMap.QContextMenuItem",
    impl: null,
    initialize: function (menuText, handler) {
        this.impl = new _a._ac._acc(menuText, handler);
        menuText = null;
        handler = null;
    }
});
QQMap.QEvent = _a._aa._aag({
    className: "QQMap.QEvent",
    impl: null,
    initialize: function () {
        this.impl = new _a._ac._acp();
    }
});
QQMap.QEvent.addEventListener = function (source, eventType, handler, args) {
    if (source.impl && source.impl.bindTo) {
        _a._aa.QMVCEvent.addListener(source.impl, eventType, handler, args);
    } else {
        _a._ac._acp.addEventListener(source.impl, eventType, handler, args);
    }
};
QQMap.QEvent.removeEventListener = function (source, event) {
    if (source.impl.bindTo) {
        _a._aa.QMVCEvent.clearListeners(source.impl, event);
    } else {
        _a._ac._acp.removeEventListener(source.impl, event);
    }
};
QQMap.QEvent.clearEventListeners = function (source) {
    if (source.impl.bindTo) {
        _a._aa.QMVCEvent.clearListeners(source.impl);
    } else {
        _a._ac._acp.clearEventListeners(source.impl);
    }
};
QQMap.QMarker = _a._aa._aag({
    className: "QQMap.QMarker",
    impl: null,
    initialize: function (position) {
        this.impl = new _a._ac._ach(position.impl);
        position = null;
    },
    setDecorations: function (decorations) {
        this.impl.setDecorations(decorations);
    },
    addDecoration: function (decoration) {
        this.impl.addDecoration(decoration);
    },
    removeDecoration: function (decoration) {
        this.impl.removeDecoration(decoration);
    },
    getPosition: function () {
        var qLngLat = this.impl.getPosition();
        var position = new QQMap.QLngLat(qLngLat.getLng(), qLngLat.getLat());
        qLngLat = null;
        return position;
    },
    getTitle: function () {
        return this.impl.getTitle();
    },
    getIcon: function () {
        return this.impl.getIcon();
    },
    getShadow: function () {
        return this.impl.getShadow();
    },
    getFlat: function () {
        return this.impl.getFlat();
    },
    getCursor: function () {
        return this.impl.getCursor();
    },
    getVisible: function () {
        return this.impl.getVisible();
    },
    setPosition: function (qLngLat) {
        this.impl.setPosition(qLngLat.impl || qLngLat);
        qLngLat = null;
    },
    setTitle: function (title) {
        return this.impl.setTitle(title);
    },
    setIcon: function (newIcon) {
        this.impl.setIcon(newIcon.impl);
        newIcon = null;
    },
    setIconImage: function (url) {
        this.impl.setIconImage(url);
    },
    setCursor: function (cursor) {
        this.impl.set('cursor', cursor);
    },
    setShadow: function (newShadow) {
        if ((typeof newShadow) === "string") {
            this.impl.setShadow(newShadow);
        } else {
            this.impl.setShadow(newShadow.impl);
        }
        newShadow = null;
    },
    setFlat: function (bFlat) {
        return this.impl.setFlat(bFlat);
    },
    setCursor: function (cursor) {
        this.impl.setCursor(cursor);
        cursor = null;
    },
    setVisible: function (bVisible) {
        this.impl.setVisible(bVisible);
        bVisible = null;
    },
    focus: function () {
        this.impl.focus();
    },
    unfocus: function () {
        this.impl.unfocus();
    },
    enableDrag: function (ifDraggable) {
        this.impl.enableDrag(ifDraggable);
        ifDraggable = null;
    },
    openInfoWindow: function (content, style) {
        var newInfo = new QQMap.QInfoWindow(null, this.impl.openInfoWindow(content, style));
        return newInfo;
    },
    closeInfoWindow: function () {
        this.impl.closeInfoWindow();
    },
    setZIndex: function (zIndex) {
        this.impl.setZIndex(zIndex);
    },
    getZIndex: function (zIndex) {
        return this.impl.getZIndex();
    }
});
QQMap.QMarkerImage = _a._aa._aag({
    className: "QQMap.QMarkerImage",
    impl: null,
    initialize: function (url, size, anchor, origin, scaledSize) {
        origin = origin && origin.impl ? origin.impl : null;
        scaleSize = scaledSize && scaledSize.impl ? scaledSize.impl : null;
        this.impl = new _a._ac.QMarkerImage(url, size.impl, anchor.impl, origin, scaledSize);
    }
});
QQMap.QMarkerTip = _a._aa._aag({
    className: "QQMap.QMarkerTip",
    impl: null,
    initialize: function (marker, text) {
        this.impl = new _a._ac._aci(marker.impl, text);
    }
});
QQMap.QInfoWindow = _a._aa._aag({
    className: "QQMap.QInfoWindow",
    impl: null,
    initialize: function (style, impl) {
        if (impl) {
            this.impl = impl;
        } else {
            this.impl = new _a._ac.QInfoWindow(style);
        }
    },
    disableAutoPan: function () {
        this.impl.set('ifAutoPan', false);
    },
    enableAutoPan: function () {
        this.impl.set('ifAutoPan', true);
    },
    setAutoPanBorder: function (border) {
        this.impl.set('autoPanBorder', border);
    },
    getAutoPanBorder: function (border) {
        return this.impl.get('autoPanBorder');
    },
    getPosition: function () {
        var qLngLat = this.impl.getPosition();
        if (qLngLat == null) {
            return this.impl.get('anchor');
        } else {
            return new QQMap.QLngLat(qLngLat.getLng(), qLngLat.getLat());
        }
    },
    getContent: function () {
        return this.impl.getContent();
    },
    getVisible: function () {
        return this.impl.getVisible();
    },
    setPosition: function (qLatLng) {
        this.impl.setPosition(qLatLng.impl);
    },
    setContent: function (content) {
        this.impl.setContent(content);
    },
    setVisible: function (bVisible) {
        this.impl.setVisible(bVisible);
    },
    setStyle: function (style) {
        this.impl.set('style', style);
    },
    open: function (content, position, style) {
        position && position.impl && (position = position.impl);
        this.impl.open(content, position, style);
    },
    setDeltaHeight: function (deltaHeight) {
        this.impl.setDeltaHeight(deltaHeight);
    },
    notifyContentChange: function (ifNoAutoPan) {
        this.impl.notifyContentChange(ifNoAutoPan);
    }
});
QQMap.QPolyline = _a._aa._aag({
    className: "QQMap.QPolyline",
    impl: null,
    initialize: function (points, options) {
        this.impl = new _a._ac.QPolyline(points, options);
    },
    stopDrawing: function () {
        this.impl.stopDrawing();
    },
    setVisible: function (visible) {
        this.impl.set('visible', visible);
    },
    enableEditing: function () {
        this.impl.set('editable', true);
    },
    showLabel: function () {
        this.impl.set('hidelabel', false);
    },
    hideLabel: function () {
        this.impl.set('hidelabel', true);
    },
    disableEditing: function () {
        this.impl.set('editable', false);
    },
    enableDrawing: function () {
        this.impl.set('drawable', true);
    },
    getStrokeColor: function () {
        return this.impl.getStrokeColor();
    },
    getStrokeWeight: function () {
        return this.impl.getStrokeWeight();
    },
    getStrokeOpacity: function () {
        return this.impl.getStrokeOpacity();
    },
    getStrokeDashStyle: function () {
        return this.impl.getStrokeDashStyle();
    },
    setStrokeColor: function (strokColor) {
        this.impl.setStrokeColor(strokColor);
    },
    setStrokeWeight: function (strokeWeight) {
        this.impl.setStrokeWeight(strokeWeight);
    },
    setStrokeOpacity: function (strokeOpacity) {
        this.impl.setStrokeOpacity(strokeOpacity);
    },
    setStrokeDashStyle: function (strokeDashStyle) {
        this.impl.setStrokeDashStyle(strokeDashStyle);
    }
});
QQMap.QPolygon = _a._aa._aag({
    className: "QQMap.QPolygon",
    impl: null,
    initialize: function (points) {
        this.impl = new _a._ac._ack(points);
    },
    getStrokeColor: function () {
        return this.impl.getStrokeColor();
    },
    getStrokeWidth: function () {
        return this.impl.getStrokeWidth();
    },
    getStrokeOpacity: function () {
        return this.impl.getStrokeOpacity();
    },
    getStrokeDashStyle: function () {
        return this.impl.getStrokeDashStyle();
    },
    getFillColor: function () {
        return this.impl.getFillColor();
    },
    getFillOpacity: function () {
        return this.impl.getFillOpacity();
    },
    setStrokColor: function (strokColor) {
        this.impl.setStrokColor(strokColor);
    },
    setStrokeWeight: function (strokeWeight) {
        this.impl.setStrokeWeight(strokeWeight);
    },
    setStrokeOpacity: function (strokeOpacity) {
        this.impl.setStrokeOpacity(strokeOpacity);
    },
    setStrokeDashStyle: function (strokeDashStyle) {
        this.impl.setStrokeDashStyle(strokeDashStyle);
    },
    setFillColor: function (fillColor) {
        this.impl.setFillColor(fillColor);
    },
    setFillOpacity: function (fillOpacity) {
        this.impl.setFillOpacity(fillColor);
    }
});
QQMap.QCircle = _a._aa._aag({
    className: "QQMap.QCircle",
    impl: null,
    initialize: function (center, radius) {
        this.impl = new _a._ac.QCircle(center.impl, radius);
    },
    getCenter: function () {
        var qLngLat = this.impl.getCenter();
        return new QQMap.QLngLat(qLngLat.getLng(), qLngLat.getLat());
    },
    getOptimalZoomLevel: function () {
        return this.impl.getOptimalZoomLevel();
    },
    getRadius: function () {
        return this.impl.getRadius();
    },
    getStrokeColor: function () {
        return this.impl.getStrokeColor();
    },
    getStrokeWeight: function () {
        return this.impl.getStrokeWeight;
    },
    getStrokeOpacity: function () {
        return this.impl.getStrokeOpacity();
    },
    getStrokeDashStyle: function () {
        return this.impl.getStrokeDashStyle();
    },
    getFillColor: function () {
        return this.impl.getFillColor();
    },
    getFillOpacity: function () {
        return this.impl.getFillOpacity();
    },
    setCenter: function (center) {
        this.impl.setCenter(center);
    },
    setRadius: function (radius) {
        this.impl.setRadius(radius);
    },
    setStrokColor: function (strokColor) {
        this.impl.setStrokColor(strokColor);
    },
    setStrokeWeight: function (strokeWeight) {
        this.impl.setStrokeWeight(strokeWeight);
    },
    setVisible: function (visible) {
        this.impl.setVisible(visible);
    },
    setStrokeOpacity: function (strokeOpacity) {
        this.impl.setStrokeOpacity(strokeOpacity);
    },
    setStrokeDashStyle: function (strokeDashStyle) {
        this.impl.setStrokeDashStyle(strokeDashStyle);
    },
    setFillColor: function (fillColor) {
        this.impl.setFillColor(fillColor);
    },
    setFillOpacity: function (fillOpacity) {
        this.impl.setFillOpacity(fillColor);
    },
    enableRadiusIndicator: function (ifRadiusIndicator) {
        this.impl.enableRadiusIndicator(ifRadiusIndicator);
    }
});
QQMap.QCenterControl = _a._aa._aag({
    className: "QQMap.QCenterControl",
    impl: null,
    initialize: function () {
        this.impl = new _a._ac._acd.QCenterControl();
    }
});
QQMap.QContextMenuControl = _a._aa._aag({
    className: 'QQMap.QContextMenuControl',
    impl: null,
    initialize: function () {
        this.impl = new _a._ac._acd.QContextMenuControl();
    },
    addItem: function (item, handler) {
        return this.impl.addItem(item, handler);
    },
    addSeparator: function () {
        this.impl.addSeparator();
    },
    removeItem: function (index) {
        this.impl.removeItem(index);
    },
    disableItem: function (index) {
        this.impl.disableItem(index);
    },
    enableItem: function (index) {
        this.impl.enableItem(index);
    },
    show: function (event) {
        this.impl.show(event);
    },
    hide: function () {
        this.impl.hide();
    }
});
QQMap.QScaleControl = _a._aa._aag({
    className: 'QQMap.QScaleControl',
    impl: null,
    initialize: function () {
        this.impl = new _a._ac._acd.QScaleControl();
    }
});
QQMap.QCopyrightControl = _a._aa._aag({
    className: "QQMap.QCopyrightControl",
    impl: null,
    initialize: function () {
        this.impl = new _a._ac._acd.QCopyrightControl();
    }
});
QQMap.QLngLat = _a._aa._aag({
    className: "QQMap.QLngLat",
    impl: null,
    initialize: function (lng, lat) {
        this.impl = new _a._ac.QLngLat(lng, lat);
    },
    getLat: function () {
        return this.impl.getLat();
    },
    getLng: function () {
        return this.impl.getLng();
    },
    getDistanceTo: function (qLngLat) {
        return this.impl.getDistanceTo(qLngLat.impl);
    }
});
QQMap.QPoint = _a._aa._aag({
    className: "QQMap.QPoint",
    impl: null,
    initialize: function (left, top) {
        this.impl = new _a._ac.QPoint(left, top);
    },
    getLeft: function () {
        return this.impl.getLeft();
    },
    getTop: function () {
        return this.impl.getTop();
    }
});
QQMap.QSize = _a._aa._aag({
    className: "QQMap.QSize",
    impl: null,
    initialize: function (width, height) {
        this.impl = new _a._ac.QSize(width, height);
    },
    getWidth: function () {
        return this.impl.getWidth();
    },
    getHeight: function () {
        return this.impl.getHeight();
    }
});
QQMap.Search = {};
QQMap.Search.getDefaultCity = function (callback, args) {
    _a.Search.getDefaultCity.apply(null, arguments);
};
QQMap.Search.setDefaultCity = function (city, callback, args) {
    _a.Search.setDefaultCity.apply(null, arguments);
};
QQMap.Search.setCurrentCity = function (city, callback, args) {
    _a.Search.setCurrentCity.apply(null, arguments);
};
QQMap.Search.querySuggest = function (city, keyword, type, callback, args) {
    _a.Search.querySuggest.apply(null, arguments);
};
QQMap.Search.poiSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.poiSearch.apply(null, arguments);
};
QQMap.Search.QPOISearchRequest = _a._aa._aag({
    className: "QQMap.Search.QPOISearchRequest",
    impl: null,
    initialize: function (city, keyword, type, option) {
        this.impl = new _a.Search.QPOISearchRequest(city, keyword, type, option);
    }
});
QQMap.Search.QPOISearchRequestOption = {
    pageNum: null,
    resultCount: null
};
QQMap.Search.poiDetail = function (guid, callback, args) {
    _a.Search.poiDetail.apply(null, arguments);
};
QQMap.Search.LASearch = function (level, guid, callback, args) {
    _a.Search.LASearch.apply(null, arguments);
};
QQMap.Search.nearBySearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.nearBySearch.apply(null, arguments);
};
QQMap.Search.QNearBySearchRequest = _a._aa._aag({
    className: "QQMap.Search.QNearBySearchRequest",
    impl: null,
    initialize: function (city, lng, lat, radio, keyword, type, option) {
        this.impl = new _a.Search.QNearBySearchRequest(city, lng, lat, radio, keyword, type, option);
    }
});
QQMap.Search.QNearBySearchRequestOption = {
    pageNum: null,
    resultCount: null,
    sortType: null
};
QQMap.Search.sightSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.sightSearch.apply(null, arguments);
};
QQMap.Search.QSightSearchRequest = _a._aa._aag({
    className: "_a.Search.QSightSearchRequest",
    impl: null,
    initialize: function (city, lng1, lat1, lng2, lat2, keyword, type, option) {
        this.impl = new _a.Search.QSightSearchRequest(city, lng1, lat1, lng2, lat2, keyword, type, option);
    }
});
QQMap.Search.QSightSearchRequestOption = {
    pageNum: null,
    resultCount: null,
    sortType: null
};
QQMap.Search.roamSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.roamSearch.apply(null, arguments);
};
QQMap.Search.QRoamSearchRequest = _a._aa._aag({
    className: "QQMap.Search.QRoamSearchRequest",
    impl: null,
    initialize: function (lng1, lat1, lng2, lat2, level) {
        this.impl = new _a.Search.QRoamSearchRequest(lng1, lat1, lng2, lat2, level);
    }
});
QQMap.Search.startEndBusSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.startEndBusSearch.apply(null, arguments);
};
QQMap.Search.QStartEndBusSearchRequest = _a._aa._aag({
    className: "QQMap.Search.QStartEndBusSearchRequest",
    impl: null,
    initialize: function (city, startKeyword, endKeyword) {
        this.impl = new _a.Search.QStartEndBusSearchRequest(city, startKeyword, endKeyword);
    }
});
QQMap.Search.startOrEndBusSearch = function (city, keyword, callback, args) {
    _a.Search.startOrEndBusSearch.apply(null, arguments);
};
QQMap.Search.transferBusSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.transferBusSearch.apply(null, arguments);
};
QQMap.Search.QTransferBusSearchRequest = _a._aa._aag({
    className: "QQMap.Search.QTransferBusSearchRequest",
    impl: null,
    initialize: function (city, startString, endString, condition, nosub) {
        this.impl = new _a.Search.QTransferBusSearchRequest(city, startString, endString, condition, nosub);
    }
});
QQMap.Search.startEndDriveSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.startEndDriveSearch.apply(null, arguments);
};
QQMap.Search.QStartEndDriveSearchRequest = _a._aa._aag({
    className: "QQMap.Search.QStartEndDriveSearchRequest",
    impl: null,
    initialize: function (city, startString, endString) {
        this.impl = new _a.Search.QStartEndDriveSearchRequest(city, startString, endString);
    }
});
QQMap.Search.startOrEndDriveSearch = function (city, keyword, callback, args) {
    _a.Search.startOrEndDriveSearch.apply(null, arguments);
};
QQMap.Search.driveSearch = function (request, callback, args) {
    arguments[0] = request.impl;
    _a.Search.driveSearch.apply(null, arguments);
};
QQMap.Search.QDriveSearchRequest = _a._aa._aag({
    className: "QQMap.Search.QDriveSearchRequest",
    impl: null,
    initialize: function (city, startString, endString, condition) {
        this.impl = new _a.Search.QDriveSearchRequest(city, startString, endString, condition);
    }
});
QQMap.Search.getTaxiFee = function (city, startLng, startLat, destLng, destLat, callback, args) {
    _a.Search.getTaxiFee.apply(null, arguments);
};
QQMap.Search.geoCoding = function (keyword, callback, args) {
    _a.Search.geoCoding.apply(null, arguments);
};
QQMap._acd = _a._aa._aag({
    className: 'QQMap._acd',
    initialize: function () {
        var impl = new _a._ac._acd();
        var obj = this;
        this.impl = impl;
        impl.draw = function () {
            obj.render();
        };
    },
    render: function () {},
    setPosition: function () {
        this.impl.setPosition.apply(this.impl, arguments);
    },
    setContent: function () {
        this.impl.setContent.apply(this.impl, arguments);
    },
    setSize: function () {
        this.impl.setSize.apply(this.impl, arguments);
    }
});
QQMap.Fx = _a._aa.Fx;
QQMap.QALIGN = _a._aa.QALIGN;
(function () {
    var jsFiles = [];
    var cssFiles = ["QQMap.css"];
    var agent = navigator.userAgent;
    var docWrite = (agent.match("MSIE") || agent.match("Safari"));
    var jsHost = _a._aa._aab._aabr + "themes/";
    var cssHost = _a._aa._aab._aabr + "themes/";
    var jsFilesLength = jsFiles.length;
    var cssFilesLength = cssFiles.length;
    if (docWrite) {
        allScriptTags = new Array(jsFilesLength);
        for (var i = 0; i < jsFilesLength; i++) {
            allScriptTags[i] = "<script src=\"" + jsHost + jsFiles[i] + "\"></script>";
        }
        document.write(allScriptTags.join(""));
        allCssTags = new Array(cssFiles);
        for (i = 0; i < cssFilesLength; i++) {
            allCssTags[i] = "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHost + cssFiles[i] + "\"></link>";
        }
        document.write(allCssTags.join(""));
    } else {
        var documentFragment = document.createDocumentFragment();
        for (i = 0; i < jsFilesLength; i++) {
            var s = document.createElement("script");
            s.setAttribute("charset", "utf-8");
            s.src = jsHost + jsFiles[i];
            documentFragment.appendChild(s);
            s = null;
        }
        for (i = 0; i < cssFilesLength; i++) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = cssHost + cssFiles[i];
            documentFragment.appendChild(link);
            link = null;
        }
        var h = document.getElementsByTagName("head").length ? document.getElementsByTagName("head")[0] : document.body;
        h.appendChild(documentFragment);
    }
})();
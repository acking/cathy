/*
 * Millet JavaScript Library v1.0.5
 * http://7hihi.com
 *
 * Copyright 2010, textbox
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://7hihi.com
 */
window.M = typeof Millet == "object" ? Millet : {
    version: "1.0.5"
};
M.t = {
    ua: function(){
        var vText = "", b = {}, ua = navigator.userAgent.toLowerCase(), tmp;
        b.platform = window.navigator.platform;
        b.ie = /msie/.test(ua) && !/opera/.test(ua);
        b.opera = /opera/.test(ua);
        b.safari = /webkit/.test(ua) && !/chrome/.test(ua);
        b.firefox = /firefox/.test(ua);
        b.chrome = /chrome/.test(ua);
        try {
            b.maxthon = b.ie && !!external.max_version
        } 
        catch (e) {
            b.maxthon = false
        }
        for (var i in b) {
            b[i] && (vText = i)
        }
        b.safari !== false && (vText = "version");
        b.version = (ua.match(eval("/(?:" + vText + ")[\\/: ]([\\d.]+)/")) || [])[1];
        b.ie6 = b.ie && parseInt(b.version, 10) === 6, b.w3cMode = (tmp = document.defaultView) && tmp.getComputedStyle;
        return b
    }(),
    typeOf: function(o){
        var t;
        return (t = typeof o) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : t
    },
    loader: {
        on: function(evt, handler){
            switch (evt.toLowerCase()) {
                case "load":
                    M.loader.onLoad = handler;
                    break;
                case "ready":
                    M.loader.onReady = handler;
                    break
            }
        },
        insertCss: function(path, id, callback){
            var css, head = document.getElementsByTagName("head")[0];
            css = (css = M.d.get("#" + id)) && css.nodeName == "LINK" ? css : null;
            if (!css) {
                css = document.createElement("link");
                id && (css.id = id);
                css.rel = "stylesheet";
                css.rev = "stylesheet";
                css.type = "text/css";
                css.media = "screen";
                head.appendChild(css)
            }
            path && (css.href = path);
            callback && callback();
            return css.sheet || css
        },
        insertJs: function(path, callback){
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = path;
            script.onload = script.onreadystatechange = function(){
                if (!script.readyState || script.readyState === "loaded" || script.readyState === "complete") {
                    callback && callback();
                    script.onload = script.onreadystatechange = null
                }
            };
            head.insertBefore(script, head.lastChild.nextSibling)
        },
        load: function(files){
            var me = this, total = files.length, indicator = arguments[1] || 0;
            if (indicator >= total) {
                me.onReady && me.onReady();
                return true
            }
            var meCallee = arguments.callee;
            var file = files[indicator];
            if (/.js/.test(file)) {
                M.t.loader.insertJs(file, function(){
                    me.onLoad && me.onLoad(file);
                    meCallee.apply(me, [files, ++indicator])
                })
            }
            else {
                M.t.loader.insertCss(file, indicator, function(){
                    meCallee.apply(me, [files, ++indicator])
                })
            }
        }
    }
};
M.d = {
    get: function(css, tagName){
        return css.substr(0, 1) === "." ? M.d.getByClass(css.substr(1), tagName) : M.d.getById(css.substr(1))
    },
    getById: function(id){
        return document.getElementById(id) ? M.d.arm(document.getElementById(id)) : false
    },
    getByClass: function(className, tagName){
        var eles = [], all = document.getElementsByTagName(tagName || "*");
        for (var i = 0; i < all.length; i++) {
            if (all[i].className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"))) {
                eles[eles.length] = M.d.arm(all[i])
            }
        }
        return eles
    },
    getTarget: function(e){
        if (e) {
            return M.d.arm(e.srcElement || e.target)
        }
        else {
            return null
        }
    },
	getButton: function(e){
        if (!e) {
            return -1
        }
        if (M.t.ua.ie) {
            return e.button - Math.ceil(e.button / 2);
        }
        else {
            return e.button;
        }
    },
    getScrollLeft: function(doc){
        var _doc = doc || document;
        return Math.max(_doc.documentElement.scrollLeft, _doc.body.scrollLeft)
    },
    getScrollTop: function(doc){
        var _doc = doc || document;
        return Math.max(_doc.documentElement.scrollTop, _doc.body.scrollTop)
    },
	getClientWidth: function(doc){
        var _doc = doc || document;
        return _doc.compatMode == "CSS1Compat" ? _doc.documentElement.clientWidth : _doc.body.clientWidth;
    },
	getClientHeight: function(doc){
        var _doc = doc || document;
        return _doc.compatMode == "CSS1Compat" ? _doc.documentElement.clientHeight : _doc.body.clientHeight;
    },
    getXY: function(el, doc){
        var _t = 0, _l = 0, _doc = doc || document;
        el = el.dom || M.d.get(el).dom;
        if (el) {
            if (_doc.documentElement.getBoundingClientRect && el.getBoundingClientRect) {
                var box = el.getBoundingClientRect(), oDoc = el.ownerDocument, _fix = M.t.ua.ie ? 2 : 0;
                _t = box.top - _fix + M.d.getScrollTop(oDoc);
                _l = box.left - _fix + M.d.getScrollLeft(oDoc)
            }
            else {
                while (el.offsetParent) {
                    _t += el.offsetTop;
                    _l += el.offsetLeft;
                    el = el.offsetParent
                }
            }
        }
        return [_l, _t]
    },
    getSize: function(el){
        var v, _fix = [0, 0];
        el = el.dom || M.d.get(el).dom;
        if (el) {
            for (v in ["Left", "Right", "Top", "Bottom"]) {
                _fix[v == "Left" || v == "Right" ? 0 : 1] += (parseInt(el.style["border" + v + "Width"], 10) || 0) + (parseInt(el["padding" + v], 10) || 0)
            }
            var _w = el.offsetWidth - _fix[0];
            var _h = el.offsetHeight - _fix[1];
            return [_w, _h]
        }
        return [-1, -1]
    },
    createElementIn: function(tagName, el, insertFirst, attributes){
        el = el || document.body;
        tagName = tagName || "div";
        var _doc = el.ownerDocument, _e = _doc.createElement(tagName);
        if (attributes) {
            for (var k in attributes) {
                if (/class/.test(k)) {
                    _e.className = attributes[k]
                }
                else {
                    if (/style/.test(k)) {
                        _e.style.cssText = attributes[k]
                    }
                    else {
                        _e[k] = attributes[k]
                    }
                }
            }
        }
        if (insertFirst) {
            el.insertBefore(_e, el.firstChild)
        }
        else {
            el.appendChild(_e)
        }
        return M.d.arm(_e)
    },
    arm: function(el){
        return {
            dom: el,
            on: function(type, fn, parameters, useCapture){
                M.e.addEvent(el, type, fn, parameters, useCapture)
            },
            rm: function(type, fn){
                M.e.remEvent(el, type, fn)
            },
            rmAll: function(){
                M.e.purgeEventAll(el)
            },
            css: function(o){
                var k, v = Array.prototype.slice.apply(arguments), style, styles = {}, computed = !M.t.ua.w3cMode ? null : document.defaultView.getComputedStyle(el, "");
                if (M.t.typeOf(o) === "Object") {
                    for (k in o) {
                        if (k == "opacity" && !M.t.ua.w3cMode) {
                            el.style["filter"] = o[k] >= 1 ? "" : "alpha(opacity=" + Math.round(o[k] * 100) + ")"
                        }
                        else {
                            el.style[k] = o[k]
                        }
                    }
                }
                else {
                    for (k in v) {
                        if (M.t.ua.w3cMode) {
                            style = parseInt((computed || el.style)[v[k]], 10);
                            styles[v[k]] = style !== style ? (computed || el.style)[v[k]] : style
                        }
                        else {
                            style = parseInt(el.currentStyle[v[k]] || el.style[v[k]], 10);
                            styles[v[k]] = style !== style ? el.currentStyle[v[k]] || el.style[v[k]] : style
                        }
                    }
                    return styles
                }
            },
            animate: function(){
                return M.d.animate(el).run
            }()
        }
    },
    animate: function(el){
        var f = 0, j = 0, callback, me = {};
        me.tween = {
            backEaseIn: function(t, b, c, d){
                var s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b
            },
            backEaseOut: function(t, b, c, d, a, p){
                var s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
            },
            strongEaseIn: function(t, b, c, d){
                return c * (t /= d) * t * t * t * t + b
            }
        };
        me.execution = function(key, val, t, formula){
            var s = (new Date).getTime(), d = t || 500, b = parseInt(el.style[key], 10) || 0, c = val - b;
            (function(){
                var t = (new Date).getTime() - s;
                if (t > d) {
                    t = d;
                    el.style[key] = tween(t, b, c, d) + "px";
                    ++f === j && callback && callback.apply(el);
                    return me
                }
                el.style[key] = tween(t, b, c, d) + "px";
                setTimeout(arguments.callee, 0)
            })()
        };
        me.run = function(sty, t, tweenSet, fn){
            callback = fn;
            tween = me.tween[tweenSet] || me.tween.backEaseIn;
            for (var i in sty) {
                j++;
                me.execution(i, parseInt(sty[i], 10), t, tween)
            }
        };
        return me
    }
};
M.e = {
    ed: {},
    elSeqId: 0,
    fnSeqId: 0,
    addEvent: function(el, type, fn, parameters, useCapture){
        var cfn, fnId, res = false, l = M.e.ed;
        if (!el.eventsListId) {
            el.eventsListId = "e" + ++M.e.elSeqId
        }
        fnId = el.eventsListId + "_f" + ++M.e.fnSeqId
        if (!M.e.ed[el.eventsListId]) {
            M.e.ed[el.eventsListId] = {}
        }
        if (!M.e.ed[el.eventsListId][type]) {
            M.e.ed[el.eventsListId][type] = {}
        }
        cfn = function(){
            fn.apply(el, [].slice.call(arguments, 0).concat(parameters))
        };
        if (window.addEventListener) {
            el.addEventListener(type, cfn, useCapture);
            res = true
        }
        else {
            if (window.attachEvent) {
                res = el.attachEvent("on" + type, cfn)
            }
            else {
                res = false
            }
        }
        if (res) {
            M.e.ed[el.eventsListId][type][fnId] = cfn
        }
        return res
    },
    remEvent: function(el, type, fn){
        var cfn = fn, res = false, l = M.e.ed, r;
        if (!fn) {
            return M.e.purgeEvent(el, type)
        }
        if (el.eventsListId && M.e.ed[el.eventsListId]) {
            if (M.e.ed[el.eventsListId][type][fnId]) {
                cfn = M.e.ed[el.eventsListId][type][fnId];
                r = M.e.ed[el.eventsListId][type]
            }
        }
        if (el.removeEventListener) {
            el.removeEventListener(type, cfn, false);
            res = true
        }
        else {
            if (el.detachEvent) {
                el.detachEvent("on" + type, cfn);
                res = true
            }
            else {
                return false
            }
        }
        if (res && r && r[fnId]) {
            delete r[fnId]
        }
        return res
    },
    purgeEvent: function(el, type){
        var l;
        if (el.eventsListId && (l = M.e.ed[el.eventsListId]) && l[type]) {
            for (var k in l[type]) {
                if (el.removeEventListener) {
                    el.removeEventListener(type, l[type][k], false)
                }
                else {
                    if (el.detachEvent) {
                        el.detachEvent("on" + type, l[type][k])
                    }
                }
            }
        }
        if (el["on" + type]) {
            el["on" + type] = null
        }
        if (l) {
            l[type] = null;
            delete l[type]
        }
        return true
    },
    purgeEventAll: function(el){
        if (el.eventsListId && (l = M.e.ed[el.eventsListId])) {
            for (var k in l) {
                M.e.purgeEvent(el, k)
            }
        }
    },
    preventDefault: function(e){
        if (!e) {
            return false
        }
        if (e.preventDefault) {
            e.preventDefault()
        }
        else {
            e.returnValue = false
        }
    }
};
M.dd = {
    initDrag: function(idOrClass, isProxy){
        var doms = M.d.get(idOrClass);
        if (M.t.typeOf(doms) === "Object") {
            M.dd.startDrag(doms, isProxy)
        }
        else {
            for (var i in doms) {
                M.dd.startDrag(doms[i], isProxy)
            }
        }
    },
    startDrag: function(dom, isProxy){
        M.dd.obj = dom;
        M.dd.obj.css({
            cursor: "move"
        });
        M.dd.obj.on("mousedown", function(e){
			if(M.d.getButton(e)!==0) return;
            M.dd.doc = M.d.arm(document);
            M.dd.targetDom = dom;
            isProxy === true && M.dd.proxy.startProxy(e.clientX, e.clientY);
            M.dd.obj = isProxy ? M.d.get("#dragGhost") : M.dd.targetDom;
            M.dd.obj.dom.lx = e.clientX;
            M.dd.obj.dom.ly = e.clientY;
            M.dd.doc.on("mousemove", M.dd.doDrag, [M.dd.obj.dom, dom, isProxy]);
            M.dd.doc.on("mouseup", M.dd.endDrag, [isProxy]);
            M.e.preventDefault(e)
        });
        return M.dd.obj
    },
    doDrag: function(e, ghostDom, targetDom, isProxy){
        var nXY = M.dd.proxy.doProxy(e, targetDom, ghostDom);
        M.dd.obj.css({
            left: nXY.x + "px",
            top: nXY.y + "px"
        });
        ghostDom.lx = e.clientX;
        ghostDom.ly = e.clientY;
        M.e.preventDefault(e);
        if (M.t.ua.isIE) {
            document.body.setCapture()
        }
    },
    endDrag: function(e, isProxy){
        M.dd.doc.rm("mousemove");
        M.dd.doc.rm("mouseup");
        isProxy === true && M.dd.proxy.endProxy(e);
        if (M.t.ua.isIE) {
            document.body.releaseCapture()
        }
    },
    countXY: function(e){
        var options = {
            size: [M.dd.proxy.ghost.targetDom.css("width").width, M.dd.proxy.ghost.targetDom.css("height").height]
        }, size = options.size, ghostDom = M.dd.proxy.ghost.dom, pos = {
            x: e.clientX - M.dd.proxy.ghost.xy.x,
            y: e.clientY - M.dd.proxy.ghost.xy.y
        };
        M.dd.proxy.isAbsolute && (options.range = [0, 0, null, M.d.getSize(M.dd.proxy.ghost.container)[0]]);
        if (options.range) {
            var _r = options.range;
            var i = 0, j = 0;
            while (i < _r.length && j < 2) {
                if (typeof _r[i] != "number") {
                    i++;
                    continue
                }
                var k = i % 2 ? "x" : "y";
                var v = pos[k];
                pos[k] = i < 2 ? Math.max(pos[k], _r[i]) : Math.min(pos[k], _r[i] - size[(i + 1) % 2]);
                if (pos[k] != v) {
                    j++
                }
                i++
            }
        }
        else {
            pos = {
                x: isNaN(parseInt(ghostDom.style.left, 10)) ? 0 : parseInt(ghostDom.style.left, 10) + e.clientX - ghostDom.lx,
                y: isNaN(parseInt(ghostDom.style.top, 10)) ? 0 : parseInt(ghostDom.style.top, 10) + e.clientY - ghostDom.ly
            }
        }
        return pos
    },
    proxy: {
        ghost: null,
        isAbsolute: false,
        startProxy: function(x, y){
            M.dd.targetDom.css({
                opacity: 0.5
            });
            M.dd.proxy.isAbsolute = M.dd.targetDom.css("position").position == "absolute" || M.dd.targetDom.css("position").position == "fixed";
            M.dd.proxy.ghost = M.d.createElementIn("DIV", M.dd.proxy.isAbsolute ? M.dd.targetDom.dom.parentNode : document.body, false, {
                id: "dragGhost",
                styles: "width:140px;height:20px;cursor:pointer;position:absolute;border:1px solid #06c;background:#6cf;z-index:1000;color:#003;overflow:hidden",
                innerHTML: '<div style="margin:0 5px;font-weight:bold;white-space:nowrap;height:20px;overflow:hidden;text-overflow:ellipsis">\u8131\u5427\u5144\u5f1f</div>'
            });
            
            M.dd.proxy.ghost.xy = [M.dd.targetDom.css("left").left === "auto" ? 0 : M.dd.targetDom.css("left").left, M.dd.targetDom.css("top").top === "auto" ? 0 : M.dd.targetDom.css("top").top];
            M.dd.proxy.ghost.xy.x = x - parseInt(M.dd.proxy.ghost.xy[0]);
            M.dd.proxy.ghost.xy.y = y - parseInt(M.dd.proxy.ghost.xy[1]);
            
            if (M.dd.proxy.isAbsolute) {
                M.dd.proxy.ghost.css({
                    left: M.dd.targetDom.dom.offsetLeft + 'px',
                    top: M.dd.targetDom.dom.offsetTop + 'px',
                    width: M.dd.targetDom.css("width").width + "px",
                    height: M.dd.targetDom.css("height").height + "px",
                    cursor: "move",
                    opacity: 0.5
                });
                M.dd.proxy.ghost.container = M.d.arm(M.dd.proxy.ghost.dom.parentNode);
                M.dd.proxy.axis.showAxis(M.dd.proxy.ghost);
            }
            else {
                M.dd.proxy.ghost.css({
                    left: M.d.getScrollLeft() + x - 30 + "px",
                    top: M.d.getScrollTop() + y - 20 + "px"
                });
            }
            M.dd.proxy.ghost.isMoveEd = false;
            M.dd.proxy.ghost.frames = [];
            var cNodes = M.d.get(".frames");
            for (var i = 0; i < cNodes.length; i++) {
                M.dd.proxy.ghost.frames.push({
                    id: cNodes[i].dom.id,
                    xy: M.d.getXY(cNodes[i]),
                    size: M.d.getSize(cNodes[i])
                })
            }
        },
        doProxy: function(e, targetDom, ghostDom){
            var cX = e.clientX, cY = e.clientY, _sl = M.d.getScrollLeft(), _st = M.d.getScrollTop(), _frameId = 2, _fs = M.dd.proxy.ghost.frames;
            for (var i = 0; i < _fs.length; i++) {
                _frameId = i;
                if (cX < _fs[i].xy[0] + _fs[i].size[0]) {
                    break
                }
            }
            var _targetFrame = M.d.get("#" + _fs[_frameId].id).dom;
            var _cNode = _targetFrame.firstChild;
            var _fX = cX - _fs[_frameId].xy[0] + _sl;
            var _fY = cY - _fs[_frameId].xy[1] + _st;
            var _next = null;
            while (_cNode != null && (_next = _cNode.nextSibling) != null) {
                if (_cNode.nodeType != 1) {
                    _cNode = _next;
                    continue
                }
                if (_fY < _cNode.offsetTop + _cNode.offsetHeight) {
                    break
                }
                _cNode = _next
            }
            if (_cNode) {
                var pos = [{
                    id: 0,
                    value: _fY - _cNode.offsetTop
                }, {
                    id: 1,
                    value: _fX - _cNode.offsetLeft
                }, {
                    id: 2,
                    value: _cNode.offsetTop + _cNode.offsetHeight - _fY
                }, {
                    id: 3,
                    value: _cNode.offsetLeft + _cNode.offsetWidth - _fX
                }];
                pos = pos.sort(function(a, b){
                    return a.value - b.value
                });
                M.dd.proxy.ghost.shortPathId = pos[0].id
            }
            M.dd.proxy.ghost.currentNode = _cNode;
            M.dd.proxy.ghost.targetDom = targetDom;
            M.dd.proxy.ghost.currentFrameId = _frameId;
            M.dd.proxy.ghost.isMoveEd = true;
            M.dd.proxy.isAbsolute && M.dd.proxy.axis.moveAxis(M.dd.proxy.ghost);
            !M.dd.proxy.isAbsolute && M.dd.proxy.showFrameBar(M.dd.proxy.ghost);
            return M.dd.countXY(e)
        },
        endProxy: function(e){
            M.dd.targetDom.css({
                opacity: 1
            });
            M.d.get("#dragGhost").dom.parentNode.removeChild(M.d.get("#dragGhost").dom);
            M.dd.proxy.isAbsolute && M.dd.proxy.axis.hideAxis();
            if (M.dd.proxy.ghost.isMoveEd) {
                if (M.dd.proxy.isAbsolute) {
                    var xy = M.dd.countXY(e);
                    M.dd.targetDom.css({
                        left: xy.x + "px",
                        top: xy.y + "px"
                    })
                    M.dd.proxy.setContainerHeight();
                }
                else {
                    var _parentEl = M.d.get("#" + M.dd.proxy.ghost.frames[M.dd.proxy.ghost.currentFrameId].id);
                    if (M.dd.proxy.ghost.currentNode) {
                        if (M.dd.proxy.ghost.targetDom.dom.id != M.dd.proxy.ghost.currentNode.id) {
                            if (M.dd.proxy.ghost.shortPathId < 2) {
                                _parentEl.dom.insertBefore(M.dd.proxy.ghost.targetDom.dom, M.dd.proxy.ghost.currentNode)
                            }
                            else {
                                _parentEl.dom.insertBefore(M.dd.proxy.ghost.targetDom.dom, M.dd.proxy.ghost.currentNode.nextSibling)
                            }
                        }
                        else {
                            _changeFlag = false
                        }
                    }
                    else {
                        _parentEl.dom.appendChild(M.dd.proxy.ghost.targetDom.dom)
                    }
                    _parentEl.css({
                        left: 0,
                        top: 0
                    });
                    document.body.removeChild(M.d.get("#fTipsBar").dom)
                }
            }
        },
        showFrameBar: function(dragCache){
            var tipsBar = M.d.get("#fTipsBar") ||
            M.d.createElementIn("DIV", false, false, {
                id: "fTipsBar",
                styles: "font:0;background:red;position:absolute"
            });
            var _fix = {
                l: [0, -5, 0, 1],
                t: [-5, 0, 1, 0]
            };
            if (dragCache.currentNode) {
                var cModule = M.d.get("#" + dragCache.currentNode.id);
                var _p = {
                    left: M.d.getXY(cModule)[0],
                    top: M.d.getXY(cModule)[1],
                    width: parseInt(cModule.dom.offsetWidth, 10),
                    height: parseInt(cModule.dom.offsetHeight, 10)
                };
                var _spi = dragCache.shortPathId;
                var _x = (_spi != 3 ? _p.left : _p.left + _p.width) + _fix.l[_spi] + (M.t.ua.firefox && M.t.ua.version === 3 ? 2 : 0);
                var _y = (_spi != 2 ? _p.top : _p.top + _p.height) + _fix.t[_spi] + (M.t.ua.firefox && M.t.ua.version === 3 ? 2 : 0);
                tipsBar.css({
                    left: _x + "px",
                    top: _y + "px",
                    width: (_spi % 2 ? 4 : _p.width) + "px",
                    height: (_spi % 2 ? _p.height : 4) + "px"
                })
            }
            else {
                var _parentEl = M.d.get("#" + dragCache.frames[dragCache.currentFrameId].id);
                var _p = {
                    left: M.d.getXY(_parentEl)[0],
                    top: M.d.getXY(_parentEl)[1],
                    width: parseInt(_parentEl.dom.offsetWidth, 10),
                    height: parseInt(_parentEl.offsetHeight, 10)
                };
                tipsBar.css({
                    left: _p.left + "px",
                    top: _p.top + "px",
                    width: _p.width + "px",
                    height: 4 + "px"
                })
            }
        },
        setContainerHeight: function(){
            var modules = M.d.get('.bg-mode', 'div'), heights = [], maxHeight;
            for (var i in modules) {
                heights[i] = modules[i].css('height').height + modules[i].dom.offsetTop;
            }
            maxHeight = Math.max(Math.max.apply(null, heights), 400);
            M.dd.proxy.ghost.container.css({
                height: maxHeight + 'px'
            });
        },
        axis: {
            showAxis: function(ghost){
                var xy = M.d.getXY(M.dd.targetDom), height = M.dd.doc.dom.body.offsetHeight;
                M.dd.proxy.axis.xLline = M.d.createElementIn("DIV", document.body, false, {
                    id: "axisX",
                    styles: 'position:absolute;font-size:0;width:100%;height:1px;overflow:hidden;background:#4affff;z-index:1000;left:0;top:' + xy[1] + 'px'
                });
                M.dd.proxy.axis.yLline = M.d.createElementIn("DIV", document.body, false, {
                    id: "axisY",
                    styles: 'position:absolute;font-size:0;width:1px;height:' + height + 'px;background:#4affff;z-index:1000;top:0;left:' + xy[0] + 'px'
                });
            },
            moveAxis: function(ghost){
                var xy = M.d.getXY(ghost);
                M.dd.proxy.axis.xLline.css({
                    top: xy[1] + 'px'
                });
                M.dd.proxy.axis.yLline.css({
                    left: xy[0] + 'px'
                });
            },
            hideAxis: function(){
                document.body.removeChild(M.d.get("#axisX").dom);
                document.body.removeChild(M.d.get("#axisY").dom);
            }
        }
    }
};
M.ready = function(fn){
    var done = false, init = function(){
        if (!done) {
            done = true;
            fn()
        }
    };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function(){
            document.removeEventListener("DOMContentLoaded", arguments.callee, false);
            init()
        }, false)
    }
    else {
        if (document.attachEvent) {
            (function(){
                try {
                    document.documentElement.doScroll("left")
                } 
                catch (e) {
                    setTimeout(arguments.callee, 50);
                    return
                }
                init()
            })();
            document.attachEvent("onreadystatechange", function(){
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", arguments.callee);
                    init()
                }
            })
        }
    }
};

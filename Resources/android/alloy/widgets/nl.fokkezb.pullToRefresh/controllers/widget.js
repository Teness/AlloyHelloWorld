function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.pullToRefresh/" + s : s.substring(0, index) + "/nl.fokkezb.pullToRefresh/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function show(msg) {
        if (!attached || pulled) {
            Ti.API.info("show false");
            return false;
        }
        pulled = true;
        released = false;
        $.view.ptrText.text = msg || options.msgUpdating;
        $.view.ptrArrow.opacity = 0;
        $.view.ptrIndicator.show();
        $.view.prtCenter.show();
        __parentSymbol.scrollToTop(0, {
            animated: true,
            duration: 250
        });
        Ti.API.info("show true");
        return true;
    }
    function hide() {
        if (!attached || !pulled) {
            Ti.API.info("hide false");
            return false;
        }
        $.view.ptrIndicator.hide();
        $.view.ptrArrow.transform = Ti.UI.create2DMatrix();
        $.view.ptrArrow.opacity = 1;
        $.view.ptrText.text = options.msgPull;
        __parentSymbol.scrollToTop(1, {
            animated: true,
            duration: 250
        });
        pulled = false;
        loading = false;
        Ti.API.info("hide true");
        return true;
    }
    function refresh() {
        if (!attached || loading) {
            Ti.API.info("refresh false");
            return false;
        }
        loading = true;
        show();
        $.trigger("release", {
            hide: hide
        });
        Ti.API.info("refresh true");
        return true;
    }
    function scrollListener(e) {
        if (e.source !== __parentSymbol) {
            Ti.API.info("scroll false");
            return;
        }
        Ti.API.info("scroll true");
        var unrotate;
        var rotate;
        offset = e.firstVisibleItem;
        Ti.API.info("offset = " + offset);
        if (pulled) return;
        offset > 0 && (pulling = true);
        if (!pulling || loading || released || 0 != offset) {
            if (!pulling && !loading && 0 >= offset) {
                Ti.API.info("release to refresh");
                pulling = true;
                released = true;
                var rotate = Ti.UI.create2DMatrix().rotate(180);
                $.view.ptrArrow.animate({
                    transform: rotate,
                    duration: 180
                });
                $.view.ptrText.text = options.msgRelease;
            }
        } else {
            Ti.API.info("pull to refresh");
            var unrotate = Ti.UI.create2DMatrix();
            $.view.ptrArrow.animate({
                transform: unrotate,
                duration: 180
            });
            $.view.ptrText.text = options.msgPull;
            setTimeout(function() {
                pulling = false;
            }, 180);
        }
        return;
    }
    function swipeListener(e) {
        Ti.API.info("swipe offset = " + offset + " direction = " + e.direction);
        if (0 === offset && "down" === e.direction || released) {
            Ti.API.info("swipe true");
            refresh();
        }
        return;
    }
    function setOptions(_options) {
        _.extend(options, _options);
        return;
    }
    function attach() {
        if (attached) return false;
        init();
        return true;
    }
    function init(_table) {
        Ti.API.info("init true");
        if (!_table) return;
        Ti.API.info("init __parentSymbol true");
        __parentSymbol = _table;
        __parentSymbol.addEventListener("scroll", scrollListener);
        height = $.view.ptr.height;
        attached = true;
        pulling = false;
        pulled = false;
        loading = false;
        offset = 0;
        __parentSymbol.scrollToTop(0, {
            animated: true
        });
        __parentSymbol.addEventListener("swipe", swipeListener);
        $.view.ptrText.text = options.msgPull;
        $.view.prtCenter.show();
        return;
    }
    function dettach() {
        if (!attached) return false;
        __parentSymbol.removeEventListener("scroll", scrollListener);
        __parentSymbol.removeEventListener("swipe", swipeListener);
        hide();
        attached = false;
        return true;
    }
    new (require("alloy/widget"))("nl.fokkezb.pullToRefresh");
    this.__widgetId = "nl.fokkezb.pullToRefresh";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.view = Alloy.createWidget("nl.fokkezb.pullToRefresh", "view", {
        id: "view",
        __parentSymbol: __parentSymbol
    });
    $.__views.view.getViewEx({
        recurse: true
    }) && $.addProxyProperty("headerView", $.__views.view.getViewEx({
        recurse: true
    }));
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var options = {
        msgPull: L("ptrPull", "Pull to refresh..."),
        msgRelease: L("ptrRelease", "Release to refresh..."),
        msgUpdating: L("ptrUpating", "Updating..."),
        top: 0
    };
    var height = 50, attached = false, pulling = false, pulled = false, loading = false, released = false, offset = 0;
    delete args.__parentSymbol;
    delete args.__itemTemplate;
    delete args.$model;
    setOptions(args);
    __parentSymbol && init();
    exports.setOptions = setOptions;
    exports.show = show;
    exports.hide = hide;
    exports.refresh = refresh;
    exports.dettach = dettach;
    exports.attach = attach;
    exports.init = init;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
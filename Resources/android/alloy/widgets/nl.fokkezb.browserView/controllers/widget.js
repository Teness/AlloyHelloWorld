function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.browserView/" + s : s.substring(0, index) + "/nl.fokkezb.browserView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("nl.fokkezb.browserView");
    this.__widgetId = "nl.fokkezb.browserView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.webView = Ti.UI.createWebView({
        id: "webView"
    });
    $.__views.window.add($.__views.webView);
    $.__views.action = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.ACTION,
        id: "action"
    });
    $.__views.action && $.addTopLevelView($.__views.action);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.window.rightNavButton = $.action;
    $.action.addEventListener("click", function() {
        Ti.Platform.openURL($.webView.url);
    });
    $.webView.addEventListener("load", function(e) {
        var title = $.webView.evalJS("document.title");
        $.window.title = "string" == typeof title && title.length > 0 ? title : e.url ? e.url : args.url;
    });
    $.webView.url = args.url;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
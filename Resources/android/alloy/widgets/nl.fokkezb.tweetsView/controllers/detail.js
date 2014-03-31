function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.tweetsView/" + s : s.substring(0, index) + "/nl.fokkezb.tweetsView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("nl.fokkezb.tweetsView");
    this.__widgetId = "nl.fokkezb.tweetsView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        title: "Tweet",
        backgroundColor: "#e2e3e4",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.wrapper = Ti.UI.createView({
        top: 10,
        right: 10,
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: 5,
        borderSize: 1,
        borderColor: "#ddd",
        backgroundColor: "#ffffff",
        id: "wrapper"
    });
    $.__views.window.add($.__views.wrapper);
    $.__views.meta = Ti.UI.createView({
        top: 0,
        right: 0,
        left: 0,
        height: 68,
        backgroundColor: "#ffffff",
        id: "meta"
    });
    $.__views.wrapper.add($.__views.meta);
    $.__views.image = Ti.UI.createImageView({
        top: 10,
        left: 10,
        width: 48,
        height: 48,
        preventDefaultImage: true,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        id: "image"
    });
    $.__views.meta.add($.__views.image);
    $.__views.name = Ti.UI.createLabel({
        top: 10,
        right: 10,
        left: 68,
        height: 24,
        font: {
            fontWeight: "bold",
            fontSize: 15
        },
        backgroundColor: "#ffffff",
        id: "name"
    });
    $.__views.meta.add($.__views.name);
    $.__views.user = Ti.UI.createLabel({
        top: 34,
        right: 10,
        left: 68,
        height: 24,
        color: "#999",
        font: {
            fontSize: 13
        },
        backgroundColor: "#ffffff",
        id: "user"
    });
    $.__views.meta.add($.__views.user);
    $.__views.text = Ti.UI.createLabel({
        top: 0,
        right: 10,
        left: 10,
        height: Ti.UI.SIZE,
        disableBounce: true,
        enableZoomControls: false,
        hideLoadIndicator: true,
        backgroundColor: "#ffffff",
        id: "text"
    });
    $.__views.wrapper.add($.__views.text);
    $.__views.time = Ti.UI.createLabel({
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        height: 20,
        color: "#999",
        font: {
            fontSize: 13
        },
        backgroundColor: "#ffffff",
        id: "time"
    });
    $.__views.wrapper.add($.__views.time);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.get("content");
    var date = args.get("createdAt");
    Ti.API.info("detail window: " + args.get("content") + date.toLocaleString());
    $.image.image = args.get("image");
    $.name.text = "name";
    $.user.text = "userId:" + args.get("userId");
    $.text.text = args.get("content");
    $.time.text = date.toLocaleString();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
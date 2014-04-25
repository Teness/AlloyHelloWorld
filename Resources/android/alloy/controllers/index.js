function Controller() {
    function doClick() {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId13 = [];
    $.__views.__alloyId14 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId14"
    });
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.__alloyId14.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.tvl = Ti.UI.createTab({
        window: $.__views.__alloyId14,
        id: "tvl",
        title: "Label"
    });
    __alloyId13.push($.__views.tvl);
    $.__views.tvw = Ti.UI.createWindow({
        id: "tvw",
        title: "Tweets"
    });
    $.__views.tv = Alloy.createWidget("nl.fokkezb.tweetsView", "widget", {
        id: "tv",
        q: "my search",
        __parentSymbol: $.__views.tvw
    });
    $.__views.tv.setParent($.__views.tvw);
    $.__views.tvt = Ti.UI.createTab({
        window: $.__views.tvw,
        id: "tvt",
        title: "My Tweets"
    });
    __alloyId13.push($.__views.tvt);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId13,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.tweetsView/" + s : s.substring(0, index) + "/nl.fokkezb.tweetsView/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function prettyDate(time) {
        var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")), diff = (new Date().getTime() - date.getTime()) / 1e3, day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || 0 > day_diff || day_diff >= 31) return;
        return 0 == day_diff && (60 > diff && Math.ceil(diff) + " secs" || 60 == diff && "1 sec" || 3600 > diff && Math.floor(diff / 60) + " mins" || 7200 > diff && "1 hour" || 86400 > diff && Math.floor(diff / 3600) + " hours") || 1 == day_diff && "1 day" || day_diff + " days";
    }
    new (require("alloy/widget"))("nl.fokkezb.tweetsView");
    this.__widgetId = "nl.fokkezb.tweetsView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        bottom: 10,
        backgroundColor: "#fff",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.image = Ti.UI.createImageView({
        top: 10,
        left: 10,
        width: 48,
        height: 48,
        preventDefaultImage: true,
        borderRadius: 3,
        backgrondColor: "#fff",
        id: "image"
    });
    $.__views.row.add($.__views.image);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        backgroundColor: "#fff",
        top: 10,
        right: 10,
        left: 68,
        height: 15,
        wordWrap: false,
        ellipsize: true,
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.time = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        backgroundColor: "#fff",
        top: 10,
        right: 10,
        width: 60,
        height: 15,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        color: "#999",
        id: "time"
    });
    $.__views.row.add($.__views.time);
    $.__views.text = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        backgroundColor: "#fff",
        top: 25,
        right: 10,
        left: 68,
        color: "#000",
        id: "text"
    });
    $.__views.row.add($.__views.text);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("image url = " + args.get("image"));
    $.image.image = args.get("image");
    $.name.text = args.get("userId");
    $.time.text = prettyDate(args.get("createdAt").toString());
    $.text.text = args.get("content");
    Ti.API.info("tweet row loaded");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
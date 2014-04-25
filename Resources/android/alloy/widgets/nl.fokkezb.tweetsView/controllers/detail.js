function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.tweetsView/" + s : s.substring(0, index) + "/nl.fokkezb.tweetsView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function myLoader() {}
    function onEndCommentLoader(e) {
        setTimeout(function() {
            Ti.API.info("onEndLoading");
            var tempComments = Widget.createCollection("comment");
            tempComments.fetch();
            var id = getRandomInt(1, 8);
            Ti.API.info("add comment " + id);
            tempComments = tempComments.filter(function(comment) {
                return comment.get("id") == id;
            });
            tempComments.map(function(comment) {
                data.push(Alloy.createWidget("nl.fokkezb.tweetsView", "row", comment).getView());
            });
            $.tableView.setData(data);
            e.success();
        }, 1e3);
    }
    var Widget = new (require("alloy/widget"))("nl.fokkezb.tweetsView");
    this.__widgetId = "nl.fokkezb.tweetsView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
    $.__views.ptr = Alloy.createWidget("nl.fokkezb.pullToRefresh", "widget", {
        id: "ptr",
        __parentSymbol: __parentSymbol
    });
    myLoader ? $.__views.ptr.on("release", myLoader) : __defers["$.__views.ptr!release!myLoader"] = true;
    $.__views.isComment = Alloy.createWidget("nl.fokkezb.infiniteScroll", "widget", {
        id: "isComment",
        __parentSymbol: __parentSymbol
    });
    onEndCommentLoader ? $.__views.isComment.on("end", onEndCommentLoader) : __defers["$.__views.isComment!end!onEndCommentLoader"] = true;
    $.__views.tableView = Ti.UI.createTableView({
        top: 140,
        right: 10,
        bottom: 0,
        left: 10,
        headerPullView: $.__views.ptr.getProxyPropertyEx("headerPullView", {
            recurse: true
        }),
        headerView: $.__views.ptr.getProxyPropertyEx("headerView", {
            recurse: true
        }),
        footerView: $.__views.isComment.getProxyPropertyEx("footerView", {
            recurse: true
        }),
        id: "tableView"
    });
    $.__views.window.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var tweet = args.content;
    var date = new Date(args.createdAt);
    Ti.API.info("detail window: " + tweet + date);
    $.image.image = args.image;
    $.name.text = "name";
    $.user.text = "userId:" + args.userId;
    $.text.text = tweet;
    $.time.text = date.toLocaleDateString();
    var data = [];
    var comments = Widget.createCollection("comment");
    comments.fetch();
    Ti.API.info("comments: " + comments.length);
    comments.map(function(comment) {
        data.push(Alloy.createWidget("nl.fokkezb.tweetsView", "row", comment).getView());
    });
    $.tableView.setData(data);
    $.ptr.init($.tableView);
    $.isComment.init($.tableView);
    __defers["$.__views.ptr!release!myLoader"] && $.__views.ptr.on("release", myLoader);
    __defers["$.__views.isComment!end!onEndCommentLoader"] && $.__views.isComment.on("end", onEndCommentLoader);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.tweetsView/" + s : s.substring(0, index) + "/nl.fokkezb.tweetsView/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function doInit(opts) {
        _.extend(options, opts);
        $.ptr.init($.tableView);
        pullController = $.ptr;
        false !== options.opener ? $.tableView.addEventListener("click", onTableViewClick) : $.tableView.allowsSelection = false;
        tweets = Widget.createCollection("tweet");
        tweets.fetch();
        Ti.API.info("tweets: " + tweets.length);
        tweets.map(function(tweet) {
            data.unshift(Alloy.createWidget("nl.fokkezb.tweetsView", "row", tweet).getView());
        });
        $.tableView.setData(data);
    }
    function openWindow(win) {
        "function" == typeof options.opener ? options.opener(win) : "object" == typeof options.opener && "function" == typeof options.opener.open ? options.opener.open(win) : win.open();
    }
    function onTweetClick() {
        Ti.API.info("onTweetClick");
    }
    function onTableViewClick(e) {
        Ti.API.info("onTableViewClick");
        Ti.API.info(e.row.data.get("content"));
        var win = Alloy.createWidget("nl.fokkezb.tweetsView", "detail", e.row.data).getView();
        Ti.API.info("create tweetsView");
        Ti.App.addEventListener("tweetsView:click", onTweetClick);
        win.addEventListener("close", function() {
            Ti.App.removeEventListener("tweetsView:click", onTweetClick);
        });
        Ti.API.info("before open window");
        openWindow(win);
    }
    function doManualRefresh() {
        if (loading) return false;
        pullController.trigger();
        return true;
    }
    function myLoader(e) {
        setTimeout(function() {
            Ti.API.info("loading");
            var tempTweets = Widget.createCollection("tweet");
            tempTweets.fetch();
            var id = getRandomInt(1, 8);
            Ti.API.info("add tweet " + id);
            tempTweets = tempTweets.filter(function(tweet) {
                return tweet.get("id") == id;
            });
            tempTweets.map(function(tweet) {
                data.unshift(Alloy.createWidget("nl.fokkezb.tweetsView", "row", tweet).getView());
            });
            $.tableView.setData(data);
            e.hide();
        }, 1e3);
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function onEndLoader(e) {
        setTimeout(function() {
            Ti.API.info("onEndLoading");
            var tempTweets = Widget.createCollection("tweet");
            tempTweets.fetch();
            var id = getRandomInt(1, 8);
            Ti.API.info("add tweet " + id);
            tempTweets = tempTweets.filter(function(tweet) {
                return tweet.get("id") == id;
            });
            tempTweets.map(function(tweet) {
                data.push(Alloy.createWidget("nl.fokkezb.tweetsView", "row", tweet).getView());
            });
            $.tableView.setData(data);
            e.success();
        }, 1e3);
    }
    var Widget = new (require("alloy/widget"))("nl.fokkezb.tweetsView");
    this.__widgetId = "nl.fokkezb.tweetsView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.ptr = Alloy.createWidget("nl.fokkezb.pullToRefresh", "widget", {
        id: "ptr",
        __parentSymbol: __parentSymbol
    });
    myLoader ? $.__views.ptr.on("release", myLoader) : __defers["$.__views.ptr!release!myLoader"] = true;
    $.__views.is = Alloy.createWidget("nl.fokkezb.infiniteScroll", "widget", {
        id: "is",
        __parentSymbol: __parentSymbol
    });
    onEndLoader ? $.__views.is.on("end", onEndLoader) : __defers["$.__views.is!end!onEndLoader"] = true;
    $.__views.tableView = Ti.UI.createTableView({
        backgroundColor: "#ffffff",
        headerPullView: $.__views.ptr.getProxyPropertyEx("headerPullView", {
            recurse: true
        }),
        headerView: $.__views.ptr.getProxyPropertyEx("headerView", {
            recurse: true
        }),
        footerView: $.__views.is.getProxyPropertyEx("footerView", {
            recurse: true
        }),
        id: "tableView"
    });
    $.__views.tableView && $.addTopLevelView($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var options = {
        q: "apps"
    };
    var loading = false;
    var data = [];
    var pullController;
    var tweets;
    args.q && doInit(args);
    exports.init = doInit;
    exports.load = doManualRefresh;
    __defers["$.__views.ptr!release!myLoader"] && $.__views.ptr.on("release", myLoader);
    __defers["$.__views.is!end!onEndLoader"] && $.__views.is.on("end", onEndLoader);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
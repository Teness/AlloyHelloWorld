function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.infiniteScroll/" + s : s.substring(0, index) + "/nl.fokkezb.infiniteScroll/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0026,
    key: "is",
    style: {
        top: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0027,
    key: "isCenter",
    style: {
        height: "50dp",
        bottom: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0028,
    key: "isIndicator",
    style: {
        style: Ti.UI.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.003,
    key: "isText",
    style: {
        wordWrap: false,
        color: "#777",
        font: {
            fontSize: "13dp"
        }
    }
} ];
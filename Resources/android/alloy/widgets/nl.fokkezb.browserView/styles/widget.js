function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.browserView/" + s : s.substring(0, index) + "/nl.fokkezb.browserView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0025,
    key: "action",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.ACTION
    }
} ];
function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.tweetsView/" + s : s.substring(0, index) + "/nl.fokkezb.tweetsView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0011,
    key: "TableViewRow",
    style: {
        bottom: 10,
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.0012,
    key: "Label",
    style: {
        font: {
            fontSize: 13
        },
        backgroundColor: "#fff"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "image",
    style: {
        top: 10,
        left: 10,
        width: 48,
        height: 48,
        preventDefaultImage: true,
        borderRadius: 3,
        backgrondColor: "#fff"
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "name",
    style: {
        top: 10,
        right: 10,
        left: 68,
        height: 15,
        font: {
            fontSize: 13,
            fontWeight: "bold"
        },
        wordWrap: false,
        ellipsize: true
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "time",
    style: {
        top: 10,
        right: 10,
        width: 60,
        height: 15,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        color: "#999"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "text",
    style: {
        top: 25,
        right: 10,
        left: 68,
        color: "#000"
    }
} ];
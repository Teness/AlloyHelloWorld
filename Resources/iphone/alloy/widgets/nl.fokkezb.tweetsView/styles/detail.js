function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.tweetsView/" + s : s.substring(0, index) + "/nl.fokkezb.tweetsView/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Window",
    style: {
        title: "Tweet",
        backgroundColor: "#e2e3e4"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "wrapper",
    style: {
        top: 10,
        right: 10,
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: 5,
        borderSize: 1,
        borderColor: "#ddd",
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "meta",
    style: {
        top: 0,
        right: 0,
        left: 0,
        height: 68,
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "name",
    style: {
        top: 10,
        right: 10,
        left: 68,
        height: 24,
        font: {
            fontWeight: "bold",
            fontSize: 15
        },
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "user",
    style: {
        top: 34,
        right: 10,
        left: 68,
        height: 24,
        color: "#999",
        font: {
            fontSize: 13
        },
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "image",
    style: {
        top: 10,
        left: 10,
        width: 48,
        height: 48,
        preventDefaultImage: true,
        borderRadius: 5,
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "text",
    style: {
        top: 0,
        right: 10,
        left: 10,
        height: Ti.UI.SIZE,
        disableBounce: true,
        enableZoomControls: false,
        hideLoadIndicator: true,
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "time",
    style: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        height: 20,
        color: "#999",
        font: {
            fontSize: 13
        },
        backgroundColor: "#ffffff"
    }
} ];
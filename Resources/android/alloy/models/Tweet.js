exports.definition = {
    config: {
        columns: {
            id: "int",
            content: "string",
            image: "string",
            cmtCount: "int",
            stockId: "int",
            userId: "int",
            createdAt: "datetime"
        },
        adapter: {
            type: "sql",
            collection_name: "tweet"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("tweet", exports.definition, [ function(migration) {
    migration.name = "tweet";
    migration.id = "201402300502813";
    var preload_data = [ {
        id: 1,
        content: "tweet 1",
        image: "",
        cmtCount: 1,
        stockId: 2,
        userId: 3,
        createdAt: new Date()
    }, {
        id: 2,
        content: "tweet 2",
        image: "",
        cmtCount: 12,
        stockId: 2,
        userId: 1,
        createdAt: new Date()
    }, {
        id: 3,
        content: "tweet 3",
        image: "",
        cmtCount: 123,
        stockId: 2,
        userId: 2,
        createdAt: new Date()
    }, {
        id: 4,
        content: "tweet 4",
        image: "",
        cmtCount: 1234,
        stockId: 2,
        userId: 4,
        createdAt: new Date()
    }, {
        id: 5,
        content: "tweet 5",
        image: "",
        cmtCount: 12345,
        stockId: 2,
        userId: 5,
        createdAt: new Date()
    }, {
        id: 6,
        content: "tweet 6",
        image: "",
        cmtCount: 123456,
        stockId: 2,
        userId: 6,
        createdAt: new Date()
    }, {
        id: 7,
        content: "tweet 7",
        image: "",
        cmtCount: 1234567,
        stockId: 2,
        userId: 7,
        createdAt: new Date()
    }, {
        id: 8,
        content: "tweet 8",
        image: "",
        cmtCount: 12345678,
        stockId: 2,
        userId: 8,
        createdAt: new Date()
    } ];
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                id: "int",
                content: "string",
                image: "string",
                cmtCount: "int",
                stockId: "int",
                userId: "int",
                createdAt: "datetime"
            }
        });
        for (var i = 0; preload_data.length > i; i++) migrator.insertRow(preload_data[i]);
    };
    migration.down = function(migrator) {
        migrator.dropTable();
    };
} ]);

collection = Alloy.C("tweet", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
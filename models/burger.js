var orm = require('./../config/orm.js');

let burgers = {
    // create new burger instance
    createBurger: (newBurger, callback) => {
        orm.insertOne(newBurger, () => {
            callback();
        });
    },

    //get  all burgers from DB
    all: (callback) => {
        orm.selectAll(res => {
            callback(res);
        });
    },

    //update burger in DB
    updateBurger: (burger, callback) => {
        orm.updateOne(burger, res => {
            callback(res);
        });
    }
};

module.exports = burgers;

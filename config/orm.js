var connection = require('./connection.js');

let orm = {
    // getting all from burgers table inside DB
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', (err, data) => {
            if (err) {
                console.log('Can\'t get any data from the db.');
                throw err;
            }
            callback(data);
        });
    },

    //inserting new instance inside burger table
    insertOne: function(newBurger, callback) {
        connection.query('INSERT INTO burgers(burger_name, devoured) VALUES (?,"0")', [newBurger.name], (err, result) => {
            if (err) {
                console.log('Can\'t insert data into the table.');
                throw err;
            }
            callback();
        });
    },

    //updating  data inside burgers table
    updateOne: function(burgerId, callback) {
        connection.query('UPDATE burgers SET devoured = true WHERE id = ?', [burgerId], (err, result) => {
            if (err) {
                console.log('Can\'t update data in the table');
                throw err;
            }
            callback(result);
        });
    }
};

module.exports = orm;

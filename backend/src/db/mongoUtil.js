import { MongoClient } from 'mongodb';
import * as dotenv from "dotenv";
dotenv.config();

var _db;

module.exports = {
    connectToDatabase: function(callback) {
        MongoClient.connect( 
            process.env.DATABASE_URI, 
            {useNewUrlParser: true, useUnifiedTopology: true}, 
            function(err, client) {
                _db  = client;
                return callback(err);
            }
        );
    },

    getClient: function() {
        return _db
    },

    getLoginDb: function() {
        return _db.db("login");
    },

    getUsersDb: function() {
        return _db.db("users");
    },
}
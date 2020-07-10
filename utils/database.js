// ENiXZej3ZgPXXbM mongodb user password

const mongodb = require('mongodb');
const MongoCLient = mongodb.MongoClient;
let _db;

const mongoConnect = callback => {
    MongoCLient.connect('mongodb+srv://user1:ENiXZej3ZgPXXbM@cluster0.7utw6.mongodb.net/ShopX?retryWrites=true&w=majority',{ useUnifiedTopology: true })
    .then(Client => {
        console.log("database connected!");
        _db = Client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
    });
}
const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'no database found!';
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb;
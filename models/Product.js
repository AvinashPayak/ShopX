const getDb = require('../utils/database').getDb;
class Product {
    constructor(title, price, description, imageurl){
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageurl = imageurl;

    }
}
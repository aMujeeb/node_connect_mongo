const mongoose = require('mongoose');

const Product = require('./models/product');

const url = 'ijohirhterhterth';

mongoose.connect(url).then(() => {
    console.log('Connected');
}).catch(() => {
    console.log('Connection failed');
});

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const results = await createdProduct.save();

    res.json(results);
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();

    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
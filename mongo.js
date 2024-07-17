const mongoClient = require('mongodb').MongoClient;

const url = 'treterterte';


const createProduct = async (req, res, next) => {
    const body = req.body;
    const newProduct = {
        name : body.name,
        price : body.price
    };

    const client = new mongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);
    } catch (error){
        console.log(error);
        return res.json({ message: 'Could Not Connect to DB and store data' });
    }

    client.close();
    res.json(newProduct);
};

const getProduct = async (req, res, next) => {
    const client = new mongoClient(url);

    let products;

    try {
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
    } catch (error){
        console.log(error);
        return res.json({ message: 'Could Not Connect to DB and store data' });
    }

    client.close();
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
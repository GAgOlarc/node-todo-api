// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5b01a595b851d14eb2c37ec8')}).then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b01acf9b851d14eb2c37fbf')}).then(result => {
        console.log(JSON.stringify(result));
    }, err => {
        console.log(err);
    });

    db.collection('Users').deleteMany({name: 'Andrew'}).then(result => {
        console.log(result);
    }, err => {
        console.log(err);
    });

    db.close();
});
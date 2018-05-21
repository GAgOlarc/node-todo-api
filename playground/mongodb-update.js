// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // const collectionTodos = db.collection('Todos');
    const collectionUsers = db.collection('Users');

    // collectionTodos.find({ _id: new ObjectID("5b01988b8116a21c74a56ec7") }).toArray().then(res => {
    //     console.log(JSON.stringify(res));
    // }, err => {
    //     console.log(err);
    // });

    // collectionTodos.findOneAndUpdate(
    //     { _id: new ObjectID("5b01988b8116a21c74a56ec7") },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    // ).then(res => {
    //     console.log(JSON.stringify(res));
    // }, err => {
    //     console.log(err);
    // });

    collectionUsers.findOneAndUpdate(
        { _id: new ObjectID('5b027fcb2b06e0089c8f036c') },
        {
            $set: {
                name: 'Andrew'
            },
            $inc: {
                age: 1
            }
        },
        { returnOriginal: false }
    ).then(res => console.log(JSON.stringify(res)));

    db.close();
});
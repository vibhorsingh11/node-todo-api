// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c55905a77a718095cd22a9c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });
  //
  // db.collection('Todos').find().count().then((docs) => {
  //   console.log('Todos count: ${count}');
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('users').find({name:'Vibhor'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs));
  });

  // client.close();
})

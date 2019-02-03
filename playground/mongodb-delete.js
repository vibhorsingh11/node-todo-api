// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp')

// //deleteMany
//   db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
//     console.log(result);
//   });
//
// //deleteOne
//   db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
//     console.log(result);
//   });
//
// //findOneAndDelete
//   db.collection('Todos').findOneAndComplete({text:'Eat Lunch'}).then((result) => {
//     console.log(result);
//   });

  // db.collection('users').deleteMany({name: 'Luke'});

  db.collection('users').findOneAndDelete({"_id" : ObjectID("5c57345e8ac5ba370a345cff")}).then((results) => {
    console.log(JSON.stringify(results,undefined,2));
  });

  // client.close();
})

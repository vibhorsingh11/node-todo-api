var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text:{
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});

// var NewTodo = new Todo({
//   text: 'Cooking Dinner'
// });
//
// NewTodo.save().then((doc) => {
//   console.log('Saved Todo',doc);
// },(e) => {
//   console.log('Unable to save todo');
// });

var NewTodo = new Todo({
  text: 'Buy something to eat',
  completed: true,
  completedAt: 123
});

NewTodo.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
},(e) => {
  console.log('Unable to save todo',e);
});

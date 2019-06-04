const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text : {
        type: String
    },
    completed : {
        type: Boolean
    },
    completedAt : {
        type: Number
    }
});

var newTodo = new Todo({text : 'Go to Market',completed : true, completedAt: 123});

newTodo.save().then((res) =>{
    console.log('Done',res);
},(err) => {
    console.log('unable to save');
});
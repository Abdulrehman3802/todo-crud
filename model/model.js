const mongoose = require('mongoose')

const todoschema = new mongoose.Schema({
    TodoTitle: {
        type: String,
        required : [true,"Title is require"]
    },
    Subtitle: {
        type : String,
        default : "subtitle"
    },
    Check:{
        type : Boolean
    }

})

const Todo = mongoose.model('Todo',todoschema)

module.exports = Todo
const mongoose = require('mongoose')

const todoschema = new mongoose.Schema({
    TodoTitle: {
        type: String,
        required : [true,"Title is require"],
        unique: [true,"Title must be diffrent from other"]
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
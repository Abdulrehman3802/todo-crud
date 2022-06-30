const todocontroller = require('./Controller/TodoController')
const express = require('express')
const Todo = require('./model/model')
const app = express()

app.use(express.json())


app.get('/home',todocontroller.gethome)

app.post('/addtodo',todocontroller.addtodo)

app.get('/alltodos',todocontroller.getAll)

app.delete('/deletetodo/:id',todocontroller.delete)
app.patch('/updatetodo/:id',todocontroller.update)
app.get('/todocheck',todocontroller.checkTodo)
app.get('/todouncheck',todocontroller.uncheckTodo)

module.exports = app
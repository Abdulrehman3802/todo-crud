const todocontroller = require('./../Controller/TodoController')
const express = require ('express')

const todoroute = express.Router()

todoroute.route('/').get(todocontroller.gethome)

todoroute.route('/add').post(todocontroller.addtodo)

todoroute.route('/all').get(todocontroller.getAll)

todoroute.route('/delete/:id').delete(todocontroller.delete)
todoroute.route('/update/:id').patch(todocontroller.update)
todoroute.route('/check').get(todocontroller.checkTodo)
todoroute.route('/uncheck').get(todocontroller.uncheckTodo)

module.exports = todoroute
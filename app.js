const express = require('express')
const todoroute = require('./routers/todo_routes')

const app = express()

app.use(express.json())


app.use('/todo',todoroute)
app.use('/todo',todoroute)
app.use('/todo',todoroute)
app.use('/todo',todoroute)
app.use('/todo',todoroute)
app.use('/todo',todoroute)
app.use('/todo',todoroute)

module.exports = app
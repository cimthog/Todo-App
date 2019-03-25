const Router = require('express').Router()
const Todo = require('./Routes/todo')

Router.use('/todo', Todo)

module.exports = Router;
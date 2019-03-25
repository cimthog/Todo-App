const Router = require('express').Router()
const uuid = require('uuid')

//dummy data to be displayed 
let todos = [
    {
        id: uuid.v4(),
        title: "Lecture",
        description: "Class on Monday"
    },
    {
        id: uuid.v4(),
        title: "Meeting",
        description: "Call Engr. Dayo 8pm Monday"
    }
]//display dummy todo
Router.get('/all', (req,res) =>{
    res.json(todos)
})

//add todo route
Router.post('/add',(req, res) => {
    const {title, description} = req.body
    const newTodo = {
        id: uuid.v4(),
        title,
        description
      }

      todos.push(newTodo)
      
});

//todo delete route

Router.get('/delete',(req,res) => {
    const id = req.body
    todos.filter(todo =>todo.id !== id)
  
});

module.exports = Router
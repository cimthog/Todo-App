import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import uuid from 'uuid'

class Todo extends React.Component {
  state = {
    todos: [ ]
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todo/all')
   .then((response) => response.json())
   .then((responseJson) =>{
     this.setState({
        todos: responseJson
     });
   })
   }

  //delete todo

  deleteTodo = (id) =>{
      this.setState({todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]})
  }

  //add todo

  addTodo = (title, description) =>{
      const newTodo = {
        id: uuid.v4(),
        title,
        description
      }
      this.setState({todos: [...this.state.todos, newTodo]});
  }

render() {
  return (
      <>
        <AddTodo addTodo={this.addTodo} />
        <TodoItem todos = {this.state.todos} deleteTodo={this.deleteTodo}/>


      </>
    )
  }
}

export default Todo
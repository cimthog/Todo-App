import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
  render(){
    return this.props.todos.map((todo) => (
      <div className='col-lg-4' key={todo.id} style={{display:'inline-block'}}>
                <div className="card border-success mb-3" style={{maxWidth: "20rem"}}>
                  <div className="card-header">Todo <FontAwesomeIcon icon={faWindowClose} style={{color:"red", float:"right", cursor:'pointer'}} 
                  onClick={this.props.deleteTodo.bind(this, todo.id)}/></div>
                  <div className="card-body">
                      <h4 className="card-title">{todo.title}</h4>
                      <p className="card-text">{todo.description}</p>
                  </div>
                </div>
    </div>
    )); 
  }
}

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoItem

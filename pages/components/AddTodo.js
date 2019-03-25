import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class AddTodo extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.saveTodo = this.saveTodo.bind(this);
      this.state = {
        show: false,

        title: '',
        description: '',
      };
    }
  
  handleClose() {
    this.setState({ show: false });
  }
  
  handleShow() {
    this.setState({ show: true });
  }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    saveTodo(){
        this.handleClose();
        if(this.state.title !== '' && this.state.description !== ''){
            this.props.addTodo(this.state.title, this.state.description);
            this.setState({title:'', description:''})
        }else{
            alert('Invalid Input')
        }
    }
  
  
  render() {
    return (
        <>
  
          <div>
  
            <Button variant="primary" className=" mr-4" onClick={this.handleShow} style={{float:'right'}}>
            New Todo
            </Button>
  
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add a Todo Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="form-group">
                      <label class="col-form-label col-form-label-sm" for="inputSmall">Todo Title</label>
                      <input class="form-control form-control-sm" type="text" 
                      name="title" value= {this.state.title}
                      onChange={this.onChange}/>
                      <label for="exampleTextarea">Todo description</label>
                      <textarea class="form-control" id="exampleTextarea" rows="3"
                      name="description" value= {this.state.description}
                      onChange={this.onChange}/>
                    </div>
                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.saveTodo}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>
  
  
        </>
      )
    }
  }
  
  export default AddTodo
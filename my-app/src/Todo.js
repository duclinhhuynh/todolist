import './Todo.css';
import React from 'react'
class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data: props.data}
  }
  // completeTask = () => {
  //   console.log('todo complete', this.props.data.id);
  //   // this.setState({ done : true})
  //   this.props.completeTask(this.props.data.id)
  // }
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps', props);
    return {data : props.data}
  }
  render(){
    let checkDone = '';
    if (!this.props.done) {
      checkDone = (
        <img
          src="./asset/iconfinder_Symbol_-_Check_58687.png"
          alt="complete"
          width="25"
          style={{ cursor: "pointer" }}
          title="click by done"
          onClick={() => this.props.completeTask(this.props.data.id)}
        />
      );
    }
    return (
      <div className="Todo aligned">
          {checkDone}
        <img
                src ='./asset/iconfinder_f-cross_256_282471.png'
                alt='Add task'
                width= '15' style={{cursor: "pointer"}}
                title='click by add'
                // goij cha
                onClick={()=>this.props.deleteTask(this.props.data.id)}
              /> 
        &nbsp;&nbsp;
        <span className={this.state.data.done ? 'done' : ''}>
          {this.props.data.name}</span>
        <img
                src ='./asset/iconfinder_Draw_2290864.png'
                alt='Add task'
                width= '25' style={{cursor: "pointer"}}
                title='click by add'
              />
      </div>
    );
  }
}

export default Todo;

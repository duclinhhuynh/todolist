import './Todo.css';
import React from 'react'
class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = ''
  }

  render(){
    return (
      <div className="App">
        <img
                src ='./asset/iconfinder_Symbol_-_Check_58687.png'
                alt='Add task'
                width= '25' style={{cursor: "pointer"}}
                title='click by add'
                onClick={()=>this.props.completeTask(this.props.id)}
              /> 
        <img
                src ='./asset/iconfinder_f-cross_256_282471.png'
                alt='Add task'
                width= '15' style={{cursor: "pointer"}}
                title='click by add'
                // goij cha
                onClick={()=>this.props.deleteTask(this.props.id)}
              /> 
        <span >{this.props.value}</span>
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

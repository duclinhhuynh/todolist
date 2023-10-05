import './App.css';
import React from 'react'
import Todo from './Todo';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { taskName: '', tasks:[]};
  }
  myTaskChangeHandler = (event) => {
    this.setState({taskName: event.target.value});
  }
  show = (a) => {
    alert(a);
  }

  addTask = () => {
    if(this.state.taskName === ''){
      return;
    }
    const id = this.state.tasks.length;
    const name = this.state.taskName;
    this.state.tasks.push({id, name, done:false});
    this.setState({ taskName:'' });
    // this.show(this.state.taskName)
  }
  completeTask = (id) => {
    console.log('complete:', id);
    const tasks =  this.state.state;
    tasks.forEach(element => {
      if(element.id === id){
        element.done = true;
      }
    });
    console.log('task muon complete', tasks);
    this.setState({tasks})
  }
  deleteTask= (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id );
    console.log('saukhixoa', tasks);
    this.setState({ tasks});
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <h1>Todo list</h1>
            <div className='aligned'>
              <img
                src ='./asset/iconfinder_gnome-app-install_29240 (1).png'
                alt='Add task'
                width= '25' style={{cursor: "pointer"}}
                title='click by add'
                onClick={() => this.addTask("add task!")}
              />
              <input
               value={this.state.taskName}
               type='text' onChange={this.myTaskChangeHandler}></input>
            </div>
            <ul className='taskItem'>
              {this.state.tasks.map((value,index) => {
                  // return <li key={index}>{value}</li>
                  return <Todo id={value.id}
                   key ={index} 
                   value={value.name} 
                   deleteTask={this.deleteTask}
                   completeTask = {this.completeTask}
                   />
              })}
            </ul>
        </header>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { taskName: '', tasks:['task1', 'task2','task3']};
  }
  myTaskChangeHandler = (event) => {
    this.setState({taskName: event.target.value});
  }
  show = (a) => {
    alert(a);
  }

  addTask = () => {
    console.log('add task', this.state.taskName);
    if(this.state.taskName === ''){
      return;
    }
    this.state.tasks.push(this.state.taskName);
    this.setState({ taskName:'' });
  }
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
                  return <li key={index}>{value}</li>
              })}
            </ul>
        </header>
      </div>
    );
  }
}

export default App;

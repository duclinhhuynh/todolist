import './App.css';
import React from 'react'
import TodoList from './TodoList';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { taskName: '', tasks:[]};
  }
  
  render(){
    return (
      <div className='App'>
        <table border='1'>
          <thead>
            <tr>
              <th>Nhiem vu 1</th>
              <th>Nhiem vu 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <TodoList name='Doc sach'/>
              </td>
              <td>
              <TodoList name='Mua do'/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

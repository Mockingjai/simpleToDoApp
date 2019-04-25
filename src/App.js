import React , { Component }from 'react';
import TodoApp from './TodoApp/index';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="main">
         <TodoApp />
        </div>
    );
  }
}

export default App;

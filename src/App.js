import React from 'react';
import './App.css';
import ToList from './ToDoList'
class App extends React.Component{
  render() {
    return (
      <section className="App">
        <ToList/>
      </section>
    )
  }
}
export default App;

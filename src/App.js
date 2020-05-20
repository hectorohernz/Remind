import React from 'react';
import './App.css';
import ToList from './ToDoList'
class App extends React.Component{
  render() {
    return (
      <section className="App">
        <ToList/>
        <div className="contact">
          <a href="https://github.com/hectorohernz" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/hector-hernandez-383444196" target="_blank"><i className="fab fa-linkedin"></i></a>
        </div>
      </section>
    )
  }
}
export default App;

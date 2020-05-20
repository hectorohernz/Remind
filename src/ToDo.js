import React from 'react';
import './App.css';

class ToDo extends React.Component{
  render() {
    return (
      <div className="to-do">
          <h3>{this.props.task}</h3>
          <i className="fas fa-trash-alt deletebtn" onClick={this.props.removeItem}></i>
      </div>
    )
  }
}
export default ToDo;

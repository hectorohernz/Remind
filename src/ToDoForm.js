import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'; // Used For Id Key Prop

class ToDoForm extends React.Component{ // Inziliting A Class Conponent From React

constructor(props){ // Extending props to use
    super(props);
    this.state = { // Creating new state 
        item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
}

handleChange(evt){ // function that changes state in live time.
    this.setState({item: evt.target.value})
}

 handleSubmit(evt){ // So Adding a id before adding into the array also preventing a refresh and clearing state
     const newItem ={...this.state, id: uuidv4()};
     evt.preventDefault();
     this.props.createList(newItem);
     this.setState({item:''});
 };
 
  render() {

    return (
      <form className="to-do-form" onSubmit={this.handleSubmit}>
        <label htmlFor="item">Groceries Items</label>
        <input
          placeholder="Enter Item"
          type="text"
          id="item"
          name="item"
          value={this.state.item}
          onChange={this.handleChange}
          required
        />

        <button>Submit</button>
      </form>
    )
  }
}
export default ToDoForm;

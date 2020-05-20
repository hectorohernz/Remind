import React from 'react';
import './App.css';
import ToDo from './ToDo';
import Form from './ToDoForm';
class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[], pop:false
        }
        this.create = this.create.bind(this);
        this.popUp = this.popUp.bind(this);
        this.removePop = this.removePop.bind(this);
    }

    create(userItem){
        this.setState({
            list:[...this.state.list, userItem]
        })
        this.removePop();
    }

    removeItem(id){
        this.setState({
            list: this.state.list.filter( el => el.id !== id)
        })
    }

    popUp(){
        this.setState({
            pop: true
        })
    }
    removePop(){
        this.setState({
            pop: false
        })
    }
  render() {
      const doList = this.state.list.map( el => (
            <ToDo 
                task={el.item}
                removeItem={ () => this.removeItem(el.id)}
                id={el.id}
                key={el.id}
            />
      ))
    return (
      <section className="to-list">
        <h1>Remind</h1>

        <button onClick={this.popUp} className="to-list-btn">Add New Grocery Items</button>

        <div className={this.state.pop ?  'form-container' : 'form-container-none'} >
             <div className="form-parent">
                <Form createList={this.create}/>
             </div>
        </div>

        <section className="to-do-feed">
            <div className="list-container">
                {doList}
            </div>
        </section>
      </section>
    )
  }
}

export default ToDoList;

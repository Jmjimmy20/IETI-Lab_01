import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' , priority: "", dueDate: ''}; // se a;adio priority y dueDate
      this.handleChange = this.handleChange.bind(this);
      this.handlePriority = this.handlePriority.bind(this); // se llama la funcion creada
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Welcome, what needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br/>
            <label htmlFor="priority-todo">
              what is the priority?
            </label>
            <input
              id="new-todo"
              onChange={this.handlePriority}
              value={this.state.priority}
            />
            <br/>
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
          <TodoList items={this.state.items}/>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        //agregamos la asignacion de priority y dueDate
        priority: this.state.priority,
        dueDate: new Date(),
        //----------------
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }

    handlePriority(e){ // se agrego esta funcion
        this.setState({ priority: e.target.value });
    }

  }
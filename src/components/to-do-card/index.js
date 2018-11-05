import React, { Component } from 'react'
import AddTodo from '../AddTodo'
import ListTodo from '../ListTodo'
import './style.css'

class ToDoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      alert: false
    }
  }
  // delete todo
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  // add todo
  addTodo = (todo) => {
    if (todo.content.length >= 3) {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo]
      this.setState({
        todos: todos,
        alert: false
      })
    } else {
      this.setState({
        alert: true
      })
    }
  }
  // check to-do
  check = (todo) => {
    todo.check = !todo.check
    this.setState({
      todo
    })
  }
  render() {
    return (
      <section className = "to-do-card">
        <div className = "card">
          <header>
            <h5 className = "card-header">app</h5>
          </header>
          <article>
            <div className = "card-body">
              <AddTodo addTodo = { this.addTodo }/>
              {/* mensagem de error para campos com menos de 3 caractres */}
              { this.state.alert ? <span className = "alert alert-warning alert-dismissible msg">
                mínimo três (3) caracteres 
                <button type="button" onClick = { () => this.setState({ alert: false })} className = "close" data-dismiss = "alert" aria-label="Close">
                  <span aria-hidden = "true">&times;</span>
                </button>
              </span> : null }
              <ListTodo todoList = { this.state.todos } deleteTodo = { this.deleteTodo }  check = { this.check }/>
            </div>
          </article>
          <footer>
          <div className = "card-footer text-muted text-center">
            <i className = "far fa-list-alt"></i> { this.state.todos.length }
          </div>
          </footer>
        </div>
      </section>
    )
  }
}

export default ToDoCard
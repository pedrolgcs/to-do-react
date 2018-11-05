import React, { Component } from 'react'
import './style.css'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      check: false
    }
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div className = "add-form">
        <form onSubmit = { this.handleSubmit } className = "form-inline">
          <div className = "form-group">
            <input onChange = { this.handleChange } value = { this.state.content } type="text" id = "content" className = "form-control" placeholder="todo..." />
          </div>
          <div className = "form-group mx-sm-3">
            <button type = "button" onClick = { this.handleSubmit } className = "btn btn-outline-success">+</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo
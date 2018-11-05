import React from 'react'
import './style.css'

const ListTodo = ({todoList, deleteTodo, check}) => {
  // return list to-do
  const listTodo = todoList.map((todo) => (
    <li key = { todo.id } onClick = { () => check(todo) } className = "list-group-item d-flex justify-content-between align-items-center">
      <span className = { todo.check ? 'checked' : 'on' }> { todo.content } </span>
      <span className = { todo.check ? null : 'hidden' } onClick = { () => deleteTodo(todo.id) }> <i className = "far fa-trash-alt"></i> </span>
    </li>
  ))
  // return component
  return (
    <ul className = "list-group" >
      { listTodo }
    </ul>
  )
}

export default ListTodo
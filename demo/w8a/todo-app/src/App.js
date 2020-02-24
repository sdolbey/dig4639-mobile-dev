import React from 'react';
import logo from './logo.svg';
import './App.css';

let todoList = [
  {
    content:'Task 1', priority: 2, completed: true
  },
  {
    content: 'Task 2', priority: 1, completed: true
  },
  {
    content: 'Task 3', priority: 3, completed: false
  }
]

function TodoItem(props) {
  return <p>{props.content}</p>
}

function App() {
  // Filters list by completed
  const todoListFiltered = todoList.filter((value) => value.completed)
  // Maps items from the filtered array
  let todoArray = todoListFiltered.map(
    (value) => <TodoItem priority={value.priority} content={value.content} completed={value.completed} />
  )
  /*
  const todoArray = [
    <TodoItem content="Item 1" />,
    <TodoItem content="Item 2" />,
    <TodoItem content="Item 3" />
  ]*/
  return (
    <div>
      Henlo you STINKY birb
      {todoArray}
    </div>
  );
}

export default App;

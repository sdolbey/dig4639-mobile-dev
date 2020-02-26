import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todoList.json';

// Filter the list based on a checkbox
// Add an input form to allow creating TODO items with content and priority
// Have each item be able to remove itself using a function passed in from the parent

// e on line 20 stands for event

function TodoItem(props) {
  return <p className='card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    // hideCompletedItems won't conflict with the HTML stuff on line 28
    this.state = {
      todoList,
      hideCompletedItems:false
    }
    this.currentID = 4;
  }

  addTask(e) {
    console.log(this.refs.taskContent.value);
    let todoList = this.state.todoList;
    todoList.push(
      {"id": this.currentID, "content":this.refs.taskContent.value, "priority": 2, "completed": false}
    )
    this.currentID++;
    this.setState({todoList:todoList});
  }

  removeTask(id) {
    console.log(id)
    let todoList = this.state.todoList
    console.log(todoList)
    todoList = todoList.filter((v) => v.id !== id)
    console.log(todoList)
    this.setState({todoList})
  }

  render() {
    return (
      <>
        <input type="text" ref="taskContent" />
        <input type="button" value="Add task" onClick={(e) => this.addTask(e)} />
        <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems" name="hideCompletedItems" value="hideCompletedItems" onChange={(e) => this.setState({ hideCompletedItems: e.target.checked })} />
        <label htmlFor="hideCompletedItems">Hide Completed Items</label><br></br>

        { ((this.state.hideCompletedItems) ? this.state.todoList.filter((v) => !v.completed) : this.state.todoList)
        .map((v) => <TodoItem key={v.id} removeTask={(id) => this.removeTask(id)} key={v.id} content={v.content} priority={v.priority} completed={v.completed} />)}
      </>
    ) 
  }
}

function App(props) {
  return (
    <TodoList />
  )

  /*
  // Filters list by completed
  const todoListFiltered = todoList.filter((value) => !value.completed)
  // Maps items from the filtered array
  let todoArray = todoListFiltered.map(
    (value) => <TodoItem priority={value.priority} content={value.content} completed={value.completed} />
  )

  return (
    <div>
      Henlo you STINKY birb
      {todoArray}
    </div>
  );
  */
}

export default App;

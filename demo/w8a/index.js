const myArray = [2, 5, 8, 20, 18]
console.log(myArray)

// Traditional for loop
let sum = 0;
for (let index = 0; index < myArray.length; index++) {
  sum += myArray[index]
}
console.log(sum)

// Accumulate sum using for of
sum = 0;
for (const item of myArray) {
  sum += item
}
console.log(sum)


// Divide each element by two
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  myArray[index] = myArray[index] / 2
}
console.log('after', myArray)

// Putting data into a new array
const newArray = []
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  newArray.push(myArray[index] / 2)
}
console.log('after', newArray, 'original', myArray)

// Using map with a function
function addTwo(value, index, array) {
  return value + 2
}

const resultArray = myArray.map(addTwo)
console.log(resultArray)

// Mapping with an arrow function
const arrFun = (value) => value + 2
const resultArray2 = myArray.map(arrFun)

// As an all-in-one arrow function
const resultArray3 = myArray.map((value) => value + 2)
console.log(resultArray)

// Print each element of the array in a paragraph tag
function printItems (arrayInput) {
  const htmlArray = arrayInput.map((value) => `<p>${value}</p>`)
  console.log(htmlArray)
  return htmlArray
}

printItems(myArray)

// Sort
function compareNumbers (a, b) {
  return a - b
}
printItems(myArray.sort(compareNumbers))

// As an arrow method
printItems(myArray.sort((a, b) => a - b))


// Make a Todo List
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

console.log(todoList)

// Print Todo List with formatting
function printTodo (arrayInput) {
  const htmlArray = arrayInput.map((value) => `<p>${value.completed} ? 'class="done"' : ''}>${value.priority}: ${value.content}</p>`)
  return htmlArray
}

console.log(printTodo(todoList).join('\n') + '\n')

// Only showing incomplete tasks
let filteredArray = []
for (item of todoList) {
  if (!item.completed) {
    filteredArray.push(item)
  }
}

console.log(printTodo(filteredArray).join('\n'))

// Same thing but with an evaluation function
function evalItem (item) {
  return !item.completed
}

console.log(printTodo(todoList.filter(evalItem)).join('\n'))

// Showing complete tasks without the for loop
console.log(printTodo(todoList.filter((item) => item.completed)))
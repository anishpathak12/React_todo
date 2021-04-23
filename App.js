import { useState } from 'react';
import './App.css';
//import Buttons from './buttons';


// state = {
//   inputValue: "",
//   todos: []
//  }
//  handleOnChange = (event) => {
//    const inputValue = event.target.value;
//    this.setState({inputValue})
//  }
//  handleOnClick = event => {
//   const {todos, inputValue} = this.state;
//  todos.push(inputValue)
//  this.setState({todos}) 
//  }
 
//  <input onChange={this.handleOnChange} value={this.state.inputValue}/>
//  <button onClick={this.handleOnClick}>Add</button>

function App() {
  const [inputValue, setInputValue] = useState('');
  const[todos, setTodos] = useState([]);
  
//  state = {
//     todos = {
//       value: []
//     }
//   }
 
  const handleChange = (event) => {
    const Value = event.target.value;
    setInputValue(Value)
};

  function handleClick() {
    const array = todos;
    if (inputValue) {
    array.push(inputValue);
    console.log(array);
    setTodos(array);
    // this.state.todos.id = math.random();
    // setInputValue('')
    }
  }

  function handleDelete(e) {
    console.log(e.target);
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === inputValue) {
        index = i;
      }
    }
    if(index!= -1){
     todos.splice(index, 1);
     console.log(todos);
    }
    else{
      alert('No item found');
    }
  }

  function handleUpdate() {
    let index = -1;
    for (let i = 0; i<todos.length; i++){
      if (todos[i] === inputValue){
        index = i;
      }
    }
    if(index != -1){
    let newTodo = prompt('Enter new todo',);
    todos.splice(index,1,newTodo);
    console.log(todos);
    }
    else{
      alert('Item not found');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo-List</h1>

        <input class = 'msg' onChange={handleChange} type="textarea" placeholder="Type Task" name="username" />
        <button class = 'submit' onClick={handleClick}>Submit</button>
        {/* <button class = 'delete' onClick = {handleDelete}>Delete</button> */}
        <button class = 'update' onClick = {handleUpdate}>Update</button>
       {/* {// <Buttons />}                                                             Props Error. */}
               
        
       {todos.map(element =>(
         <div>                                                                { /* Trial for Delete option.*/}
         <p>{element}
         <button class = 'delete' onClick = {handleDelete}>Delete</button></p>
         {/* { let ani = this.element; }                                        Why this error */}
         </div>
        
       ))}

      {/* { for (let i = 0; i <= todos.length; i++)                             why For is not working.
        {
        <p>{todos[i]}</p>
        }
      } */}

      
      {/* <p> {for (let i=0; i<name.length; i++){
        name}
      }
      </p> */}
       
      </header>
    </div>
  );
}

export default App;
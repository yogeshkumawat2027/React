import { useState,useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos,setTodos] = useState([{task : "simple task" ,id:uuidv4(),isDone : false}]);
    let [newTodo,setNewTodo] = useState("");
    let [tasks,setTasks] = useState([]);
   
   
   let addNewTask = () =>{
    
    setTodos((prevtodos)=>{
        
        return [...prevtodos,{task :newTodo,id :uuidv4(),isDone : false}];
    });
    setNewTodo("");
    
   }
   let updateTodoValue = (event) =>{
    setNewTodo((newTodo)=>{
        return (newTodo,event.target.value);
    })

   }

   let deleteTodo = (id)=>{
    
    setTodos((prevtodos)=>{
        return prevtodos.filter((prevtodos)=> prevtodos.id != id)
    });
  }

  let markAsDoneAll = () =>{
    
    setTodos((prevtodos)=>(
        prevtodos.map((todo)=>{
            return {
                ...todo,
                isDone : true
            };
        })
    ));
  };
  let markAsDone = (id) =>{
    
    setTodos((prevtodos)=>(
        prevtodos.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo,
                    isDone :true
                };
            }
            else{
                return todo;
            }
          
        })
    ));
  };

    return(
    <div>
        <h3>Todo List</h3>
         <br />
         <br />
        <input type="text" placeholder="Add task" value={newTodo}  onChange={updateTodoValue}/>  &nbsp; &nbsp; &nbsp;
        <button onClick={addNewTask}>Add</button>
        <br /> <br />
        
        <ul style={{ listStyle: "disc"}}>
            {todos.map((todo) => (
           <li key={todo.id} style={{ display: "list-item" }}> 
             <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
               <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                 {todo.task}
              </span>
              <button
                   onClick={() => deleteTodo(todo.id)}
                   className="buttons"
                   style={{ backgroundColor: "red" }}
              >
              Delete
            </button>
           <button onClick={() => markAsDone(todo.id)} className="buttons">
           Mark As Done
           </button>
           <br /><br />
        </div>
    </li>
  ))}
</ul>

        <br />
        <button onClick={markAsDoneAll}>mark As Done All</button>
    </div>
    );
}
import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoCard from './todoCard';

function App() {

const [todoItem, setTodoItem] = useState({
  task:"",
  priority:"",
})

const [todoList, setTodoList] = useState([{
  task: "Learn ReactJs & complete the assignments.",
  priority: "High"
},
{
  task: "Learn AWS",
  priority: "Medium"
},
{
  task: "Learn how to use Figma",
  priority: "Low"
},])

useEffect(()=>{
  if(todoList.length == 0)return;
localStorage.setItem("todoList", JSON.stringify(todoList))
},[todoList]);

useEffect(()=>{
  const listFromLS = JSON.parse (localStorage.getItem ("todoList") || "[]");
  setTodoList(listFromLS)
},[]);


  return (
    <div>
    <div className='relative'>
    <h1 className='text-3xl font-semibold text-center m-5'>TODO LIST</h1>
    </div>
    <div className='flex justify-center'>
    <input type="text" 
    placeholder='Add your task or note here' 
    className='border
     border-gray-400
    outline-none
    w-1/2
    py-4 px-4 
    rounded-lg shadow-lg
    '
    onChange={(e)=>{
      setTodoItem({
        ...todoItem,
        task: e.target.value
      })}}
      value={todoItem.task}/>

    <select className='ml-5 border 
     border-gray-400
    outline-none
    rounded-lg shadow-lg
    px-4 pr-2 cursor-pointer'
    onChange={(e)=>{
      setTodoItem({
        ...todoItem,
        priority: e.target.value
      })
    }}
    value={todoItem.priority}>
     <option value={""}>Select Priority</option>
    <option value={"High"}>High</option>
    <option value={"Medium"}>Medium</option>
    <option value={"Low"}>Low</option>
    </select>
   <button className='border ml-5 px-8
    border-gray-400
    outline-none
    rounded-lg shadow-lg
    bg-blue-400
    hover:bg-blue-500
    cursor-pointer'
    onClick={()=>
    {setTodoList([todoItem, ...todoList]);
      setTodoItem({
        task:"",
        priority:"",
      })
    }
    }>
    Add</button>
    </div>
    <div>
    {todoList.map((taskItem, index)=>{
      const { task , priority} = taskItem;
      
      return(
       <TodoCard 
       key={index}
       task={task} 
       priority={priority}/>
      );

    })}
    </div>
    </div>
    
  )
}

export default App;

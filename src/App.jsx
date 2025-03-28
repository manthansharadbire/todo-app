import React, { useEffect } from 'react';
import { useState } from 'react';
import CardTodo from './CardTodo';

import toast, {Toaster} from 'react-hot-toast';

function App() {
const [todoItem, setTodoItem] = useState({
  task:"",
  priority:"",
})

const [todoList, setTodoList] = useState([]);
const[selectedTab, setSelectedTab] = useState("All");

useEffect(() => {
if (todoList.length == 0) return;
localStorage.setItem("todoList", JSON.stringify(todoList));
}, [todoList]);


useEffect(() => {
const listFromLS = JSON.parse(localStorage.getItem("todoList") || "[]");
setTodoList(listFromLS);
}, []);


const onDelete = (index)=>{
const listAfterDeletion = todoList.filter((_,i)=> i!==index);
setTodoList(listAfterDeletion);
toast.success("Task deleted successfully");
};


return (
  <div>
  <div className=''>
  <h1 className='text-sm md:text-3xl font-semibold text-center m-5'>TODO LIST</h1>
  </div>
  <div className='flex justify-center'>
  <input type="text" 
  placeholder='Add your task' 
  className='border
   border-gray-400
  outline-none
  w-[140px] md:w-1/2
  py-2 md:py-4 px-4 
  rounded-lg shadow-lg 
    '
  onChange={(e)=>{
  setTodoItem({
  ...todoItem,
  task: e.target.value
  })}}
  value={todoItem.task}/>

  <select className='ml-1 md:ml-4 border 
   border-gray-400
  outline-none
  rounded-lg shadow-lg
  px-1 md:px-4 pr-1 cursor-pointer'
  onChange={(e)=>{
  setTodoItem({
  ...todoItem,
  priority: e.target.value
  })
  }}
  value={todoItem.priority}>
    <option value={""}>Priority</option>
    <option value={"High"}>High</option>
    <option value={"Medium"}>Medium</option>
    <option value={"Low"}>Low</option>
    </select>
   <button className='border ml-1 md:ml-4 px-3 md:px-8
    border-gray-400
    outline-none
    rounded-lg shadow-lg
    bg-blue-400
    hover:bg-blue-500
    cursor-pointe text-white'

    onClick={()=>
    {
    if(!todoItem.task){
    toast.error("Please enter task");
    return;
      }
      
    if(!todoItem.priority){
    toast.error("Please select priority");
    return;
    }

      
    setTodoList([todoItem, ...todoList]);
    setTodoItem({
    task:"",
    priority:"",
    });
    toast.success("Task added successfully")
    }
    }>
    Add</button>
    </div>
    <div className='justify-evenly m-5 flex border-b-2 border-b-gray-400 '>
      {["All", "High", "Medium", "Low"].map((tab, i)=>{
   return (
  <span className={` block w-[60px] md:w-[100px] h-[30px] md:h-[40px] text-center p-2 md:p-2 rounded-t-xl  cursor-pointer text-xs md:text-xl
    ${
    tab == selectedTab ? " bg-blue-400" : "bg-gray-300"
  }`}
   key={i}
   onClick={()=>setSelectedTab(tab)}>
    {tab}
    </span>
);
  })}
  </div>
  <div>
  {todoList.map((taskItem, index) => {
  const { task, priority } = taskItem;

  if(selectedTab != "All" &&  priority!= selectedTab){
  return null;
  }
 return (
  <CardTodo
  key={index}
  index={index}
  task={task}
  priority={priority}
  onDelete={onDelete}
  />
  );
  })}
</div>

<Toaster/>
</div> 
  )
}

export default App;

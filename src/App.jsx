import React from 'react'

function App() {
  return (
    <div>
    <div>
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
    '/>
    <select className='ml-5 border 
     border-gray-400
    outline-none
    rounded-lg shadow-lg
    px-4 pr-2'>
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
    </select>
   <button className='border ml-5 px-8
    border-gray-400
    outline-none
    rounded-lg shadow-lg
    bg-blue-400
    hover:bg-blue-500'>
    Add</button>
    </div>
    </div>
    
  )
}

export default App;

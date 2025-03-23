import React from 'react'
import {Search} from 'lucide-react';

function App() {
  return (
    <div>
    <div>
    <h1 className='text-3xl font-semibold text-center m-10'>TODO LIST</h1>
    </div>
    <div className='flex justify-center'>
    <input type="text" 
    placeholder='Search note here' 
    className='border border-gray-400
    outline-none
    m-auto block
    py-4 px-4 w-1/2
    rounded-lg shadow-lg'/>
    <div>
    <button className='border
     border-gray-300 
     absolute right-60 
     px-9 p-4 bg-blue-400
     text-white rounded-lg shadow-lg'>
    Search</button>
    </div>
    </div>
    </div>
  )
}

export default App

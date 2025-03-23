import React from 'react'

function App() {
  return (
    <div>
    <div>
    <h1 className='text-3xl font-semibold text-center m-10'>TODO LIST</h1>
    </div>
    <div>
    <input type="text" 
    placeholder='Search note here' 
    className='border border-gray-400
    outline-none
    m-auto block
    py-4 px-4 w-1/3'/>  
    </div>
    </div>
  )
}

export default App

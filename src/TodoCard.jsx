import React from 'react'

const TASK_PRIORITY_CLASSES = {
    High:"border-t-4  border-t-green-700",
    Medium:"border-t-2  border-t-yellow-400",
    Low:"border-t  border-t-red-700",
};

function TodoCard({task, priority}) {
  return (
    <div className={`relative bg-gray-300 m-5 border border-gray-400 rounded-lg shadow-lg py-4 pl-7
    ${TASK_PRIORITY_CLASSES [priority]}`}>
    <h1 className='text-2xl'>{task}</h1>
    <p className=' top-5 right-9 border border-gray-400 p-2'>{priority}</p>
    </div>
  )
}

export default TodoCard;
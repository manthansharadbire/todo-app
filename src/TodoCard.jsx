import React from 'react'

const TASK_PRIORITY_CLASSES = {
    High:"border-t-4  border-t-green-700",
    Medium:"border-t-4  border-t-yellow-400",
    Low:"border-t-4  border-t-red-700",
};

const BADGE_CLASSES = {
    High:"border-4  border-green-700",
    Medium:"border-4  border-yellow-400",
    Low:"border-4  border-red-700",
}
function TodoCard({task, priority, index, onDelete}) {
  return (
    <div className={`relative bg-gray-200 m-5 border border-gray-400 rounded-full shadow-lg py-4 pl-7
    ${TASK_PRIORITY_CLASSES [priority]}`}>
    <h1 className='text-2xl'>{task}</h1>
    <button
    onClick={()=>{
        onDelete(index);
    }}>Delete</button>
    <p className={` absolute top-5 right-11 rounded-full border border-gray-400 block w-[100px] text-center
        ${BADGE_CLASSES[priority]}`}>{priority}</p>
    </div>
  )
}

export default TodoCard;
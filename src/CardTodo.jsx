import React from 'react';
import { Trash2} from 'lucide-react';

const TASK_PRIORITY_CLASSES = {
    High:"border-l-[15px] border-l-green-700",
    Medium:"border-l-[15px] border-l-yellow-600",
    Low:"border-l-[15px] border-l-slate-300",
};

const BADGE_CLASSES = {
    High:"  border-green-700 bg-green-700",
    Medium:" border-yellow-600 bg-yellow-600",
    Low:" border-slate-400 bg-slate-400",
}
function CardTodo({task, priority, index, onDelete}) {
  return (
    <div className={`relative bg-gray-100 m-9 rounded-lg shadow-lg py-4 pl-7
    ${TASK_PRIORITY_CLASSES [priority]}`}>
    <h1 className='text-sm md:text-2xl '>{task}</h1>
        <Trash2
    onClick={()=>{
        onDelete(index);
    }} className='text-red-700 cursor-pointer absolute  top-4 md:top-5  right-3 md:right-5 h-5 md:h-7'/>
    <p className={` absolute left-[29px] md:right-[70px] bottom-[52px] md:bottom-[64px] rounded-t-lg border-b-0 border-t-400 block 
    w-[50px] md:w-[100px] h-6 text-xs md:text-sm p-1
    text-center text-white
        ${BADGE_CLASSES[priority]}`}>{priority}</p>
    </div>
  )
}

export default CardTodo;
import axios from "axios";
import { useState } from "react";
function Content({items,setItems,item,setUpdate}) {

  const handleBtn=()=>{
      setUpdate(item._id);
  }

  const handleDelete = async (id) => {
  const prev = items;
  setItems(items.filter(item => item._id !== id));

  try {
    await axios.delete(`http://localhost:4000/crud/delete/${id}`);
  } catch (e) {
    setItems(prev); // rollback
  }
};

  return (
    <div className='flex mt-10'>
      <div className='basis-1/5'> </div>
      <div className='basis-3/5 bg-white min-h-60 rounded-[8px] flex  hover:shadow-xl pt-6'>
        <div className="flex-1/25"></div>
        <div className="flex-23/25 flex-col">
          <div className="flex">
            <div className="flex-11/12 font-bold text-2xl min-h-10">{item.title}</div>
            <div className="flex-1/12 flex">
              <h1 onClick={()=>handleBtn(item._id)} className="font-bold hover:shadow hover:bg-blue-100 text-center pl-2 h-7 hover:text-blue-400 cursor-pointer"><i class="fa-regular fa-pen-to-square mr-2"></i></h1>
              <h1 onClick={()=>handleDelete(item._id)} className="w-8 text-center hover:shadow hover:bg-red-100 pl-2 h-7 hover:text-red-600 pr-2 cursor-pointer">X</h1>
            </div>
          </div>
          <div className="mt-10 text-gray-500 min-h-15"> {item.content}
          </div>
          <div className="mt-5">
            <hr className="text-blue-100" />
          </div>
          <div className="flex mt-5">
            <h1 className=""><i class="fa-regular fa-calendar text-blue-300"></i></h1>
            <h1 className="text-gray-400 ml-2">Created : {new Date(item.createdAt).toLocaleString()} {new Date(item.updatedAt).getTime() !== new Date(item.createdAt).getTime() && (
  <spain className="ml-10">Updated: {new Date(item.updatedAt).toLocaleString()}</spain>
)}</h1>
          </div>
          <div className="min-h-4"></div>
        </div>
        <div className="flex-1/25"></div>
      </div>
      <div className='basis-1/5'> </div>
    </div>
  )
}

export default Content;

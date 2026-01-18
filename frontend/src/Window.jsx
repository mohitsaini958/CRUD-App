import { useEffect, useState } from 'react';
import Content from './content'
import Form from './Form';
import axios from 'axios';
import UpdateForm from './UpdateForm';

function Window(){
    const [view,setView]=useState(false);
    const [items,setItems]=useState([]);
     const [update,setUpdate]=useState(null);
      useEffect(() => {
    axios.get("http://localhost:4000/crud")
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const refreshItems = async () => {
    try {
        const res = await axios.get("http://localhost:4000/crud");
        setItems(res.data);
    } catch (error) {
        console.error("Error refreshing items:", error);
    }
};
  
    return(<>
         <div className='bg-gradient-to-b from-blue-100 to-white w-screen h-screen'>
        <div>
          <div className='flex pt-10'>
            <div className='basis-1/5'> </div>
            <div className='basis-3/5 flex'>
              <div className='basis-4/5'>
                <h1 className='text-blue-600 text-2xl font-bold'>My Notes</h1>
                <h1 className='mt-2 text-[#6c6f73]'>Create, edit, and organize your notes</h1>
              </div>
              <div className='basis-1/5'>
                <button className='bg-blue-600 text-white rounded-[8px] w-44 h-10 hover:shadow-xl cursor-pointer' onClick={()=>setView(true)}>+ New Note</button>
              </div>
            </div>
            <div className='basis-1/5'>
            </div>
          </div>
          <div>
        {items.map((item)=>{
        if(update==item._id)return <UpdateForm setItems={items} item={item} setUpdate={setUpdate} refreshItems={refreshItems}/>  
        else return <Content setUpdate={setUpdate} items={items} setItems={setItems} item={item}/>
        })}</div>
        </div>
      </div>
      {view && <Form view={view} setView={setView} items={items} setItems={setItems}/>}
      </>
    )
}


export default Window;
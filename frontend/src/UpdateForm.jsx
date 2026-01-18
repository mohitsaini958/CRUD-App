import { useEffect, useState } from "react";
import axios from "axios";

function UpdateForm({setUpdate, item, items, setItems,refreshItems }) {
    const [data, setData] = useState({
            title:item.title,
            content:item.content,
        });
     const { title, content } = data;
    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const x = await axios.put(
                `http://localhost:4000/crud/update/${item._id}`,
                {
                    ...data,
                }
            );
            if (x.data) {
                 setUpdate(null);
                 await refreshItems();
                handleSuccess("Success");
            } else {
                handleError("error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex mt-10'>
            <div className='basis-1/5'> </div>
            <div className='basis-3/5 bg-white min-h-60 rounded-[8px] flex  hover:shadow-xl pt-6'>
                <div className="flex-1/25"></div>
                <div className="flex-23/25 flex-col">
                    <form onSubmit={handleForm}>
                        <div className="flex">
                            <div className="flex-11/12 min-h-10">
                                <input
                                    value={title} name="title"
                                    type="text"
                                    className="bg-gray-100 w-full border border-gray-200 focus:border-gray-400 outline-none px-3 py-2 rounded"
                                    onChange={(e) => setData({ ...data, title: e.target.value })}
                                    />
    
                            </div>
                        </div>
                        <div className="mt-10 min-h-15">
                            <input
                                value={content} name="content"
                                type="text"
                                className="bg-gray-100 w-full min-h-15 border border-gray-200 focus:border-gray-400 outline-none px-3 py-2 rounded"
                               onChange={(e) => setData({ ...data, content: e.target.value })}
                            />

                        </div>
                        <div className="flex mt-5 ">
                            <button onClick={()=>setUpdate(null)} type="button" className="border mr-4 w-20 rounded-[8px] cursor-pointer">Cancel</button>
                            <button type="submit" className="bg-blue-500 text-white w-25 h-8 rounded-[8px] cursor-pointer"><i class="fa-regular fa-floppy-disk"></i> Save</button>
                        </div>
                        <div className="min-h-4"></div></form>
                </div>
                <div className="flex-1/25"></div>
            </div>
            <div className='basis-1/5'> </div>
        </div>
    )
}

export default UpdateForm
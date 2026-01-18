import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Form({ view, setView, items, setItems }) {
    const [data, setData] = useState({
        title: "",
        content: "",
    });
    const [k,setK]=useState(false);
    const { title, content } = data;
    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const x = await axios.post(
                "http://localhost:4000/crud/post",
                {
                    ...data,
                }
            );
             axios.get("http://localhost:4000/crud")
                  .then(res => setItems(res.data))
                  .catch(err => console.log(err));
            setData({ title: "", content: "" });
            if (x.data) {
                 setView(false);
                setK(true);
                handleSuccess("Success");
            } else {
                handleError("error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
            <div className="bg-white w-140 h-80 rounded-[8px]">
                <div className="pl-6 pt-5">
                    <h1 className="text-blue-600 font-bold text-[23px] flex">Create New Note
                        <p onClick={() => setView(false)} className="text-[#6c6f73] text-[15px] ml-80 cursor-pointer">X</p>
                    </h1>
                    <h2 className="text-[#6c6f73]">Add a new note to your collection</h2>
                    <form className="mt-4" onSubmit={handleForm}>
                        <p>Title</p>
                        <input value={title} name="title" type="text" placeholder="Enter note title.." className="bg-[#dcdfe3] w-120 h-7 rounded-[8px] pl-7" onChange={(e) => setData({ ...data, title: e.target.value })} />
                        <p className="mt-3">Content</p>
                        <input value={content} name="content" type="text" placeholder="Write your note here.." className="bg-[#dcdfe3] w-120 h-16 rounded-[8px] pb-5 pl-7 " onChange={(e) => setData({ ...data, content: e.target.value })} />
                        <div className="mt-5 ml-65  flex">
                            <button onClick={() => setView(false)} type="button" className="border mr-4 w-20 rounded-[8px] cursor-pointer">Cancel</button>
                            <button type="Submit" className="bg-blue-500 text-white w-30 h-8 rounded-[8px] cursor-pointer">+ Add Note</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
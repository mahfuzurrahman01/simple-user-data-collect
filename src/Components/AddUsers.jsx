import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Addusers() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged === true){
                toast.success("User added successfully!", {
                    position: toast.POSITION.TOP_CENTER
                  });
            }
        })
    };

    return (
        <div className=" w-1/3 mx-auto my-32 p-20 border-2 bg-violet-100 shadow-2xl shadow-gray-500 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full mx-auto'>
                <input className="text-gray-500 font-semibold bg-gray-200 rounded-lg px-3 py-5"  {...register("name")} placeholder='your name' />

                <input type='email' className="text-gray-500 font-semibold bg-gray-200 rounded-lg px-3 py-5"  {...register("email")} placeholder='your email' />

                <select className="text-gray-500 font-semibold bg-gray-200 rounded-lg px-3 py-5" {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input className="text-white bg-violet-400 rounded py-4 mt-4 px-4" type="submit" />
            </form>
        </div>
    );
}
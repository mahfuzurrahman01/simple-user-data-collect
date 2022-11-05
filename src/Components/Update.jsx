import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const stored = useLoaderData()
    const [user, setUser] = useState(stored)
    console.log(stored)




    const  handleSubmit = (event ) => {
         event.preventDefault()

        //update
        console.log(stored)
        console.log(user)
        fetch(`http://localhost:5000/users/${stored._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    const changeHandler = event => {
        event.preventDefault()
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div className=" w-1/3 mx-auto my-32 p-20 border-2 bg-violet-100 shadow-2xl shadow-gray-500 rounded-lg">
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full mx-auto'>
                <p className='text-lg font-semibold text-gray-400 border-b-2 pb-1 border-violet-400'>Update info: </p>
                <input onChange={changeHandler} defaultValue={stored.name} className="text-gray-500 font-semibold bg-gray-200 rounded-lg px-3 py-5" name='name' placeholder='your name' />

                <input onChange={changeHandler} defaultValue={stored.email} type='email' name='email' className="text-gray-500 font-semibold bg-gray-200 rounded-lg px-3 py-5" placeholder='your email' />

                <select onChange={changeHandler} defaultValue={stored.gender} name='gender' className="text-gray-500 font-semibold bg-gray-200 rounded-lg px-3 py-5">
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input className="text-white bg-violet-400 rounded py-4 mt-4 px-4" type="submit" value='update' />
            </form>
        </div>
    );
};

export default Update;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Users.css'
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Users = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
    const [count,setCount] = useState(0)
    const pages = Math.ceil(count / size)
    useEffect(() => {
        fetch(`http://localhost:5000/users?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data.users)
                setCount(data.count)
            })
    }, [page, size])
    const deleteHandle = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 0) {
                    toast.error('User deleted!', {
                        position: 'top-center'
                    })
                }
            })
    }
    //update user
    const updateHandle = user => {
        fetch(`http://localhost:5000/users/${user._id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='my-10'>
            <h1 className='border p-2 w-1/4 mx-auto bg-violet-100  text-center font-semibold text-3xl text-gray-600'>Total users: {count}</h1>
            <div className='grid lg:grid-cols-3 gap-5 my-10 w-4/5 mx-auto'>
                {
                    users.map(x => <div data-aos="fade-up-left" key={x._id} className='p-10 bg-violet-200  shadow-lg shadow-gray-400'>
                        <p className='text-md font-semibold text-gray-600'>Name: {x.name}</p>
                        <p className='text-md font-semibold text-gray-600'>Email: {x.email}</p>
                        <p className='text-md font-semibold text-gray-600'>Gender: {x.gender ? x.gender : 'Gender not defined'}</p>
                        <div className='flex justify-center gap-3 mt-5'>
                            <button onClick={() => deleteHandle(x._id)} className='font-semibold text-white bg-gray-400 py-1 px-3 rounded hover:bg-red-600 duration-300'>Delete</button>
                            <Link to={`/update/${x._id}`}><button onClick={() => updateHandle(x)} className='font-semibold bg-violet-400 text-white py-1 px-3 rounded hover:bg-green-600 duration-300'>Update</button></Link>
                        </div>
                    </div>)
                }
            </div>
            <h1 className='font-semibold text-gray-600 text-center my-4 text-md'>Showing {size} users at a time! You can change it!</h1>
            <div className='flex gap-3 justify-center'>

                {
                    [...Array(pages).keys()].map(number => <button onClick={() => setPage(number)} id={number === page ? 'selected' : ''} className='w-8 shadow-xl shadow-violet-400 h-8 border text-lg' key={number}>{number + 1}</button>)
                }
                <select className='border-2 border-violet-400' onChange={(event) => setSize(event.target.value)}>
                    <option value="5" >5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    );
};

export default Users;
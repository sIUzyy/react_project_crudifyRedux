import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdArrowBackIosNew} from 'react-icons/md'
import { v4 as uuidv4   } from 'uuid'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/UserSlices'

const AddUser = () => {

   const [name, setNames] = useState('')
   const [username, setUsername] = useState('')
   const navigate = useNavigate()

   const dispatch = useDispatch()

   const handleUser = (e) => {
    
    e.preventDefault()
    setNames('')
    setUsername('')
    dispatch(addUser({
        id: uuidv4(),
        name,
        username,
    }))
    navigate('/')
   }

  return (
    <div className=''>
        <Link to='/'>
            <MdArrowBackIosNew size={25} className='mx-2 mt-5'/>
        </Link>
    
    <div className='max-w-7xl mx-auto h-screen grid justify-items-center items-center'>

        <div className=' w-full md:w-4/5 lg:w-3/5 xl:w-2/5'>
        
        <div className='text-center text-5xl font-title '>
            <h1>Add user</h1>
        </div>

        <div className='mx-2'>
            <div>

            <div className='grid my-2'>   
            <label className='font-title'>Name</label>
            <input value={name} onChange={(e) => setNames(e.target.value)}  className='border p-2 outline-none rounded-md bg-black/10 font-title' type='text' placeholder='sIUzy saur'></input>
            </div>

            <div className='grid my-2'>
            <label className='font-title'>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className='border p-2 outline-none rounded-md bg-black/10 font-title ' type='text' placeholder='siuzysaur'></input>
            </div>

            <div className='my-5 font-title'>
                <button onClick={handleUser} className='w-full bg-indigo-500 p-2 rounded-md text-white hover:opacity-70'>
                    Submit
                </button>
            </div>

            <div className='text-center text-sm -mt-2 font-p'>
                <p>Effortlessly add user names and usernames with a simple and intuitive interface.</p>
            </div>



            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default AddUser
import React, { useState } from 'react'
import {MdArrowBackIosNew} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../features/UserSlices'

const EditUser = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)
    const navigate = useNavigate()
    
    const existingUser = users.filter(user => user.id === params.id)
    
    // Check if existingUser has a valid value before accessing its properties
    const { name, username } = existingUser[0] || {}
    
    const [newName, setNewName] = useState(name || '')
    const [newUsername, setNewUsername] = useState(username || '')
    
    
    const handleEditUser = (e) => {
        e.preventDefault();
      
        dispatch(editUser({
          id: params.id,
          name: newName,
          username: newUsername,
        }));
      
        setNewName('');
        setNewUsername('');
      
        navigate('/');
      };
      

   
    
  return (
    <div className=''>

        <Link to='/'>
            <MdArrowBackIosNew size={25} className='mx-2 mt-5'/>
        </Link>

    <div className='max-w-7xl mx-auto h-screen grid justify-items-center items-center'>

        <div className=' w-full md:w-4/5 lg:w-3/5 xl:w-2/5'>
        
        <div className='text-center text-5xl font-title'>
            <h1>Edit user</h1>
        </div>

        <div className='mx-2'>
            <div>

            <div className='grid my-2'>   
            <label className='font-title'>Name</label>
            <input value={newName}   onChange={(e) => setNewName(e.target.value)} className='border p-2 outline-none rounded-md bg-black/10 font-title' type='text' placeholder='sIUzy saur'></input>
            </div>

            <div className='grid my-2'>
            <label className='font-title'>Username</label>
            <input value={newUsername}   onChange={(e) => setNewUsername(e.target.value)} className='border p-2 outline-none rounded-md bg-black/10 font-title ' type='text' placeholder='siuzysaur'></input>
            </div>

            <div className='my-5'>
                <button onClick={handleEditUser} className='w-full bg-indigo-500 p-2 rounded-md text-white font-title hover:opacity-70'>
                    Edit
                </button>
            </div>

            <div className='text-center text-sm -mt-2 font-p'>
                <p>Effortlessly update your name and username using the Edit Page feature.</p>
            </div>

            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default EditUser
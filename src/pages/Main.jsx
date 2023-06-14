// const datas = [
//     {
//         id: 1,
//         name: 'siuzy',
//         username: 'siuzysaur',
//     },

//     {
//         id: 2,
//         name: 'iu',
//         username: 'iuiuiuiu',
//     },
// ]


import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser } from '../features/UserSlices'


const Main = () => {

    const users = useSelector(store => store.users)

    const dispatch = useDispatch()

    const handleRemoveUser = (id) => {
        dispatch(deleteUser({ id: id}))
    }

  return (
    <div className='max-w-5xl mx-auto'>

        <div className='main-container mx-3'>

            <div className='col-1 my-5  text-center'>
                <h1 className='text-4xl font-title  '>CRUDify</h1>
                <p className='text-sm py-1 font-p '>Empower Your User Management with CRUDify: Unleash the Power of CRUD Operations for Seamless User Control</p>
            </div>

            <div className='col-2 w-full'>
                <Link to='adduser'>
                <button className='bg-indigo-500 w-full p-2 rounded-md text-white font-title hover:opacity-70'>
                    Add User
                </button>
                </Link>

            </div>
            <div  className='col-3 grid gap-4 my-5 md:grid-cols-2 lg:grid-cols-3'>
            {users.map((data) => (

                <div key={data.id} className='border flex justify-between p-5 rounded-lg bg-[#141204] '>

                    <div className='text-white font-title'>
                      <h1>{data.name}</h1>
                      <h1>{data.username}</h1>
                    </div>

                    <div className='flex items-center'>
                            <Link to={`edituser/${data.id}`} className='mx-2'><AiFillEdit className='text-green-500' size={20}/></Link>
                        <button onClick={() => handleRemoveUser(data.id)} className=''><MdDelete className='text-red-500' size={20}/></button>
                    </div>


                </div>
            ))}

        

            </div>

        </div>
        
        
        
        
    </div>
  )
}

export default Main
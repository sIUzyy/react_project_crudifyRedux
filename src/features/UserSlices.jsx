import { createSlice } from '@reduxjs/toolkit'

const initialState = [

    
    
    // {
    //     id: 1,
    //     name: 'siuzy',
    //     username: 'siuzysaur',
    // },

    // {
    //     id: 2,
    //     name: 'iu',
    //     username: 'iuiuiuiu',
    // },
]

const userSlice = createSlice({

    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action)
            state.push(action.payload)
        },


        editUser: (state, action) => {
            const { id, name, username } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
              existingUser.name = name;
              existingUser.username = username;
            }
          },
        
        deleteUser: (state, action) => {

            const { id } = action.payload
            const existingUser = state.find(user => user.id === id)

            if(existingUser) {
                return state.filter(user => user.id !== id)
            }
            

        }

    }
})

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer
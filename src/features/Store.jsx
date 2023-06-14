import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './UserSlices'

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})
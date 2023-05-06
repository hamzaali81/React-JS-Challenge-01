import { createSlice } from "@reduxjs/toolkit";

export const logoutSlice: any= createSlice({
    name: "logout",
    initialState: {
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') as string) : [],
        accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ''
    },
    reducers: {
        setLogut: (state, action) => {
            console.log(action.payload)
            state.users = action.payload  
        }
    }
});
console.log(logoutSlice)
export const { setLogout , reloadUserData } = logoutSlice.actions;
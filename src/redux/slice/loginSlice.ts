import { createSlice } from "@reduxjs/toolkit";

export const loginSlice: any= createSlice({
    name: "login",
    initialState: {
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') as string) : [],
        accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ''
   },
    reducers: {
        setLogin: (state, action) => {
            console.log(action.payload)
            state.users = action.payload

        }
    }
});
console.log(loginSlice)
export const { setLogin , reloadUserData } = loginSlice.actions;
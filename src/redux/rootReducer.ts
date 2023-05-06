import { combineReducers } from '@reduxjs/toolkit'
import { loginSlice } from './slice/loginSlice'


const rootReducer = combineReducers({
  users: loginSlice.reducer,    
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
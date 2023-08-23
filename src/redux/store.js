import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './Slice/postsSlice'
import { authReduser } from './Slice/authSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReduser
    }
})

export default store
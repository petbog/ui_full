import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './Slice/postsSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

export default store
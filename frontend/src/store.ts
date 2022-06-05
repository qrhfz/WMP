import { configureStore } from '@reduxjs/toolkit'
import trackQueueReducer from './track_queue/trackQueueSlice'

export const store = configureStore({
    reducer: {
        trackQueue: trackQueueReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
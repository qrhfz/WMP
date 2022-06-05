import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import trackQueueReducer from './track_queue/trackQueueSlice'

export const store = configureStore({
    reducer: {
        trackQueue: trackQueueReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
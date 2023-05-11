import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        setStories: (state, action) => {
            console.log('Adding stories', action.payload)
            return action.payload;
        }
    }
});

export const { setStories } = postsSlice.actions;

export default postsSlice.reducer;
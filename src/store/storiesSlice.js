import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const storiesSlice = createSlice ({
    name: 'stories',
    initialState,
    reducers: {
        setStories: (state, action) => {
            console.log('Adding stories', action.payload)
            return action.payload;
        }
    }
});

export const { setStories } = storiesSlice.actions;

export default storiesSlice.reducer;
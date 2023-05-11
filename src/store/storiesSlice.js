import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const storiesSlice = createSlice ({
    name: 'stories',
    initialState,
    reducers: {
        setStories: (state, action) => {
            console.log('Adding stories', action.payload)
            return action.payload;
        },
        postStory: (state, action) => {
            state.unshift(action.payload);
        },
        deleteStory: (state, action) => {
            const index = state.findIndex(story => story.id === action.payload.id);
            state.splice(index, 1);
        },
        editStory: (state, action) => {
            const index = state.findIndex(story => story.id === action.payload.id);
            state.splice(index, 1, action.payload);
        }
    }
});

export const { setStories, postStory, deleteStory, editStory } = storiesSlice.actions;

export default storiesSlice.reducer;
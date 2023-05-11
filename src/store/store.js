import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from './storiesSlice';

export default configureStore({
    reducer: {
        stories: storiesReducer
    }
});
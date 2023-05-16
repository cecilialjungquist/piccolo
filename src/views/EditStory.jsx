import { useState } from "react";
import Button from "../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { useDispatch } from "react-redux";
import { editStory, deleteStory } from '../store/storiesSlice'

function EditStory() {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [story, setStory] = useState(state); 


    function handleChange(event) {
        setStory(prevStory => {
            return {
                ...prevStory,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSave() {
        dispatch(editStory(story));
        navigate(-1);
    }
    function handleDelete() {
        dispatch(deleteStory(story));
        navigate(-2);
    }

    return (  
        <section className="edit-story">
            <h1>Edit story</h1>
            {story ?
                <section className="edit-info">
                    <input type="text" value={story.title} name="title" onChange={handleChange} />
                    <textarea value={story.story} name="story" onChange={handleChange} />
                    <Button type={'delete'} onClick={handleDelete}>Delete</Button>
                    <Button type={'save'} onClick={handleSave}>Save</Button>
                </section>
                : <Loading />
            }
        </section>
    );
}

export default EditStory;
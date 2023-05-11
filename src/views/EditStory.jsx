import { useState } from "react";
import Button from "../Components/Button";
import { useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

function EditStory() {
    const { state } = useLocation();
    const [story, setStory] = useState(state); 


    function handleChange(event) {
        setStory(prevStory => {
            return {
                ...prevStory,
                [event.target.value]: event.target.value
            }
        })
    }

    return (  
        <section className="edit-story">
            <h1>Edit story</h1>
            {story ?
                <section className="edit-info">
                    <input type="text" value={story.title} name="title" onChange={handleChange} />
                    <textarea value={story.story} name="story" onChange={handleChange} />
                    <Button children={'Save'} type={'save'} />
                </section>
                : <Loading />
            }
        </section>
    );
}

export default EditStory;
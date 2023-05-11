import { useState } from "react";
import Button from "../Components/Button";

function EditStory({ storyToUpdate }) {
    const [story, setStory] = useState(storyToUpdate); 

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
            <section>
                <input type="text" value={story.title} name="title" onChange={handleChange} />
                <textarea value={story.story} name="story" onChange={handleChange} />
                <Button children={'Save'} type={'save'} />
            </section>
        </section>
    );
}

export default EditStory;
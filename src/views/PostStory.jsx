import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postStory } from "../store/storiesSlice";
import { useNavigate } from "react-router-dom";
import { useValidateImageURL } from "use-validate-image-url";
import Button from "../Components/Button";

function PostStory() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [newStory, setNewStory] = useState({
        id: nanoid(),
        username: 'kyle__',
        title: '',
        story: '',
        imageUrl: '',
        isSignedIn: false,
        isTopStory: false
    });
    const status = useValidateImageURL(newStory.imageUrl);

    function handleChange(event) {
        setNewStory(prevStory => {
            return {
                ...prevStory,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSave() {
        if (newStory.title && newStory.story.length > 150 && status === "valid") {
            dispatch(postStory(newStory));
            navigate('/home');
        } else {
            setShowMessage(true);
        }
    }

    return (
        <section className="post-story">
            <h1>Post Story</h1>
            <section>
                <p>Share your story with us!</p>
                <section className="input-section">
                    {showMessage &&
                        <p className="message">Please, make sure that you've added a title, shared a valid image URL and that your story is at least 150 charachters long. Let's keep this as far away from Twitter as we can!</p>
                    }
                    <input type="text" value={newStory.title} name="title" onChange={handleChange} placeholder="Title" />
                    <textarea value={newStory.story} name="story" onChange={handleChange} placeholder="Write your story here" />
                    <input type="url" value={newStory.imageUrl} name="imageUrl" onChange={handleChange} placeholder="Please share image url here" />
                </section>
                <Button children={'Save'} type={'save'} onClick={handleSave} />
            </section>
        </section>
    );
}

export default PostStory;
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
import Button from "../Components/Button";


function Story() {
    const id = useParams().id;
    const navigate = useNavigate();
    const stories = useSelector(state => state.stories);
    const [canEdit, setCanEdit] = useState(false);
    let story;
    console.log(id);
    
    if (stories.length > 0) {
        [ story ] = stories.filter(story => story.id === id);
        console.log(story);
        
        useEffect(() => {
            if (story.username === "kyle__") {
                setCanEdit(true);
                console.log('can edit')
            }
        }, [])
    }
    
    function handleClick() {
        navigate();
    }

    return (  
        <>
        {story ? 
            <section className="story">
                <section className="text">
                    <h1>{story.title}</h1>
                    <p>{story.story}</p>
                    <p>written by <span>{story.username}</span></p>
                    {canEdit && <Button children={'Edit'} type={'edit'} onClick={handleClick} />}
                </section>
                <section className="img">
                    <img src={story.imageUrl}></img>
                </section>
            </section> :
            <Loading />
        }
        </>
    );
}

export default Story;
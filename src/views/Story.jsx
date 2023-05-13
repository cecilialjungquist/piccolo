import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Button from "../Components/Button";


function Story() {
    const id = useParams().id;
    const stories = useSelector(state => state.stories);
    const [canEdit, setCanEdit] = useState(false);

    let story;
    if (stories.length > 0) {
        [ story ] = stories.filter(story => story.id === id);
    }

    useEffect(() => {
        // If this user is logged in, the user can edit this story
        if (story && story.isLogged) {
            setCanEdit(true);
        }
    }, [])

    return (
        <>
            {story ?
                <section className="story">
                    <section className="text">
                        <h1>{story.title}</h1>
                        <p>{story.story}</p>
                        <p>written by <span>{story.username}</span></p>
                        {canEdit &&
                            <Link to='/edit-story' state={story}>
                                <Button children={'Edit'} type={'edit'} />
                            </Link>
                        }
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
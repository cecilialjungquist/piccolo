import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";


function Story() {
    const id = useParams().id;
    const stories = useSelector(state => state.stories);
    let story;
    console.log(id);
    
    if (stories.length > 0) {
        [ story ] = stories.filter(story => story.id === id);
        console.log(story);
    }

    return (  
        <>
        {story ? 
            <section className="story">
                <section className="text">
                    <h1>{story.title}</h1>
                    <p>{story.story}</p>
                    <p>written by <span>{story.username}</span></p>
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
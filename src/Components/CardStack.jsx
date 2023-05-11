import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import StoryCard from "./StoryCard";
import Loading from './Loading';

function CardStack() {
    const stories = useSelector(state => state.stories);

    let storyCards;
    if (stories.length > 0) {
        storyCards = stories.map(story => <StoryCard story={story} key={nanoid()} />)
    }

    return (  
        <section className="cardstack">
            {storyCards ? storyCards : <Loading />}
        </section>
    );
}

export default CardStack;
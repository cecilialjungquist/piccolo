import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import './CardStack.css';
import StoryCard from "./StoryCard";
import Loading from './Loading';
import TopStory from "./TopStory";

function CardStack() {
    const stories = useSelector(state => state.stories);

    let storyCards;
    let topStory;
    if (stories.length > 0) {
        storyCards = stories.map(story => {
            if (story.isTopStory) {
                topStory = story;
                return;
            } else {
                return <StoryCard story={story} key={nanoid()} />
            }
        })
    } else {
        storyCards = <p className="message">No posts yet...</p>
    }

    return (
        <>
            {topStory && <TopStory topStory={topStory} />}
            {stories ?
                <section className="card-stack">
                    {storyCards}
                </section> : 
                <Loading />
            }

        </>
    );
}

export default CardStack;
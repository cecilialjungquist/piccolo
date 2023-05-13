import { useNavigate } from 'react-router-dom';
import './StoryCard.css';

function StoryCard({ story }) {
    const navigate = useNavigate();
    let writer = story.username;
    const styles = {
        backgroundImage: `url(${story.imageUrl})`
    }
    const desc = story.story.slice(0, 80);

    // Simulate that the writer of the story is logged in
    if (story.isLogged) {
        writer = 'you';
    }

    function handleClick() {
        navigate(`/story/${story.id}`);
    }

    return (
        <article className="story-card" style={styles} onClick={handleClick}>
            <aside>by {writer}</aside>
            <h3>{story.title}</h3>
            <p>{desc}...</p>
        </article>
    );
}

export default StoryCard;
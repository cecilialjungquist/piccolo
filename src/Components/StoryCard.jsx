import { Link, useNavigate } from 'react-router-dom';
import './StoryCard.css';

function StoryCard({ story }) {
    const navigate = useNavigate();

    const styles = {
        backgroundImage: `url(${story.imageUrl})`
    }

    const desc = story.story.slice(0, 80);

    function handleClick() {
        navigate(`story/${story.id}`);
    }

    return (
        <article className="story-card" style={styles} onClick={handleClick}>
            <h3>{story.title}</h3>
            <p>{desc}...</p>
        </article>
    );
}

export default StoryCard;
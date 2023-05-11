function StoryCard({ story }) {
    const styles = {
        backgroundImage: `url(${story.imageUrl})`
    }

    return (  
        <article className="story-card" style={styles}>
            <h3>{story.title}</h3>
        </article>
    );
}

export default StoryCard;
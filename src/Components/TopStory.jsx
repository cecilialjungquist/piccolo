import { Link } from 'react-router-dom';
import './TopStory.css';

function TopStory({ topStory }) {
    const styles = {
        backgroundImage: `url(${topStory.imageUrl})`
    }

    const desc = topStory.story.slice(0, 147);

    return (  
        <Link to={`/story/${topStory.id}`} className='top-story-link'>
            <article className="top-story">
                    <section>
                        <h2>Top story of the week</h2>
                        <h3>{topStory.title}</h3>
                        <p>{desc}...</p>
                        <p>by <span>{topStory.username}</span></p>
                    </section>
                    <section>
                        <figure style={styles}></figure>
                    </section>
            </article>
        </Link>
    );
}

export default TopStory;
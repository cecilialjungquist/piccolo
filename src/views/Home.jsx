import { Link } from "react-router-dom";
import CardStack from "../Components/CardStack";

function Home() {
    return (
        <section className="home">
            <section className="hero">
                <section className="top">
                    <h1>Hi, kyle!</h1>
                    <p>
                        Welcome back to Piccolo! We love stories and this is the right place for you to share them. Lorem ipsum dolor sit amet consectetur. Volutpat quis velit feugiat quis. Eget faucibus lacus cum massa faucibus pharetra fames.
                    </p>
                </section>
                <section className="bottom">
                    {/* Arrow svg */}
                    <svg width="112" height="30" viewBox="0 0 112 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M111.414 16.4142C112.195 15.6332 112.195 14.3668 111.414 13.5858L98.6863 0.857864C97.9052 0.0768156 96.6389 0.0768156 95.8579 0.857864C95.0768 1.63891 95.0768 2.90524 95.8579 3.68629L107.172 15L95.8579 26.3137C95.0768 27.0948 95.0768 28.3611 95.8579 29.1421C96.6389 29.9232 97.9052 29.9232 98.6863 29.1421L111.414 16.4142ZM0 17L110 17V13L0 13L0 17Z" fill="#F6F6F6" />
                    </svg>
                    <Link to='/post-story'>
                        <h2>Share your story</h2>
                    </Link>
                </section>
            </section>

            <CardStack />
        </section>
    );
}

export default Home;
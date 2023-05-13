import './Loading.css';
import loadingGIF from '../assets/loading.gif';

function Loading() {
    return (  
        <div className="loading">
            <img src={loadingGIF} />
            <p className='message'>Loading...</p>
        </div>
    );
}

export default Loading;
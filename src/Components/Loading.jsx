import './Loading.css';
import loadingGIF from '/loading.gif';

function Loading() {
    return (  
        <div className="loading">
            <img src={loadingGIF} />
            <p>Loading...</p>
        </div>
    );
}

export default Loading;
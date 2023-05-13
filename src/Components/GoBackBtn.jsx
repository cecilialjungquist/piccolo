import { useNavigate } from 'react-router-dom';
import './GoBackBtn.css';

function GoBackBtn() {
    const navigate = useNavigate();

    return (
        <button className="go-back-btn" onClick={() => navigate(-1)}>
            {/* Go back svg */}
            <svg width="16" height="28" viewBox="0 0 44 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 40L44 79.4041L26 40L44 0.595825L0.5 40Z" fill="rgba(104, 195, 73)" />
            </svg>
        </button>
    );
}

export default GoBackBtn;
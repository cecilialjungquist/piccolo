import { useEffect } from 'react';
import loadingGIF from '../assets/loading.gif';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 2000)
    }, [])

    return ( 
        <section className="login">
            <img src={loadingGIF} />
            <h2>Signing in...</h2>
        </section>
    );
}

export default Login;
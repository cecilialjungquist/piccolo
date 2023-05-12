import './Login.css';
import loadingGIF from '/public/loading.gif';

function Login() {
    return ( 
        <section className="login">
            <img src={loadingGIF} />
            <h2>Signing in...</h2>
        </section>
    );
}

export default Login;
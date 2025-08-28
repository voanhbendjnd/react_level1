import picture404 from '../assets/404-Error.jpg'
import './error.css'
import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="container" id="error-page">
            <div className="header">
                <h1>Oops!</h1>

            </div>
            <div className="main">
                <div className='text-error'>
                    <p style={{ fontStyle: "italic" }}>Sorry, an unexpected error has occurred.</p>
                </div>
                <div className='picture'>
                    <img src={picture404} className='image404' />

                </div>
                <div>
                    <p>
                        <i style={{ color: "red", fontSize: "20px" }}>{error.statusText || error.message} 404</i>
                    </p>
                </div>

            </div>
            <div className="footer-error">
                <button>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/">BACK HOME</Link>
                </button>
            </div>

        </div>
    );
}
import './NotFound.css'
import {Link} from "react-router";

export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go to the Home page</Link>
        </>
    );
}
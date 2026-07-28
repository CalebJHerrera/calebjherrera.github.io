import './About.css'
import {Link} from "react-router";

export default function About() {
    return (
        <>
            <h1>https://robot0730.is-a.dev - home of my first website</h1>
            <p>From here you can:</p>
            <ul>
                <li>
                    <Link to="/">Go to the Home page</Link>
                </li>
            </ul>
        </>
    )
}
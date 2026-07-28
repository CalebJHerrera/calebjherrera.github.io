import { Link } from "react-router"
import './Home.css'

export default function Home() {
    return (
        <>
            <h1>https://robot0730.is-a.dev - home of my first website</h1>
            <p>From here you can:</p>
            <ul>
                <li>
                    <Link to="/">Go to the Home Page</Link>
                </li>
                <li>
                    <Link to="/about">Go to the About Page</Link>
                </li>
            </ul>
        </>
    )
}
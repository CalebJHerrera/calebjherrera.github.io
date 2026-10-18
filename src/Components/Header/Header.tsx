import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header
                className={
                    "font-fira border-ctp-surface2 text-cleb-text sticky flex items-center justify-between bg-transparent px-7 py-3 align-middle"
                }
            >
                <h1 className={"text-cleb-text"}>Website</h1>
                <div className={"space-x-7"}>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <button
                        className={
                            "bg-cleb-base hover:bg-cleb-surface active:bg-cleb-accent border-cleb-text border-2 px-7 py-2"
                        }
                    >
                        Test
                    </button>
                </div>
            </header>
        </>
    );
}

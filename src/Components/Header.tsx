import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header
                className={
                    "text-cleb-text bg-cleb-base border-cleb-edges sticky top-0 z-50 flex items-center justify-between border-b-2 px-7 align-middle"
                }
            >
                <div>
                    <h1 className={"text-cleb-text cleb-depress select-none"}>
                        Website
                    </h1>
                </div>

                <div
                    className={
                        "flex flex-row items-center space-x-7 px-7 py-2 text-center"
                    }
                >
                    <Link
                        to="/"
                        className="hover:text-cleb-accent active:text-cleb-secondary-accent cleb-depress"
                    >
                        About Me
                    </Link>
                    <a
                        href="#github-projects"
                        className="hover:text-cleb-accent active:text-cleb-secondary-accent cleb-depress"
                    >
                        Projects
                    </a>
                    <a
                        className={
                            "bg-cleb-base hover:bg-cleb-surface active:bg-cleb-accent text-cleb-accent active:text-cleb-secondary-accent cleb-depress border-2 px-7 py-2"
                        }
                        href={"https://github.com/CalebJHerrera"}
                    >
                        Github
                    </a>
                </div>
            </header>
        </>
    );
}

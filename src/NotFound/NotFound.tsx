import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="bg-cleb-base flex h-screen items-center justify-center">
                <div
                    className={
                        "bg-cleb-surface border-cleb-edges text-cleb-text flex h-2/3 w-2/3 flex-col items-center justify-center border-2 text-center"
                    }
                >
                    <h1 className="text-cleb-text py-4 text-7xl font-extrabold">
                        404
                    </h1>
                    <h3 className="text-cleb-secondary-text">Page not found</h3>
                    <Link
                        to="/"
                        className="text-cleb-secondary-text hover:text-cleb-accent cleb-depress underline"
                    >
                        Go to the Home Page
                    </Link>
                </div>
            </div>
        </>
    );
}

import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-cleb-base">
                <div
                    className={
                        "bg-cleb-surface border-cleb-edges text-cleb-text flex h-2/3 w-2/3 flex-col items-center justify-center border-2 text-center"
                    }
                >
                    <h1 className="text-cleb-text text-7xl font-extrabold py-4">
                        404
                    </h1>
                    <h3 className="text-cleb-secondary-text">Page not found</h3>
                    <Link to="/" className="text-cleb-secondary-text underline">
                        Go to the Home Page
                    </Link>
                </div>
            </div>
        </>
    );
}

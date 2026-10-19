// Note: This code was ai-assisted with the fetching logic. All comments are human-written, all content is human-typed.
import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import type { Endpoints } from "@octokit/types";
import { RepoCard } from "./RepoCard.tsx";

type Repo =
    Endpoints["GET /users/{username}/repos"]["response"]["data"][number];

interface RepoListProps {
    // Something weird about TypeScript, but it's actually quite clean in hindsight.
    username: string;
    perPage?: number;
}

const octokit = new Octokit();

export default function GithubRepoList({ username, perPage = 12 }: RepoListProps) {
    // React equivalent of @state variables in SwiftUi.
    const [repos, setRepos] = useState<Repo[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Look at bottom of the function for info.
        const controller = new AbortController(); // Prevents race conditions by listening and aborting outdated/unwanted calls.

        async function fetchRepos() {
            setLoading(true);
            setError(null); // Clear out older errors using a getter function.

            try {
                const response = await octokit.rest.repos.listForUser({
                    username,
                    per_page: perPage,
                    page,
                    sort: "updated",
                    request: {
                        signal: controller.signal,
                    },
                }); // Getting the actual data through octokit. Also has pagination stuffs.

                setRepos(response.data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    // Checking type of error, if it has a message then print it.
                    setError(error.message);
                } else {
                    setError("Error fetching repos"); // If not, fall back to a generic message.
                }
            } finally {
                setLoading(false);
            }
        }

        void fetchRepos(); // Tell IDE that "I am not awaiting the promise, do whatever with it" here.
    }, [username, page, perPage]); // This last list runs the useEffect's content every time one of these variables changes. Very neat.

    // Now for the actual visual representation of the data. TODO: WTF THIS IS REALLY DAMN MESSY
    return (
        <div
            className={
                "border-cleb-edges bg-cleb-surface text-cleb-text m-7 flex flex-col border-2 p-7 text-base"
            }
            id={"github-projects"}
        >
            <h1 className={"mb-4 text-3xl font-space-grotesk"}>Github Projects</h1>
            {error && <p>Error has occurred: {error}</p>}
            {loading ? (
                <p>Loading repos...</p>
            ) : (
                <>
                    <div
                        className={
                            "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
                        }
                    >
                        {
                            // Grid col adjustments for my poor mobile friend Ken Chan
                            repos.map((repo) => (
                                <RepoCard
                                    key={repo.id}
                                    name={repo.name}
                                    html_url={repo.html_url}
                                    description={
                                        repo.description ??
                                        "Description Missing"
                                    } // Never felt prouder of this shorthand
                                    stargazers_count={
                                        repo.stargazers_count ?? 0
                                    }
                                />
                            ))
                        }
                    </div>
                    <div
                        className={
                            "flex flex-row items-center justify-center gap-5 pt-7 text-xl"
                        }
                    >
                        <button
                            onClick={() => {
                                setPage(Math.max(page - 1, 0));
                            }}
                            disabled={page === 1}
                            className={
                                "hover:text-cleb-accent active:text-cleb-secondary-accent hover:bg-cleb-base px-3"
                            }
                        >
                            -
                        </button>
                        <p>{page}</p>
                        <button
                            onClick={() => {
                                setPage(Math.min(page + 1, repos.length));
                            }}
                            disabled={repos.length < page}
                            className={
                                "hover:text-cleb-accent active:text-cleb-secondary-accent hover:bg-cleb-base px-3"
                            }
                        >
                            +
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

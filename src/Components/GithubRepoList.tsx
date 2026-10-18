// Note: This code was ai-assisted with the fetching logic. All comments are human-written, all content is human-typed.
import React, { useState, useEffect} from "react"
import {Octokit} from "@octokit/rest"
import type { Endpoints } from "@octokit/types"
import { RepoCard } from "./RepoCard.tsx";

type Repo = Endpoints["GET /users/{username}/repos"]["response"]["data"][number]

interface RepoListProps { // Something weird about typescript, but it's actually quite clean in hindsight.
    username: string;
    perPage?: number;
}

const octokit = new Octokit()

export const GithubRepoList = ({username, perPage = 10}: RepoListProps) => {
    // React equivalent of @state variables in swiftui.
    const [repos, setRepos] = useState<Repo[]>([])
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => { // Look at bottom of the function for info.
        const controller = new AbortController() // Prevents race conditions by listening and aborting outdated/unwanted calls.

        async function fetchRepos() {
            setLoading(true)
            setError(null) // Clear out older errors using a getter function.

            try {
                const response = await octokit.rest.repos.listForUser({
                    username,
                    per_page: perPage,
                    page,
                    sort: "updated",
                    request: {
                        signal: controller.signal,
                    }
                }) // Getting the actual data through octokit. Also has pagination stuffs.

                setRepos(response.data)
            } catch (error: unknown) {
                if (error instanceof Error) { // Checking type of error, if it has a message then print it.
                    setError(error.message)
                } else {
                    setError("Error fetching repos") // If not, fall back to a generic message.
                }
            } finally {
                setLoading(false)
            }
        }

        void fetchRepos() // Tell IDE that "I am not awaiting the promise, do whatever with it" here.
    }, [username, page, perPage]) // This last list runs the useEffect's content every time one of these variables changes. Very neat.

    // Now for the actual visual representation of the data.
    return (
        <>
            <h1 className={""}>My Github Projects</h1>
            <div className={"col-auto grid flex"}>
                {repos.map((repo) => (
                    <RepoCard
                        name={repo.name}
                        html_url={repo.html_url}
                        description={repo.description ? repo.description : ""} // Never felt prouder of this
                        stargazers_count={repo.stargazers_count ? repo.stargazers_count : 0}
                    />
                ))}
            </div>
        </>
    );
};
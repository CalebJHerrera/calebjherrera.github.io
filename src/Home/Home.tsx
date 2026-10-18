import Header from "../Components/Header.tsx";
import { GithubRepoList } from "../Components/GithubRepoList.tsx";

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className={"flex-1"}>
                <div
                    className={
                        "border-cleb-edges bg-cleb-surface text-cleb-text m-7 border-2 p-7 text-base flex"
                    }
                >
                    <GithubRepoList username={"calebjherrera"} />
                </div>
            </main>
        </>
    );
}

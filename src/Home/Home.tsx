import Header from "../Components/Header.tsx";
import { GithubRepoList } from "../Components/GithubRepoList.tsx";
import { Footer } from "../Components/Footer.tsx";

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className={"flex-1"}>
                <GithubRepoList username={"calebjherrera"} />
                <Footer />
            </main>
        </>
    );
}

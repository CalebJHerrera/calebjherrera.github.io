import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import GithubRepoList from "../Components/GithubRepoList.tsx";
import AboutMe from "../Components/AboutMe.tsx";

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className={"flex-1"}>
                <AboutMe />
                <GithubRepoList username={"calebjherrera"} />
                <Footer />
            </main>
        </>
    );
}

import Header from "../Components/Header/Header.tsx";

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className={"flex-1"}>
                <div
                    className={"border-cleb-edges m-7 border-2 p-7 text-base bg-cleb-surface text-cleb-text"}
                >
                    Hi this is a body element
                </div>
            </main>
        </>
    );
}

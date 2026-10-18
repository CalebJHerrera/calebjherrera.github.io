import Header from "../Components/Header/Header.tsx";

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className={"flex-1"}>
                <div
                    className={
                        "border-cleb-edges bg-cleb-surface text-cleb-text m-7 h-screen border-2 p-7 text-base"
                    }
                >
                    Hi this is a body element
                </div>
            </main>
        </>
    );
}

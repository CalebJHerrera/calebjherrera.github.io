interface wantedInfo {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
}

export const RepoCard = ({
    name,
    html_url,
    description,
    stargazers_count,
}: wantedInfo) => {
    return (
        <a href={html_url} target={"_blank"}>
            <div
                className={
                    "border-cleb-edges break-word hover:border-cleb-accent active:border-cleb-secondary-accent hover:bg-cleb-base h-full justify-end border-2 px-7 wrap-break-word select-none"
                }
            >
                <p
                    className={
                        "hover:text-cleb-accent active:text-cleb-secondary-accent text-xl font-extrabold"
                    }
                >
                    {name}
                </p>
                <p className={"text-xs font-space-grotesk"}>{description}</p>
                <div className={"flex flex-row"}>
                    <p className={"text-sm"}>Stars: </p>
                    <p className={"text-cleb-accent text-sm"}>
                        {stargazers_count}
                    </p>
                </div>
            </div>
        </a>
    );
};

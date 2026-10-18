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
                    "border-cleb-edges cleb-float break-word h-full border-2 px-7 wrap-break-word justify-end select-none hover:border-cleb-accent active:border-cleb-secondary-accent hover:bg-cleb-base"
                }
            >
                <a
                    href={html_url}
                    target={"_blank"}
                    className={
                        "hover:text-cleb-accent active:text-cleb-secondary-accent text-xl font-extrabold"
                    }
                >
                    {name}
                </a>
                <p className={"font-fira"}>{description}</p>
                <div className={"flex flex-row"}>
                    <p className={"font-fira"}>Stars: </p>
                    <p className={"font-fira text-cleb-accent"}>{stargazers_count}</p>
                </div>
            </div>
        </a>
    );
};

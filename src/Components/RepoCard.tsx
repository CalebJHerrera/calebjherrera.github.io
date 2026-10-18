interface wantedInfo {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
}

export const RepoCard = ({name, html_url, description, stargazers_count}: wantedInfo) => {
    return (
        <>
            <div className={"px-7 border-2 border-cleb-edges m-auto"}>
                <a href={html_url} target={"_blank"}><strong>{name}</strong></a>
                <p>{description}</p>
                <p>{stargazers_count}</p>
            </div>
        </>
    );
};
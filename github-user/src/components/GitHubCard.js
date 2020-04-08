import React from "react"; 

function GitHubCard (props) {
    return (
        <div>
            <h1>The GitHub Card</h1><br/>
            <img src={props.githubData.avatar_url}/>
            <div>
                <h2>User: {props.githubData.login}</h2><br/>
                <p>Name: {props.githubData.name}</p>
            </div>
            

        </div>
    )
}

export default GitHubCard; 
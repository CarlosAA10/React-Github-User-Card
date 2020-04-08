import React from "react"; 
import styled from "styled-components"; 

function GitHubCard (props) {

    const StyledDiv = styled.div`
        background-color: red;   
        text-align:center;  
    `; 

    return (
        <StyledDiv>
            <h1>The GitHub Card</h1><br/>
            <img src={props.githubData.avatar_url}/>
            <div>
                <h2>User: {props.githubData.login}</h2><br/>
                <p>Name: {props.githubData.name}</p>
            </div>
            

        </StyledDiv>
    )
}

export default GitHubCard; 
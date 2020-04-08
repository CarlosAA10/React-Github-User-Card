import React from "react"; 
import styled from "styled-components"; 

export default function Followers(props) {

    const TheDiv = styled.div`
        background-color: royalblue;
        text-align:center;
    `; 
    return (
        <TheDiv>
            <h1>The Followers</h1>
            <div>
                {props.followerData.map(follower => {
                    return (<h3>{follower.login}</h3>)
                })}
            </div>
        </TheDiv>
    )
}
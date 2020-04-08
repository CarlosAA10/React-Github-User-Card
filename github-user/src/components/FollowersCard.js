import React from "react"; 

export default function Followers(props) {
    return (
        <div>
            <h1>The Followers</h1>
            <div>
                {props.followerData.map(follower => {
                    return (<h3>{follower.login}</h3>)
                })}
            </div>
        </div>
    )
}
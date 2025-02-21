import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        return (
            <div>
                <h2>Followers: </h2>
                {
                    this.props.followers.map(follower => {
                        return (<Follower key={follower.id} follower={follower}/>)
                    })
                }
            </div>
        )
    }
}

export default FollowerList;
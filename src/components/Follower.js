import React from "react";


class Follower extends React.Component {

    render() {
        const {follower} = this.props
        // console.log(follower)
        return (
            <div className="follower">
                <img width="150" src={follower.avatar_url}/>
                <a target="_blank" href={follower.html_url}><p>{follower.login}</p></a>
            </div>
        )
    }
}

export default Follower;
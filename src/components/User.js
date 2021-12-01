import React from "react";

class User extends React.Component {

    render() {

        const { user } = this.props;

        return (
            <div>
                <img width="300" src={user.avatar_url} alt='profile pic'/>
                <a target='_blank' href={user.html_url}><h2>{user.name}</h2></a>
                <p>({user.login})</p>
                <p>Total Repos: {user.public_repos}</p>
                <p>Total Followers: {user.followers}</p>
            </div>
        )
    }
}

export default User;
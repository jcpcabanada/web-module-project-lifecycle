import React from 'react';
import User from "./components/User";
import FollowerList from "./components/FollowerList";
// import axios from 'axios';

// https://api.github.com/users/jcpcabanada and https://api.github.com/users/jcpcabanada/followers

class App extends React.Component {
    state = {
        currentUser: "jcpcabanada",
        user: {
            avatar_url: "https://avatars.githubusercontent.com/u/79226951?v=4",
            html_url: "https://github.com/jcpcabanada",
            login: "jcpcabanada",
            name: "Jordan Chaz Cabanada",
            public_repos: 33,
            followers: 4

        },
        followers: [
            {
                login: "ryanghoward",
                avatar_url: "https://avatars.githubusercontent.com/u/72590723?v=4",
                html_url: "https://github.com/ryanghoward"
            },
            {
                login: "ryanghoward",
                avatar_url: "https://avatars.githubusercontent.com/u/72590723?v=4",
            },
            {
                login: "ryanghoward",
                avatar_url: "https://avatars.githubusercontent.com/u/72590723?v=4",
                html_url: "https://github.com/ryanghoward"
            }
        ]
    }

    render() {
        return (
            <div className="app">
                <div className="top">
                    <h1>GITHUB INFO</h1>
                    <form>
                        <input placeholder="Github Handle"/>
                        <button>Search</button>
                    </form>
                </div>
                <div className="card">
                    <User user={this.state.user}/>
                </div>
                <div className="bottom">
                    <FollowerList followers={this.state.followers}/>
                </div>
            </div>);
    }
}

export default App;

import React from 'react';
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from 'axios';

// https://api.github.com/users/jcpcabanada and https://api.github.com/users/jcpcabanada/followers

class App extends React.Component {
    state = {
        currentUser: "jcpcabanada",
        user: {},
        followers: []
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.state.currentUser}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
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

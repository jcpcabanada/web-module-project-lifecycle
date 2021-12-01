import React from 'react';
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from 'axios';

// https://api.github.com/users/jcpcabanada and https://api.github.com/users/jcpcabanada/followers

class App extends React.Component {
    state = {
        currentUser: "benawad",
        user: {},
        followers: []
    }

    // name: res.data.name,
    // avatar_url: res.data.avatar_url,
    // html_url: res.data.html_url,
    // login: res.data.login,
    // followers: res.data.followers,
    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.state.currentUser}`)
            .then(res => {
                this.setState({
                        ...this.state,
                        user: res.data
                    }
                )
            })
            .catch(err => {
                console.error(err)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.user !== prevState.user) {
            axios
                .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        followers: res.data
                    })
                })
                .catch(err => {
                    console.error(err)
                });
            axios
                .get(`https://api.github.com/users/${this.state.currentUser}`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        currentUser: res.data
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    handleChange = (evt) => {
        this.setState({
            ...this.state,
            currentUser: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
            .then(res => {
                this.setState({
                    ...this.state,
                    followers: res.data
                })
            })
            .catch(err => {
                console.error(err)
            });
        axios
            .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
            .then(res => {
                this.setState({
                    ...this.state,
                    currentUser: res.data
                })
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
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Github Handle" onChange={this.handleChange}/>
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

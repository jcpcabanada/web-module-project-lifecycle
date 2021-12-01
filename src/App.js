import React from 'react';
// import axios from 'axios';

// https://api.github.com/users/jcpcabanada and https://api.github.com/users/jcpcabanada/followers

class App extends React.Component {
    state = {

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
                    <img width="300" src="https://avatars.githubusercontent.com/u/79226951?v=4" alt='profile pic' />
                    <a target='_blank' href="https://github.com/jcpcabanada" ><h2>Jordan Chaz Cabanada</h2></a>
                    <p>(jcpcabanada)</p>
                    <p>Total Repos: 32</p>
                    <p>Total Followers: 4</p>
                    {/*<User/>*/}
                </div>
                <div className="bottom">
                    <h2>Followers: </h2>
                    <img width="150" src="https://avatars.githubusercontent.com/u/72590723?v=4"/>
                    <a target="_blank" href='https://github.com/ryanghoward'><p>ryanghoward</p></a>
                    <img width="150" src="https://avatars.githubusercontent.com/u/72590723?v=4"/>
                    <a target="_blank" href='https://github.com/ryanghoward'><p>ryanghoward</p></a>
                    <img width="150" src="https://avatars.githubusercontent.com/u/72590723?v=4"/>
                    <a target="_blank" href='https://github.com/ryanghoward'><p>ryanghoward</p></a>
                    {/*<FollowerList/>*/}
                </div>
            </div>);
    }
}

export default App;

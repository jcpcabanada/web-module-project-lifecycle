import React from 'react';

// https://api.github.com/users/jcpcabanada and https://api.github.com/users/jcpcabanada/followers

class App extends React.Component {


    render() {
        return (
            <div className="app">
                <div className="top">
                    <h1>GITHUB INFO</h1>
                    <form>
                        <input/>
                        <button>Search</button>
                    </form>
                </div>
                <div className="card">
                    <>Card</>
                </div>
                <div className="bottom">
                    <h2>Followers: </h2>
                </div>
            </div>);
    }
}

export default App;

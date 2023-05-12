import React from 'react';
import CardList from './CardList';
import Header from './Header'
import Scroll from './Scroll'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchText: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots?.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            return (<h1>Loading..</h1>);
        } else {
            return (
                <div>
                    <Header onSearchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;

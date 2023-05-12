import React from 'react';
import CardList from './CardList';
import Header from './Header'
import { robots } from './robots';
import './App.css';



class App extends React.Component {
    constructor() {
        super();
        //const [searchText, setSearchText] = useState('');

        this.state = {
            searchText: '',
            robots: robots
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value });
        console.log(event.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchText)
        })

        return (
            <div>
                <Header onSearchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }


}

export default App;

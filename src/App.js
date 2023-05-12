import React from 'react';
import CardList from './CardList';
import Header from './Header'
import './App.css';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    render() {
        return (
            <div>
                <Header onSearchChange={this.onSearchChange} />
                <CardList searchText={this.state.searchText} />
            </div>
        );
    }


}

export default App;

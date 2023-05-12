import React from 'react';
import SearchBox from '../Components/SearchBox';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="header-title">RoboFriends</h1>
                <SearchBox onSearchChange={this.props.onSearchChange} />
            </div>
        )
    }
}





export default Header;
import React from 'react'
import './SearchBox.css'

class SearchBox extends React.Component {
  render() {
        return (
            <div className="search-wrapper">
                {/*<input className="search-box" type="search" placeholder="Search robots" onChange={this.onSearchChange} />*/}
                <input className="search-box" type="search" placeholder="Search robots" onChange={this.props.onSearchChange} />
            </div>
        )
    }
}


export default SearchBox;

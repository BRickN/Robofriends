import React from 'react';
import Card from './Card';

import './CardList.css';


class CardList extends React.Component {
  
    render() {
        //const searchText = this.props.searchText;
    

        const cardArray
            = this.props.robots?.map((robot) => {
                return (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email} />
                )
            })

        return (
            <div className="card-list-wrapper">
                {cardArray}
            </div>
        );

    }

}

export default CardList;
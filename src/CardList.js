import React from 'react';
import Card from './Card';
import './CardList.css';


class CardList extends React.Component {
    render() {
        //const searchText = this.props.searchText;
        //const filteredRobots = robots?.filter(robot => {
        //    robot.name.toLowerCase().includes(searchText)
        //});
        const robots = this.props.robots;

        const cardArray
            = robots?.map((robot) => {
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
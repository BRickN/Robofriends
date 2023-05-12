import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const robot = {
            id: this.props.id,
            name: this.props.name,
            email: this.props.email
        };

        return (
            <div className="robo-card">
                <img src={`https://robohash.org/${robot.id}?size=200x200`} alt='user' />
                <div>
                    <h2>{robot.name}</h2>
                    <p>{robot.email}</p>
                </div>
            </div>
        );
    }
}

export default Card
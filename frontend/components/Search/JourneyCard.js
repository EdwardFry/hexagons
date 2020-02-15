import React, { Component } from 'react';

import './JourneyCard.css';

class JourneyCard extends Component {
    render() {
        return (
            <div className="JourneyCard-container">
                <h2>Departure: Coventry</h2>
                <h2>Destination: London</h2>
                <p>Timings: </p>
                <p>Price: £50</p>
                <p>CO2 Footprint: 200</p>
                <button>Book</button>
            </div>
        );
    }
}

export default JourneyCard;
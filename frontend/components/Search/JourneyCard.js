import React, { Component } from 'react';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import './JourneyCard.css';

class JourneyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChanges: false
        }
        this.handleChangesClick = this.handleChangesClick.bind(this);
        console.log(this.props.data)
    }

    handleChangesClick(e) {
        this.setState({
            showChanges: !this.state.showChanges
        });
    }

    render() {
        let outTime = Math.floor(Math.random() * 18)
        let inTime = outTime + Math.floor((Math.random() * 2) + 1)
        let changes
        if (this.state.showChanges === false) {
            changes
        } else {
            changes = <div className="JourneyCard-changes-container">
                <p>Changes for the journey</p>
                <ul>
                    <li>Departure: {this.props.data[0].cityFrom} | 18:00</li>
                    <KeyboardArrowDown />
                    <li>{this.props.data[0].cityTo}</li>
                </ul>
            </div>
        }

        return (

            <div className="JourneyCard-container">
                <div>
                    <div className="JourneyCard-info-container">
                        <p>Airline: {this.props.data[0].airlines}</p>
                        <p>Availability: {this.props.data[0].availability.seats}</p>
                        <p>{outTime}:00 -> {inTime}:00</p>
                        <button onClick={this.handleChangesClick}>Transfers: 0</button>
                        <p>Price: £{this.props.data[0].price}</p>
                        <p>CO2: {Math.floor(this.props.data[1])}</p>
                        <button>Book</button>
                    </div>
                    {changes}
                </div>
            </div>

        );
    }
}

export default JourneyCard;
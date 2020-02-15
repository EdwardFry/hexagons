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
    }

    handleChangesClick(e) {
        this.setState({
            showChanges: !this.state.showChanges
        });
    }

    render() {
        let changes
        if (this.state.showChanges === false) {
            changes
        } else {
            changes = <div className="JourneyCard-changes-container">
                <p>Changes for the journey</p>
                <ul>
                    <li>Departure: London | 18:00</li>
                    <KeyboardArrowDown />
                    <li>blah</li>
                    <KeyboardArrowDown />
                    <li>blah</li>
                    <KeyboardArrowDown />
                    <li>blah</li>
                    <KeyboardArrowDown />
                    <li>blah</li>
                    <KeyboardArrowDown />
                    <li>blah</li>
                </ul>
            </div>
        }

        return (

            <div className="JourneyCard-container">
                <div>
                    <div className="JourneyCard-info-container">
                        <p>15:00 -> 17:00</p>
                        <button onClick={this.handleChangesClick}>Changes: 4</button>
                        <p>Price: £50</p>
                        <p>CO2 Footprint: 200</p>
                        <button>Book</button>
                    </div>
                    {changes}
                </div>
            </div>

        );
    }
}

export default JourneyCard;
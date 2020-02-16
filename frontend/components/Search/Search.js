import React, { Component } from 'react';
import JourneyCard from './JourneyCard';
import TextField from '@material-ui/core/TextField';
import Fade from 'react-reveal';

import './Search.css';

const journeys = {

}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {
                out: {

                },
                return: {

                }
            }
        }
    }
    render() {
        return (
            <div className="Search-container">
                <div className="Search-sidebar">
                    <div>
                        <br />
                        <h2>Review your order</h2>
                        <h3>Out 15th Feb 20:00</h3>
                        <p>Departure: Coventry</p>
                        <p>Arrival: London</p>
                        <button>Change</button>
                        <br /><br />
                        <h3>Return 17th Feb 17:00</h3>
                        <p>Departure: Coventry</p>
                        <p>Arrival: London</p>
                        <button>Change</button>

                        <h3 className="Search-total">Total: £56.00</h3>
                    </div>
                </div>
                <div className="Search-cards-container">

                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                    <JourneyCard />
                </div>
            </div >
        );
    }
}

export default Search;
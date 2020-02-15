import React, { Component } from 'react';
import JourneyCard from './JourneyCard';
import Fade from 'react-reveal';

import './Search.css';

const journeys = {

}

class Search extends Component {
    render() {
        return (
            <div className="Search-container">
                <Fade right>
                    <div className="Search-sidebar">
                        <br />
                        <h2>Review your order</h2>
                        <h3>Out 15th Feb 20:00</h3>
                        <p>Departure: Coventry</p>
                        <p>Arrival: London</p>
                        <button>Change</button>
                        <br />
                        <h3>Return 17th Feb 17:00</h3>
                        <p>Departure: Coventry</p>
                        <p>Arrival: London</p>
                        <button>Change</button>
                    </div>
                </Fade>
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
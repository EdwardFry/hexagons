import React, { Component } from 'react';
import JourneyCard from './JourneyCard';

import './Search.css';

const journeys = {

}

class Search extends Component {
    render() {
        return (
            <div className="Search-container">
                <JourneyCard />
                <JourneyCard />
                <JourneyCard />
                <JourneyCard />
                <JourneyCard />
                <JourneyCard />
            </div>
        );
    }
}

export default Search;
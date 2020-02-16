import React, { Component } from 'react';
import JourneyCard from './JourneyCard';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SearchPopUp from './SearchPopUp/SearchPopUp';
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

    componentDidMount() {
        axios.get('http://pavoldrotar.com:5000/cars')
            .then(res => {
                const persons = res.data;
                console.log(persons);
            })
    }

    render() {
        return (
            <div className="Search-container">
                <div className="Search-sidepopup" >
                    <SearchPopUp />
                </div>
                <div className="Search-sidebar">

                    <br />
                    <div><h2>Review your order</h2></div>
                    <div><h3>Out 15th Feb 20:00</h3></div>
                    <div><p>Departure: Coventry</p></div>
                    <div><p>Arrival: London</p></div>
                    <div><button>Remove</button></div>
                    <br /><br />
                    <div><h3>Return 17th Feb 17:00</h3></div>
                    <div><p>Departure: Coventry</p></div>
                    <div><p>Arrival: London</p></div>
                    <div><button>Remove</button></div>

                    <div><h3 className="Search-total">Total: £56.00</h3></div>
                </div>
                <div className="Search-search">
                    <div>
                        <TextField label="Outward" />
                        <TextField label="Return" />
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
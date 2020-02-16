import React, { Component } from 'react';
import JourneyCard from './JourneyCard';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SearchPopUp from './SearchPopUp/SearchPopUp';
import Fade from 'react-reveal';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dDate: "2020-02-20",
            dTime: "12:00",
            dLocation: "Prague",
            rDate: "2020-01-16",
            rTime: "12:00",
            rLocation: "London",
            isLoaded: false,
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchFlights = this.fetchFlights.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    fetchFlights(from, to, date) {
        console.log(`http://pavoldrotar.com:5000/flight?from=${from}&to=${to}&date=${date}`)
        axios.get(`http://pavoldrotar.com:5000/flight?from=${from}&to=${to}&date=${date}`)
            .then(res => {
                const list = res.data;
                if (list.constructor == Array) {
                    this.setState({
                        items: list,
                        isLoaded: !this.state.isLoaded
                    })
                }
                console.log(list)
            })
    }



    handleSubmit(e) {
        this.fetchFlights(this.state.dLocation, this.state.rLocation, this.state.dDate)
        console.log("Submitted")
    }

    render() {
        let journeys;
        console.log(this.state.items)
        journeys = this.state.items.map(item => (
            <Fade bottom>
                <JourneyCard data={item} />
            </Fade>
        ))
        let content;
        if (this.state.isLoaded === false) {
            content = <div className="Search-sidepopup" >
                <div className="SearchPopUp-container" >
                    <div className="SearchPopUp-departure">
                        <h2>Departure</h2>
                        <h3>Location</h3>
                        <input className="SearchPopUp-dlocation" type="text" name="dLocation" value={this.state.dLocation} onChange={this.handleChange} />
                        <h3>Date and Time of Departure</h3>
                        <input type="date" name="dDate"
                            value={this.state.dDate}
                            min="2022-01-16" max="2025-01-31" onChange={this.handleChange} />
                        <input type="time" name="dTime" value={this.state.dTime} onChange={this.handleChange} />
                    </div>
                    <div className="SearchPopUp-return">
                        <h2>Return</h2>
                        <h3>Location</h3>
                        <input className="SearchPopUp-rlocation" type="text" name="rLocation" value={this.state.rLocation} onChange={this.handleChange} />
                        <h3>Date and Time of Return</h3>
                        <input type="date" name="rDate"
                            value={this.state.rDate}
                            min="2022-01-16" max="2025-01-31" onChange={this.handleChange} />
                        <input type="time" name="rTime" value={this.state.rTime} onChange={this.handleChange} />
                    </div>
                    <button onClick={() => this.handleSubmit()}>Go!</button>
                </div >
            </div>
        } else {
            content = <div className="Search-cards-container">

                {journeys}
            </div>
        }

        return (
            <div className="Search-container">

                {content}


            </div >
        );
    }
}

export default Search;
import React, { Component } from 'react';

import './SearchPopUp.css';

class SearchPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dDate: "2022-01-16",
            dTime: "12:00",
            rDate: "2022-01-16",
            rTime: "12:00"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <form className="SearchPopUp-container" onSubmit={this.handleSubmit}>
                <div className="SearchPopUp-departure">
                    <h2>Departure</h2>
                    <h3>Date and Time of Departure</h3>
                    <input type="date" name="dDate"
                        value={this.state.dDate}
                        min="2022-01-16" max="2025-01-31" onChange={this.handleChange} />
                    <input type="time" name="dTime" value={this.state.dTime} onChange={this.handleChange} />
                </div>
                <div className="SearchPopUp-return">
                    <h2>Return</h2>
                    <h3>Date and Time of Return</h3>
                    <input type="date" name="rDate"
                        value={this.state.rDate}
                        min="2022-01-16" max="2025-01-31" onChange={this.handleChange} />
                    <input type="time" name="rTime" value={this.state.rTime} onChange={this.handleChange} />
                </div>
                <button>Go!</button>
            </form >
        );
    }
}

export default SearchPopUp;
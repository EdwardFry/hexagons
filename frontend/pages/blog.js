import React, { Component } from 'react';
import Nav from '../components/Navbar/Nav';
import About from '../components/About/About';

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <About />

            </React.Fragment>
        );
    }
}


export default AboutPage
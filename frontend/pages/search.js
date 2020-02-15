import React, { Component } from 'react';
import Nav from '../components/Navbar/Nav';
import Search from '../components/Search/Search';

const journeys = {

}

class SearchPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Search />
            </React.Fragment>
        );
    }
}

export default SearchPage;
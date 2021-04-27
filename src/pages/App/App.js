import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import Starships from '../Starships/Starships'
import StarshipDetails from '../StarshipDetails/StarshipDetails'

class App extends Component {
    state = {
        navItems: [
            { url: "/starships", name: "Star Wars Starships" },
        ]
    }
    render() {
        return (
            <>
                <NavBar navItems={this.state.navItems} />
                <Route exact path='/starships' render={() => <Starships />} />
                <Route exact path='/starship' render={( { location } ) => <StarshipDetails location={location} />} />

            </>
        )
    }

}

export default App;

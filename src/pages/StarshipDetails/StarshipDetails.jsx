import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PilotList from '../../components/Pilots/Pilots'


class StarShipDetails extends Component {
    state = {
        StarShipDetails: {},
    }

    render() {

        const { location } = this.props
        return (
            <>
                {
                    location.state.starship ?
                        <>
                            <div className="ships-details">
                                <h1>Name : {this.props.location.state.starship.name}</h1>
                                <h2>Model: {this.props.location.state.starship.model}</h2>
                                <h2>Pilots: {this.props.location.state.starship.pilots.length ? 
                                    <PilotList pilotUrls={this.props.location.state.starship.pilots} />
                                : 
                                    'No Pilots'}</h2>
                                <Link className="details-link" to={'/starships'}>
                                    Return
                                </Link>
                            </div >
                        </>
                        :
                        <h1><img src="https://i.pinimg.com/originals/00/94/18/009418460183d05cbbff41179436b3eb.gif" alt="loading"></img></h1>

                }
            </>
        )
    }
}
export default StarShipDetails;
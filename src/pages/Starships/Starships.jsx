import React, { Component } from 'react';
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'
class StarshipList extends Component {
    state = {
        starshipList: []
    }
    async componentDidMount() {
        const starshipList = await getAllStarships();
        this.setState({ starshipList: starshipList.results })
    }
    
    render() {
        return (
            <>
            {this.state.starshipList.length ?
            <div className="d-flex flex-wrap">

                {this.state.starshipList.map((starship) => (

                    <div className="ships-page" key={starship.index}>
                        <Link className="links" to={{
                            pathname: '/starship',
                            state: { starship },
                        }}>
                            <div className="ships-card">
                                {starship.name}
                            </div>
                        </Link>
                    </div>

                ))}

            </div>
            :
            
            <h1><img src="https://i.pinimg.com/originals/00/94/18/009418460183d05cbbff41179436b3eb.gif" alt="loading"></img></h1>
            }
        </>    
        );
    }
}

export default StarshipList;
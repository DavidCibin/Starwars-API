import React, { Component } from 'react';
import { getPilots } from '../../services/sw-api'

class PilotList extends Component {
  state = { 
    pilotUrls: this.props.pilotUrls,
    pilots: []
   }
  
  async componentDidMount() {
    const results = await getPilots(this.state.pilotUrls);
    this.setState({ pilots: results })
  }

  render() { 
    const { pilots } = this.state;
    return (
      <ul>
        { pilots.map((pilot, idx) => (
          <li key={idx}>{pilot.name}</li>
        ))}
      </ul>
     );
  }
}
 
export default PilotList;
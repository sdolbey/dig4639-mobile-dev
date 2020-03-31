import React from 'react';
import './index.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return(
            <div className="card">
                <h3>{this.props.name}</h3>
                <h1>{this.props.temperature} {this.props.temperatureUnit}</h1>
                <p>{this.props.detailedForecast}</p>
            </div>
        )
    }
}

export default Card;
import React from 'react';

class ViewProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Profile</h2>
                <span>{this.props.name} - {this.props.count} contact(s)</span>
                <i className="material-icons icon-button u-pull-right" onClick={this.props.updateAll}>refresh</i>
            </div>
        )
    }
}

export default ViewProfile;
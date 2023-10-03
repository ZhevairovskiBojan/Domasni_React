import React from 'react';


class SportClass extends React.Component {
    render() {
        console.log(this.props);

        return(
            <div>
                <h2>Name: {this.props.player.name}</h2>
                <h2>LastName: {this.props.player.lastName}</h2>
                <h2>Score: {this.props.player.score}</h2>
            </div>
        )
    }
}

export default SportClass; 

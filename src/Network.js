import React, { Component } from 'react';
import Line from './Line';

class Network extends Component {
    render() {
        return(
            <div className="App">
                <Line titre={'Un premier titre'} />
                <Line titre={'Un deuxième titre'} />
                <Line titre={'Un premier titre'} />
                <Line titre={'Un deuxième titre'} />
                <Line titre={'Un premier titre'} />
                <Line titre={'Un deuxième titre'} />
                <Line titre={'Un premier titre'} />
            </div>
        )

    }
}

export default Network;
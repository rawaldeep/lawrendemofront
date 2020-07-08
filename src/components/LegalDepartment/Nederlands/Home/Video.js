
import React, { Component } from 'react';
import { Player } from 'video-react';

export default class Video extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          source: props.url
        };
    }
    
    render() {
        return (
            <div className="videowrapper">
          <Player
      playsInline
      src={this.props.url}
    />
            </div>
        )
    }
}

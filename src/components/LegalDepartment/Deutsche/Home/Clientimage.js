import React, { Component } from 'react';
const appUrl = "https://lawra.be/wp-json/wp/v2/";

export default class Clientimage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
          }

      }
      fetchFirst(url) {
        let that = this;
        if (url) {
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (result) {
    
            that.setState({ 
                 images: result
             });
    
          });
        }
      } 
      componentWillMount() {
          let id = this.props.imageId
        let postUrl = `${appUrl}media/${id}`;
        this.fetchFirst(postUrl);
      }
    render() {
        return (
            <>
            <img alt="client" src={this.state.images.source_url} />
            </>
        )
    }
}

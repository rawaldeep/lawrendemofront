import React, { Component } from 'react';
const appUrl = "http://15.188.3.188.xip.io/wp-json/wp/v2/";

export default class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: []
          }

      }
      fetchFirst(url) {
        let that = this;
        if (url) {
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (result) {
    
            that.setState({ 
                 author: result
             });
    
          });
        }
      } 
      componentWillMount() {
          let id = this.props.authorID
        let postUrl = `${appUrl}users/${id}`;
        this.fetchFirst(postUrl);
      }
    render() {
        return (
            <>
              {this.state.author.name}  
            </>
        )
    }
}

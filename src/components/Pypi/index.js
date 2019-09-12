import React, { Component } from './node_modules/react';

class PypiCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      source: "Pypi",
      category: props.category, 
      title: props.title,
      description: props.description,
      url: props.url
    }
  }

  render() {
    return (
      <div>
        <a href={this.state.url}>
          <h1>{this.state.title}</h1>
          <p>{this.state.category}</p>
          <p>{this.state.description}</p>
        </a>
      </div>
     )
  }

}




export default PypiCard
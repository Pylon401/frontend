import React from 'react';
import "./github_card.css"

const gitHubIcon = require("../../img/github.png")

function GitHubCard(props){

  return (
    <div className="card card-github" >
      <a href={props.data.link} target="_blank">
        <div className='card-content'>
          <h1>{props.data.title}</h1>
          <p>{props.data.desc}</p>
        </div>
        <div className="card-footer">
          <p className="stars">{props.data.stars} stars</p>
          <p className="category">{props.data.category}</p>
          <img src={gitHubIcon} alt="GitHub logo"></img>
        </div>
      </a>
    </div>
   )
}

export default GitHubCard
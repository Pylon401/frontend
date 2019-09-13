import React from 'react';
import "./reddit_card.css"

const pythonIcon = require("../../img/python.png")
const programmerHumor = require("../../img/programmerhumor.png")

function RedditCard(props){
  let icon;
  let content;
  if (props.data.category === 'webdev'){
    icon = pythonIcon;
  } else if (props.data.category === 'programmerhumor'){
    icon = programmerHumor;
  }

  if (props.data.image) {
    content = <img src={props.data.image} className="redditCardImage"/>
  }

  return (
    <div className="card card-reddit" >
      <a href={ props.data.link} target="_blank">
        <div className='card-content'>
          {content}
          <h1>{props.data.title}</h1>
          <p>{props.data.desc}</p>
        </div>
        <div className="card-footer">
          <p className="ups">{props.data.ups} upvotes</p>
          <p className="category">{props.data.category}</p>
          <img src={icon} alt="Subreddit logo"></img>
        </div>
      </a>
    </div>
   )
}

export default RedditCard
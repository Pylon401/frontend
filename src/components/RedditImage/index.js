import React from 'react';
import "./reddit_card.css"

const webDev = require("../../img/webdev.png")
const programmerHumor = require("../../img/programmerhumor.png")

function RedditCard(props){
  let icon;
  let content;
  if (props.data.category === 'webdev'){
    icon = webDev;
  } else if (props.data.category === 'programmerhumor'){
    icon = programmerHumor;
  }

  if (props.data.image) {
    content = <img src={props.data.image} className="redditCardImage"/>
  } else {
    content = <><h1>{props.data.title}</h1><p>{props.data.desc}</p></>
  }

  return (
    <div className="card card-reddit-img" >
      <a href={ "https://www.reddit.com" + props.data.link} target="_blank">
        <div className='card-content'>
          {content}
        </div>
        <div className="card-footer">
          <p className="ups">{props.data.ups} upvotes</p>
          <img src={icon} alt={props.data.category} title={props.data.category}></img>
        </div>
      </a>
    </div>
   )
}

export default RedditCard
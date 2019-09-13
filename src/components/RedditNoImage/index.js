import React from 'react';
import "./reddit_no_image.css"

const pythonIcon = require("../../img/python.png")
const learnprogramming = require("../../img/learnprogramming.png")

function RedditNoImg(props){
  let icon;

  if (props.data.category === 'python'){
    icon = pythonIcon;
  } else if (props.data.category === 'learnprogramming'){
    icon = learnprogramming;
  }

  return (
    <div className="card card-reddit" >
      <a href={ props.data.link} target="_blank">
        <div className='card-content'>
          <h1>{props.data.title}</h1>
          <p>{props.data.desc}</p>
        </div>
        <div className="card-footer">
          <p className="ups">{props.data.ups} upvotes</p>
          <img src={icon} alt={props.data.category} title={props.data.category}></img>
        </div>
      </a>
    </div>
   )
}

export default RedditNoImg
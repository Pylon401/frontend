import React, { Component } from 'react';
import "./pypi_card.css"


const pythonIcon = require("../../img/pythonIcon.png")

function PypiCard(props){
  let styles = {
    pypiCard: {
      // "border": "1px solid black",
      // "borderRadius": "15px",
      // "margin": "10px 0",
      // "padding": "5px 10px",
      // "width": "30%",
    }
  }

  return (
    <div style={styles.pypiCard} className="card card-pypi" >
      <a href={props.data.link} target="_blank">
        <div className='card-content'>
          <h1>{props.data.title}</h1>
          <p>{props.data.desc}</p>
        </div>
        <div className="card-footer">
          <p>Popular</p>
          <img src={pythonIcon}></img>
        </div>
      </a>
    </div>
   )
}

export default PypiCard
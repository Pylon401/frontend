import React, { Component } from 'react';
import "./pypi_card.css"

const pythonIcon = require("../../img/pypi_logo.png")

function PypiCard(props){

  return (
    <div className="card card-pypi" >
      <a href={props.data.link} target="_blank">
        <div className='card-content'>
          <h1>{props.data.title}</h1>
          <p>{props.data.desc}</p>
        </div>
        <div className="card-footer">
          <p>{props.data.category}</p>
          <img src={pythonIcon} alt="PyPI logo"></img>
        </div>
      </a>
    </div>
   )
}

export default PypiCard
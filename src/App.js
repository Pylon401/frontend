import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import PypiCard from './components/Pypi'
import About from './components/About'

import GitHubCard from './components/GitHub'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Feed} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

class Feed extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      loadedData: false,
      data: {},
      randomizedList: []
    }
  }

  //Create a large list of data for us to shuffle and render content upon.
  createBigList(result){

    let bigList = [];
    let randomizedList;

    result.map( function(result, index){
      let category = result.category 
      let source = result.source

      result.data.map( function(post){
        
        let newPost = {
          source: source,
          category: category,
          ...post
        }
        bigList.push(newPost)
      })
    })
    
    randomizedList = this.randomizeList(bigList)

    this.setState( {
      loadedData: true,
      data: result,
      randomizedList: randomizedList
    });
  }
  //Shuffle Big List
  randomizeList(list){
    let randomizedList = []
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    while (list.length){
      let randomIndex = getRandomInt(list.length - 1)
      let randomArrayValue = list.splice(randomIndex, 1) 
      randomizedList.push( randomArrayValue )
    }

    console.log("RANDOMIZEDLIST", randomizedList)

    return randomizedList

  }

  componentDidMount(){
    //Load all the data
    if (!this.state.loadedData){
      fetch("https://pyn-terest.herokuapp.com/")
        .then(res => res.json())
        .then( (result) => {
          //Combine list data with category and source    
          //Push data into Big List
          this.createBigList(result);

        })
        .catch( res => {
          console.log('Error Message:', res)
        }
      )
    }





    //Render data on Big List
    
  } //

  render(){
    if (this.state.loadedData){
      return (
        <div id="card-display">
          {
            this.state.randomizedList.map( function(post, index){

              let compare = post[0].source;

              console.log('CARD LOADED: ', compare);

              if (compare == 'reddit'){
                  return <div><h3> REDDIT </h3></div> 
              }
              
              if (compare == 'pypi'){
                return <PypiCard data={post[0]}/>    
              }
              if (compare == 'github'){
                return <GitHubCard data={post[0]} />
              }

            })

        }

        </div>
      )
    }

    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

export default App;

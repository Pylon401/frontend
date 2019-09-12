import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import PypiCard from './components/Pypi'
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class Feed extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      loadedData: false,
      data: {}
    }
  }

  componentDidMount(){

    if (!this.state.loadedData){
      fetch("https://pyn-terest.herokuapp.com/")
        .then(res => res.json())
        .then( (result) => {
          this.setState( {
            loadedData: true,
            data: result
          });
          console.log("DATAAAAAAAAAAAAAAa",this.state.data)
        })
        .catch( res => {
          console.log('Error Message:', res)
        }
      )
    }
  }

  render(){

    let githubCards = "";
    if (this.state.loadedData){
      return (
        <div id="card-display">
          {
            this.state.data[6].data.map( function(post, index){
              return <PypiCard data={post}/>    
            })
          }
          {
            this.state.data[7].data.map( function(post, index){
              return <PypiCard data={post}/>    
            })
          }
          {
            this.state.data[0].data.map( function(post, index){
              return <GitHubCard data={post}/>    
            })
          }
          {
            this.state.data[1].data.map( function(post, index){
              return <GitHubCard data={post}/>    
            })
          }
        </div>
      )
    }

    return (
      <div>
        <h2>Home</h2>
        {githubCards}
      </div>
    );
  }
}

export default App;

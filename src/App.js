import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import PypiCard from '/components/Pypi'

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
    this.state = {}
  }

  componentDidMount(){
    fetch("https://pyn-terest.herokuapp.com/")
      .then(res => res.json())
      .then( (result) => {
        this.setState(result);
      })
      .catch( res => {
        console.log('Error Message', res)
      })

    console.log('RESUUUUUUUULT',this.state)
  }

  render(){
    return (
      <div>
        <h2>Home</h2>
        <PypiCard />
      </div>
    );
  }
}

// function Feed() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <PypiCard />
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

// class PypiCard extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     source: "Pypi",
  //     category: props.category, 
  //     title: props.title,
  //     description: props.description,
  //     url: props.url
  //   }
  // }
  // render() {
  //   return (
  //     <div>
  //       <a href={this.state.url}>
  //         <h1>{this.state.title}</h1>
  //         <p>{this.state.category}</p>
  //         <p>{this.state.description}</p>
  //       </a>
  //     </div>
  //    )
  // }
  // }
function PypiCard (){

  let styles = {
    pypiCard: {
      "border": "1px solid black"
    }
  }

  return (
    <div style={styles.pypiCard} >
      <a href="https:/reddit.com" target="_blank">
        <h1>Attack on Titan, or Attack on Distributed Denial of Service?</h1>
        <p>Popular</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam 
          dolor in ligula maximus pellentesque. Donec est mi, luctus nec tellus 
          pellentesque, mollis euismod diam. Curabitur commodo scelerisque malesuada.
        </p>
      </a>
    </div>
   )
}


export default App;

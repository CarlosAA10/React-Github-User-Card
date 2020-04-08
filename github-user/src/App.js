import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 

import GitHubCard from "./components/GitHubCard"; 
import FollowersCard from "./components/FollowersCard"; 

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      githubData: [],
      followerData: [], 
    }; 
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/CarlosAA10")
    .then(response => {
      console.log(response.data); 
      this.setState({
        githubData: response.data,
      })
    })
    .catch(err => {
      console.log(err); 
    });

    axios.get("https://api.github.com/users/CarlosAA10/followers")
    .then(response => {
      console.log("follower data",response.data); 
      this.setState({
        followerData: response.data,
      })
    })
    .catch(err => {
      console.log(err); 
    })

  }



  render() {
    return (
      <div>
        <h2>Your App!</h2>
        <GitHubCard
        githubData={this.state.githubData}

        />
        <FollowersCard followerData={this.state.followerData}/>
      </div>
    )
  }
}

export default App;

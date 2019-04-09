import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an image to earn points, but don't click on one more than once or you'll have to start over!"

class App extends Component {

state = {
  friends,
  correctGuesses,
  bestScore,
  clickMessage
};

setClicked = id => {
  const friends = this.state.friends;

  const clickedfriends = friends.filter(friends => friends.id === id);

if (clickedfriends[0].clicked) {
  console.log(correctGuesses);
  console.log(bestScore);

  correctGuesses = 0;
  clickMessage = "What are you doing? You already clicked that one! Sorry, you gotta start over now."

  for (let i = 0; i < friends.length; i++) {
    friends[i].clicked = false;
  }
  
this.setState({clickMessage});
this.setState ({correctGuesses});
this.setState({friends});

} else if (correctGuesses < 8) {
  clickedfriends[0].clicked = true;

  correctGuesses++;

  if (correctGuesses > bestScore){
    bestScore = correctGuesses;
    this.setState({bestScore});
  }

  friends.sort(function(a,b) {return 0.5 - Math.random()});

  this.setState({friends});
  this.setState({correctGuesses});
  this.setState({clickMessage});
} else {
  clickedfriends[0].clicked = true;

  correctGuesses = 0;

  clickMessage = "Wow, great job! Bet you can't do it again....Give it a try!";
  bestScore = 8;
  this.setState({bestScore});

  for (let i = 0; i < friends.length; i++) {
    friends[i].clicked = false;
  }

  friends.sort(function(a,b) {
    return 0.5 - Math.random()
  });

  this.setState({friends});
  this.setState({correctGuesses});
  this.setState({clickMessage});
}
};

  render() {
    return (
      <Wrapper>
        <Title>Who do you want on your team?!</Title> 
        {this.state.friends.map(match => (
          // eslint-disable-next-line no-unused-expressions
          <FriendCard
          setClicked={this.setClicked}
          id={match.id}
          key={match.id}
          image={match.image}
          />
        ))}

      </Wrapper>
    );
  }
} // ENDS COMPONENT

export default App;

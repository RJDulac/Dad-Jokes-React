import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";

class JokeList extends Component {
  static defaultProps = {
    numJokes: 10
  };
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }
  async componentDidMount() {
    const jokes = [];
    while (jokes.length < this.props.numJokes) {
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push(res.data.joke);
      this.setState({ jokes });
    }
    console.log(this.state.jokes[0]);

    // this.setState({ joke: res.data.joke });
    // console.log(res.data.joke);
  }
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt=""
          />
          <button className="Joke-list-getmore">New Jokes</button>
        </div>

        <div className="JokeList-jokes">
          {this.state.jokes.map(joke => (
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default JokeList;

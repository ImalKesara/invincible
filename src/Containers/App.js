import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/Searchbox";
import Scroll from "../Components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchCahnge = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="">RoboFriendz</h1>
          <SearchBox searchChange={this.onSearchCahnge} />
          <Scroll>
            <Cardlist robots={filteredRobots} />;
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

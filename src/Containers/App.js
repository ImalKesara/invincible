import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/Searchbox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="">RoboFriendz</h1>
          <SearchBox searchChange={this.onSearchCahnge} />
          <Scroll>
            <ErrorBoundary>
              <Cardlist robots={filteredRobots} />;
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

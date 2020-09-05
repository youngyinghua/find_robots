import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => ({
  searchfield: state.searchRobots.searchfield,
  robots: state.requestRobots.robots,
  pending: state.requestRobots.pending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  //equals to fowllowing function
  // onSearchChange(event) {
  //   dispatch(setSearchField(event.target.value));},
  onRequestRobots: () => requestRobots(dispatch),
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchfield, onSearchChange, robots, pending } = this.props;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !pending ? (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <input
          className="pa3 ba b-green bg-lightest-blue"
          type="search"
          onChange={onSearchChange}
          placeholder="search robot"
        />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

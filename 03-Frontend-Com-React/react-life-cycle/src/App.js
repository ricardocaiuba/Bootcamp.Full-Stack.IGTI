import React, { Component } from "react";

import Users from "./components/users/Users";
import Toggle from "./components/toggle/Toggle";

const INITIAL_STATE = {
  users: [],
  showUsers: true,
};
class App extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }
  async componentDidMount() {
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=5"
    );
    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }
  handleShowUsers = (isChecked) => {
    this.setState({
      showUsers: isChecked,
    });
  };
  render() {
    const { showUsers, users } = this.state;
    return (
      <div className="container">
        <h3>React Lifecycle</h3>
        <hr />
        <Toggle
          onToggle={this.handleShowUsers}
          enabled={showUsers}
          labelOff="Ocultar usuários"
          labelOn="Mostrar usuários"
        />
        <hr />
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
export default App;

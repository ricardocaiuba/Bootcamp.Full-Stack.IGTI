import React, { Component } from "react";
import User from "./User";

const INITIAL_STATE = {
  secondsVisible: 0,
};
class Users extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;
    return (
      <div>
        <h6>Users - {secondsVisible}</h6>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Users;

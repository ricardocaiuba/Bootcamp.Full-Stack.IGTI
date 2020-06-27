import React, { Component } from "react";
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import Candidates from "./components/Candidates/Candidates";

const INITIAL_STATE = {
  candidates: [],
  previousVotes: [],
  previousPercentages: [],
};

class App extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch("http://localhost:8080/votes")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const { candidates } = this.state;

          const previousVotes = candidates.map(({ id, votes }) => {
            return { id, votes };
          });

          const previousPercentages = candidates.map(({ id, percentage }) => {
            return { id, percentage };
          });

          this.setState({
            candidates: json.candidates,
            previousVotes,
            previousPercentages,
          });
        });
    }, 1000);
  }

  render() {
    const { candidates, previousVotes, previousPercentages } = this.state;

    if (candidates.length === 0) {
      return <Spinner description="Carregando..." />;
    }
    return (
      <div className="container">
        <Header>Votação</Header>
        <hr />
        <Candidates
          previousVotes={previousVotes}
          previousPercentages={previousPercentages}
          candidates={candidates}
        />
        <hr />
        <p className="text-right" style={{ fontSize: "0.5rem", color: "gray" }}>
          Todos os direitos reservados
        </p>
      </div>
    );
  }
}

export default App;

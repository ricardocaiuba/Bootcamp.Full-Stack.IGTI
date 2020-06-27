import React from "react";
import Card from "../Card/Card";
import Candidate from "./Candidate";
import FlipMove from "react-flip-move";

function Candidates({ candidates, previousVotes, previousPercentages }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id, name } = candidate;
          const previousVoteObject = previousVotes.find(
            (item) => item.id === id
          );
          const previousVote = !!previousVoteObject
            ? previousVoteObject.votes
            : 0;

          const previousPercantageObject = previousPercentages.find(
            (item) => item.id === id
          );
          const previousPercentage = !!previousPercantageObject
            ? previousPercantageObject.percentage
            : 0;

          return (
            <div key={id}>
              <Card title={name}>
                <Candidate
                  previousVote={previousVote}
                  previousPercentage={previousPercentage}
                  candidate={candidate}
                  position={index + 1}
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Candidates;

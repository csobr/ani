import React, {useEffect, useState} from 'react';
import ProgressBar from './ProgressBar';
import {firebase} from '../database/Firebase';

type Props = {
  a: string;
  b: string;
  c: string;
};

const Poll: React.FC<Props> = () => {
  const [voteData, setVoteData] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const url = 'http:///localhost:3000/api/pollApi';

  const db = firebase.database();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVoteData(data);
        let sum = 0;
        data.forEach((obj) => {
          sum += obj.votes;
        });
        setTotalVotes(sum);

        let didVote = sessionStorage.getItem('voted');
        if (didVote) {
          setVoted(JSON.parse(didVote));
        }
      });
  }, []);

  function writePollResults() {
    db.ref('poll/').set({
      totalVotes: totalVotes + 1,
      voteData: voteData,
    });
  }
  const submitVote = (e) => {
    if (!voted) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      sessionStorage.setItem('voted', JSON.stringify(!voted));
      const options = {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers: {'Content-Type': 'application/json'},
      };
      fetch(url).then((res) => res.json());
    }
    writePollResults();
  };

  let pollOptions;
  if (voteData) {
    pollOptions = voteData.map((item) => {
      return (
        <li key={item.id}>
          <button onClick={submitVote} data-id={item.id}>
            {item.option}
          </button>
        </li>
      );
    });
  }

  let results;
  if (voteData) {
    results = voteData.map((item) => {
      return (
        <ProgressBar
          key={item.id}
          value={Math.round(100 / totalVotes) * item.votes}
          data-id={item.id}
          question={item.option}
        />
      );
    });
  }

  return (
    <div className="poll">
      <div className="poll-container">{voted ? results : pollOptions}</div>
      <br />
      <p>Antal röster: {totalVotes}</p>
    </div>
  );
};

export default Poll;

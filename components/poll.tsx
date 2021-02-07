import React, {useEffect, useState} from 'react';
import ProgressBar from './progressBar';

const Poll = () => {
  const [voteData, setVoteData] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const url = 'http:///localhost:3000/api/pollApi';
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
        const getTotalVotes = localStorage.getItem('totalVotes');
        if (getTotalVotes != '0') {
          setTotalVotes(JSON.parse(getTotalVotes));
        }
        let getVoteData = localStorage.getItem('voteData');
        if (getVoteData != null) {
          setVoteData(JSON.parse(getVoteData));
        }
      });
  }, []);

  const submitVote = (e) => {
    if (voted === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);

      localStorage.setItem('totalVotes', JSON.stringify(totalVotes + 1));
      localStorage.setItem('voteData', JSON.stringify(voteData));
      setVoted(!voted);
      const options = {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers: {'Content-Type': 'application/json'},
      };

      fetch(url)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
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
      <p>Total Röster: {totalVotes}</p>
    </div>
  );
};

export default Poll;

import React, {useEffect, useState} from 'react';

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
      });
  }, []);

  const submitVote = (e) => {
    if (voted === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
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
            <span>-{item.votes}</span>
          </button>
        </li>
      );
    });
  }
  return (
    <div className="poll">
      <ul className={voted ? 'results' : 'options'}>{pollOptions}</ul>
      <p>Total Votes: {totalVotes}</p>
    </div>
  );
};

export default Poll;

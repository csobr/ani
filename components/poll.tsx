import React, {useEffect, useState} from 'react';
import firebase from '../database/Firebase';
import ProgressBar from './ProgressBar';
import Loading from './Loading';

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
    const didVote = sessionStorage.getItem('voted');

    if (didVote != null) {
      setVoted(JSON.parse(didVote));
    }

    const getPollResults = db.ref('poll/');
    getPollResults
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setVoteData(data.voteData);
          setTotalVotes(data.totalVotes);
        }
      })
      .catch((error) => console.log('No available data', error));
  }, []);

  const writePollResults = () => {
    db.ref('poll/').update({
      totalVotes: totalVotes + 1,
      voteData: voteData,
    });
  };
  const submitVote = (e) => {
    if (!voted) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      sessionStorage.setItem('voted', JSON.stringify(!voted));
    }
    writePollResults();
  };

  if (!voteData) return <Loading show={true} />;

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

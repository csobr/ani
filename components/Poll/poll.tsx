import React, {useEffect, useState} from 'react';
import firebase from '../../db/Firebase';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loader/Loading';

type Props = {
  a: string;
  b: string;
  c: string;
};
const db = firebase.database();
export const getPollResults = (setVoteData, setTotalVotes) => {
  db.ref('poll/')
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setVoteData(data.voteData);
        setTotalVotes(data.totalVotes);
      }
    })
    .catch((error) => console.log('No available data', error));
};

export const writePollResults = (totalVotes, voteData) => {
  db.ref('poll/').update({
    totalVotes: totalVotes + 1,
    voteData: voteData,
  });
};

const Poll: React.FC<Props> = () => {
  const [voteData, setVoteData] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const signInAnon = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log('user', firebase.auth().currentUser.uid);
      })
      .catch((error) => {
        console.log('error', error.code, error.message);
      });
  };

  useEffect(() => {
    signInAnon();
    getPollResults(setVoteData, setTotalVotes);

    const didVote = sessionStorage.getItem('voted');
    if (didVote != null) {
      setVoted(JSON.parse(didVote));
    }
  }, []);

  const submitVote = (e) => {
    if (!voted) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      sessionStorage.setItem('voted', JSON.stringify(!voted));
    }
    writePollResults(totalVotes, voteData);
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
      let rounded = (100 / totalVotes) * item.votes;
      return <ProgressBar key={item.id} value={rounded.toFixed(1)} data-id={item.id} question={item.option} />;
    });
  }

  return (
    <div className="poll">
      <h3>När försökte du sist imponera på för dina kompisar?</h3>
      <div className="poll-container">{voted ? results : pollOptions}</div>
      <br />
      <p>Antal röster: {totalVotes}</p>
    </div>
  );
};

export default Poll;

import React, {useEffect, useState} from 'react';
import firebase from '../../db/Firebase';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loader/Loading';
import Error from '../Error/Error';

type Props = {
  a: string;
  b: string;
  c: string;
};
const db = firebase.database();
export const getPollResults = (setVoteData, setTotalVotes, setLoading, setError) => {
  db.ref('poll/')
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setVoteData(data.voteData);
        setTotalVotes(data.totalVotes);
        setLoading(false);
      }
    })
    .catch((error) => {
      setError(true);
      console.log('No available data', error);
    });
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const signInAnon = () => {
    try {
      firebase.auth().signInAnonymously();
    } catch (error) {
      console.log('auth failed', error.code, error.message);
    }
  };

  useEffect(() => {
    signInAnon();
    getPollResults(setVoteData, setTotalVotes, setLoading, setError);

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
  if (loading) return <Loading />;
  if (error) return <Error />;

  let pollOptions;
  if (voteData) {
    pollOptions = voteData.map((item) => {
      return (
        <ul key={item.id}>
          <li>
            <button onClick={submitVote} data-id={item.id}>
              {item.option}
            </button>
          </li>
        </ul>
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
      <h3>Lorem ipsum dolor sit amet, consectetur?</h3>
      <br />
      <div className="poll-container">{voted ? results : pollOptions}</div>
      <br />
      <p>Antal röster: {totalVotes}</p>
    </div>
  );
};

export default Poll;

import React, {useEffect, useState} from 'react';
import {ref, child, get, update} from 'firebase/database';
import {signInAnonymously} from 'firebase/auth';
import {db, auth} from '../../db/Firebase';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loader/Loading';
import Error from '../Error/Error';

export const getPollResults = (setVoteData, setTotalVotes, setLoading, setError) => {
  const refDB = ref(db);

  get(child(refDB, 'poll/'))
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
  update(ref(db, 'poll'), {totalVotes: totalVotes + 1, voteData: voteData});
};

const Poll = () => {
  const [voteData, setVoteData] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const signInAnon = () => {
    try {
      signInAnonymously(auth);
    } catch (error) {
      console.log('auth failed', error.code, error.message);
    }
  };

  useEffect(() => {
    signInAnon();
    const didVote = sessionStorage.getItem('voted');
    if (didVote != null) {
      setVoted(JSON.parse(didVote));
    }
    getPollResults(setVoteData, setTotalVotes, setLoading, setError);
    return () => {
      getPollResults(setVoteData, setTotalVotes, setLoading, setError);
    };
  }, []);

  const submitVote = (e) => {
    if (!voted) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      sessionStorage.setItem('voted', JSON.stringify(!voted));
      writePollResults(totalVotes, voteData);
    }
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
      <h3>När försökte du sist imponera på en kompis?</h3>
      <br />
      <div className="poll-container">{voted ? results : pollOptions}</div>
      <br />
      <p>Antal röster: {totalVotes}</p>
    </div>
  );
};

export default Poll;

// import {getPollResults, writePollResults} from '../../components/Poll/poll';
// import firebase from 'firebase';

// const voteData = {
//   id: 0,
//   votes: 0,
//   option: 'sen',
// };
// const totalVotes = 1;

// const snapshot = {
//   val: () => voteData,
//   totalVotes,
// };

// const get = jest.fn((event, callback) => callback(snapshot));
// const ref = jest.fn(() => ({get}));
// const database = jest.spyOn(firebase, 'database').mockReturnValue(({ref} as unknown) as any);
// expect(get).toHaveBeenCalledWith({get: Object});

import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  id: number;
  votes: number;
  option: string;
};

const pollData = [
  {id: 0, votes: 0, option: 'Option 1'},
  {id: 1, votes: 0, option: 'Option 2'},
  {id: 2, votes: 0, option: 'Option 3'},
];
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(pollData);
};

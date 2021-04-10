import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  id: number;
  votes: number;
  option: string;
};

const pollData = [
  {id: 0, votes: 0, option: 'Idag'},
  {id: 1, votes: 0, option: 'Ingen aning'},
  {id: 2, votes: 0, option: 'Igår'},
];
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(pollData);
};
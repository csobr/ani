import {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  id: number;
  votes: number;
  option: string;
};

const pollData: Data = {id: 0, votes: 0, option: 'option'};
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(pollData);
};

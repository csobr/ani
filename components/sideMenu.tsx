import React from 'react';
import Spacer from './Spacer';
import {motion} from 'framer-motion';

interface Props {
  open: boolean;
  closed: any;
}
const SideMenu = ({open, closed}: Props) => {
  return (
    <div style={{transform: open ? 'translateX(0)' : 'translateX(100%)'}} className="side-menu">
      <a onClick={closed}>Close</a>
      <Spacer size={15} />
      <div className="about">
        <h2>Vad är ani?</h2>

        <p>
          Ipsum perferendis harum quidem exercitationem. Iure sed qui ut laudantium ut quisquam harum. Et itaque qui
          praesentium. Tempora quibusdam et veniam. Nihil necessitatibus qui minus ipsam cum iste porro.
        </p>
      </div>
    </div>
  );
};

export default SideMenu;

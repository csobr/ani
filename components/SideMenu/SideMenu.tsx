import React from 'react';
import Spacer from '../Spacer/Spacer';

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

        <p>En plats för dig som tonåring att lära dig mer din hjärna.</p>
      </div>
    </div>
  );
};

export default SideMenu;

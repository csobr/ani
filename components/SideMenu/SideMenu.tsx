import React from 'react';
import Spacer from '../Spacer/Spacer';

interface Props {
  open: boolean;
  closed: any;
}
const SideMenu = ({open, closed}: Props) => {
  return (
    <div style={{transform: open ? 'translateX(0)' : 'translateX(100%)'}} className="side-menu">
      <button aria-label="closed" onClick={closed}>
        Close
      </button>
      <Spacer size={15} />
      <div className="about">
        <h2>What's ani?</h2>

        <p>A place for you as a teenager to learn more about your brain.</p>
      </div>
    </div>
  );
};

export default SideMenu;

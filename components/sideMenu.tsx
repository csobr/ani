import React, {useState} from 'react';

type Props = {
  open: boolean;
  closed: any;
};
const SideMenu = ({open, closed}: Props) => {
  return (
    <div className="side-menu" style={{transform: open ? 'translateX(0)' : 'translateX(100%)'}}>
      <a onClick={closed}>Close</a>
    </div>
  );
};

export default SideMenu;

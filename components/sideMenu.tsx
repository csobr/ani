import React from 'react';

interface Props {
  open: boolean;
  closed: any;
  clickedOutsideRef: any;
}
const SideMenu = ({clickedOutsideRef, open, closed}: Props) => {
  return (
    <div ref={clickedOutsideRef} className="side-menu" style={{transform: open ? 'translateX(0)' : 'translateX(100%)'}}>
      <a onClick={closed}>Close</a>
    </div>
  );
};

export default SideMenu;

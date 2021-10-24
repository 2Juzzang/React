import React from 'react';
import './Style/SideBarRow.css';


import { Avatar } from '@mui/material';

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <div className="sideBarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;

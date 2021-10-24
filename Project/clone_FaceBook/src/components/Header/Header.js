import React from 'react';
import '../Style/Header.css';
import { useSelector, useDispatch } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import AppBar from './AppBar';

import { history } from '../../redux/configStore';
import { logOut } from '../../redux/modules/user';
import { removeToken } from '../../utills/auth';

const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;

const Header = () => {
  const dispatch = useDispatch();

  const sign = async () => {
    await dispatch(logOut());
    removeToken(TOKEN_KEY);
    history.replace('/sign');
  };

  const userInfo = useSelector((state) => state.user);

  return (
    <div className="header">
      <div className="header__left">
        <img src="http://links.papareact.com/5me" alt="" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Facebook 검색" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div
          className="header__option
        header__option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PeopleOutlineIcon fontSize="large" />
        </div>
        <div className="header__option">
          <OndemandVideoOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <GroupsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <DashboardOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>{userInfo.userName}</h4>
        </div>

        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <LogoutIcon onClick={sign} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;

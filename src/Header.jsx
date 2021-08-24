import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider'


function Header() {
    const [{ user }, dispatch]=useStateValue() ;
    return (
        <div className="header">
            <div className="header__left">
                <img class="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"></img>
                <div className="header__input">                
                <SearchIcon />
                <input placeholder="Search Facebook" type="text" /></div>
            </div>

            <div className="header__middle">
                <div className="header__option
                header__option--active">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <FlagIcon />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon />
                </div>
                <div className="header__option">
                    <StoreMallDirectoryIcon />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                
                <IconButton>
                <AddIcon />
                </IconButton>
                 <IconButton>
                <ForumIcon />
                </IconButton>
                 <IconButton>
                <NotificationsActiveIcon />
                </IconButton>
                 <IconButton>
                < ExpandMoreIcon />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Header

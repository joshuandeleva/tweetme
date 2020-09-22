import React from "react";
import "./Sidebar.css";
import SideBarOption from "./SideBarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
function Sidebar() {
	return (
		<div className="sidebar">
			<TwitterIcon className="sidebar__twitterIcon" />
			<SideBarOption active Icon={HomeIcon} title="Home" />
			<SideBarOption Icon={SearchIcon} title="Explore" />
			<SideBarOption Icon={NotificationsNoneIcon} title="Notification" />
			<SideBarOption Icon={MailOutlineIcon} title="Message" />
			<SideBarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
			<SideBarOption Icon={ListAltIcon} title="Lists" />
			<SideBarOption Icon={PermIdentityIcon} title="profile" />
			<SideBarOption Icon={MoreHorizIcon} title="more" />
			<Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
		</div>
	);
}

export default Sidebar;

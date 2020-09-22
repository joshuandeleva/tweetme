import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					className="header__logo"
					src="https://seeklogo.com/images/T/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png"
					alt=""
				/>
			</div>
			<div className="header__HomeArea">
				<span className="header__HomeAreaTitle">Home</span>
			</div>
			<div className="header__input">
                <input value="" placeholder="Search Twitter" type="text" 
                />
				<SearchIcon className="header__searchIcon" />
			</div>
		</div>
	);
}

export default Header;

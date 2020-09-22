import React from "react";
import "./Widget.css";
import {
	TwitterTweetEmbed,
	TwitterShareButton,
	TwitterTimelineEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widget() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<input value="" placeholder="Search Twitter" type="text" />
				<SearchIcon className="widgets__searchIcon" />
			</div>
			<div className="widgets__widgetContainer">
				<h2>Whats Happening</h2>
                <TwitterTweetEmbed tweetId={"1245838105975767041"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="iamndeleva"
                    options={{height:400}}
                />
                <TwitterShareButton 
                    url={"https://facebook.com/redhat"}
                    options={{text:"#reactjs is awesome", via:"redhat"}}
                />
			</div>
		</div>
	);
}

export default Widget;

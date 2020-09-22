import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./Firebase";
function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, SetTweetImage] = useState("");
	const sendTweet = (e) => {
		//stops refresh
		e.preventDefault();
		//enable send of tweet to database
		db.collection("posts").add({
			displayName: "iamndeleva",
			username: "iamdeleva",
			verified: true,
			text: tweetMessage,
			image:tweetImage,
			avatar:
				"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
		});
		setTweetMessage("");
		SetTweetImage("");
	};
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__Input">
					<Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening"
						type="text"
					/>
				</div>
				<input
					onChange={(e) => SetTweetImage(e.target.value)}
					value={tweetImage}
					className="tweetBox__InputImage"
					placeholder="Enter image url"
					type="text"
				/>
				<Button
					onClick={sendTweet}
					type="submit"
					className="tweetBox__tweetButton"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;

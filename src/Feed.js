import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./Firebase";
import FlipMove from "react-flip-move";
function Feed() {
	//set of states to be used by the posts
	const [posts, setPosts] = useState([]);
	//its a listener that runs on a conditions for pullling from database
	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>
			//takes a picture of the database and loops through any document change to acces entire data
			setPosts(snapshot.docs.map((doc) =>doc.data()))
		);
	}, []);
	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>
			<TweetBox />
			<FlipMove>
				{posts.map((post) => (
					<Post
						key={post.text}
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						text={post.text}
						avatar={post.avatar}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;

import { useState } from "react";
import "@scss/components/edu-post.scss";
import Post from "@components/loopar/Post";
function Posts() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "post 1",
			body: "Welcome",
		},
		{
			id: 2,
			title: "post 2",
			body: "Affirmative",
		},
		{
			id: 3,
			title: "post 3",
			body: "This is not Warcraft in Space",
		},
	]);

	return (
		<div className="posts">
			{posts.length > 0 &&
				posts.map((post) => <Post key={post.id} post={post} />)}
		</div>
	);
}

export default Posts;

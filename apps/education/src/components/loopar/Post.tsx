import React, { useState } from "react";

interface PostProp {
	post: {
		id: number;
		title: string;
		body: string;
	};
}
function Post({ post }: PostProp) {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme((theme) => !theme);
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className={`post ${isDarkTheme ? "dark" : ""}`} onClick={toggleTheme}>
			<p className="title">{post.title}</p>
			<p>{post.body}</p>
		</div>
	);
}

export default Post;

import Card from '../card/Card';

import './posts.css';

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
}

const Posts = async () => {
    const posts = await getData();

    return (
        <div className="posts__items">
            {posts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts;
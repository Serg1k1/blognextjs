import { getData } from '@/app/(server)/service';

import Card from '../card/Card';

import './posts.css';

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
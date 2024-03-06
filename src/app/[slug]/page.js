import { getPost } from '../(server)/service';

import './singlePostPage.css';

export async function generateMetadata({ params }) {
    const { slug } = params;

    return {
        title: `post ${slug}`,
        description: "Page with blog posts"
    }
}

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);
    return (
        <div className="container">
            <h4 className="singlePost__title">{post.title}</h4>
            <p className="singlePost__text">{post.body}</p>
        </div>
    )
}

export default SinglePostPage;
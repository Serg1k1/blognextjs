import './singlePostPage.css';

export async function generateMetadata({ params }) {
    const { slug } = params;

    return {
        title: `post ${slug}`,
        description: "Page with blog posts"
    }
}

const getPost = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
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
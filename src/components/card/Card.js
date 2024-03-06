import Link from 'next/link';

import './card.css';

const Card = ({ post }) => {
    return (
        <article className="post__item">
            <Link href={'/' + post.id} className="post__title">{post.title}</Link>
            <p className="post__text">
                {post.body}
            </p>
        </article>
    )
}

export default Card;
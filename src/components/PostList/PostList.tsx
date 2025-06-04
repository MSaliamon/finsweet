import { useState } from 'react';
import { posts as allPosts } from '../../data/postData';
import type { Post } from '../../data/postData';
import './PostList.scss';

function PostList(): React.ReactElement {
  const [posts, setPosts] = useState<Post[]>(allPosts);

  const handleNext = () => {
    setPosts((prevPosts) => {
      const [first, ...rest] = prevPosts;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setPosts((prevPosts) => {
      const last = prevPosts[prevPosts.length - 1];
      const rest = prevPosts.slice(0, prevPosts.length - 1);
      return [last, ...rest];
    });
  };

  return (
    <div className="post">
      {posts.map((post: Post) => (
        <div key={post.id} className="post-box">
          <img src={post.image} alt={post.title} className="post-box__img" />
          <div className="post-box__content">
            <p className="post-box__content-category">{post.category}</p>
            <h2 className="post-box__content-title">{post.title}</h2>
            <p className="post-box__content-description">{post.description}</p>
          </div>
        </div>
      ))}
      <div className="post-buttons">
        <button className="post-buttons__btn" onClick={handlePrev}>Prev</button>
        <button className="post-buttons__btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default PostList;

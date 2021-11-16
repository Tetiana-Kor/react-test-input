import React from 'react';
import s from './Post.module.css';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className={s.post}>
      <h1 className={s.post__h}>Posts</h1>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;

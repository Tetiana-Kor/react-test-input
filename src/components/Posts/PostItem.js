import React from 'react';
import s from './Post.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const PostItem = props => {
  const router = useNavigate();
  return (
    <div className={s.post__content}>
      <strong>
        {props.post.id}. {props.post.title}
      </strong>
      <div className={s.post__desc}>{props.post.body}</div>
      <Button onClick={() => router(`/posts/${props.post.id}`)}>Open</Button>
    </div>
  );
};

export default PostItem;

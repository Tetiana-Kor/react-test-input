import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './Page.module.css';
import {
  getPostsById,
  getCommentsById,
} from '../components/services/service-api';

const PostId = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getPosts(params.id);
    getComments(params.id);
  }, [params.id]);

  async function getPosts(id) {
    const response = await getPostsById(id);
    setPost(response.data);
  }

  async function getComments(id) {
    const response = await getCommentsById(id);
    setComment(response.data);
  }

  return (
    <div className={s.postid}>
      <h2>You open page with {params.id} ID </h2>
      <div>
        {post.id}. {post.title}
      </div>
      <h2>Comments</h2>
      <div>
        {comment.map(el => (
          <div key={el.id}>
            <h4>{el.email}</h4>
            <div>{el.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostId;

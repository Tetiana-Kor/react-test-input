import React, { useState, useEffect } from 'react';
import '../App.css';
import PostList from '../components/Posts/PostList';
import { fetchPost } from '../components/services/service-api';
import { getPage } from '../components/utils/pages';
import Pagination from '../pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  async function fetchPosts() {
    const response = await fetchPost(limit, page);
    setPosts(response.data);
    const totalPosts = response.headers['x-total-count'];
    setTotalPage(getPage(totalPosts, limit));
  }

  const changePage = page => {
    setPage(page);
  };

  return (
    <div>
      <PostList posts={posts} />
      <Pagination changePage={changePage} page={page} totalPage={totalPage} />
    </div>
  );
}

export default Posts;

import axios from 'axios';

async function fetchPost(limit = 10, page = 1) {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );
    return response;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function getPostsById(id) {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts/' + id,
    );
    return response;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function getCommentsById(id) {
  try {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    return response;
  } catch (e) {
    throw new Error(e.message);
  }
}

export { fetchPost, getPostsById, getCommentsById };

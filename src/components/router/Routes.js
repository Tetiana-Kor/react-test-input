import Posts from '../../page/Posts';
import Auth from '../../page/Auth';
import PostId from '../../page/PostId';

export const privateRoutes = [
  { path: '/posts', component: <Posts />, exact: true },
  { path: '/posts/:id', component: <PostId />, exact: true },
];

export const publicRoutes = [
  { path: '/auth', component: <Auth />, exact: true },
];

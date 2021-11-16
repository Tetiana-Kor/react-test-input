import React from 'react';
import { getPagesArray } from '../components/utils/pages';
// import s from './Post.module.css';

const Pagination = ({ totalPage, changePage, page }) => {
  let pagesArray = getPagesArray(totalPage);
  return (
    <div>
      {pagesArray.map(v => (
        <button
          onClick={() => changePage(v)}
          key={v}
          className={page === v ? 'page page__current' : 'page'}
        >
          {v}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

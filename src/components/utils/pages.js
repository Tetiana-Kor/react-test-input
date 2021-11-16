export const getPage = (totalPage, limit) => {
  return totalPage / limit;
};

export const getPagesArray = totalPage => {
  let result = [];
  for (let i = 0; i < totalPage; i += 1) {
    result.push(i + 1);
  }
  return result;
};

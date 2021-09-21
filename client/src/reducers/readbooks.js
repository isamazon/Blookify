export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_READ_BOOKS':
      return action.payload;
    case 'CREATE_READ_BOOK':
      return [...posts, action.payload];
    default:
      return posts;
  }
};

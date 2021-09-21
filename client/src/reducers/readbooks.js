export default (read = [], action) => {
  switch (action.type) {
    case 'FETCH_READ_BOOKS':
      return action.payload;
    case 'CREATE_READ_BOOK':
      return [...read, action.payload];
    default:
      return read;
  }
};

const reducer = (posts = [], action) => {
  switch (action) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};



export default (Posts =[], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...Posts, action.payload];
        case 'UPDATE':
            return Posts.map((post) => post.id == action.payload._id  ? action.payload : post);
        default:
            return Posts;

    }
}


export default (Posts =[], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...Posts, action.payload];
        default:
            return Posts;

    }
}
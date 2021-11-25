

export default (Posts =[], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return Posts;
        case 'CREATE':
            return Posts;
        default:
            return Posts;

    }
}
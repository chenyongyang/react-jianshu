export const getMoreList = page => {
    return dispatch => {
        axios.get("/api/homeList.json?page=" + page).then(res => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });
    };
};
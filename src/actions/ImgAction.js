export const uploadImage = img => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        const uploadImage = firebase
        .storage()
        .ref(`images/${img.name}`)
        .put(img);

        uploadImage.on(
            "state_changed",
            snapshot => {
                //progress
            },
            error => {
                dispatch({
                    type: "IMAGE_UPLOADED_ERR"
                }, error)
            },
            () => {
                dispatch({
                    type: "IMAGE_UPLOADED"
                });    
            }
        )
    }
}
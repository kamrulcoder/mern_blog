const tagState = {
    loader : false,
    tagError : '',
    tagSuccessMessage : '',
    allTag : [],
    parPage : 0,
    tagCount : 0,
    editTag : '',
    editRequest : false
}

export const dashTagReducer = (state=tagState,action)=>{
    const {type,payload} = action;

    if(type === 'SET_LOADER'){
        return {
            ...state,
            loader : true
        }
    }
    if(type === 'TAG_ADD_SUCCESS' || type === 'TAG_DELETE_SUCCESS'){
        return {
            ...state,
            loader : false,
            tagSuccessMessage : payload.successMessage,
            tagError : ''
        }
    }

    if(type === 'DASHBORAD_TAG_GET_SUCCESS'){
        return {
            ...state,
            allTag : payload.allTag,
            tagCount : payload.tagCount,
            parPage : payload.parPage
        }
    }

    if(type === 'TAG_SUCCESS_MESSAGE_CLEAR'){
        return {
            ...state,
            tagSuccessMessage : '',
        }
    }

    if(type === 'TAG_ERROR_MESSAGE_CLEAR'){
        return {
            ...state,
            tagError : '',
        }
    }

    if(type === 'TAG_ADD_FAIL' ){
        return {
            ...state,
            loader : false,
            tagError : payload.error,
            tagSuccessMessage : ''
        }
    }

    return state;

}
const initState = {

    loader: false,
    articleError: '',
    allArticle: [],
    parPage: 0,
    articleCount: 0,
    edtiArticle: '',
    articleSuccessMessage: '',
    editRequest: false,
    allCategory: [],
    allTag: []
}

export const articalReducer = (state = initState, action) => {
    const { payload, type } = action;
    if (type === 'CATE_TAG_GET_SUCCESS') {
        return {
            ...state,
            allCategory: payload.allCategory,
            allTag: payload.allTag
        }
    }

    if (type === 'ART_SET_LOADER') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'ARTICLE_ADD_SUCCESS') {
        return {
            ...state,
            loader: false,
            articleError: '',
            articleSuccessMessage: payload.successMessage
        }
    }
    if (type === 'ARTCLE_ADD_FAIL' ) {
        return {
            ...state,
            loader: false,
            articleSuccessMessage: '',
            articleError: payload.errorMessage
        }
    }
    if (type === 'ART_SUCCESS_MESSAGE_CLEAR') {
        return {
            ...state,
            articleSuccessMessage: ''
        }
    }
    
    if (type === 'ART_ERROR_MESSAGE_CLEAR') {
        return {
            ...state,
            articleError: ''
        }
    }
    if (type === 'DASH_ARTICLE_GET_SUCCESS') {
        return {
            ...state,
            allArticle: payload.allArticle,
            parPage: payload.parPage,
            articleCount: payload.articleCount
        }
    }
    
    return state;
}
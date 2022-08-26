import axios from 'axios'
export const get_tag_category = ()=>async(dispatch)=>{
    try {

        const response = await axios.get('/rest-api/get-tag-category',{withCredentials:true});
        dispatch({
            type : 'CATE_TAG_GET_SUCCESS',
            payload : {
                allCategory : response.data.allCategory,
                allTag : response.data.allTag
            }
        })
    } catch (error) {
        console.log(error.response)
    }
}

export const add_articale = (data)=>async(dispatch)=>{    
    dispatch({
        type : 'ART_SET_LOADER'
    })
    try {
        const response = await axios.post('/rest-api/add-artical',data,{withCredentials:true});
        dispatch({
            type : 'ARTICLE_ADD_SUCCESS',
            payload : {
                successMessage : response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type : 'ARTCLE_ADD_FAIL',
            payload :{
                errorMessage :  error.response.data.errorMessage
            }
        })
    }
}


export const get_all_article = (currentPage,searchValue)=>async(dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:5000/rest-api/get-artical?currentPage=${currentPage}&&searchValue=${searchValue}`,{withCredentials:true});
        dispatch({
            type : 'DASH_ARTICLE_GET_SUCCESS',
            payload :{
                allArticle : response.data.allArticle,
                articleCount : response.data.articleCount,
                parPage : response.data.parPage,
            }
        })
    } catch (error) {
        console.log(error)
        console.log(error.response)
    }
}

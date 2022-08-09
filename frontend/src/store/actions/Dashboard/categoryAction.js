

import axios from 'axios';

export const add_category = (data)=>async(dispatch)=>{
    dispatch({type : 'SET_LOADER'});
    try {
        const response = await axios.post('/rest-api/add-category',data,{withCredentials:true});
        dispatch({
            type : 'CATEGORY_ADD_SUCCESS',
            payload : {
                successMessage : response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type : 'CATEGORY_ADD_FAIL',
            payload : {
                error : error.response.data.errorMessage
            }
        })
    }
}

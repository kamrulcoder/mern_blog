

import axios from 'axios';
import { AiFillInsurance } from 'react-icons/ai';

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

export const get_all_catagory = (page , searchValue ) => async(dispatch)=> {
    try {
        const response  = await axios.get(`http://localhost:5000/rest-api/get-category?page=${page}&&searchValue=${searchValue}`,{withCredentials:true});

        console.log(response);
        dispatch({
            type : "DASHBORAD_CATEGORY_GET_SUCCESS",
            payload : {
                allCategory : response.data.allCategory,
                parPage : response.data.parPage,
                categoryCount : response.data.categoryCount
            }
        })
    } catch (error) {
        console.log(error.response)
    }
}

import axios from 'axios';


export const admin_login = (data) => async (dispatch) => {
    dispatch({
        type: 'LOADER_RUN',
    })
   
}
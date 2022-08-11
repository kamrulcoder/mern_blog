import React,{useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { Link,useParams} from 'react-router-dom';

const EditCategory = ({history}) => {

    return (
        <div className='add-category'>
            <Helmet>
                <title>Category Edit</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Edit Category</h2>
                    <Link className='btn' to="/dashborad/all-category">All Category</Link>
                </div>
                <form >
                    <div className="form-group">
                        <label htmlFor="category_name">Category name</label>
                        <input  type="text" name='categoryName' className="form-control" placeholder='category name' id='category_name' />
                        {/* <p className='error'>{categoryError && categoryError.categoryName}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Category description</label>
                        <textarea  name='categoryDes' type="text" className="form-control" placeholder='category description' id='category_des' />
                        {/* <p className='error'>{categoryError && categoryError.categoryDes}</p> */}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Update Category</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCategory;
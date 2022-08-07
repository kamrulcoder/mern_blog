import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const AddCategory = ({history}) => {

    return (
        <div className='add-category'>
           
            <Helmet>
                <title>Category add</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Add Category</h2>
                    <Link className='btn' to="/dashborad/all-category">All Category</Link>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="category_name">Category name</label>
                        <input  type="text" name='categoryName' className="form-control" placeholder='category name' id='category_name' />
                        <p className='error'>Catagory  Name error </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Category description</label>
                        <textarea name='categoryDes' type="text" className="form-control" placeholder='category description' id='category_des' />
                        <p className='error'>Catagory Error </p>
                    </div>
                    <div className="form-group">
                         <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button><button className="btn btn-block">Add Category</button>
                            

                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
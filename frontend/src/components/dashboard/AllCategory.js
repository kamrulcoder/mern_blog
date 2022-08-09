import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { htmlToText } from "html-to-text";
import { useParams } from "react-router-dom" ; 
import { useDispatch, useSelector } from "react-redux";
import { get_all_catagory } from '../../store/actions/Dashboard/categoryAction';
const AllCategory = () => {

    const dispatch  = useDispatch();
    const  {currentPage}  = useParams();

    const { parPage, allCategory, categoryCount } = useSelector(state => state.dashboradCategory);


    useEffect(() => { 
        dispatch(get_all_catagory(currentPage?currentPage.split('-')[1]:1)) 
    },[])

    return (
        <div className='all-category'>
            <Helmet>
                <title>All Category</title>
            </Helmet>
            
            <div className="show-category-action">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Category (22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input  type="text" placeholder='search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/add-category'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                    <div className="categorys">
                    {
                            allCategory.length > 0 ? allCategory.map(c => <div className="category">
                                <div className="name">{c.categoryName}</div>
                                <div className="action">
                                    <span><Link to={`/dashborad/category/edit/`}><MdEdit /></Link></span>
                                    <span ><MdDelete /></span>
                                </div>
                            </div>) : "category not found..."
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AllCategory
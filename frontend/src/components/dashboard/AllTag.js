
import React,{useEffect} from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { htmlToText } from "html-to-text";
import { useParams } from "react-router-dom";

const AllTag = () => {

    
    
    return (
        <div className='all-category'>
            
            <Helmet>
                <title>All Tag</title>
            </Helmet>
            <div className="show-category-action">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>(10)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input  type="text" placeholder='search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/add-tag'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                <div className="categorys">
                         <div  className="category">
                                <div className="name">Tag Name </div>
                                <div className="action">
                                    <span><Link to={`/dashborad/tag/edit/`}><MdEdit /></Link></span>
                                    <span><MdDelete /></span>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AllTag;
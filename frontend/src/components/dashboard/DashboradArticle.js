import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboradArticle = () => {

    return (
        <div className='dashborad-article'>
            <Helmet>
                <title>All Article</title>
            </Helmet>
           
            <div className="article-action-pagination">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Article (22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input  type="text" placeholder='search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/article-add'>Add New</Link>
                    </div>
                </div>
                <div className="height-70vh">
                    <div className="articles">
                        
                        <div className="article">
                            <img src={`http://localhost:3000/articalImage/ss.jpg`} alt="" />
                            <Link to={`/artical/details/`}>article title </Link>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque minima at architecto quas possimus dolore laudantium quaerat, enim iste modi expedita ea facere, a amet ipsum, error autem illum!</p>
                            <div className="action">
                                <span>
                                    <Link to={`/dashborad/article/edit/`}><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span ><MdDelete /></span>
                            </div>
                        </div>
                        
                        <div className="article">
                            <img src={`http://localhost:3000/articalImage/ss.jpg`} alt="" />
                            <Link to={`/artical/details/`}>article title </Link>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque minima at architecto quas possimus dolore laudantium quaerat, enim iste modi expedita ea facere, a amet ipsum, error autem illum!</p>
                            <div className="action">
                                <span>
                                    <Link to={`/dashborad/article/edit/`}><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span ><MdDelete /></span>
                            </div>
                        </div>
                        
                        <div className="article">
                            <img src={`http://localhost:3000/articalImage/ss.jpg`} alt="" />
                            <Link to={`/artical/details/`}>article title </Link>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque minima at architecto quas possimus dolore laudantium quaerat, enim iste modi expedita ea facere, a amet ipsum, error autem illum!</p>
                            <div className="action">
                                <span>
                                    <Link to={`/dashborad/article/edit/`}><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link><FaRegEye /></Link>
                                </span>
                                <span ><MdDelete /></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboradArticle
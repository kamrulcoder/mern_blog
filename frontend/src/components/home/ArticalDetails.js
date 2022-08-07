import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronRight } from "react-icons/bs";
import { AiFillTag, AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Comments from './Comments';

const ArticalDetails = () => {
    
    return (
        <div className="article-details">
            <div className="path">
                <Link to='/'>Home</Link>
                <span className='arrow'><BsChevronRight /></span>
                <Link to={`/artical/category/`}>Catagory </Link>
                <span className='arrow'><BsChevronRight /></span>
                <span>Title </span>
            </div>
            <div className="title">
                <h3><Link to="#">Title </Link></h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <span><Link to={`/artical/tag/`}>Article Tag </Link></span>
                </div>
                <div className="time">
                    <span>2 jun 2020</span>
                </div>
            </div>
            <div className="home-artical-image">
                <img src={`http://localhost:3000/articalImage/ss.jpg`} alt="Image not found on server" />
            </div>
            <div className="home-artical-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed exercitationem laborum iure quos blanditiis eos impedit ipsum nobis. Harum optio numquam vel accusantium molestias maxime delectus fugiat adipisci laborum eos.</p>
            </div>
            <div className="like-dislike-view">
                <div className="like-dislike">
                    <div className="dislike">
                        <button  ><AiFillDislike /></button> <button disabled className='icon'><AiFillDislike /></button>
                      
                        <div className="like-number">(10)</div>
                    </div>
                    <div className="like">
                        <button  ><AiFillLike /></button> 
                         <button disabled className='icon'><AiFillLike /></button>
                        <div className="dislike-number">(20)</div>
                    </div>
                </div>
                <div className="view">
                    <span>211</span>
                    <span>view</span>
                </div>
            </div>
            <div className="read-more">
                <span>Read more : </span>
                <Link to={`/title`}>Article </Link>
            </div>
            <div className="more-tags">
                <span>Tags</span>
                <Link to={`/artical/tag/`} >Article Tag </Link>
            </div>
            <div className="social-icons">
                <a className='l1' href=""><FaFacebookSquare /></a>
                <a className='l2' href=""><FaTwitterSquare /></a>
                <a className='l3' href=""><FaGithubSquare /></a>
                <a className='l4' href=""><ImLinkedin /></a>
            </div>
            <div className="related-article">
                <div className="more">
                    <h3>Related Articles</h3>
                </div>
                <div className="articles">
                    <Link  to={`/artical/details/`} className='article'>
                            <img src={`http://localhost:3000/articalImage/ss.jpg `} alt="Image not found   server " />
                            <span>very popular during the Renaissance. The first line of</span>
                        </Link> <span>Related article not found</span>
                    

                </div>
            </div>
            <div className="comment_title">
                <h3>Article comments</h3>
            </div>
            <Comments />
        </div>
    )
};

export default ArticalDetails;
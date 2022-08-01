import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUp, FaChevronRight } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link, Switch, Route } from "react-router-dom";
import PopularArtical from './PopularArtical';

const Home = ({ history }) => {
  const nav = useRef();

   
    const scrollTop = () => {
        nav.current?.scrollIntoView({ behavior: 'smooth' });
    }

   
    return (
        <div className="home">
            <Navbar nav={nav} />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                          <h1>Home Page </h1>
                            <Switch>
                                <Route path='/'  exact />
                                <Route path='/article/:currentPage?' exact />
                                <Route path='/artical/details/:slug'  exact />
                                <Route path='/artical/category/:categorySlug/:currentPage?' exact />
                                <Route path='/artical/tag/:tagSlug/:currentPage?' exact />
                                <Route path='/artical/search/:searchValue'  exact />
                            </Switch>
                        </div>
                        <div className="col-4">
                            <div className="search-category-tag">
                                <div className="search">
                                    <h2>Search</h2>
                                    <div className="form-group">
                                        <input  className='form-control' type="text" placeholder='search' />
                                    </div>
                                    <div className="form-group">
                                        <button  className="btn btn-block">Search</button>
                                    </div>
                                </div>
                                <div className="popular-artical">
                                    <div className="title">
                                        <h3>Popular Artical</h3>
                                    </div>
                                    <PopularArtical></PopularArtical>
                                </div>
                                <div className="flow-facebook">
                                    <div className="title">
                                        <h3>Follwing Me</h3>
                                    </div>
                                    <div className="image">
                                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIslam-100798538341988&tabs=timeline&width=340&height=148&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{
                                            width: "340px", height: "145px", border: 'none', overflow: 'hidden', scrolling: "no", frameborder: "0", allowfullscreen: "true", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        }}></iframe>
                                    </div>
                                </div>
                                <div className="category">
                                    <div className="title">
                                        <h3>Category</h3>
                                    </div>
                                    
                                </div>
                                <div className="tag">
                                    <div className="title">
                                        <h3>Tag</h3>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={scrollTop} id="scroll">
                <button className="scroll-btn">
                    <span><FaArrowUp /></span>
                </button>
            </div>
        </div>
    )
};

export default Home;
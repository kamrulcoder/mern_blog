import React from 'react';
import { Link } from "react-router-dom";
import { BsChevronDoubleLeft,BsChevronDoubleRight } from "react-icons/bs";
const Pagination = ({pageNumber,parPage,itemCount,path}) => {

    return <div className='pagination'>
        <ul>
        <li  ><Link to={``} > <BsChevronDoubleLeft/></Link></li>
        <button className="not-hover" disabled><span><BsChevronDoubleLeft/></span></button>
        
        <li  className='active'><Link to={``} >01</Link></li>
        <li  ><Link to={``} >02</Link></li>
        <li  ><Link to={``} >03</Link></li>
        <li  ><Link to={``} > <BsChevronDoubleRight/></Link></li>

        </ul>
    </div>;
};

export default Pagination;
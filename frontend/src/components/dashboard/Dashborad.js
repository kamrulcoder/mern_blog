import React from 'react';
import Helmet from 'react-helmet'
import DashboradNavbar from './DashboradNavbar'
import Sidebar from './Sidebar';
import { Switch, Route } from "react-router-dom";

const Dashborad = () => {
  return (
    <div className='dashborad'>
      <Helmet>
        <title>Dashborad</title>
      </Helmet>
      <DashboradNavbar />
      <div className="dashborad-main-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default Dashborad
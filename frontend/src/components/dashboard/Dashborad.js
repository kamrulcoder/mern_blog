import React from 'react';
import Helmet from 'react-helmet'
import DashboradNavbar from './DashboradNavbar'
import Sidebar from './Sidebar';
import { Switch, Route } from "react-router-dom";
import DashboradIndex from './DashboradIndex';
import ArticleAdd from './ArticleAdd';
import DashboradArticle from './DashboradArticle';
import AddCategory from './AddCategory';

const Dashborad = () => {
  return (
    <div className='dashborad'>
      <Helmet>
        <title>Dashborad</title>
      </Helmet>
      <DashboradNavbar />
      <div className="dashborad-main-content">
        <Sidebar />
        <Switch>
          <Route path="/dashborad" component={DashboradIndex} exact />
          <Route path="/dashborad/article-add" component={ArticleAdd} exact />
          <Route path="/dashborad/all-article" component={DashboradArticle} exact />
          <Route path="/dashborad/add-category" component={AddCategory} exact />

        </Switch>
      </div>
    </div>
  )
}

export default Dashborad
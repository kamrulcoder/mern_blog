import React from 'react';
import Helmet from 'react-helmet'
import DashboradNavbar from './DashboradNavbar'
import Sidebar from './Sidebar';
import { Switch, Route } from "react-router-dom";
import DashboradIndex from './DashboradIndex';
import ArticleAdd from './ArticleAdd';
import DashboradArticle from './DashboradArticle';
import AddCategory from './AddCategory';
import AllCategory from './AllCategory';
import AddTag from './AddTag';
import AllTag from './AllTag';
import AllUser from './AllUser';
import AllSubAdmin from './AllSubAdmin';
import DashComments from './DashComments';

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
          <Route path="/dashborad/all-category" component={AllCategory} exact />
          <Route path="/dashborad/add-tag" component={AddTag} exact />
          <Route path="/dashborad/all-tag" component={AllTag} exact />
          <Route path="/dashborad/all-user" component={AllUser} exact />
          <Route path="/dashborad/all-sub-admin" component={AllSubAdmin} exact />
          <Route path="/dashborad/comments" component={DashComments} exact />

        </Switch>
      </div>
    </div>
  )
}

export default Dashborad
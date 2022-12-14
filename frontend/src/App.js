import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/auth/AdminLogin";
import Login from "./components/auth/Login";
import ProtectRoute from "./components/auth/ProtectRoute";
import Register from "./components/auth/Register";
import Dashborad from "./components/dashboard/Dashborad";
import ArticalDetails from "./components/home/ArticalDetails";

import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />

        
          <Route path="/" component={Home} exact />
          <Route path="/article/:currentPage?" component={Home} exact />
          <Route path="/artical/details/:slug" component={Home} exact />
          <Route
            path="/artical/category/:categorySlug/:currentPage?"
            component={Home}
            exact
          />
          <Route
            path="/artical/tag/:tagSlug/:currentPage?"
            component={Home}
            exact
          />
          <Route path="/artical/search/:searchValue" component={Home} exact />\


           {/* ==================================
                       Dashboard Route Start 
           ================================= */}

          <Route path='/admin/login' component={AdminLogin} exact />
          <ProtectRoute path="/dashborad" component={Dashborad} exact />
          <Route path="/dashborad/article-add" component={Dashborad} exact />
          <Route path="/dashborad/all-article" component={Dashborad} exact />

           {/* Catagory Route start 
            ============================= */}
          <Route path="/dashborad/add-category" component={Dashborad} exact />
          <Route path="/dashborad/all-category/:currentPage?" component={Dashborad} exact />
          <Route path="/dashborad/category/edit/:cateSlug" component={Dashborad} exact />          
           {/* Catagory Route end  
            ============================= */}
            
           {/* Tag  Route start 
            ============================= */}
          <Route path="/dashborad/add-tag" component={Dashborad} exact />
          <Route path="/dashborad/all-tag/:currentPage?" component={Dashborad} exact />
          <Route path="/dashborad/tag/edit/:tagSlug" component={Dashborad} exact />

           {/* Tag  Route end  
            ============================= */}


          <Route path="/dashborad/all-user" component={Dashborad} exact />
          <Route path="/dashborad/all-sub-admin" component={Dashborad} exact />
          <Route path="/dashborad/comments" component={Dashborad} exact />

          {/* ==================================
                       Dashboard Route end  
           ================================= */}







        </Switch>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import ArticalDetails from "./components/home/ArticalDetails";
import Home from "./components/home/Home"
function App() {
  return (
    <>
   <Router>
      <Switch>
      <Route path='/register' component={Register} exact />
        <Route path='/' component={Home}exact  />
        <Route path='/article/:currentPage?' component={Home} exact />
        <Route path='/artical/details/:slug' component={Home} exact />
        <Route path='/artical/category/:categorySlug/:currentPage?' component={Home} exact />
        <Route path='/artical/tag/:tagSlug/:currentPage?' component={Home} exact />
        <Route path='/artical/search/:searchValue' component={Home} exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;

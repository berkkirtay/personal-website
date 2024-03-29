// Copyright(c) 2022 Berk Kırtay

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home"
import Blogs from "./components/blog/Blogs";
import Blog from "./components/blog/Blog";
import ScrollToTop from "./components/tools/ScrollToTop"
import { Nav } from "./components/nav/Nav";
import { AddBlog } from "./components/blog/BlogComponents/AddBlog";
import { checkAuth } from "./helpers/RequestManager";
import { Auth } from "./components/auth/Auth";
import Work from "./components/work/Work";
import Experience from "./components/experience/Experience";

const App = () => {
  axios.defaults.withCredentials = true;

  const [blogs, setBlogs] = useState([{}]);
  const [refresh, setRefresh] = useState(true);
  const [isAuthorized, setAuthorization] = useState(false);

  useEffect(() => {
    checkAuth(setAuthorization);
  }, []);

  return (
    <div id="parent">
      <Router>
        <ScrollToTop />
        <Nav />
        <Switch>
          <Route path="/blog/:_id">
            <Blog refresher={() => setRefresh(!refresh)} blogs={blogs} isAuthorized={isAuthorized} />
          </Route>

          <Route path="/blog">
            <Blogs blogs={blogs} setBlogs={setBlogs} refresh={refresh} isAuthorized={isAuthorized} />
          </Route>

          <Route path="/addblog">
            <AddBlog refresher={() => setRefresh(!refresh)} updateFlag={false} />
          </Route>

          <Route path="/updateblog/:_id">
            <AddBlog refresher={() => setRefresh(!refresh)} updateFlag={true} />
          </Route>

          <Route path="/authorization">
            <Auth isAuthorized={isAuthorized} setAuthorization={setAuthorization} />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/experience">
            <Experience />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Home from "./components/Home"
import Blogs from "./components/blog/Blogs";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";
import { AddBlog } from "./components/blog/BlogComponents/AddBlog";
import { checkAuth } from "./helpers/RequestManager";
import { Auth } from "./components/auth/Auth";

const App = () => {
  document.addEventListener('click', () => {
    if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0) {
      var parent = document.getElementById("parent");
      if (parent)
        parent.style.width = "90%";

      var footer = document.getElementById("footer");
      if (footer)
        footer.style.zoom = "1.8";

      var contact = document.getElementsByClassName("contactForm")[0];
      if (contact)
        contact.style.zoom = "1.8";

      var blogs = document.getElementsByClassName("blogs")[0];
      if (blogs)
        blogs.style.zoom = "1.8";

      var blog = document.getElementsByClassName("blog")[0];
      if (blog)
        blog.style.zoom = "1.8";
    }
  }, false);

  const [blogs, setBlogs] = useState([{}]);
  const [refresh, setRefresh] = useState(true);
  const [isAuthorized, setAuthorization] = useState(false);


  useEffect(() => {
    checkAuth(setAuthorization);
  }, []);

  return (
    <div id="parent">
      <Router>
        <Switch>
          <Route path="/blogs/:_id">
            <Blog refresher={() => setRefresh(!refresh)} blogs={blogs} isAuthorized={isAuthorized} />
          </Route>

          <Route path="/blogs">
            <Blogs blogs={blogs} setBlogs={setBlogs} refresh={refresh} isAuthorized={isAuthorized} />
          </Route>

          <Route path="/addblog">
            <AddBlog refresher={() => setRefresh(!refresh)} updateFlag={false} />
          </Route>

          <Route path="/updateblog/:_id">
            <AddBlog refresher={() => setRefresh(!refresh)} updateFlag={true} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/authorization">
            <Auth isAuthorized={isAuthorized} setAuthorization={setAuthorization} />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.addEventListener('DOMContentLoaded', () => {
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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

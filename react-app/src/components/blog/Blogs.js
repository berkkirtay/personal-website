import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import BlogsTask from "./BlogsTask";
import { getBlogs } from '../../helpers/RequestManager'

const Blogs = ({ blogs, setBlogs, refresh, isAuthorized }) => {
    useEffect(() => {
        getBlogs(setBlogs);
    }, [refresh])

    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
                    <h1 style={{ display: "inline" }}>My Blog</h1>
                </Link>
                <Link to="/" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }}><button className="button" >Go back</button></Link>
                {isAuthorized && <Link to="/addblog" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }}><button className="button" >Add a new Blog</button></Link>}
                <hr />
                <ul>
                    {blogs.slice(0).reverse().map((blog) => (
                        <BlogsTask blog={blog} />
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default Blogs

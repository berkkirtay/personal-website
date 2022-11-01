// Copyright(c) 2022 Berk Kırtay

import { Link } from "react-router-dom"
import { useEffect } from 'react';
import BlogsTask from "./BlogsTask";
import Footer from "../footer/Footer";
import { getBlogs } from '../../helpers/RequestManager'

const Blogs = ({ blogs, setBlogs, refresh, isAuthorized }) => {
    useEffect(() => {
        getBlogs(setBlogs);
    }, [refresh, setBlogs])

    return (
        <div className="blogs" >
            <div className="projectLinksList">
                {isAuthorized &&
                    <>
                        <Link to="/addblog" style={{ display: "inline-block", color: "white" }}><button className="button" >Add a new Blog</button></Link>
                        <hr id='bloghr' />
                    </>
                }
                <ul>
                    {blogs.slice(0).reverse().map((blog) => (
                        <BlogsTask blog={blog} />
                    ))}
                </ul>
            </div >
            <Footer />
        </div >
    )
}

export default Blogs

import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Markup } from 'interweave';
import { getBlog } from '../../helpers/RequestManager'
import { deleteBlog } from '../../helpers/RequestManager'

import BlogFooter from './BlogComponents/BlogFooter';
import Image from './BlogComponents/Image';



const Blog = ({ refresher, isAuthorized }) => {
    const { _id } = useParams();
    const [blog, setBlog] = useState({});
    let navigate = useHistory();

    const onDelete = () => {
        var approval = window.confirm("Are you really sure to delete this blog?");
        if (approval) {
            deleteBlog(_id);
            refresher();
            navigate.push("/blogs");
        }
    }

    useEffect(() => {
        getBlog(_id, setBlog);
    }, []);

    return (
        <div className='blog'>
            <h1 style={{ display: "inline" }}>{blog.date}</h1>

            <Link to="/blogs" style={{ display: "inline", float: "right", color: "white" }} ><button className="button">Go back</button></Link>
            {isAuthorized && <button style={{ display: "inline", float: "right", color: "white" }} className="button" onClick={onDelete}>Delete Blog</button>}
            {isAuthorized && <Link to={"/updateblog/" + _id} style={{ display: "inline", float: "right", color: "white" }}><button className="button" >Update Blog</button></Link>}
            <hr id='bloghr' />
            <div className='blogBlock' style={{ padding: "1%" }}>
                <h2>{blog.title}</h2>
                {blog.content?.map((field) => {
                    var tokens = field.split('|');
                    if (tokens[0] === "img") {
                        return <span key={tokens[1].length}><Image url={tokens[1]} /></span>
                    }
                    else {
                        return <span key={field.length}><Markup content={field} /></span>
                    }
                })}
                <hr />
                <BlogFooter blog={blog} />
            </div>
        </div>
    )
}

export default Blog

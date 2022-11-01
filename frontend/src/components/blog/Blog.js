// Copyright(c) 2022 Berk Kırtay

import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBlog } from '../../helpers/RequestManager'
import { deleteBlog } from '../../helpers/RequestManager'
import BlogFooter from './BlogComponents/BlogFooter';
import ReactMarkdown from 'react-markdown'

const Blog = ({ refresher, isAuthorized }) => {
    const { _id } = useParams();
    const [blog, setBlog] = useState(undefined);
    let navigate = useHistory();

    const onDelete = () => {
        var approval = window.confirm("Are you really sure to delete this blog?");
        if (approval) {
            deleteBlog(_id);
            refresher();
            navigate.push("/blog");
        }
    }

    useEffect(() => {
        getBlog(_id, setBlog);
    }, [_id]);

    return (
        <div className='blog'>
            {isAuthorized &&
                <div>
                    <div style={{ display: "inline-block" }} >
                        <button style={{ display: "inline-block", color: "white" }} className="button" onClick={onDelete}>Delete Blog</button>
                        <Link to={"/updateblog/" + _id} style={{ display: "inline-block", color: "white" }}><button className="button" >Update Blog</button></Link>
                    </div>
                    <div>
                        <hr id='bloghr' />
                    </div>
                </div>

            }
            <div className='blogBlock'>
                {blog !== undefined &&
                    <>
                        <h1 style={{ color: "rgb(41, 161, 103)" }}>{blog.title}</h1>
                        <ReactMarkdown >
                            {blog.content}
                        </ReactMarkdown>
                        <hr />
                        <BlogFooter blog={blog} />

                        <style jsx={true}>{`
                            img[src*='#s'] {
                                display: block;
                                margin: 0 auto;
                                width: 80%;
                                padding: 0;
                            }

                            img[src*='#smaller'] {
                                display: block;
                                margin: 0 auto;
                                width: 50%;
                                padding: 0;
                            }

                            h1, h2, h3, h4, h5, h6 {
                                margin: 0;
                                padding: 0;
                            }

                            a[href*='#link']{
                                color: rgb(20, 175, 100);
                                text-decoration: none;
                            }

                            a[href*='#link']:hover {
                                text-decoration: underline;
                            }

                            li {
                                margin: "8px"
                            }
                        `}
                        </style>
                    </>
                }

            </div>
        </div >
    )
}

export default Blog

import { Link } from "react-router-dom";
import { useState } from "react";

const BlogsTask = ({ blog }) => {
    const [move, setMove] = useState(true);

    const onMove = () => {
        //setMove(true);
    }

    const onLeave = () => {
        //setMove(false);
    }

    return (
        <li style={{ paddingBottom: "0.5%" }} key={parseInt(String(blog._id).substring(0, 4), 16)}>
            <Link to={"/blog/" + blog._id} onMouseOver={onMove} onMouseLeave={onLeave}><h4>{blog.title} <span style={{ float: "right" }}>{blog.date}</span></h4></Link>
            {move && <p style={{ width: "75%", color: "rgb(2, 129, 68)" }}>{blog.content !== undefined && blog.content.slice(0, 200)}...</p>}
        </li>
    );
};

export default BlogsTask;

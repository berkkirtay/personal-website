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
        <li style={{ paddingTop: "0.5%" }} key={parseInt(blog._id, 10)}>
            <Link to={"/blogs/" + blog._id} onMouseOver={onMove} onMouseLeave={onLeave}><h4>{blog.title} <span style={{ float: "right" }}>{blog.date}</span></h4></Link>
            {move && <p style={{ width: "75%" }}>{blog.content !== undefined && blog.content[0].slice(0, 200)}...</p>}
        </li>
    );
};

export default BlogsTask;

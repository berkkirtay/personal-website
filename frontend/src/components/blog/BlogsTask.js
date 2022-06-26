import { Link } from "react-router-dom";

const BlogsTask = ({ blog }) => {
    return (
        <li style={{ paddingBottom: "0.5%" }} key={parseInt(String(blog._id).substring(0, 4), 16)}>
            <Link to={"/blog/" + blog._id}><h4>{blog.title} <span style={{ float: "right" }}>{blog.date}</span></h4>
                <p style={{ width: "75%", color: "rgb(2, 129, 68)" }}>{blog.shortContent !== undefined && blog.shortContent.slice(0, 200)}...</p>
            </Link>
        </li>
    );
};

export default BlogsTask;

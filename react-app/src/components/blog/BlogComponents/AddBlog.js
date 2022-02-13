import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getBlog, postBlog, updateBlog } from "../../../helpers/RequestManager";

export const AddBlog = ({ refresher, updateFlag }) => {
    const [blog, setBlog] = useState({});
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    let navigate = useHistory();
    const { _id } = useParams();

    const parseContent = (content) => {
        const parsedContents = [];
        const lines = content.split('\n');
        let text = "";
        lines.forEach((field) => {
            var tokens = field.split('|');
            if (tokens[0] === "img") {
                if (text !== "") {
                    parsedContents.push(text);
                    text = "";
                }
                parsedContents.push(field + "\n");
            }
            else {
                text += field;
            }
        });
        parsedContents.push(text);
        return parsedContents;
    }

    const stringfyContentArr = (content) => {
        let strcontent = "";
        content?.forEach((line) => {
            strcontent += line + "\n";
        })
        return strcontent;
    }

    useEffect(() => {
        if (updateFlag === true) {
            getBlog(_id, setBlog);
        }
    }, []);

    useEffect(() => {
        if (blog) {
            setTitle(blog?.title);
            setDate(blog?.date);
            setContent(stringfyContentArr(blog?.content));
            console.log(blog)
        }
    }, [blog])

    const onSubmit = (e) => {
        e.preventDefault();
        const blogBody = {
            "title": title,
            "content": parseContent(content),
            "date": date
        }
        if (updateFlag === true) {
            updateBlog(_id, blogBody);
        }
        else {
            postBlog(blogBody);
        }

        setTitle('');
        setDate('');
        setContent('');
        refresher();
        navigate.push("/blogs");
    }

    return (
        <div className="contactForm">
            <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                <h1 style={{ display: "inline" }}>{!updateFlag && "Add Blog"}{updateFlag && "Update Blog"}</h1>
            </Link>
            {updateFlag &&
                <Link to={"/blogs/" + _id} style={{ display: "inline", float: "right", color: "white" }}><button className="button">Go back</button></Link>
            }
            {!updateFlag &&
                <Link to={"/blogs/"} style={{ display: "inline", float: "right", color: "white" }}><button className="button">Go back</button></Link>
            }
            <hr />
            <form onSubmit={onSubmit}>
                <label>Title:</label>
                <input type="text" required
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Date:</label>
                <input type="text" required
                    value={date} onChange={(e) => setDate(e.target.value)} />
                <label>Blog content:</label>
                <textarea style={{ height: "700px" }} required
                    value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <input id="send" type="submit" value="Submit" />
            </form>
        </div >
    )
};

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getBlog, postBlog, updateBlog } from "../../../helpers/RequestManager";

export const AddBlog = ({ refresher, updateFlag }) => {
    const [blog, setBlog] = useState({});
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    let navigate = useHistory();
    const { _id } = useParams();

    useEffect(() => {
        const getUpdatedBlogData = async () => {
            if (updateFlag === true) {
                await getBlog(_id, setBlog);
            }
        }
        getUpdatedBlogData();
    }, [_id, updateFlag]);

    useEffect(() => {
        if (blog) {
            setTitle(blog?.title);
            setDate(blog?.date);
            setContent(blog?.content);
        }
    }, [blog])

    const onSubmit = async (e) => {
        e.preventDefault();
        const blogBody = {
            "title": title,
            "content": content,
            "date": date
        }
        if (updateFlag === true) {
            await updateBlog(_id, blogBody);
        }
        else {
            await postBlog(blogBody);
        }

        setTitle('');
        setDate('');
        setContent('');
        refresher();
        navigate.push("/blog");
    }

    return (
        <div>
            <h1 tyle={{ display: "block", margin: "0 auto" }}>{!updateFlag && "Add Blog"}{updateFlag && "Update Blog"}</h1>
            <hr />
            <form className="contactForm" onSubmit={onSubmit}>
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

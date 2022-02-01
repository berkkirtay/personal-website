const BlogFooter = ({ blog }) => {
    return (
        <div style={{ paddingBottom: "4%" }}>
            <i style={{ float: "right", margin: "0.5%" }}>{blog.date}</i>
            <i style={{ float: "left", margin: "0.5%" }}>Berk Kırtay ©</i>
        </div>
    )
}

export default BlogFooter

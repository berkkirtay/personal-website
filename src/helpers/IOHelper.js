const path = require('path');
const fs = require('fs');

const readBlogContent = async (id) => {
    const relativePath = path.resolve('./public/blogs');
    return await fs.promises.readFile(path.join(relativePath, id + ".md"),
        "utf8",
        (err, data) => {
            if (err) {
                throw err;
            }
            else if (data === undefined) {
                throw "file couldn't be found.";
            }
            else {
                return data;
            }
        });
}

const uploadBlogContent = async (data, id) => {
    const relativePath = path.resolve('./public/blogs');
    fs.mkdir(
        path.join(relativePath),
        { recursive: true },
        (err) => {
            if (err !== null && (err.code) !== 'EEXIST') {
                throw err;
            }
        }
    );

    fs.writeFile(
        path.join(relativePath, id + ".md"),
        data,
        (err) => {
            if (err !== null) {
                throw err;
            }
        }
    );
}

module.exports = { readBlogContent, uploadBlogContent };
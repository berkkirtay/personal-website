import path from "path";
import fs from "fs";

export const readBlogContent = async (id: string) => {
    const relativePath = path.resolve('./public/blogs');
    return await fs.promises.readFile(path.join(relativePath, id + ".md"), "utf8");
}

export const deleteBlogContent = async (id: string) => {
    const relativePath = path.resolve('./public/blogs');
    fs.unlink(path.join(relativePath, id + ".md"), (err) => {
        if (err) {
            throw err;
        }
    });
};

export const uploadBlogContent = async (data: string, id: string) => {
    const relativePath = path.resolve('./public/blogs');
    fs.mkdir(
        path.join(relativePath),
        { recursive: true },
        (err) => {
            if (err && (err.code) !== 'EEXIST') {
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

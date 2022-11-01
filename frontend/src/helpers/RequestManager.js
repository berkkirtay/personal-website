// Copyright(c) 2022 Berk Kırtay

import axios from "axios";

const api = process.env.REACT_APP_SERVER_URL;

export const getBlogs = async (setBlogs) => {
    return axios.get(api + '/getblogs')
        .then(response => {
            if (response.status === 200) {
                setBlogs(response.data);
            }
            else {
                throw response.status;
            }
        }).catch(function (error) {
            console.log(error);
        })
}

export const getBlog = async (blogId, setBlog) => {
    return axios.get(api + '/blog/' + blogId)
        .then(response => {
            if (response.status === 200) {
                setBlog(response.data);
            }
            else {
                throw response.status;
            }
        }).catch((error) => {
            console.log(error);
        })
}

export const postBlog = async (blogBody) => {
    return axios.post(api + '/postblog', blogBody)
        .then(response => {
            if (response.status === 200) {
                alert("Blog is sent!");
            }
            else {
                throw response.status;
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

export const deleteBlog = async (blogId) => {
    return axios.get(api + '/deleteblog/' + blogId)
        .then(response => {
            if (response.status === 200) {
                console.log("Blog with id: " + blogId + " is deleted.");
                console.log(response.data);
            }
            else {
                throw response.status;
            }

        }).catch((error) => {
            console.log(error);
        })
}

export const updateBlog = async (blogId, blogBody) => {
    const body = {
        "blogId": blogId,
        "blog": blogBody
    }
    return axios.post(api + '/updateblog', body)
        .then(response => {
            if (response.status === 200) {
                alert("Blog is updated!");
            }
            else {
                throw response.status;
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

export const sendEmail = async (emailBody) => {
    return axios.post(api + '/contact', emailBody).then(response => {
        if (response.status === 200) {
            alert("Your message has been sent. Thanks!")
        }
        else {
            throw response.status;
        }

    }).catch((error) => {
        console.log(error);
    })
}

export const setAuth = async (token, otp, setAuthorization) => {
    try {
        const response = await axios.post(api + '/auth/authorize', {
            "Authorization": token,
            "OTP": otp
        });
        if (response.status === 200) {
            return response.data.status;
        }
    }
    catch (err) {
        console.log(err);
    }

}

export const checkAuth = async (setAuthorization) => {
    return axios.get(api + '/auth/checkauth')
        .then(response => {
            if (response.data.result === "Authorized") {
                setAuthorization(true);
            }
            else {
                setAuthorization(false);
            }
        }).catch((error) => {
            console.log(error);
        })
}

export const endAuth = async (setAuthorization) => {
    return axios.get(api + '/auth/destroy')
        .then(response => {
            if (response.status === 200) {
                setAuthorization(false);
            }
        }).catch((error) => {
            console.log(error);
        })
}
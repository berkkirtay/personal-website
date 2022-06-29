import axios from "axios";

const api = process.env.REACT_APP_SERVER_URL;

export const getBlogs = (setBlogs) => {
    axios.get(api + '/getblogs')
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

export const getBlog = (blogId, setBlog) => {
    axios.get(api + '/blog/' + blogId)
        .then(response => {
            if (response.status === 200) {
                setBlog(response.data);
            }
            else {
                throw response.status;
            }
        }).catch(function (error) {
            console.log(error);
        })
}

export const postBlog = (blogBody) => {
    axios.post(api + '/postblog', blogBody)
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

export const deleteBlog = (blogId) => {
    axios.get(api + '/deleteblog/' + blogId)
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

export const updateBlog = (blogId, blogBody) => {
    const body = {
        "blogId": blogId,
        "blog": blogBody
    }
    axios.post(api + '/updateblog', body)
        .then(response => {
            if (response.status === 200) {
                alert("Blog is updated!");
            }
            else {
                throw response.status;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const sendEmail = (emailBody) => {
    axios.post(api + '/contact', emailBody).then(response => {
        if (response.status === 200) {
            alert("Your message has been sent. Thanks!")
            console.log(response.data);
        }
        else {
            throw response.status;
        }

    }).catch(function (error) {
        console.log(error);
    })
}

export const setAuth = (token, otp, setOTP, setAuthorization) => {
    axios.defaults.withCredentials = true;
    axios.post(api + '/auth/authorize', {
        "Authorization": token,
        "OTP": otp
    }).then(response => {
        if (response.status === 200) {
            if (response.data.status === "otp") {
                setOTP("otp");
            }
            else {
                setAuthorization(true);
            }
        }
        else {
            setAuthorization(false);
        }
    }).catch(function (error) {
        console.log(error);
    })
}

export const checkAuth = (setAuthorization) => {
    axios.defaults.withCredentials = true;
    axios.get(api + '/auth/checkauth')
        .then(response => {
            if (response.status === 200) {
                setAuthorization(true);
            }
            else {
                setAuthorization(false);
            }
        }).catch(function (error) {
            console.log(error);
        })
}

export const endAuth = (setAuthorization) => {
    axios.defaults.withCredentials = true;
    axios.get(api + '/auth/destroy')
        .then(response => {
            if (response.status === 200) {
                setAuthorization(false);
            }
        }).catch(function (error) {
            console.log(error);
        })
}
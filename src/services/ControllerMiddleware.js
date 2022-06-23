const services = require("./HttpMiddleware");
const app = services.app;
const AuthorizationController = require("../controllers/AuthorizationController");
const ProtectedBlogController = require("../controllers/BlogController").protectedprotectedRouter;
const UnprotectedBlogController = require("../controllers/BlogController").unprotectedprotectedRouter;
const ContactController = require("../controllers/ContactController");

const isAuthorized = (req, res, next) => {
    if (req.session.isAuthorized === true) {
        next();
    }
    else {
        res.status(401).send("Authorization error!");
    }
}

app.use("/auth", AuthorizationController)
app.use("/contact", ContactController);
app.use("/", UnprotectedBlogController);
app.use("/", isAuthorized, ProtectedBlogController);


// If server receives an undefined request, it will return a 404 error.

app.use('/', (req, res) => {
    return res.status(404).send("The requested url does not exist!");
})

module.exports = {
    app: app
} 

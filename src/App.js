const services = require("./services/Services");
require('dotenv').config()

const app = services.app;

const AuthorizationController = require("./controllers/AuthorizationController");
const protectedBlogController = require("./controllers/BlogController").protectedprotectedRouter;
const unprotectedBlogController = require("./controllers/BlogController").unprotectedprotectedRouter;
const ContractController = require("./controllers/ContactController");

const isAuthorized = (req, res, next) => {
    if (req.session.isAuthorized === true) {
        next();
    }
    else {
        res.status(401).send("Authorization error!");
    }
}

app.use("/auth", AuthorizationController)
app.use("/contact", ContractController);
app.use("/", unprotectedBlogController);
app.use("/", isAuthorized, protectedBlogController);


// If server receives an undefined request, it will return a 404 error.

app.use('/', (req, res) => {
    return res.status(404).send("The requested url does not exist!")
})

app.listen(process.env.PORT, () => {
    console.log('Listening on : ' + process.env.PORT);
    console.log("Serving on client address : " + process.env.CLIENT_URL);
});


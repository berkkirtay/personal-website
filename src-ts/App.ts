const services = require("./services/ControllerMiddleware");
require('dotenv').config();

services.app.listen(process.env.PORT, () => {
    console.log('Listening on : ' + process.env.PORT);
    console.log("Serving to client address : " + process.env.CLIENT_URL);
});


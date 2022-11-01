// Copyright(c) 2022 Berk Kırtay

import { app } from "./middlewares/ControllerMiddleware";
import dotenv from "dotenv";
dotenv.config();


app.listen(process.env.PORT, () => {
    console.log('Listening on : ' + process.env.PORT);
    console.log("Serving to client address : " + process.env.CLIENT_URL);
});


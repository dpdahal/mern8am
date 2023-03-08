import express from "express";
import userRoute from "./user.js";

let apiRoute = express.Router();

apiRoute.get("/", (req, res) => {
    res.send({
        message: "We are in the API route."

    });
});

apiRoute.use("/users", userRoute);

export default apiRoute;
import express from "express";

let userRoute = express.Router();

userRoute.get("/", (req, res) => {
    res.send("All users are here");
});


export default userRoute;
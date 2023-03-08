import express from "express";
import apiRoute from "./api/index.js";

let webRoute = express.Router();

webRoute.use("/", apiRoute);

export default webRoute;


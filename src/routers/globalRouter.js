import express from "express";
import { search, trending } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/search", search);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;

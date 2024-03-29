import express, { Router } from "express";
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter: Router = express.Router();

// Root Routers of Users
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);

// Root Routers of Videos
rootRouter.get("/", home);
rootRouter.get("/search", search);

export default rootRouter;

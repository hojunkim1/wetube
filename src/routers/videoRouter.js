import express from "express";
import {
  getUpload,
  postUpload,
  watch,
  getEdit,
  postEdit,
  deleteVideo,
} from "../controllers/videoController";
import { protectorMiddleware } from "../middlewares";

const videoRouter = express.Router();

// Public Video Routers
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(postUpload);

// Personal Video Routers
const HEXA = "([0-9a-f]{24})";
videoRouter.get(`/:id${HEXA}`, watch);
videoRouter
  .route(`/:id${HEXA}/edit`)
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter.get(`/:id${HEXA}/delete`, protectorMiddleware, deleteVideo);

export default videoRouter;

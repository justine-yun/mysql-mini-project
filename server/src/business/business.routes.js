import express from "express";

import BusinessController from "./business.controller.js";

const businessRouter = express.Router();

businessRouter.get("/", BusinessController.getBusinessList);

export default businessRouter;
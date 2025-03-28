import express from "express";
import {
  addFood,
  listfood,
  removefood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();
//image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (request, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listfood);
foodRouter.post("/remove", removefood);

export default foodRouter;

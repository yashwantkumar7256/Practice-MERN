import express from "express";
import multer from "multer";
import path from "path";
import { uploadImage, getImages } from "../controllers/imageController.js";

const router = express.Router();

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadImage);
router.get("/images", getImages);

export default router;

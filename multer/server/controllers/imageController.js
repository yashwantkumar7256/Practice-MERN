import Image from "../models/image.js";

export const uploadImage = async (req, res) => {
  try {
    const newImage = new Image({
      imageUrl: req.file.filename,
    });

    await newImage.save();
    res.json({ msg: "Image Uploaded" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getImages = async (req, res) => {
  const images = await Image.find();
  res.json(images);
};

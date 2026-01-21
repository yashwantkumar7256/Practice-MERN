import Data from '../models/data.js';

export const getBook = async (req, res) => {
  try {
    const book = await Data.find();
    res.status(200).json(book);
  } catch (err) {
    console.log('error', err.message);
    res.status(500).json({ message: err.message });
  }
};

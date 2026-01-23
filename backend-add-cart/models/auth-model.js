import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});
const auth=mongoose.model('user',authSchema)
export default auth;


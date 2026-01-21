import auth from "../models/auth-model.js";

export const signup = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;

    const user = await auth.findOne({ email });
    if (user) return res.send("User already exists");

    const createdUser = new auth({
      email,
      fullname,
      password,
    });

    await createdUser.save();

    res.send("User created successfully");
  } catch (err) {
    res.send(err.message);
  }
};

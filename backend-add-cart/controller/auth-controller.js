import auth from "../models/auth-model.js";
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
   

    const user = await auth.findOne({ email });
    if (user) return res.send("User already exists");

    const hashpassword= await bcrypt.hash(password,10);

    const createdUser = new auth({
      email,
      fullname,
      password:hashpassword,
    });

    await createdUser.save();

    res.send("User created successfully");
  } catch (err) {
    res.send(err.message);
  }
};

export const login = async (req,res)=>{
  try{

    const {email,password}=req.body
       let user= await auth.findOne({email})
       let isMatch= await bcrypt.compare(password,user.password);

       if(!user || !isMatch){
        return res.send('something went wrong')

       }else{
        res.status(200).json({
          message:"logedin successfully",
          user: user.fullname,
          email:user.email,
          _id:user._id

          
        })
       }


  }catch(err){
    res.send('error:'+err.message) 
      
    }

  }




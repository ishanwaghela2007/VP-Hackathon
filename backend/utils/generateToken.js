import jwt from "jsonwebtoken";


   
  export const generateToken = (username)=>{

    return jwt.sign({username}, process.env.SECRET_KEY, { expiresIn: '1h' });
}



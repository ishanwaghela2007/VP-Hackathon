import jwt from "jsonwebtoken";

export const authenticateToken = async (username,email) => {
   
  const token = jwt.sign({ email, username }, process.env.SECRET, {
    expiresIn: "15d",
  });

};

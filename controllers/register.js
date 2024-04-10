import {regUser} from "../models/auth.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const {username,email,password} = req.body
  const hashedpassword = await bcrypt.hash(password, 12);
  await regUser.create({ username, email, password: hashedpassword });
 
};
export default register;

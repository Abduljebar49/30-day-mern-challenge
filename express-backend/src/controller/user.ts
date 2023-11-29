import { Users } from "../db.js";
import { User } from "../models/user.model/user.model.js";

export const getUsers = (req, res, next) => {
  res.send(Users);
};

export const getUser = (req, res, next) => {
  const { id } = req.params;
  const user: User = Users.find((ele: any) => ele.id == id);
  res.send(user);
};

export const addUser = (req, res, next) => {
  const { name, username, email } = req.body;
  Users.push({ name: name, username: username, email: email });
  res.send(Users);
};

export const updateUser = (req, res, next) => {
  const { id } = req.params;
//   const { name } = req.body;
  const user = Users.find((ele: any) => ele.id == id);
//   if(user){
    
//   }
  res.send(user);
};

export const deleteUser = (req,res,next) =>{
    const { id } = req.params;
    const user: User = Users.find((ele: any) => ele.id == id);

    return user;
}

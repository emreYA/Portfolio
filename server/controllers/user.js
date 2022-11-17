import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import User from "../models/User.js";


export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        var hash;
        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            hash = bcrypt.hashSync(req.body.password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: 
            { 
                name: req.body.name,
                email: req.body.email,
                password: hash,
            }
          },
          { new: true }
        );
        const { password, ...others } = updatedUser._doc;
        res.status(200).json(others);
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can update only your account!"));
    }
  };

  export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can delete only your account!"));
    }
  };
  
  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      next(err);
    }
  };
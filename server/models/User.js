import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
        type: String,
      }, 
    lastName: {
        type: String,
      },    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
    emailNotifications: {
        type: Boolean,
        default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
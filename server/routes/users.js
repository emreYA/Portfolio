import express from "express";
import { verifyToken } from '../verifyToken.js';
import { update, deleteUser, getUser,} from "../controllers/user.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", verifyToken, getUser);

export default router;
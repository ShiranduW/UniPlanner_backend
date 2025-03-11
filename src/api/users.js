import express from "express";
import { saveUser, userAuth, UserList } from "../application/users.js";

export const UserRoute = express.Router();

UserRoute.route("/").post(saveUser);
UserRoute.route("/login").post(userAuth);
UserRoute.route("/UserList").get(UserList);

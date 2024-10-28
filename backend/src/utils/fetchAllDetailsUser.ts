import { populate } from "dotenv";
import { User } from "../models/User.model";
import path from "path";

export const fetchAllDetailsUser = async (email: any, id?: string) => {
  return await User.findOne({ email: email }, {}, { new: true })
    .populate({
      path: "posts",
      populate: {
        path: "comment",

        populate: {
          path: "user",
        },
      },
    })
    .populate("saved")
    .populate("profile")
    .populate("followers")
    .populate("following")
    .populate("userStories")
    .populate("folowersStories")
    .exec();
};
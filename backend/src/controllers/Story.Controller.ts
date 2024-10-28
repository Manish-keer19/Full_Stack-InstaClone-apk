// import { Request, Response } from "express";
// import { Story } from "../models/Story.model";
// import { User } from "../models/User.model";
// import { uploadInCloudinary } from "../utils/cloudinary.utils";
// import { UploadedFile } from "express-fileupload"; // Ensure this import if using express-fileupload

// interface AuthenticatedRequest extends Request {
//   user: {
//     id: string;
//     email: string;
//   };
// }

// // export const createStory = async (
// //   req: AuthenticatedRequest,
// //   res: Response
// // ): Promise<any> => {
// //   try {
// //     const media = req.files?.media;

// //     if (!media) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Media is required",
// //       });
// //     }

// //     const { token } = req.body;
// //     const userId = req.user.id;

// //     if (!token) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Token is missing. All fields are required",
// //       });
// //     }

// //     if (!userId) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "UserId is missing in the authenticated request",
// //       });
// //     }

// //     const isUserExist = await User.findById(userId);
// //     if (!isUserExist) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "User does not exist",
// //       });
// //     }

// //     // Check if `media` is an array or single file and get the path
// //     const mediaFile = Array.isArray(media) ? media[0] : media;
// //     const mediaType = mediaFile.mimetype;
// //     console.log("Media type is: ", mediaType);
// //     let mediaCategory: "image" | "video" | null = null;

// //     if (mediaType.startsWith("image/")) {
// //       mediaCategory = "image";
// //     } else if (mediaType.startsWith("video/")) {
// //       mediaCategory = "video";
// //     }
// //     console.log("Media category is: ", mediaCategory);

// //     if (!mediaCategory) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Unsupported media type. Only images and videos are allowed.",
// //       });
// //     }

// //     const newMedia = await uploadInCloudinary({
// //       data: mediaFile.tempFilePath,
// //       folder: "stories",
// //     });
// //     console.log("New media is: ", newMedia);

// //     // Create a new story document
// //     const newStory = new Story({
// //       user: userId,
// //       stories: [
// //         {
// //           media: newMedia?.secure_url,
// //           mediaType: mediaCategory,
// //           createdAt: new Date(),
// //         },
// //       ],
// //     });

// //     await newStory.save();

// //     return res.status(201).json({
// //       success: true,
// //       message: "Story created successfully",
// //       story: newStory,
// //     });
// //   } catch (error) {
// //     console.log("Could not create the story", error);
// //     return res.status(500).json({
// //       success: false,
// //       message: "Could not create the story",
// //     });
// //   }
// // };

// export const createStory = async (
//   req: Request,
//   res: Response
// ): Promise<any> => {
//   try {
//     const media = req.files?.media;
//     console.log("media is ", media);

//     if (!media) {
//       return res.status(400).json({
//         success: false,
//         message: "Media is required",
//       });
//     }

//     const { token } = req.body;
//     console.log("token is ", token);
//     const authenticatedReq = req as AuthenticatedRequest;
//     const userId = authenticatedReq.user.id;

//     if (!token) {
//       return res.status(400).json({
//         success: false,
//         message: "Token is missing. All fields are required",
//       });
//     }

//     if (!userId) {
//       return res.status(400).json({
//         success: false,
//         message: "UserId is missing in the authenticated request",
//       });
//     }

//     const isUserExist = await User.findById(userId);
//     if (!isUserExist) {
//       return res.status(400).json({
//         success: false,
//         message: "User does not exist",
//       });
//     }

//     const mediaFile = Array.isArray(media) ? media[0] : media;
//     const mediaType = mediaFile.mimetype;
//     console.log("media type is ", mediaType);
//     let mediaCategory: "image" | "video" | null = null;

//     if (mediaType.startsWith("image/")) {
//       mediaCategory = "image";
//     } else if (mediaType.startsWith("video/")) {
//       mediaCategory = "video";
//     }

//     console.log("media category is ", mediaCategory);

//     if (!mediaCategory) {
//       return res.status(400).json({
//         success: false,
//         message: "Unsupported media type. Only images and videos are allowed.",
//       });
//     }

//     const newMedia = await uploadInCloudinary({
//       data: mediaFile.tempFilePath,
//       folder: "stories",
//     });
//     console.log("new media is ", newMedia);

//     const existingStory = await Story.findOne({ user: userId });
//     console.log("existing story is ", existingStory);

//     if (existingStory) {
//       // Add new story to existing document
//       existingStory.stories.push({
//         content: newMedia?.secure_url,
//         mediaType: mediaCategory,
//         createdAt: new Date(),
//         publicId: newMedia?.public_id,
//       });
//       await existingStory.save();

//       return res.status(201).json({
//         success: true,
//         message: "Story added successfully",
//         story: existingStory,
//       });
//     } else {
//       // Create new story document
//       const newStory = new Story({
//         user: userId,
//         stories: [
//           {
//             content: newMedia?.secure_url,
//             mediaType: mediaCategory,
//             createdAt: new Date(),
//             publicId: newMedia?.public_id,
//           },
//         ],
//       });

//       await newStory.save();

//       const newUser = await User.findByIdAndUpdate(userId, {
//         $push: {
//           stories: newStory._id,
//         },
//       });
//       if (!newUser) {
//         return res.json({
//           success: false,
//           message: "new user is null",
//         });
//       }

//       return res.status(201).json({
//         success: true,
//         message: "Story created successfully",
//         story: newStory,
//       });
//     }
//   } catch (error) {
//     console.log("Could not create the story", error);
//     return res.status(500).json({
//       success: false,
//       message: "Could not create the story",
//     });
//   }
// };

// import { Request, Response } from "express";
// import { Story } from "../models/Story.model";
// import { User } from "../models/User.model";
// import { uploadInCloudinary } from "../utils/cloudinary.utils";
// import { UploadedFile } from "express-fileupload"; // Ensure this import if using express-fileupload

// interface AuthenticatedRequest extends Request {
//   user: {
//     id: string;
//     email: string;
//   };
// }

// export const createStory = async (
//   req: AuthenticatedRequest,
//   res: Response
// ): Promise<any> => {
//   try {
//     const media = req.files?.media as UploadedFile | UploadedFile[];
//     console.log("media is ", media);

//     if (!media) {
//       return res.status(400).json({
//         success: false,
//         message: "Media is required",
//       });
//     }

//     const { token } = req.body;
//     console.log("token is ", token);
//     const userId = req.user.id;

//     if (!token) {
//       return res.status(400).json({
//         success: false,
//         message: "Token is missing. All fields are required",
//       });
//     }

//     if (!userId) {
//       return res.status(400).json({
//         success: false,
//         message: "UserId is missing in the authenticated request",
//       });
//     }

//     const isUserExist = await User.findById(userId);
//     if (!isUserExist) {
//       return res.status(400).json({
//         success: false,
//         message: "User does not exist",
//       });
//     }

//     const mediaFile = Array.isArray(media) ? media[0] : media;
//     const mediaType = mediaFile.mimetype;
//     console.log("media type is ", mediaType);
//     let mediaCategory: "image" | "video" | null = null;

//     if (mediaType.startsWith("image/")) {
//       mediaCategory = "image";
//     } else if (mediaType.startsWith("video/")) {
//       mediaCategory = "video";
//     }

//     console.log("media category is ", mediaCategory);

//     if (!mediaCategory) {
//       return res.status(400).json({
//         success: false,
//         message: "Unsupported media type. Only images and videos are allowed.",
//       });
//     }

//     const newMedia = await uploadInCloudinary({
//       data: mediaFile.tempFilePath,
//       folder: "stories",
//     });
//     console.log("new media is ", newMedia);

//     // Create new story document
//     const newStory = new Story({
//       user: userId,
//       stories: [
//         {
//           content: newMedia?.secure_url,
//           mediaType: mediaCategory,
//           createdAt: new Date(),
//           publicId: newMedia?.public_id,
//         },
//       ],
//     });

//     await newStory.save();

//     // Find all followers of the user
//     const user = await User.findById(userId).populate("followers");
//     console.log("user is ", user);
//     if (user && user.followers) {
//       // Iterate through each follower and add the new story ID
//       await Promise.all(
//         user.followers.map(async (follower: any) => {
//           const updatedFollower = await User.findByIdAndUpdate(
//             follower._id,
//             { $push: { folowersStories: newStory._id } },
//             { new: true } // Get the updated document
//           );

//           // Log the updated follower with the new story
//           console.log(
//             `Story saved in follower ${follower.username}:`,
//             updatedFollower?.folowersStories
//           );
//         })
//       );
//     }

//     return res.status(201).json({
//       success: true,
//       message: "Story created successfully",
//       story: newStory,
//     });
//   } catch (error) {
//     console.log("Could not create the story", error);
//     return res.status(500).json({
//       success: false,
//       message: "Could not create the story",
//     });
//   }
// };

import { Request, Response } from "express";
import { Story } from "../models/Story.model";
import { User } from "../models/User.model";
import { uploadInCloudinary } from "../utils/cloudinary.utils";
import { UploadedFile } from "express-fileupload"; // Ensure this import if using express-fileupload

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email: string;
  };
}

export const createStory = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<any> => {
  try {
    const media = req.files?.media as UploadedFile | UploadedFile[];
    if (!media) {
      return res.status(400).json({
        success: false,
        message: "Media is required",
      });
    }

    const { token } = req.body;
    const userId = req.user.id;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token is missing. All fields are required",
      });
    }

    const isUserExist = await User.findById(userId);
    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const mediaFile = Array.isArray(media) ? media[0] : media;
    const mediaType = mediaFile.mimetype;
    let mediaCategory: "image" | "video" | null = null;

    if (mediaType.startsWith("image/")) {
      mediaCategory = "image";
    } else if (mediaType.startsWith("video/")) {
      mediaCategory = "video";
    }

    if (!mediaCategory) {
      return res.status(400).json({
        success: false,
        message: "Unsupported media type. Only images and videos are allowed.",
      });
    }

    const newMedia = await uploadInCloudinary({
      data: mediaFile.tempFilePath,
      folder: "stories",
    });

    // Check if a story document already exists for this user
    let userStory = await Story.findOne({ user: userId });

    const newStoryContent = {
      content: newMedia?.secure_url,
      mediaType: mediaCategory,
      createdAt: Date.now(),
      publicId: newMedia?.public_id,
    };

    if (userStory) {
      // If a story document exists, push the new story content to the stories array
      const updatedStory = await Story.findOneAndUpdate(
        { user: userId },
        { $push: { stories: newStoryContent } },
        { new: true }
      );

      if (!updatedStory) {
        return res.status(400).json({
          success: false,
          message: "Could not create the story update story i",
        });
      }
    } else {
      userStory = await Story.create({
        user: userId,
        stories: [newStoryContent],
      });

      if (!userStory) {
        return res.status(400).json({
          success: false,
          message: "Could not create the story userstory is null",
        });
      }

      //  add story data in userssotry usermodel userstories collection

      const newUser = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            userStories: userStory._id,
          },
        },
        { new: true }
      );
      console.log("added userd story in user", newUser);

      // Find all followers of the user and update their stories
      const user = await User.findById(userId).populate("followers");
      if (user && user.followers) {
        await Promise.all(
          user.followers.map(async (follower: any) => {
            await User.findByIdAndUpdate(
              follower._id,
              { $push: { folowersStories: userStory?._id } },
              { new: true }
            );
          })
        );
      }
    }

    return res.status(201).json({
      success: true,
      message: "Story created successfully",
      story: userStory,
    });
  } catch (error) {
    console.log("Could not create the story", error);
    return res.status(500).json({
      success: false,
      message: "Could not create the story",
    });
  }
};
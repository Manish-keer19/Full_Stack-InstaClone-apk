// import { Server, Socket } from "socket.io";

// export const initializeSocket = (io: Server) => {
//   io.on("connection", (socket: Socket) => {
//     console.log(`User connected: ${socket.id}`);

//     // Listen for incoming messages
//     socket.on("sendMessage", (message) => {
//       console.log(`Message received: ${message}`);
//       // io.emit("receiveMessage", message); // Broadcast to all clients
//     });

//     // Handle disconnection
//     socket.on("disconnect", () => {
//       console.log(`User disconnected: ${socket.id}`);
//     });
//   });
// };

// socket.js
import { Server, Socket } from "socket.io";
import { Message } from "../models/Messages.modal";

export const initializeSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    // Listen for "sendMessage" event from the client
    socket.on("sendMessage", async (message) => {
      if (message && typeof message === "object") {
        console.log("Received message object:", message);

        // Access properties of the message
        const { currentUser, anotherUser, message: msgText, sender } = message;
        console.log(
          `currentUser: ${currentUser}, anotherUser: ${anotherUser}, message: ${msgText}`
        );

        const isMessageExist = await Message.findOne({
          $or: [
            { currentUser: currentUser, anotherUser: anotherUser },
            { currentUser: anotherUser, anotherUser: currentUser },
          ],
        });

        if (isMessageExist) {
          console.log("message already he messagetext ki entry karo");
          // update entry in the database
          const messageData = await Message.findOneAndUpdate(
            {
              $or: [
                { currentUser: currentUser, anotherUser: anotherUser },
                { currentUser: anotherUser, anotherUser: currentUser },
              ],
            },
            {
              $push: {
                messages: {
                  message: msgText,
                  sender: sender,
                  createdAt: Date.now(),
                },
              },
            },
            { new: true }
          )
            .populate("anotherUser")
            .populate("currentUser")
            .populate({
              path: "messages.sender", // specify the path to populate within the messages array
              model: "User", // ensure it references the correct model
            });

          // Emit the "receiveMessage" event to the client
          io.emit("receiveMessage", messageData);
        } else {
          console.log("bhai message create karna he ");
          // create entry in the database
          const newMessage = await Message.create({
            currentUser: currentUser,
            anotherUser: anotherUser,
            messages: [
              { message: msgText, sender: sender, createdAt: Date.now() },
            ],
          });

          const messageData = await Message.findOne(
            {
              currentUser: currentUser,
              anotherUser: anotherUser,
            },
            {},
            { new: true }
          )
            .populate("anotherUser")
            .populate("currentUser")
            .populate({
              path: "messages.sender", // specify the path to populate within the messages array
              model: "User", // ensure it references the correct model
            })
            .exec();

          // Emit the "receiveMessage" event to the client
          io.emit("receiveMessage", messageData);
        }
      } else {
        console.log("Received data is not an object or is undefined");
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

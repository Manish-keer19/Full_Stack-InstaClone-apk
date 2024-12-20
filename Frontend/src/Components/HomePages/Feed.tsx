// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   Image,
// //   ScrollView,
// //   Pressable,
// //   TextInput,
// //   Animated,
// //   Keyboard,
// // } from "react-native";
// // import React, { useState, useRef, useEffect } from "react";
// // import EntypoIcon from "react-native-vector-icons/Entypo";
// // import AntDesignIcon from "react-native-vector-icons/AntDesign";
// // import OcticonsIcons from "react-native-vector-icons/Octicons";
// // import FeatherIcons from "react-native-vector-icons/Feather";
// // import { useSelector } from "react-redux";

// // interface PostData {
// //   likes: number;
// //   comments: number;
// //   liked: boolean;
// //   saved: boolean;
// //   userComment: string;
// // }

// // export default function Feed() {
// //   const user = useSelector((state: any) => state.User.user);
// //   const [posts, setPosts] = useState<any[]>([]);

// //   // console.log("posts in feed ", posts);

// //   useEffect(() => {
// //     if (user) {
// //       setPosts(user.posts);
// //     }
// //   }, [user]);

// //   return (
// //     <ScrollView style={styles.postWrapper}>
// //       {posts.map((post, i) => (
// //         <View style={styles.postContainer} key={i}>
// //           {/* Header */}
// //           <View style={styles.postHeader}>
// //             <View style={styles.profileInfo}>
// //               <Image style={styles.avatar} source={{ uri: post.image }} />
// //               <Text style={styles.username}>Manish Keer</Text>
// //             </View>
// //             <EntypoIcon name="dots-three-vertical" size={18} color={"white"} />
// //           </View>

// //           {/* Post Image */}
// //           <View style={styles.postImageWrapper}>
// //             <Image
// //               style={styles.postImage}
// //               source={{ uri: post.image }} // Image from post data
// //             />
// //           </View>

// //           {/* Action Icons */}
// //           <View style={styles.postActionsWrapper}>
// //             <View style={styles.leftIcons}>
// //               <Pressable
// //                 style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
// //               >
// //                 <AntDesignIcon
// //                   name={post.liked ? "heart" : "hearto"}
// //                   color={post.liked ? "red" : "white"}
// //                   size={24}
// //                 />
// //               </Pressable>

// //               <Pressable
// //                 style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
// //               >
// //                 <OcticonsIcons name="comment" color={"white"} size={24} />
// //               </Pressable>

// //               <Pressable
// //                 style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
// //               >
// //                 <FeatherIcons name="share" color={"white"} size={24} />
// //               </Pressable>
// //             </View>

// //             <Pressable
// //               style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
// //             >
// //               <FeatherIcons
// //                 name={post.saved ? "bookmark" : "bookmark"}
// //                 color={post.saved ? "yellow" : "white"}
// //                 size={24}
// //               />
// //             </Pressable>
// //           </View>

// //           {/* Like and Comment Count */}
// //           <View style={styles.postInfoWrapper}>
// //             <Text style={styles.postInfoText}>{post?.likes?.length} likes</Text>
// //             <Text style={styles.postInfoText}>
// //               {post?.comment?.length} comments
// //             </Text>
// //           </View>

// //           {/* Post Caption */}
// //           <Text style={styles.postDescription}>
// //             <Text style={styles.username}>Manish Keer </Text>
// //             {post.caption}
// //           </Text>

// //           {/* Location */}
// //           <Text style={styles.postLocation}>{post.location}</Text>

// //           {/* Comment Input */}
// //           <View style={styles.commentInputWrapper}>
// //             <TextInput
// //               style={styles.commentInput}
// //               placeholder="Add a comment..."
// //               placeholderTextColor="gray"
// //               value={post.userComment || ""}
// //             />
// //           </View>
// //         </View>
// //       ))}
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   postWrapper: {
// //     flex: 1,
// //     backgroundColor: "black", // Black background for Instagram-like look
// //   },
// //   postContainer: {
// //     marginBottom: 20,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //     backgroundColor: "black",
// //     shadowColor: "#000",
// //     shadowOpacity: 0.8,
// //     shadowRadius: 10,
// //     shadowOffset: { width: 0, height: 4 },
// //     elevation: 5,
// //   },
// //   postHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: 10,
// //   },
// //   profileInfo: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   avatar: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 10,
// //   },
// //   username: {
// //     color: "white",
// //     fontWeight: "bold",
// //   },
// //   postImageWrapper: {
// //     width: "100%",
// //     height: 350,
// //   },
// //   postImage: {
// //     width: "100%",
// //     height: "100%",
// //     resizeMode: "cover",
// //   },
// //   postActionsWrapper: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: 10,
// //   },
// //   leftIcons: {
// //     flexDirection: "row",
// //     gap: 15,
// //   },
// //   postInfoWrapper: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     paddingHorizontal: 10,
// //   },
// //   postInfoText: {
// //     color: "white",
// //   },
// //   postDescription: {
// //     color: "white",
// //     padding: 10,
// //   },
// //   postLocation: {
// //     color: "gray",
// //     paddingHorizontal: 10,
// //     paddingBottom: 5,
// //   },
// //   commentInputWrapper: {
// //     padding: 10,
// //   },
// //   commentInput: {
// //     color: "white",
// //     padding: 10,
// //     borderRadius: 5,
// //     backgroundColor: "#333",
// //   },
// // });

// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// // } from "react-native";
// // import React, { useEffect, useState } from "react";
// // import Footer from "../Footer";
// // import Icons from "react-native-vector-icons/Entypo";
// // import AntDesignIcon from "react-native-vector-icons/AntDesign";
// // import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// // import FeatherIcon from "react-native-vector-icons/Feather";
// // import { post } from "../../Utils/imagedata";
// // import { useSelector } from "react-redux";

// // export default function Posts() {
// //   const user = useSelector((state: any) => state.User.user);
// //   console.log("user in posts", user);

// //   const [post, setpost] = useState<[]>([]);
// //   if (user) {
// //     useEffect(() => {
// //       setpost(user.posts);
// //     },[user]);
// //   }
// //   return (
// //     <View>
// //       <ScrollView style={styles.container}>
// //         {/* Post Container */}
// //         {post.map((item, i) => (
// //           <View style={styles.postContainer} key={i}>
// //             {/* Post Header */}
// //             <View style={styles.postHeader}>
// //               <View style={styles.profileInfo}>
// //                 <Image
// //                   source={{
// //                     uri: item.image,
// //                   }}
// //                   style={styles.avatar}
// //                 />
// //                 <View style={styles.userDetails}>
// //                   <Text style={styles.username}>{user.username}</Text>
// //                   <Text style={styles.location}>{item.location}</Text>
// //                 </View>
// //               </View>
// //               <Icons name="dots-three-vertical" color={"white"} size={20} />
// //             </View>

// //             {/* Post Image */}
// //             <View style={styles.postImageWrapper}>
// //               <Image
// //                 source={{
// //                   uri: item.image,
// //                 }}
// //                 style={styles.postImage}
// //               />
// //             </View>

// //             {/* Like, Comment, Share, Save Section */}
// //             <View style={styles.actionIcons}>
// //               <View style={styles.leftIcons}>
// //                 <TouchableOpacity>
// //                   <AntDesignIcon name="hearto" color={"white"} size={28} />
// //                 </TouchableOpacity>
// //                 <TouchableOpacity>
// //                   <FontAwesomeIcon name="comment-o" color={"white"} size={28} />
// //                 </TouchableOpacity>
// //                 <TouchableOpacity>
// //                   <FeatherIcon name="send" color={"white"} size={28} />
// //                 </TouchableOpacity>
// //               </View>
// //               <TouchableOpacity>
// //                 <FeatherIcon name="bookmark" color={"white"} size={28} />
// //               </TouchableOpacity>
// //             </View>

// //             {/* Post Info */}
// //             <View style={styles.postInfo}>
// //               <Text style={styles.likesText}>1,028 likes</Text>
// //               <Text style={styles.postDescription}>
// //                 <Text style={styles.username}>{user.username} </Text>
// //                 {item.caption}
// //               </Text>
// //             </View>
// //           </View>
// //         ))}
// //       </ScrollView>
// //       <Footer />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     minHeight: "100%",
// //     backgroundColor: "black",
// //     paddingTop: 50,
// //   },
// //   postContainer: {
// //     marginBottom: 20,
// //     borderColor: "#333",
// //     borderWidth: 1,
// //   },
// //   postHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: 10,
// //   },
// //   profileInfo: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   avatar: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 10,
// //   },
// //   userDetails: {
// //     justifyContent: "center",
// //   },
// //   username: {
// //     color: "white",
// //     fontWeight: "bold",
// //     fontSize: 16,
// //   },
// //   location: {
// //     color: "gray",
// //     fontSize: 12,
// //   },
// //   postImageWrapper: {
// //     width: "100%",
// //     height: 400,
// //   },
// //   postImage: {
// //     width: "100%",
// //     height: "100%",
// //   },
// //   actionIcons: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     padding: 10,
// //   },
// //   leftIcons: {
// //     flexDirection: "row",
// //     gap: 15,
// //   },
// //   postInfo: {
// //     padding: 10,
// //   },
// //   likesText: {
// //     color: "white",
// //     fontWeight: "bold",
// //   },
// //   postDescription: {
// //     color: "white",
// //     marginTop: 5,
// //   },
// // });

// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
//   Pressable,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import Footer from "../Footer";
// import Icons from "react-native-vector-icons/Entypo";
// import AntDesignIcon from "react-native-vector-icons/AntDesign";
// import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import FeatherIcon from "react-native-vector-icons/Feather";
// import { useDispatch, useSelector } from "react-redux";
// import { UserServiceInstance } from "../../services/Userservice";
// import { setUser, useLoadUserData } from "../../features/user/userSlice";
// import CommentSection from "../Post/CommentSection";
// import Octicons from "react-native-vector-icons/Octicons";
// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import { RootStackParamList } from "../../../Entryroute";
// import { Postmodal } from "../Modal/Post.modal";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Posts() {
//   useLoadUserData();

//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const dispatch = useDispatch();
//   const [commentModal, setCommentModal] = useState(false);

//   // this is for the comment section to send post data
//   const [post, setpost] = useState<[]>([]);
//   let { user, token } = useSelector((state: any) => state.User);

//   const userId = user?._id;

//   console.log("token is feed", token);

//   console.log("user in posts", user);
//   const [posts, setposts] = useState<[]>([]);
//   const [postlike, setpostlike] = useState<any | []>([]);
//   const [postData, setPostData] = useState<object>({});
//   const [postModal, setPostModal] = useState(false);

//   const [users, setusers] = useState<[]>([]);

//   // console.log("postlike in posts", postlike);

//   // console.log("post in posts", post);

//   // useEffect(() => {
//   //   if (user && user.posts) {
//   //     setposts(user.posts);

//   //     let likes = user?.posts?.map((item: any) => {
//   //       return item.likes.includes(userId);
//   //     });
//   //     setpostlike(likes);
//   //     console.log("likes in posts", likes);
//   //   }
//   // }, [user]); // Only run when 'user' changes

//   const handleCreateLike = async (postId: any, i: any) => {
//     setpostlike((prev: any) => {
//       const newlike = [...prev];
//       newlike[i] = true;
//       return newlike;
//     });

//     // console.log("postlike is inside handleCreateLike ", postlike);

//     console.log("create like pressed");
//     console.log("post id is ", postId);
//     const data = { postId, token };
//     try {
//       const res = await UserServiceInstance.createLike(data);
//       console.log("res is ", res);
//       if (res) {
//         console.log("user liked successfully");
//         dispatch(setUser(res.userdata));
//       } else {
//         setpostlike((prev: any) => {
//           const newlike = [...prev];
//           newlike[i] = false;
//           return newlike;
//         });
//       }
//     } catch (error) {
//       setpostlike((prev: any) => {
//         const newlike = [...prev];
//         newlike[i] = false;
//         return newlike;
//       });
//       console.log("could not create the like", error);
//     }
//   };

//   const handleDeleteLike = async (postId: any, i: any) => {
//     setpostlike((prev: any) => {
//       const newlike = [...prev];
//       newlike[i] = false;
//       return newlike;
//     });
//     console.log("delete like pressed");
//     console.log("post id is ", postId);
//     const data = {
//       postId,
//       token,
//     };
//     try {
//       const res = await UserServiceInstance.deleteLike(data);
//       console.log("res is ", res);
//       if (res) {
//         dispatch(setUser(res.userdata));
//       } else {
//         setpostlike((prev: any) => {
//           const newlike = [...prev];
//           newlike[i] = true;
//           return newlike;
//         });
//       }
//     } catch (error) {
//       setpostlike((prev: any) => {
//         const newlike = [...prev];
//         newlike[i] = true;
//         return newlike;
//       });
//       console.log("could not delete the like", error);
//     }
//   };

//   const handleshowCommentModal = (item: any) => {
//     console.log("item is ", item);
//     setpost(item);
//     setCommentModal(true);
//   };

//   const setallpost = () => {
//     const result = users.map((user: any) => {
//       return user.posts.map((post: any) => {
//         return {
//           ...post,
//           profilePic: user.profilePic,
//           username: user.username,
//         };
//       });
//     });
//     const data: any = result.flat();
//     console.log("result is ", data);
//     return data;
//   };

//   const fetchUserFeed = async () => {
//     const data = {
//       token,
//     };
//     try {
//       const res = await UserServiceInstance.fetchUserFeed(data);
//       console.log("res is ", res);
//       if (res) {
//         setusers(res.userFeed);
//         setposts(setallpost());
//       }
//     } catch (error) {
//       console.log("could not fetchUserFeed", error);
//     }
//   };
//   useEffect(() => {
//     // alert("hello");
//     fetchUserFeed();
//   }, []);

//   return (
//     <View style={{ position: "relative" }}>
//       <ScrollView
//         style={styles.container}
//         showsHorizontalScrollIndicator={false}
//       >
//         {/* Post Container */}
//         {posts.map((item: any, i: number) => (
//           <View style={styles.postContainer} key={i}>
//             {/* Post Header */}

//             <View style={styles.postHeader}>
//               <Pressable
//                 style={styles.profileInfo}
//                 onPress={() => navigation.navigate("Post", { user: user })}
//               >
//                 <Image
//                   source={{ uri: item?.profilePic }}
//                   style={styles.avatar}
//                 />
//                 <View style={styles.userDetails}>
//                   <Text style={styles.username}>{item?.username}</Text>
//                   <Text style={styles.location}>{item?.location}</Text>
//                 </View>
//               </Pressable>

//               <TouchableOpacity
//                 style={{
//                   // backgroundColor: "red",
//                   padding: 10,
//                   borderRadius: 10,
//                 }}
//                 onPress={() => {
//                   setPostData({ userId: user._id, postId: item._id });
//                   setPostModal(true);
//                 }}
//               >
//                 <Icons name="dots-three-vertical" color={"white"} size={20} />
//               </TouchableOpacity>
//             </View>

//             {/* Post Image */}
//             <View style={styles.postImageWrapper}>
//               <Image source={{ uri: item.image }} style={styles.postImage} />
//             </View>

//             {/* Like, Comment, Share, Save Section */}
//             <View style={styles.actionIcons}>
//               <View style={styles.leftIcons}>
//                 {item.likes.includes(user?._id) ? (
//                   <TouchableOpacity
//                     style={{
//                       flexDirection: "row",
//                       alignItems: "center",
//                       gap: 7,
//                     }}
//                     onPress={() => {
//                       handleDeleteLike(item._id, i);
//                     }}
//                   >
//                     <FontAwesomeIcon name="heart" color={"red"} size={28} />
//                     <Text style={{ color: "white" }}>
//                       {item?.likes?.length}
//                     </Text>
//                   </TouchableOpacity>
//                 ) : (
//                   <TouchableOpacity
//                     onPress={() => {
//                       handleCreateLike(item._id, i);
//                     }}
//                     style={{
//                       flexDirection: "row",
//                       alignItems: "center",
//                       gap: 7,
//                     }}
//                   >
//                     <FontAwesomeIcon name="heart-o" color={"white"} size={28} />
//                     <Text style={{ color: "white" }}>
//                       {item?.likes?.length}
//                     </Text>
//                   </TouchableOpacity>
//                 )}

//                 <TouchableOpacity
//                   onPress={() => {
//                     handleshowCommentModal(item);
//                   }}
//                   style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
//                 >
//                   <Octicons name="comment" color={"white"} size={28} />
//                   <Text style={{ color: "white" }}>
//                     {item?.comment?.length}
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                   <FeatherIcon name="send" color={"white"} size={28} />
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity>
//                 <FeatherIcon name="bookmark" color={"white"} size={28} />
//               </TouchableOpacity>
//             </View>

//             {/* Post Info */}
//             <View style={styles.postInfo}>
//               <Text style={styles.likesText}>{item?.likes?.length} likes</Text>
//               <Text style={styles.postDescription}>
//                 <Text style={styles.username}>{user?.username} </Text>
//                 {item.caption}
//               </Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//       {/* <CommentSection
//         commentModal={commentModal}
//         Posts={post}
//         setCommentModal={setCommentModal}
//       /> */}
//       <Modal
//         visible={commentModal}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setCommentModal(false)}
//       >
//         <CommentSection
//           commentModal={commentModal}
//           Posts={post} // This should be the specific post to comment on
//           setCommentModal={setCommentModal}
//         />
//       </Modal>

//       <Modal
//         visible={postModal}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setPostModal(false)}
//       >
//         <Postmodal PostData={postData} />
//       </Modal>

//       <Footer />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex:1,
//     width: "100%",
//     minHeight: "100%",
//     backgroundColor: "black",
//   },
//   postContainer: {
//     minHeight: 200,
//     marginBottom: 20,
//     // borderColor: "#333",
//     // borderWidth: 1,
//     margin: 5,
//     // padding: 5,
//   },
//   postHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//   },
//   profileInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     // borderWidth:2,
//     // borderColor:"blue",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   userDetails: {
//     justifyContent: "center",
//   },
//   username: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   location: {
//     color: "gray",
//     fontSize: 12,
//   },
//   postImageWrapper: {
//     width: "100%",
//     height: 400,
//     // borderWidth:2,
//     // borderColor:"blue"
//   },
//   postImage: {
//     width: "100%",
//     height: "100%",
//   },
//   actionIcons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10,
//   },
//   leftIcons: {
//     flexDirection: "row",
//     gap: 15,
//   },
//   postInfo: {
//     padding: 10,
//   },
//   likesText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   postDescription: {
//     color: "white",
//     marginTop: 5,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Icons from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { UserServiceInstance } from "../../services/Userservice";
import { setUser, useLoadUserData } from "../../features/user/userSlice";
import CommentSection from "../Post/CommentSection";
import Octicons from "react-native-vector-icons/Octicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../Entryroute";
import { Postmodal } from "../Modal/Post.modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Posts() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const [commentModal, setCommentModal] = useState(false);
  const [post, setPost] = useState<[]>([]);
  const { user, token } = useSelector((state: any) => state.User);

  // console.log("user is ", user?._id);
  // console.log("token is ", token);
  const userId = user?._id;

  const [posts, setPosts] = useState<any[]>([]);
  const [postLikeStatus, setPostLikeStatus] = useState<boolean[]>([]);
  const [postData, setPostData] = useState<object>({});
  const [postModal, setPostModal] = useState(false);
  const [users, setUsers] = useState<[]>([]);

  const handleLikeToggle = async (postId: any, i: number, isLiked: boolean) => {
    setPostLikeStatus((prev) => {
      const newStatus = [...prev];
      newStatus[i] = !isLiked;
      return newStatus;
    });

    const data = { postId, token };
    try {
      const res = isLiked
        ? await UserServiceInstance.deleteLike(data)
        : await UserServiceInstance.createLike(data);

      if (res) {
        dispatch(setUser(res.userdata));
      } else {
        setPostLikeStatus((prev) => {
          const newStatus = [...prev];
          newStatus[i] = isLiked; // Revert the like status on failure
          return newStatus;
        });
      }
    } catch (error) {
      // console.error("Error toggling like:", error);
      setPostLikeStatus((prev) => {
        const newStatus = [...prev];
        newStatus[i] = isLiked; // Revert the like status on error
        return newStatus;
      });
    }
  };

  const handleshowCommentModal = (item: any) => {
    setPost(item);
    setCommentModal(true);
  };

  const fetchUserFeed = async () => {
    const data = { token };
    try {
      const res = await UserServiceInstance.fetchUserFeed(data);
      if (res) {
        const allPosts = setAllPosts(res.userFeed);
        console.log("All Posts:", allPosts); // Log all posts
        setPosts(allPosts);
      }
    } catch (error) {
      console.error("Could not fetch user feed:", error);
    }
  };

  const setAllPosts = (users: any) => {
    const data = users.flatMap((user: any) =>
      user.posts.map((post: any) => ({
        ...post,
        user: user,
      }))
    );

    const likes = data.map((item: any) => item.likes.includes(userId));
    setPostLikeStatus(likes);
    return data;
  };

  useEffect(() => {
    fetchUserFeed();
    console.log("posts is ", posts);
  }, [user, token, posts.length]);

  return (
    <>
      {!user || !token || posts.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            width: "100%",
            height: "100%",
          }}
        >
          <ActivityIndicator size={"large"} color={"white"} />
        </View>
      ) : (
        <View style={{ position: "relative" }}>
          <ScrollView
            style={styles.container}
            showsHorizontalScrollIndicator={false}
          >
            {posts.map((item: any, i: number) => (
              <View style={styles.postContainer} key={i}>
                <View style={styles.postHeader}>
                  <Pressable
                    style={styles.profileInfo}
                    onPress={() =>
                      navigation.navigate("UserProfile", { userId: item?.user })
                    }
                  >
                    {item?.user?.userStories?.length > 0 ? (
                      <TouchableOpacity
                        style={{
                          borderWidth: 2,
                          borderColor: "yellow",
                          borderRadius: 50,
                          padding: 3,
                        }}
                        onPress={() =>
                          navigation.navigate("AllStories", {
                            user: item.user,
                          })
                        }
                      >
                        <Image
                          source={{ uri: item?.user?.profilePic }}
                          style={styles.avatar}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity>
                        <Image
                          source={{ uri: item?.user?.profilePic }}
                          style={styles.avatar}
                        />
                      </TouchableOpacity>
                    )}

                    <View style={styles.userDetails}>
                      <Text style={styles.username}>
                        {item?.user?.username}
                      </Text>
                      <Text style={styles.location}>{item?.location}</Text>
                    </View>
                  </Pressable>
                  <TouchableOpacity
                    style={{ padding: 10, borderRadius: 10 }}
                    onPress={() => {
                      setPostData({ post: item, userID: user._id });
                      setPostModal(true);
                    }}
                  >
                    <Icons
                      name="dots-three-vertical"
                      color={"white"}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.postImageWrapper}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.postImage}
                  />
                </View>

                <View style={styles.actionIcons}>
                  <View style={styles.leftIcons}>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 7,
                      }}
                      onPress={() =>
                        handleLikeToggle(item._id, i, postLikeStatus[i])
                      }
                    >
                      <FontAwesomeIcon
                        name={postLikeStatus[i] ? "heart" : "heart-o"}
                        color={postLikeStatus[i] ? "red" : "white"}
                        size={28}
                      />
                      <Text style={{ color: "white" }}>
                        {item?.likes?.length}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleshowCommentModal(item)}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 7,
                      }}
                    >
                      <Octicons name="comment" color={"white"} size={28} />
                      <Text style={{ color: "white" }}>
                        {item?.comment?.length}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FeatherIcon name="send" color={"white"} size={28} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <FeatherIcon name="bookmark" color={"white"} size={28} />
                  </TouchableOpacity>
                </View>

                <View style={styles.postInfo}>
                  <Text style={styles.likesText}>
                    {item?.likes?.length} likes
                  </Text>
                  <Text style={styles.postDescription}>
                    <Text style={styles.username}>{item?.user?.username} </Text>
                    {item.caption}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <Modal
            visible={commentModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setCommentModal(false)}
          >
            <CommentSection
              commentModal={commentModal}
              Posts={post}
              setCommentModal={setCommentModal}
            />
          </Modal>

          <Modal
            visible={postModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setPostModal(false)}
          >
            <Postmodal PostData={postData} />
          </Modal>

          <Footer />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "black",
  },
  postContainer: {
    minHeight: 200,
    marginBottom: 20,
    margin: 5,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "yellow",
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userDetails: {
    justifyContent: "center",
  },
  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  location: {
    color: "gray",
    fontSize: 12,
  },
  postImageWrapper: {
    width: "100%",
    height: 400,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  leftIcons: {
    flexDirection: "row",
    gap: 15,
  },
  postInfo: {
    padding: 10,
  },
  likesText: {
    color: "white",
    fontWeight: "bold",
  },
  postDescription: {
    color: "white",
    marginTop: 5,
  },
});

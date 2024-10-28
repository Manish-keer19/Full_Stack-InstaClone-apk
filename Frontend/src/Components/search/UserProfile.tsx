import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import Footer from "../Footer";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../Entryroute";
import { NavigationProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import { setUser, useLoadUserData } from "../../features/user/userSlice";
import Loader from "../Loader";
import { UserServiceInstance } from "../../services/Userservice";

export default function UserProfile({ route }: any) {
  useLoadUserData();

  const currentUser = useSelector((state: any) => state.User.user);
  console.log("current use is ", currentUser);
  const token = useSelector((state: any) => state.User.token);
  console.log("token in user profile", token);
  const user = route.params && route.params.user;

  // Set initial following state
  const [isFollowing, setIsFollowing] = useState(
    currentUser?.following?.some((item: any) => item._id === user._id)
  );

  console.log("isfollowing in useProfile ", isFollowing);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  console.log("User in profile", user);
  const [activeTab, setActiveTab] = useState("Posts");

  const renderPost = ({ item }: any) => (
    <TouchableOpacity
      style={styles.postWrapper}
      onPress={() => navigation.navigate("Post", { user: user })}
    >
      <Image source={{ uri: item.image }} style={styles.postImage} />
    </TouchableOpacity>
  );

  if (!user) {
    return <Loader />;
  }

  const handleUnfolloweUser = async () => {
    console.log("unfollow user button pressed");
    setIsFollowing(false);
    const data = {
      userId: user._id,
      token,
    };
    try {
      const res = await UserServiceInstance.unfolloweUser(data);
      console.log("res in user profile", res);
      if (res) {
        dispatch(setUser(res.userdata));
      }
    } catch (error) {
      setIsFollowing(true);
      console.log("could not follow the user", error);
    }
  };

  const handleFollowUser = async () => {
    setIsFollowing(true);
    console.log("follow user button pressed");

    const data = {
      userId: user._id,
      token,
    };
    try {
      const res = await UserServiceInstance.followeUser(data);
      console.log("res in user profile", res);
      if (res) {
        dispatch(setUser(res.userdata));
      }
    } catch (error) {
      setIsFollowing(false);
      console.log("could not follow the user", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 50,
            paddingLeft: 10,
          }}
        >
          <AntDesignIcons name="arrowleft" color={"white"} size={28} />
          <Text style={styles.profileUsername}>{user?.username}</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
          <TouchableOpacity>
            <FeatherIcons name="share" color={"white"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              color={"white"}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileInfo}>
        <Image style={styles.profileImage} source={{ uri: user?.profilePic }} />
        <View style={styles.statsWrapper}>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{user.posts?.length}</Text>
            <Text style={styles.statsLabel}>Posts</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{user.followers?.length}</Text>
            <Text style={styles.statsLabel}>Followers</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{user.following?.length}</Text>
            <Text style={styles.statsLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        {user.profile && (
          <>
            {user.profile.username && (
              <Text style={styles.bio}>{user?.profile?.username}</Text>
            )}
            {user.profile.name && (
              <Text style={styles.bio}>{user?.profile?.name}</Text>
            )}
            {/* {user.profile.username && (
              <Text style={styles.bio}>{user?.profile?.username}</Text>
            )} */}
            {user.profile.bio && (
              <Text style={styles.bio}>{user?.profile?.bio}</Text>
            )}
          </>
        )}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {isFollowing ? (
          <TouchableOpacity
            style={styles.unfollowbtn}
            onPress={handleUnfolloweUser}
          >
            <Text style={styles.buttonText}>Unfollow</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.Followbtn} onPress={handleFollowUser}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.Messagebtn}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("Posts")}
          style={activeTab === "Posts" ? styles.activeTab : styles.tab}
        >
          <Ionicons name="grid-outline" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("Reels")}
          style={activeTab === "Reels" ? styles.activeTab : styles.tab}
        >
          <Ionicons name="play-circle-outline" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("Tagged")}
          style={activeTab === "Tagged" ? styles.activeTab : styles.tab}
        >
          <Ionicons name="person-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Posts/Reels/Tagged Grid */}
      <FlatList
        data={user.posts}
        renderItem={renderPost}
        keyExtractor={(item) => item._id}
        numColumns={3}
        style={styles.postsContainer}
        contentContainerStyle={{ paddingBottom: 60 }} // Ensure there’s space for the footer
      />

      {/* Footer Component */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    marginTop: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileUsername: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 14,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  statsWrapper: {
    flexDirection: "row",
  },
  statsContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  statsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  statsLabel: {
    fontSize: 14,
    color: "gray",
  },
  bioContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  bio: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 15,
  },
  Followbtn: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 15,
  },
  unfollowbtn: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 15,
  },
  Messagebtn: {
    backgroundColor: "#333",
    flex: 1,
    alignItems: "center",
    padding: 8,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: {
    alignItems: "center",
    padding: 10,
  },
  activeTab: {
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  postsContainer: {
    minHeight: 200,
  },
  postWrapper: {
    width: "33.33%", // Each post takes one-third of the width
    padding: 1,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  postImage: {
    width: "100%",
    height: 120, // Fixed height for posts
  },
  settingsModal: {
    position: "absolute",
    top: 75,
    right: 10,
    zIndex: 1000,
    borderRadius: 8,
    backgroundColor: "black",
  },
  modalButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
  },
});
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { images } from "../Utils/imagedata";

const Footer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Type-safe navigation

  return (
    <View style={styles.footer}>
      {/* Home Icon - Navigates to Home Screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Add Icon - Navigates to Add Post Screen */}
      <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
        <Ionicons name="add-circle-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Play Icon - Navigates to Video or Reels Screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Reels")}>
        <Ionicons name="play-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Profile Icon - Navigates to Profile Screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgstyle} source={{ uri: images[0].uri }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "black",
    borderTopWidth: 1,
    borderTopColor: "pink",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  imgContainer: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  imgstyle: { width: "100%", height: "100%", borderRadius: 50 },
});

export default Footer;

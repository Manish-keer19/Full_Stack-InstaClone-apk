import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
// import { images } from "../../Utils/imagedata";
import { useSelector } from "react-redux";

export default function Story() {
  const user = useSelector((state: any) => state.User.user);
  // console.log("user in story", user);

  const [images, setimages] = useState<any>([]);

  if (user) {
    useEffect(() => {
      setimages(user?.posts);
    }, []);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent} // Use content container to limit items height
      >
        {/* Repeat stories */}
        {images.map((item: any, index: any) =>
          index == 0 ? (
            <View key={index} style={styles.storyContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <Icon
                name="pluscircleo"
                size={30}
                color={"white"}
                style={{
                  position: "absolute",
                  right: 14,
                  top: 82,
                  backgroundColor: "blue",
                  borderRadius: 50,
                }}
              />
              <Text style={styles.text}>Manish Kumar </Text>
            </View>
          ) : (
            <View key={index} style={styles.storyContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <Text style={styles.text}>Manish keer</Text>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Set max height to ScrollView to make it scrollable when content exceeds it
    maxHeight: 200, // Adjust this to your needs
    // borderWidth: 2,
    // borderColor: "pink",
    width: "100%",
  },
  scrollViewContent: {
    flexDirection: "row", // Ensure horizontal layout
  },
  storyContainer: {
    // borderWidth: 2,
    // borderColor: "gold",
    width: 120, // Fixed width for each story
    height: 150, // Set height for each story
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 10,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gold",
    // borderColor: "pink",
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 50,
  },
  text: {
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
  },
});

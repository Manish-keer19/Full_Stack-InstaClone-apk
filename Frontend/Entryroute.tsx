import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Components/HomePages/HomeScreen";
import Profile from "./src/Components/Profile/Profile";
import AddPost from "./src/Components/AddPost/AddPost";
import ImagePicker1 from "./src/Components/ImagePicker";
import EditProfile from "./src/Components/EditProfile";
import Post from "./src/Components/Post/Posts";
import Login from "./src/auth/Login";
import Signup from "./src/auth/Signup";
import Message from "./src/Components/Message/Message";
import Notification from "./src/Components/Notification/Notification";
import Loader from "./src/Components/Loader";
import CreatePost from "./src/Components/AddPost/CreatePost";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoadUserData } from "./src/features/user/userSlice";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  AddPost: undefined;
  Reels: undefined;
  Profile: undefined;
  ImagePicker: undefined;
  EditProfile: undefined;
  Post: undefined;
  Login: undefined;
  Signup: undefined;
  Messages: undefined;
  Notification: undefined;
  Loader: undefined;
  CreatePost: { file1: object | null | undefined };
};

export default function Entryroute() {
  useLoadUserData();
  const token = useSelector((state: any) => state.User.token);
  const [initialPage, setInitialPage] = useState<string>("");

  useEffect(() => {
    // Set the initial page based on user presence
    setInitialPage(token ? "Home" : "Login");
  }, [token]); // Add 'user' as a dependency

  console.log("initialPage is ", initialPage);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialPage} // Fallback to "Login" if initialPage is empty
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="ImagePicker" component={ImagePicker1} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Messages" component={Message} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

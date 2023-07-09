import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./components/Screens/LandingPage";
import SignupScreen from "./components/Screens/SignupScreen";
import HomePage from "./components/Screens/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  const userLoggedIn = false; // Set this to true when the user is logged in
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingPage'>
        <Stack.Screen
          name='LandingPage'
          component={LandingPage}
          options={{ title: "LandingPage" }}
        />
        <Stack.Screen
          name='Signup'
          component={SignupScreen}
          options={{ title: "Signup" }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: "Login" }}
          initialParams={{ userLoggedIn: false }}
        />
        <Stack.Screen
          name='Home'
          component={HomePage}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

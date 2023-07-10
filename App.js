import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  const userLoggedIn = false; // Set this to true when the user is logged in
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

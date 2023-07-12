import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./components/Navigation/Navigation";
import TabNavigation from "./components/Navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot, useRecoilState } from "recoil";
import { profileState } from "./recoil/loggedInUser";

export default function Main() {
  const [userLoggedIn, setUserLoggedIn] = useRecoilState(profileState);

  const handleLogin = () => {
    setUserLoggedIn({
      userLoggedIn: true,
      user: "student",
    });
  };

  const handleLogout = () => {
    setUserLoggedIn({
      userLoggedIn: false,
      user: "student",
    });
  };

  return (
    <RecoilRoot>
      {/* Move RecoilRoot here */}
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {userLoggedIn ? (
              <TabNavigation onLogout={handleLogout} />
            ) : (
              <Navigation onLogin={handleLogin} />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </RecoilRoot>
  );
}

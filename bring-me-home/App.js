import { StyleSheet, View, Text } from "react-native";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import LoginPage from "./src/pages/login/LoginPage";

// import { light, bold } from "./src/constants/font";

export default function App() {
  const [fontsLoaded] = useFonts({
    // "poppins-light": light,
    // "poppins-bold": bold,
    "poppins-light": require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.rootScreen} onLayout={onLayoutRootView}>
      <LoginPage></LoginPage>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

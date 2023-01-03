import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";

import Navigator from "./src/navigator/Navigator";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "poppins-light": require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  const [page, setPage] = useState("landing");

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
      <StatusBar style="auto" />
      <Navigator></Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#fff",
    resizeMode: "cover", // or 'stretch'
  },
});

export default App;

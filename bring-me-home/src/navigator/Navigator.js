import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import ForgotPage from "../pages/forgot/ForgotPage";
import ScanPage from "../pages/scan/ScanPage";

function Navigator() {
  function LandingScreen({ navigation }) {
    return (
      <LandingPage
        onLogin={() => {
          navigation.navigate("LoginPage");
        }}
        onScan={() => {
          navigation.navigate("ScanPage");
        }}></LandingPage>
    );
  }

  function LoginScreen({ navigation }) {
    return (
      <LoginPage
        onLogin={() => {
          // navigation.navigate("ScanPage");
        }}
        onForgot={() => {
          navigation.navigate("ForgotPage");
        }}
        onSignup={() => {
          navigation.navigate("SignupPage");
        }}
        onScan={() => {
          navigation.navigate("ScanPage");
        }}></LoginPage>
    );
  }

  function SignupScreen({ navigation }) {
    return (
      <SignupPage
        onLogin={() => {
          navigation.navigate("LoginPage");
        }}></SignupPage>
    );
  }

  function ForgotScreen({ navigation }) {
    return (
      <ForgotPage
        onLogin={() => {
          navigation.navigate("LoginPage");
        }}></ForgotPage>
    );
  }

  function ScanScreen({ navigation }) {
    return (
      <ScanPage
        onSuccess={() => {
          // navigation.navigate("ScanPage");
        }}></ScanPage>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPage"
          component={ForgotScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanPage"
          component={ScanScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Navigator;

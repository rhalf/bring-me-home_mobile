import { View, Text, Pressable, StyleSheet } from "react-native";

import { primary, secondary, tertiary } from "../../constants/colors";

function BaseButton({
  children,
  onPress,
  backgroundColor,
  width,
  marginHorizontal,
  color,
}) {
  return (
    <View style={{ ...styles.view, width, marginHorizontal, backgroundColor }}>
      <Pressable
        // style={({ pressed }) => (pressed ? styles.pressed : styles.notPressed)}
        onPress={onPress}
        android_ripple={{ color: "yellow", borderless: true }}>
        <Text style={{ ...styles.text, color }}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default BaseButton;

const styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    elevation: 2,
    height: 50,
  },

  text: {
    fontFamily: "poppins-light",
    fontSize: 22,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    height: "100%",
  },

  pressed: {
    borderRadius: 10,
    opacity: 0.5,
  },

  notPressed: {
    borderRadius: 10,
    opacity: 1,
  },
});

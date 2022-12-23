import { Text, Pressable, StyleSheet } from "react-native";

import { primary, secondary, tertiary } from "../../constants/colors";

function BaseButton({ children, onPress, backgroundColor }) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : styles.notPressed)}
      onPress={onPress}
      android_ripple={{ color: primary }}>
      <Text style={{ ...styles.text, backgroundColor }}>{children}</Text>
    </Pressable>
  );
}

export default BaseButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-light",
    fontSize: 22,
    color: "white",

    textAlign: "center",
    textAlignVertical: "center",

    borderRadius: 5,
    height: 50,
  },

  pressed: {
    opacity: 0.75,
  },

  notPressed: {
    opacity: 1,
  },
});

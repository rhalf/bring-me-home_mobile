import { Text, Pressable, StyleSheet } from "react-native";

function BaseTextButton({ children, onPress, color, width, textAlign }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? { ...styles.pressed, width } : { ...styles.notPressed, width }
      }
      onPress={onPress}>
      <Text style={{ ...styles.text, color, textAlign }}>{children}</Text>
    </Pressable>
  );
}

export default BaseTextButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-light",
    fontSize: 18,
  },

  pressed: {
    opacity: 0.5,
  },

  notPressed: {
    opacity: 1,
  },
});

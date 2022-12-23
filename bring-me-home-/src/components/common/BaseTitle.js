import { Text, StyleSheet } from "react-native";

function BaseTitle({ children, textAlign, color }) {
  return <Text style={{ ...styles.text, textAlign, color }}>{children}</Text>;
}

export default BaseTitle;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-bold",
    fontSize: 26,
  },
});

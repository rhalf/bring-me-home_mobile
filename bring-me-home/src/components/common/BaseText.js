import { Text, StyleSheet } from "react-native";

function BaseTitle({ children, textAlign, color, width }) {
  return (
    <Text style={{ ...styles.text, textAlign, color, width }}>{children}</Text>
  );
}

export default BaseTitle;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-light",
    fontSize: 18,
    // color: primary,
    // borderWidth: 2,
    // borderColor: "green",
    // backgroundColor: "grey",
  },
});

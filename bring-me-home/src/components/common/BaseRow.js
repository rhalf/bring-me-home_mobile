import { View, StyleSheet } from "react-native";

function BaseRow({ children }) {
  return <View style={{ ...styles.row }}>{children}</View>;
}

export default BaseRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

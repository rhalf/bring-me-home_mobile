import { View, StyleSheet } from "react-native";

function BaseSheet({ children, backgroundColor }) {
  return <View style={{ ...styles.sheet, backgroundColor }}>{children}</View>;
}

export default BaseSheet;

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    padding: 20,
    backgroundColor: "#efefef",
  },
});

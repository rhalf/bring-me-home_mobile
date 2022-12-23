import { View, StyleSheet } from "react-native";

function BaseDiv({ children, alignItems, width, height, marginTop }) {
  return (
    <View style={{ ...styles.div, alignItems, height, width, marginTop }}>
      {children}
    </View>
  );
}

export default BaseDiv;

const styles = StyleSheet.create({
  div: {
    marginTop: 20,
  },
});

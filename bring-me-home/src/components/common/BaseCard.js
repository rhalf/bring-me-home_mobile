import { View, StyleSheet } from "react-native";
import { primary } from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // justifyContent: "center",
    // alignItems: "center",
    padding: 8,
    marginTop: 40,
    marginHorizontal: 8,

    backgroundColor: "white",
    borderRadius: 8,
    elevation: 8,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

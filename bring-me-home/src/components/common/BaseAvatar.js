import { View, Image, StyleSheet } from "react-native";

function BaseAvatar({ path, size }) {
  return (
    <Image
      style={{
        ...styles.image,
        height: size,
        width: size,
        borderRadius: size / 2,
      }}
      source={path}></Image>
  );
}

export default BaseAvatar;

const styles = StyleSheet.create({
  image: {
    borderColor: "white",
    borderRadius: 2,
    borderWidth: 5,
  },
});

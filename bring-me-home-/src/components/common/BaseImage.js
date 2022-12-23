import { Image, StyleSheet } from "react-native";

function BaseImage({ path, width, height }) {
  return (
    <Image style={{ ...styles.image, width, height }} source={path}></Image>
  );
}

export default BaseImage;
const styles = StyleSheet.create({
  image: {},
});

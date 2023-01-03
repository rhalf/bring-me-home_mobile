import { Image, StyleSheet, Pressable } from "react-native";

function BaseImage({
  onPress,
  path,
  width,
  height,
  borderColor,
  borderRadius,
  borderWidth,
}) {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={{
          ...styles.image,
          width,
          height,
          borderColor,
          borderRadius,
          borderWidth,
        }}
        source={path}></Image>
    </Pressable>
  );
}

export default BaseImage;
const styles = StyleSheet.create({
  image: {},
});

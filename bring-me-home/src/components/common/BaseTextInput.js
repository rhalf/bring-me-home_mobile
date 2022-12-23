import { TextInput, StyleSheet } from "react-native";

import { background2 } from "../../constants/colors.js";

function BaseTextInput({
  onChangeText,
  value,
  color,
  maxLength,
  placeholder,
  activeUnderlineColor,
  label,
  textAlign,
}) {
  return (
    <TextInput
      textAlign={textAlign}
      style={{ ...styles.textInput, color }}
      InputProps={{ disableUnderline: true }}
      onChangeText={onChangeText}
      maxLength={maxLength}
      autoCapitalize="none"
      autoCorrect={false}
      label={label}
      placeholder={placeholder}
      activeUnderlineColor={activeUnderlineColor}
      value={value}></TextInput>
  );
}

export default BaseTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "poppins-light",
    fontSize: 20,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",

    mode: "outlined",

    padding: 10,
    height: 50,
    backgroundColor: background2,
  },
});

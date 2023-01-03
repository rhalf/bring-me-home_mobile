import { Alert, Modal, StyleSheet, View } from "react-native";

import BaseText from "../common/BaseText";
import BaseButton from "../common/BaseButton";
import BaseImage from "../common/BaseImage";

const App = ({ path, visible, onCancel }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <BaseImage
          path={path}
          width={"auto"}
          height={"100%"}
          onPress={() => onCancel()}></BaseImage>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default App;

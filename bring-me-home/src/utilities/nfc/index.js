import NfcManager, { NfcTech, NfcEvents } from "react-native-nfc-manager";

export default {
  async readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      // const tag = await NfcManager.getTag();
      return await NfcManager.getTag();
    } catch (error) {
      console.log(error);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  },

  async attachedReadEvent(callback) {
    await NfcManager.registerTagEvent();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, callback);
  },

  getMessages({ ndefMessage }) {
    const messages = ndefMessage.map((message) => {
      const id = message.id;
      let payload = "";
      message.payload.forEach(
        (chr) => (payload = payload + String.fromCharCode(chr))
      );
      let type = "";
      message.type.forEach((chr) => (type = type + String.fromCharCode(chr)));
      return {
        id,
        payload,
        type,
      };
    });

    return messages;
  },

  isNfc() {
    return NfcManager.isSupported();
  },

  start() {
    if (NfcManager.isSupported()) NfcManager.start();
  },
};

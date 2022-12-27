import { View, Dimensions } from "react-native";
import { useState } from "react";

import BaseSheet from "../../components/common/BaseSheet";
import BaseTitle from "../../components/common/BaseTitle";
import BaseImage from "../../components/common/BaseImage";
import BaseText from "../../components/common/BaseText";
import BaseTextButton from "../../components/common/BaseTextButton";
import BaseRow from "../../components/common/BaseRow";
import BaseDiv from "../../components/common/BaseDiv";
import BaseTextInput from "../../components/common/BaseTextInput";
import BaseButton from "../../components/common/BaseButton";

import logo from "../../assets/images/logo_dark.png";
import scanNow from "../../assets/images/scan-now.png";

import NfcManager, { NfcTech } from "react-native-nfc-manager";

import { primary, secondary, success, tertiary } from "../../constants/colors";

// Pre-step, call this before any NFC operations
// NfcManager.start();

function ScanPage() {
  // async function readNdef() {
  //   try {
  //     // register for the NFC tag with NDEF in it
  //     await NfcManager.requestTechnology(NfcTech.Ndef);
  //     // the resolved tag object will contain `ndefMessage` property
  //     const tag = await NfcManager.getTag();
  //     console.warn("Tag found", tag);
  //   } catch (ex) {
  //     console.warn("Oops!", ex);
  //   } finally {
  //     // stop the nfc scanning
  //     NfcManager.cancelTechnologyRequest();
  //   }
  // }
  return (
    <BaseSheet backgroundColor={primary}>
      <BaseDiv alignItems="center" marginTop={100}>
        <BaseImage path={logo} width={200} height={140}></BaseImage>
      </BaseDiv>

      <BaseDiv alignItems="center" marginTop={40}>
        <BaseImage path={scanNow} width={250} height={250}></BaseImage>
      </BaseDiv>

      <BaseDiv marginTop={30}>
        <BaseTitle color="white" textAlign="center">
          Tap the
          <BaseTitle color="skyblue"> BringMeHome Device </BaseTitle>
          at the back of your phone.
        </BaseTitle>
      </BaseDiv>
      <BaseDiv marginTop={10}>
        <BaseText color="white" textAlign="center">
          Please wait for a moment while we fetch the information from our
          server.
        </BaseText>
      </BaseDiv>

      <BaseDiv marginTop={30}>
        <BaseRow>
          <BaseButton
            // onPress={readNdef}
            backgroundColor={tertiary}
            color="white"
            width="100%"
            textAlign="right"
            marginHorizontal={2}>
            Scan Now
          </BaseButton>
        </BaseRow>
      </BaseDiv>
    </BaseSheet>
  );
}

export default ScanPage;

import { useEffect, useState } from "react";

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
import scanNowA from "../../assets/images/scan-now.png";
import scanNowB from "../../assets/images/scan-now_grey.png";

import nfc from "../../utilities/nfc";

import { primary, secondary, success, tertiary } from "../../constants/colors";

nfc.start();

function ScanPage({ onSuccess }) {
  const [nfcDevice, setNfcDevice] = useState();
  const [scan, setScan] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setScan(!scan);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    nfc.attachedReadEvent((tag) => {
      console.log(nfc.getMessages(tag));
      onSuccess(tag);
    });

    return () => {
      nfc.attachedReadEvent(null);
    };
  });

  return (
    <BaseSheet backgroundColor={primary}>
      <BaseDiv alignItems="center" marginTop={100}>
        <BaseImage path={logo} width={200} height={140}></BaseImage>
      </BaseDiv>

      <BaseDiv alignItems="center" marginTop={40}>
        {scan ? (
          <BaseImage path={scanNowA} width={250} height={250}></BaseImage>
        ) : (
          <BaseImage path={scanNowB} width={250} height={250}></BaseImage>
        )}
      </BaseDiv>

      <BaseDiv marginTop={30}>
        <BaseTitle color="white" textAlign="center">
          Tap your
          <BaseTitle color="skyblue"> Device </BaseTitle>
          at the back of your phone to start fetching.
        </BaseTitle>
      </BaseDiv>
      <BaseDiv marginTop={10}>
        <BaseText color="white" textAlign="center">
          We are using NFC technology to scan your device. Please make sure that
          your mobile phone is equipped with NFC.
        </BaseText>
      </BaseDiv>

      <BaseDiv marginTop={30}>
        <BaseRow>
          {/* <BaseButton
            onPress={scanHandler}
            backgroundColor={tertiary}
            color="white"
            width="100%"
            textAlign="right"
            marginHorizontal={2}>
            Scan Now
          </BaseButton> */}

          {/* <BaseButton
            onPress={toggle}
            backgroundColor={tertiary}
            color="white"
            width="50%"
            textAlign="right"
            marginHorizontal={2}>
            Toggle
          </BaseButton> */}
        </BaseRow>
      </BaseDiv>
    </BaseSheet>
  );
}

export default ScanPage;

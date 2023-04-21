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

import { primary, secondary, success, tertiary } from "../../constants/colors";

function LoginPage({ onLogin, onScan }) {
  return (
    <BaseSheet backgroundColor={primary}>
      <BaseDiv alignItems="center" marginTop={100}>
        <BaseImage path={logo} width={200} height={140}></BaseImage>
      </BaseDiv>

      <BaseDiv marginTop={50}>
        <BaseTitle color="white">
          In Bring Me Home, we bring your fragile love ones home.
        </BaseTitle>
      </BaseDiv>
      <BaseDiv marginTop={30}>
        <BaseText color="white">
          Connecting you and your elderly and fragile loved ones through
          impactful virtual connection and protection.
        </BaseText>
      </BaseDiv>

      <BaseDiv marginTop={50}>
        <BaseButton
          backgroundColor={tertiary}
          onPress={onScan}
          color="white"
          textAlign="center"
          marginHorizontal={2}>
          Scan Now
        </BaseButton>

        <BaseTextButton
          onPress={onLogin}
          padding={20}
          color="white"
          textAlign="center"
          marginHorizontal={2}>
          Login
        </BaseTextButton>
      </BaseDiv>
    </BaseSheet>
  );
}

export default LoginPage;

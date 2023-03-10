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

import logo from "../../assets/images/logo_light.png";

import { primary } from "../../constants/colors";

function LoginPage({ onLogin, onForgot, onSignup, onScan }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  return (
    <BaseSheet>
      <BaseDiv alignItems="center" marginTop={100}>
        <BaseImage path={logo} width={200} height={140}></BaseImage>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseTitle>Log in</BaseTitle>
        <BaseRow>
          <BaseText>{"Don't have an account? "}</BaseText>
          <BaseTextButton color={primary} onPress={onSignup}>
            Sign up
          </BaseTextButton>
        </BaseRow>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseTextInput
          label="Email"
          placeholder="Email"
          activeUnderlineColor={primary}></BaseTextInput>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseTextInput
          label="Password"
          placeholder="Password"
          activeUnderlineColor={primary}></BaseTextInput>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseButton backgroundColor={primary} color="white">
          Login
        </BaseButton>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseRow>
          <BaseTextButton
            color={primary}
            width="50%"
            textAlign="left"
            onPress={onForgot}>
            Forgot password?
          </BaseTextButton>
          <BaseTextButton
            color={primary}
            width="50%"
            textAlign="right"
            onPress={onScan}>
            Scan Now?
          </BaseTextButton>
        </BaseRow>
      </BaseDiv>
    </BaseSheet>
  );
}

export default LoginPage;

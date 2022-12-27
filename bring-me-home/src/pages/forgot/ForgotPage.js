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

function ForgotPage({ onLogin }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  return (
    <BaseSheet>
      <BaseDiv alignItems="center" marginTop={100}>
        <BaseImage path={logo} width={200} height={140}></BaseImage>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseTitle>Trouble logging in?</BaseTitle>
        <BaseText>
          Enter your email and we'll send you a link to get back into your
          account.
        </BaseText>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseTextInput
          label="Email"
          placeholder="Email"
          activeUnderlineColor={primary}></BaseTextInput>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseButton backgroundColor={primary} color="white">
          Send Login Link
        </BaseButton>
      </BaseDiv>

      <BaseDiv marginTop={20}>
        <BaseTextButton color={primary} textAlign="center" onPress={onLogin}>
          BackToLogin
        </BaseTextButton>
      </BaseDiv>
    </BaseSheet>
  );
}

export default ForgotPage;

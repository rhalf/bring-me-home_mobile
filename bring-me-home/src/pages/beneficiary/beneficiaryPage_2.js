import { useEffect, useState } from "react";

import BaseSheet from "../../components/common/BaseSheet";
import BaseTitle from "../../components/common/BaseTitle";
import BaseImage from "../../components/common/BaseImage";
import BaseAvatar from "../../components/common/BaseAvatar";
import BaseText from "../../components/common/BaseText";
import BaseTextButton from "../../components/common/BaseTextButton";
import BaseRow from "../../components/common/BaseRow";
import BaseDiv from "../../components/common/BaseDiv";
import BaseTextInput from "../../components/common/BaseTextInput";
import BaseButton from "../../components/common/BaseButton";

import BaseDialog from "../../components/dialog/DialogImage";

import photo1 from "../../assets/avatar/sample1/1.jpg";
import photo2 from "../../assets/avatar/sample1/2.jpg";
import photo3 from "../../assets/avatar/sample1/3.jpg";

import { primary, secondary, success, tertiary } from "../../constants/colors";
import { View, ScrollView } from "react-native";

import { getAge } from "../../utilities/helper/index.js";

function BeneficiaryPage() {
  const [dialogPhoto2, setDialogPhoto2] = useState(false);
  const [dialogPhoto3, setDialogPhoto3] = useState(false);
  // const [dialogPhoto4, setDialogPhoto4] = useState(false);

  return (
    <BaseSheet backgroundColor={primary}>
      <ScrollView>
        <BaseDiv alignItems="center" marginTop={50}>
          <BaseAvatar path={photo1} size={200}></BaseAvatar>
        </BaseDiv>

        <BaseDiv alignItems="center" marginTop={20}>
          <BaseTitle color="white" textAlign="center">
            Dela Cruz Jr, Juan
          </BaseTitle>
          <BaseText color="white" textAlign="center">
            Lot 15 Block 15 Kalayaan Village Brgy. 201
          </BaseText>
          <BaseText color="white" textAlign="center">
            Pasay City, Metro Manila Philippines
          </BaseText>
        </BaseDiv>

        <BaseDiv alignItems="flex-start" marginTop={20}>
          <BaseRow>
            <View style={{ paddingRight: 10 }}>
              <BaseImage
                path={photo2}
                width={70}
                height={90}
                borderColor={"white"}
                borderWidth={2}
                onPress={() => {
                  setDialogPhoto2(true);
                }}></BaseImage>
              <BaseDialog
                visible={dialogPhoto2}
                path={photo2}
                onCancel={() => {
                  setDialogPhoto2(false);
                }}></BaseDialog>
            </View>
            <View style={{ paddingRight: 10 }}>
              <BaseImage
                path={photo3}
                width={70}
                height={90}
                borderColor={"white"}
                borderWidth={2}
                onPress={() => {
                  setDialogPhoto3(true);
                }}></BaseImage>
              <BaseDialog
                visible={dialogPhoto3}
                path={photo3}
                onCancel={() => {
                  setDialogPhoto3(false);
                }}></BaseDialog>
            </View>
            {/* <View style={{ paddingRight: 10 }}>
              <BaseImage
                path={photo4}
                width={70}
                height={90}
                borderColor={"white"}
                borderWidth={2}
                onPress={() => {
                  setDialogPhoto4(true);
                }}></BaseImage>
              <BaseDialog
                visible={dialogPhoto4}
                path={photo4}
                onCancel={() => {
                  setDialogPhoto4(false);
                }}></BaseDialog>
            </View> */}
          </BaseRow>
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Personal Information
          </BaseTitle>

          <BaseRow>
            <BaseText color="white" textAlign="left" width="50%">
              Birth Date
            </BaseText>
            <BaseText color="white" textAlign="left" width="50%">
              August 15, 1943
            </BaseText>
          </BaseRow>

          <BaseRow>
            <BaseText color="white" textAlign="left" width="50%">
              Age
            </BaseText>
            <BaseText color="white" textAlign="left" width="50%">
              {getAge(new Date("August 15, 1943"))} years old
            </BaseText>
          </BaseRow>

          <BaseRow>
            <BaseText color="white" textAlign="left" width="50%">
              Gender
            </BaseText>
            <BaseText color="white" textAlign="left" width="50%">
              Male
            </BaseText>
          </BaseRow>

          <BaseRow>
            <BaseText color="white" textAlign="left" width="50%">
              Blood Type
            </BaseText>
            <BaseText color="white" textAlign="left" width="50%">
              O+
            </BaseText>
          </BaseRow>
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Guardians
          </BaseTitle>

          <BaseRow>
            <BaseText color="white" textAlign="left" width="40%">
              Name
            </BaseText>
            <BaseText color="white" textAlign="left" width="60%">
              JOY F. INO
            </BaseText>
          </BaseRow>
          <BaseRow>
            <BaseText color="white" textAlign="left" width="40%">
              Mobile
            </BaseText>
            <BaseText color="white" textAlign="left" width="60%">
              0956 1439 931
            </BaseText>
          </BaseRow>
          <BaseRow>
            <BaseText color="white" textAlign="left" width="40%">
              Email
            </BaseText>
            <BaseText color="white" textAlign="left" width="60%">
              joy@bringmehome.life
            </BaseText>
          </BaseRow>

          <BaseDiv marginTop={10}></BaseDiv>

          <BaseRow>
            <BaseText color="white" textAlign="left" width="40%">
              Name
            </BaseText>
            <BaseText color="white" textAlign="left" width="60%">
              Ryan Ino
            </BaseText>
          </BaseRow>
          <BaseRow>
            <BaseText color="white" textAlign="left" width="40%">
              Mobile
            </BaseText>
            <BaseText color="white" textAlign="left" width="60%">
              0908 8873 225
            </BaseText>
          </BaseRow>
          <BaseRow>
            <BaseText color="white" textAlign="left" width="40%">
              Email
            </BaseText>
            <BaseText color="white" textAlign="left" width="60%">
              ryan@bringmehome.life
            </BaseText>
          </BaseRow>
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Allergies
          </BaseTitle>
          <BaseText color="white" textAlign="left">
            Anisakis Simplex
          </BaseText>
          <BaseText color="white" textAlign="left">
            - Allergic reactions to seafood
          </BaseText>

          <BaseText color="white" textAlign="left">
            Atopic dermatitis
          </BaseText>
          <BaseText color="white" textAlign="left">
            - is when the skin becomes easily irritated, itchy, and dry. It is
            the most common allergic skin condition, and is more common in
            children than adults.
          </BaseText>
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Disabilities
          </BaseTitle>
          <BaseText color="white" textAlign="left">
            Dementia
          </BaseText>
          {/* <BaseText color="white" textAlign="left">
            Autism
          </BaseText>

          <BaseText color="white" textAlign="left">
            Learning disabilities
          </BaseText>
          <BaseText color="white" textAlign="left">
            Epilepsy
          </BaseText> */}
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Body Marks
          </BaseTitle>
        </BaseDiv>
        <BaseDiv marginTop={10}>
          <BaseRow>
            <BaseText color="white" textAlign="left" width={"40%"}>
              Mole
            </BaseText>
            <BaseText color="white" textAlign="left" width={"60%"}>
              Moles on the chest
            </BaseText>
          </BaseRow>
          <BaseRow>
            <BaseText color="white" textAlign="left" width={"40%"}>
              Nose
            </BaseText>
            <BaseText color="white" textAlign="left" width={"60%"}>
              Pointed nose
            </BaseText>
          </BaseRow>
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Medical History
          </BaseTitle>
          <BaseText color="white" textAlign="left">
            1. cardiac stent within the last six month
          </BaseText>
          <BaseText color="white" textAlign="left">
            2. history of Dementia
          </BaseText>
          {/* <BaseText color="white" textAlign="left">
            3. artificial heart valve (PFO)
          </BaseText>
          <BaseText color="white" textAlign="left">
            4. pacemaker or implantable defibrillator
          </BaseText>
          <BaseText color="white" textAlign="left">
            5. a stroke (taking blood thinners)
          </BaseText> */}
        </BaseDiv>

        <BaseDiv marginTop={10}>
          <BaseTitle color="white" textAlign="left">
            Devices
          </BaseTitle>
          <BaseDiv marginTop={10}>
            <BaseRow>
              <BaseText color="white" textAlign="left" width={"40%"}>
                Id
              </BaseText>
              <BaseText color="white" textAlign="left" width={"60%"}>
                4565165161
              </BaseText>
            </BaseRow>
            <BaseRow>
              <BaseText color="white" textAlign="left" width={"40%"}>
                Type
              </BaseText>
              <BaseText color="white" textAlign="left" width={"60%"}>
                Wearable Band
              </BaseText>
            </BaseRow>
          </BaseDiv>

          <BaseDiv marginTop={10}>
            <BaseRow>
              <BaseText color="white" textAlign="left" width={"40%"}>
                Id
              </BaseText>
              <BaseText color="white" textAlign="left" width={"60%"}>
                5416516515
              </BaseText>
            </BaseRow>
            <BaseRow>
              <BaseText color="white" textAlign="left" width={"40%"}>
                Type
              </BaseText>
              <BaseText color="white" textAlign="left" width={"60%"}>
                Key Chain Tag
              </BaseText>
            </BaseRow>
          </BaseDiv>
        </BaseDiv>
      </ScrollView>
    </BaseSheet>
  );
}

export default BeneficiaryPage;

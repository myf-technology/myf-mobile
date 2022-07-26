import { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

import Colors from "../../constants/Colors";
import { width } from "../../constants/responsive";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Text } from "../Text";

export const Tooltips = ({ toolTipsTittle, toolTipsMessage }) => {
  const [information, setInformation] = useState(false);
  const onPress = () => {
    !information ? setInformation(true) : setInformation(false);
  };

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="ToolTips" />
        </TouchableOpacity>
      </View>
      <View>
        {information ? (
          Alert.alert(toolTipsTittle, toolTipsMessage, [
            {
              text: "Ok",
              onPress: () => {
                setInformation(false);
              },
              style: "cancel",
            },
          ])
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

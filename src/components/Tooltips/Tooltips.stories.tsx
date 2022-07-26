import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Tooltips } from ".";
import { width } from "../../constants/responsive";

storiesOf("Components", module)
  .addDecorator((ToolTips) => (
    <View
      style={{
        alignSelf: "center",
        marginTop: width(80),
      }}
    >
      {ToolTips()}
    </View>
  ))
  .add("ToolTips", () => <Tooltips />);

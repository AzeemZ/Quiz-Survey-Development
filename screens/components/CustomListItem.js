import React from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

const CustomListItem = ({ title, subtitle, redirect }) => {
  return (
    <TouchableOpacity onPress={redirect}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>
            {title}
          </ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};

export default CustomListItem;

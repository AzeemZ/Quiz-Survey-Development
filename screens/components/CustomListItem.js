import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";

const CustomListItem = ({ id, title, description }) => {
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>
            Quiz-1 Title
          </ListItem.Title>
          <ListItem.Subtitle>
            This is the description of my first quiz
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>
            Quiz-2 Title
          </ListItem.Title>
          <ListItem.Subtitle>
            This is the description of my second quiz
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default CustomListItem;

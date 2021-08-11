import React from "react";
import { View, Button } from "react-native";

export const Notifications = ({ navigation }) => {
    return (
      <View>
        <Button
          title="go to more"
          onPress={() => navigation.navigate("More")}
        />
      </View>
    );
  };
  
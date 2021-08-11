import React from "react";
import { View, Button } from "react-native";





export const Feed = ({ navigation }) => {
  return (
    <View>
      <Button
        title="go to tweet"
        onPress={() => navigation.navigate("Tweet")}
      />
    </View>
  );
};

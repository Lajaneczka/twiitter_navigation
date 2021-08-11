import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Notifications } from '../screens/Notifications';
import { More } from '../screens/More';

const Stack = createStackNavigator();

export const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notifications} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
};
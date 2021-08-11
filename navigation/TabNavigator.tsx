import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Feed } from '../screens/Feed';
import { Messages } from '../screens/Messages';
import { Notifications } from '../screens/Notifications';
import { HomeStack } from './HomeStack';
import { NotificationStack } from '../navigation/NotificationStack';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStack}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: 'message-text-outline',
        }}
      />
    </Tab.Navigator>
  );
};
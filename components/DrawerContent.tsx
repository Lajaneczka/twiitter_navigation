import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';




export const DrawerContent = (props: any) => {
    

  return (
    <DrawerContentScrollView {...props} >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => {}}
            style={styles.drawerItem}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => {}}
            style={styles.drawerItem}
          />
          
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
                
              />
            )}
            label="Bookmarks"
            onPress={() => {}}
            style={styles.drawerItem}
          />
      </View>
    </DrawerContentScrollView>
  );
};


const styles = StyleSheet.create({
    drawerItem: {
        width: '100%',

    }
   
})
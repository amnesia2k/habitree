import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIconStyle: {
          marginTop: 5,
        },

        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 72, // ⬆️ make bar taller
          paddingBottom: 10, // add breathing room
          paddingTop: 10,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#d3d3d3",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medal" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}

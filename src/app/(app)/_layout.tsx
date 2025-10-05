import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const isLoggedIn = false;

export default function AppLayout() {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

  console.log("is signed in: >>>", isSignedIn);

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#3BA935" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="home" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
    </Stack>
  );
}

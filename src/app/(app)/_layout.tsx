import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import React from "react";

const isLoggedIn = false;

export default function AppLayout() {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

  console.log("is signed in: >>>", isSignedIn);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
    </Stack>
  );
}

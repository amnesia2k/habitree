import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Onboarding */}
      <Stack.Screen name="index" />

      {/* Login + Register hide default header */}
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}

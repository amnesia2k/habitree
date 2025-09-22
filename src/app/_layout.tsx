import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import "../global.css";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Keep splash screen visible until we’re ready
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // 1. Load Montserrat fonts
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // 2. Hide splash once fonts are ready
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // 3. Don’t render until fonts are loaded (keeps splash showing)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}

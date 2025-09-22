import BackButton from "@/src/components/back-button";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView className="flex-1 bg-white" behavior="padding">
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setEmailFocused(false);
          setPasswordFocused(false);
        }}
      >
        <SafeAreaView className="flex-1">
          <BackButton title="Continue with E-mail" />

          {/* Use flex-1 + justify-between so inputs stay top, actions stay bottom */}
          <View className="flex-1 justify-between">
            {/* Inputs Section */}
            <View className="mt-20 p-5 gap-y-8">
              {/* Email */}
              <View className="gap-y-2">
                <Text className="text-xs font-montserrat-bold">E-MAIL</Text>
                <View
                  className={`flex-row items-center border-b-2 ${
                    emailFocused ? "border-primary-100" : "border-muted"
                  }`}
                >
                  <TextInput
                    className="flex-1 pb-1 text-lg font-montserrat placeholder:text-muted"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoComplete="email"
                    placeholder="Enter your e-mail"
                    style={{ fontFamily: "Montserrat" }}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                  {emailFocused && email.length > 0 && (
                    <Pressable onPress={() => setEmail("")} className="p-2">
                      <Ionicons name="close-circle" size={20} color="#999" />
                    </Pressable>
                  )}
                </View>
              </View>

              {/* Password */}
              <View className="gap-y-2">
                <Text className="text-xs font-montserrat-bold">PASSWORD</Text>
                <View
                  className={`flex-row items-center border-b-2 ${
                    passwordFocused ? "border-primary-100" : "border-muted"
                  }`}
                >
                  <TextInput
                    className="flex-1 pb-1 text-lg font-montserrat placeholder:text-muted"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect={false}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    style={{ fontFamily: "Montserrat" }}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                  />
                  {passwordFocused && (
                    <Pressable
                      onPress={() => setShowPassword(!showPassword)}
                      className="p-2"
                    >
                      <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color="#999"
                      />
                    </Pressable>
                  )}
                </View>
              </View>

              {/* Forgot Password */}
              <View>
                <Text className="text-sm font-montserrat text-muted">
                  I forgot my password
                </Text>
              </View>
            </View>

            {/* Bottom Actions */}
            <View className="p-5 gap-y-5">
              {/* Create Account */}
              <Link
                href="/register"
                className="text-sm font-montserrat-semibold text-center text-primary-100"
              >
                Don't have an account? Let's create!
              </Link>

              {/* Login Button */}
              <TouchableOpacity className="rounded-full bg-primary-200 py-5">
                <Text className="text-center font-montserrat-semibold text-white">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

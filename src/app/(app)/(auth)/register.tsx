import BackButton from "@/src/components/back-button";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [fullNameFocused, setFullNameFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const [dob, setDob] = useState<Date | null>(null);
  const [dobFocused, setDobFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView className="flex-1 bg-white" behavior="padding">
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setFullNameFocused(false);
          setEmailFocused(false);
          setDobFocused(false);
          setPasswordFocused(false);
        }}
      >
        <SafeAreaView className="flex-1">
          <BackButton title="Create Account" />

          <View className="flex-1 justify-between">
            {/* Inputs */}
            <View className="mt-20 p-5 gap-y-8">
              {/* Full Name */}
              <View className="gap-y-2">
                <Text className="text-xs font-montserrat-bold">FULL NAME</Text>
                <View
                  className={`flex-row items-center border-b-2 ${
                    fullNameFocused ? "border-primary-100" : "border-muted"
                  }`}
                >
                  <TextInput
                    className="flex-1 pb-1 text-lg font-montserrat placeholder:text-muted"
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="words"
                    placeholder="Enter your full name"
                    style={{ fontFamily: "Montserrat" }}
                    onFocus={() => setFullNameFocused(true)}
                    onBlur={() => setFullNameFocused(false)}
                  />
                  {fullNameFocused && fullName.length > 0 && (
                    <Pressable onPress={() => setFullName("")} className="p-2">
                      <Ionicons name="close-circle" size={20} color="#999" />
                    </Pressable>
                  )}
                </View>
              </View>

              {/* E-mail */}
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

              {/* Date of Birth */}
              <View className="gap-y-2">
                <Text className="text-xs font-montserrat-bold">
                  DATE OF BIRTH
                </Text>
                <Pressable
                  onPress={() => {
                    setDobFocused(true);
                    setShowPicker(true);
                  }}
                  className={`flex-row items-center border-b-2 ${
                    dobFocused ? "border-primary-100" : "border-muted"
                  }`}
                >
                  <Text
                    className={`flex-1 pb-1 text-lg font-montserrat ${
                      dob ? "text-black" : "text-muted"
                    }`}
                  >
                    {dob ? dob.toDateString() : "Select your date of birth"}
                  </Text>
                  {dob && dobFocused && (
                    <Pressable
                      onPress={() => setDob(null)}
                      className="p-2"
                      hitSlop={10}
                    >
                      <Ionicons name="close-circle" size={20} color="#999" />
                    </Pressable>
                  )}
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color={dobFocused ? "#3b82f6" : "#999"}
                    style={{ marginRight: 8 }}
                  />
                </Pressable>

                {showPicker && (
                  <DateTimePicker
                    value={dob || new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                      if (Platform.OS === "android") setShowPicker(false);
                      if (selectedDate) {
                        setDob(selectedDate);
                        setDobFocused(false);
                      }
                    }}
                  />
                )}
              </View>
            </View>

            {/* Bottom Actions */}
            <View className="p-5 gap-y-5">
              {/* Create Account */}
              <Link
                href="/login"
                className="text-sm font-montserrat-semibold text-center text-primary-100"
              >
                Have an account? Login!
              </Link>

              {/* Continue Button */}
              <TouchableOpacity className="rounded-full bg-primary-200 py-5">
                <Text className="text-center font-montserrat-semibold text-white">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

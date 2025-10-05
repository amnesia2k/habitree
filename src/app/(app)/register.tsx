import BackButton from "@/src/components/back-button";
import { useSignUp } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link, useRouter } from "expo-router";
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
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [pendingVerification, setPendingVerification] = useState(false);
  const [codeDigits, setCodeDigits] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  // --- STEP 1: Handle Sign Up ---
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err) {
      console.error("SignUp error:", JSON.stringify(err, null, 2));
    }
  };

  // --- STEP 2: Handle Verification ---
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const code = codeDigits.join(""); // join 6 digits
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");

        // --- Save extra fields to your backend ---
        // await fetch("http://localhost:5000/api/users", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     clerkUserId: signUpAttempt.userId,
        //     fullName: `${firstName} ${lastName}`,
        //     dob: dob
        //       ? `${String(dob.getDate()).padStart(2, "0")}/${String(
        //           dob.getMonth() + 1
        //         ).padStart(2, "0")}/${dob.getFullYear()}`
        //       : null,
        //   }),
        // });

        console.log("Verification complete:", signUpAttempt, null, 2);
      } else {
        console.error("Verification not complete:", signUpAttempt, null, 2);
      }
    } catch (err) {
      console.error("Verification error:", JSON.stringify(err, null, 2));
    }
  };

  // --- UI ---
  if (pendingVerification) {
    const inputs: (TextInput | null)[] = [];

    return (
      <SafeAreaView className="flex-1">
        <StatusBar barStyle="dark-content" />
        <BackButton title="Verify Email" />
        <KeyboardAvoidingView className="flex-1 bg-white" behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 justify-between">
              {/* Content */}
              <View className="mt-20 p-5 gap-y-8">
                <Text className="text-base font-montserrat text-center">
                  Enter the 6-digit code we sent to{" "}
                  <Text className="font-montserrat-semibold">{email}</Text>
                </Text>

                {/* Code Inputs */}
                <View className="flex-row justify-center gap-x-3">
                  {codeDigits.map((digit, idx) => (
                    <TextInput
                      key={idx}
                      className="w-10 border-b-2 border-muted text-center text-lg font-montserrat"
                      keyboardType="number-pad"
                      maxLength={1}
                      value={digit}
                      onChangeText={(val) => {
                        const newDigits = [...codeDigits];
                        newDigits[idx] = val;
                        setCodeDigits(newDigits);

                        if (val && idx < 5) {
                          // move to next input
                          const next = inputs[idx + 1];
                          next?.focus();
                        }
                      }}
                      onKeyPress={({ nativeEvent }) => {
                        if (
                          nativeEvent.key === "Backspace" &&
                          !codeDigits[idx] &&
                          idx > 0
                        ) {
                          const prev = inputs[idx - 1];
                          prev?.focus();
                        }
                      }}
                      ref={(ref) => {
                        inputs[idx] = ref;
                      }}
                    />
                  ))}
                </View>
              </View>

              {/* Verify Button */}
              <View className="p-5">
                <TouchableOpacity
                  onPress={onVerifyPress}
                  className="rounded-full bg-primary-200 py-5"
                >
                  <Text className="text-center font-montserrat-semibold text-white">
                    Verify
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />
      <BackButton title="Create Account" />
      <KeyboardAvoidingView className="flex-1 bg-white" behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 justify-between">
            {/* Inputs */}
            <View className="mt-20 p-5 gap-y-8">
              {/* First Name */}
              <View>
                <Text className="text-xs font-montserrat-bold">FIRST NAME</Text>
                <TextInput
                  className="border-b-2 border-muted pb-1 text-lg font-montserrat placeholder:text-muted"
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="Enter your first name"
                />
              </View>

              {/* Last Name */}
              <View>
                <Text className="text-xs font-montserrat-bold">LAST NAME</Text>
                <TextInput
                  className="border-b-2 border-muted pb-1 text-lg font-montserrat placeholder:text-muted"
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Enter your last name"
                />
              </View>

              {/* Email */}
              <View>
                <Text className="text-xs font-montserrat-bold">E-MAIL</Text>
                <TextInput
                  className="border-b-2 border-muted pb-1 text-lg font-montserrat placeholder:text-muted"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="Enter your e-mail"
                />
              </View>

              {/* Password */}
              <View>
                <Text className="text-xs font-montserrat-bold">PASSWORD</Text>
                <View className="flex-row items-center border-b-2 border-muted">
                  <TextInput
                    className="flex-1 pb-1 text-lg font-montserrat placeholder:text-muted"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry={!showPassword}
                    placeholder="Enter your password"
                  />
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
                </View>
              </View>

              {/* DOB */}
              <View>
                <Text className="text-xs font-montserrat-bold">
                  DATE OF BIRTH
                </Text>
                <Pressable
                  onPress={() => setShowPicker(true)}
                  className="flex-row items-center border-b-2 border-muted"
                >
                  <Text
                    className={`flex-1 pb-1 text-lg font-montserrat ${
                      dob ? "text-black" : "text-muted"
                    }`}
                  >
                    {dob
                      ? `${String(dob.getDate()).padStart(2, "0")}/${String(
                          dob.getMonth() + 1
                        ).padStart(2, "0")}/${dob.getFullYear()}`
                      : "DD/MM/YYYY"}
                  </Text>
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="#999"
                    style={{ marginRight: 8 }}
                  />
                </Pressable>

                {showPicker && (
                  <DateTimePicker
                    value={dob || new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "calendar" : "spinner"}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                      if (Platform.OS === "android") setShowPicker(false);
                      if (selectedDate) setDob(selectedDate);
                    }}
                  />
                )}
              </View>
            </View>

            {/* Bottom Actions */}
            <View className="p-5 gap-y-5">
              <Link
                href="/login"
                className="text-sm font-montserrat-semibold text-center text-primary-100"
              >
                Have an account? Login!
              </Link>

              <TouchableOpacity
                onPress={onSignUpPress}
                className="rounded-full bg-primary-200 py-5"
              >
                <Text className="text-center font-montserrat-semibold text-white">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

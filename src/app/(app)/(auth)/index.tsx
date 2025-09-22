import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    image: require("../../../assets/images/auth_one.png"),
    title: "Create Good Habits",
    subtitle:
      "Change your life by slowly adding new habits and sticking to them.",
  },
  {
    id: 2,
    image: require("../../../assets/images/auth_two.png"),
    title: "Track Your Progress",
    subtitle:
      "Everyday you become one step closer to your goal. Don't give up!",
  },
  {
    id: 3,
    image: require("../../../assets/images/auth_three.png"),
    title: "Stay Together and Strong",
    subtitle:
      "Find friends to discuss common topics. Complete habits together.",
  },
];

export default function AuthIndex() {
  return (
    <ImageBackground
      source={require("../../../assets/images/auth_bg.png")}
      resizeMode="cover"
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <SwiperFlatList
            autoplay
            autoplayDelay={5}
            autoplayLoop
            showPagination
            paginationActiveColor="#d3d3d3"
            paginationDefaultColor="#68ce62"
            paginationStyle={{
              marginBottom: 70, // move dots down
            }}
            paginationStyleItem={{
              width: 8,
              height: 8,
              marginHorizontal: 4,
              borderRadius: 4,
            }}
            data={data}
            renderItem={({ item }) => (
              <View
                className="flex-1 justify-start px-6 pt-12"
                style={{ width }}
              >
                <Image
                  source={item.image}
                  className="w-100 h-100 self-center mb-10"
                  resizeMode="contain"
                />

                <Text className="text-white text-[40px] font-montserrat-bold mb-3">
                  {item.title}
                </Text>

                <Text className="text-white/90 text-xl font-montserrat leading-6">
                  {item.subtitle}
                </Text>
              </View>
            )}
          />
        </View>

        {/* Auth Buttons */}
        <View className="px-6 mb-8">
          {/* Continue with Email */}
          <TouchableOpacity
            onPress={() => router.push("/(app)/(auth)/login")}
            className="bg-white rounded-[40px] py-4 px-5 flex-row items-center justify-center mb-4 h-[52px]"
          >
            <Ionicons name="mail-outline" size={20} color="black" />
            <Text className="ml-2 text-black font-montserrat-medium">
              Continue with E-mail
            </Text>
          </TouchableOpacity>

          {/* Social Logins */}
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-white rounded-full px-4 py-4 flex-row items-center justify-center flex-1 mr-2">
              <Ionicons name="logo-apple" size={20} color="black" />
              <Text className="ml-2 font-montserrat-medium text-black">
                Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-full px-4 py-4 flex-row items-center justify-center flex-1 mx-2">
              <Ionicons name="logo-google" size={20} color="black" />
              <Text className="ml-2 font-montserrat-medium text-black">
                Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-full px-4 py-4 flex-row items-center justify-center flex-1 ml-2">
              <Ionicons name="logo-facebook" size={20} color="black" />
              <Text className="ml-2 font-montserrat-medium text-black">
                Facebook
              </Text>
            </TouchableOpacity>
          </View>

          {/* Terms */}
          <Text className="text-white/70 text-xs text-center mt-4 leading-5 font-montserrat">
            By continuing you agree to our Terms of Services & Privacy Policy
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// import { Ionicons } from "@expo/vector-icons";
// import React from "react";
// import {
//   Dimensions,
//   Image,
//   ImageBackground,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { SwiperFlatList } from "react-native-swiper-flatlist";

// const { width, height } = Dimensions.get("window");

// const data = [
//   {
//     id: 1,
//     image: require("../../../assets/images/auth_one.png"),
//     title: "Create Good Habits",
//     subtitle:
//       "Change your life by slowly adding new habits and sticking to them.",
//   },
//   {
//     id: 2,
//     image: require("../../../assets/images/auth_two.png"),
//     title: "Track Your Progress",
//     subtitle:
//       "Everyday you become one step closer to your goal. Don't give up!",
//   },
//   {
//     id: 3,
//     image: require("../../../assets/images/auth_three.png"),
//     title: "Stay Together and Strong",
//     subtitle:
//       "Find friends to discuss common topics. Complete habits together.",
//   },
// ];

// export default function AuthIndex() {
//   return (
//     <ImageBackground
//       source={require("../../../assets/images/auth_bg.png")}
//       resizeMode="cover"
//       className="flex-1"
//     >
//       <SafeAreaView className="flex-1">
//         <View className="flex-1">
//           <SwiperFlatList
//             autoplay
//             autoplayDelay={5}
//             autoplayLoop
//             // showPagination
//             // paginationActiveColor="#fff" // white active dot
//             // paginationDefaultColor="rgba(255,255,255,0.5)" // faded inactive dot
//             // paginationStyle={{
//             //   marginBottom: 40, // move dots down
//             // }}
//             // paginationStyleItem={{
//             //   width: 8,
//             //   height: 8,
//             //   marginHorizontal: 4,
//             //   borderRadius: 4,
//             // }}
//             data={data}
//             renderItem={({ item }) => (
//               <View
//                 className="flex-1 items-center justify-center px-6"
//                 style={{ width }}
//               >
//                 <Image
//                   source={item.image}
//                   className="w-72 h-72 mb-8"
//                   resizeMode="contain"
//                 />
//                 <Text className="text-white text-3xl font-bold text-center mb-4">
//                   {item.title}
//                 </Text>
//                 <Text className="text-white/90 text-base text-center px-4 leading-6">
//                   {item.subtitle}
//                 </Text>
//               </View>
//             )}
//           />
//         </View>

//         {/* Auth Buttons */}
//         <View className="px-6 mb-8">
//           {/* Continue with Email */}
//           <TouchableOpacity className="bg-white rounded-full py-3 flex-row items-center justify-center mb-4">
//             <Ionicons name="mail-outline" size={20} color="black" />
//             <Text className="ml-2 text-black font-medium">
//               Continue with E-mail
//             </Text>
//           </TouchableOpacity>

//           {/* Social Logins */}
//           <View className="flex-row justify-between">
//             <TouchableOpacity className="bg-white rounded-full px-4 py-3 flex-row items-center justify-center flex-1 mr-2">
//               {/* <Image
//                 source={require("../../../assets/images/apple.png")}
//                 className="w-5 h-5"
//                 resizeMode="contain"
//               /> */}
//               <Text className="ml-2 font-medium text-black">Apple</Text>
//             </TouchableOpacity>

//             <TouchableOpacity className="bg-white rounded-full px-4 py-3 flex-row items-center justify-center flex-1 mx-2">
//               {/* <Image
//                 source={require("../../../assets/images/google.png")}
//                 className="w-5 h-5"
//                 resizeMode="contain"
//               /> */}
//               <Text className="ml-2 font-medium text-black">Google</Text>
//             </TouchableOpacity>

//             <TouchableOpacity className="bg-white rounded-full px-4 py-3 flex-row items-center justify-center flex-1 ml-2">
//               {/* <Image
//                 source={require("../../../assets/images/facebook.png")}
//                 className="w-5 h-5"
//                 resizeMode="contain"
//               /> */}
//               <Text className="ml-2 font-medium text-black">Facebook</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Terms */}
//           <Text className="text-white/70 text-xs text-center mt-4 leading-5">
//             By continuing you agree to our Terms of Services & Privacy Policy
//           </Text>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

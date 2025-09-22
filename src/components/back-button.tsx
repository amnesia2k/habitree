import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BackButton({ title }: { title: string }) {
  const router = useRouter();

  return (
    <SafeAreaView
      edges={["top", "left"]}
      className="absolute top-0 left-0 right-0 z-10 border-b border-[#d3d3d3]"
    >
      <Pressable
        onPress={() => router.push("/")}
        className="flex-row items-center px-4 py-5"
        hitSlop={20}
      >
        <Ionicons name="chevron-back" size={30} />
        <Text className="text-2xl ml-3 font-montserrat-bold">{title}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

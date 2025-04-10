import Stack from "@/components/ui/Stack";

export default function Layout() {
  return (

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="sign-in" options={{ headerShown: false, presentation: "transparentModal" }}></Stack.Screen>
      <Stack.Screen name="sign-up" options={{ headerShown: false, presentation: "transparentModal" }}></Stack.Screen>
    </Stack>
  );
}

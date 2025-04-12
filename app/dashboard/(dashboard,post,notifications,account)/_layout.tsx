import Stack from "@/components/ui/Stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="post"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          headerTitle: "createPost"
        }} />
      <Stack.Screen
        name="notifications"
        options={{
          presentation: "modal",
          headerTitle: "Notifications",
        }}

      />
      <Stack.Screen
        name="account"
        options={{
          presentation: "modal",
          headerTitle: "Account",
        }}
      />
    </Stack>
  );
}
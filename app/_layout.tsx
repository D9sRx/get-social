import ThemeProvider from "@/components/ui/ThemeProvider";
import {Slot} from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <ThemeProvider>
      <StatusBar />  
      <Slot />
    </ThemeProvider>
  );
}

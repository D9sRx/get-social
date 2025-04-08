import ThemeProvider from "@/components/ui/ThemeProvider";
import {Slot} from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <ThemeProvider>
      <StatusBar />  {/* 适应状态栏 */}
      <Slot />
    </ThemeProvider>
  );
}

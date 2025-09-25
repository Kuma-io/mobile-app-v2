import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import '../global.css';
import { Stack } from 'expo-router';
import { Toaster } from 'sonner-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PrivyProvider } from '@privy-io/expo';

function Content() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="(app)" />
        <Stack.Screen name="login" />
      </Stack>
      <Toaster invert />
    </GestureHandlerRootView>
  );
}

export default function Layout() {
  return (
    <PrivyProvider
      appId={'clu7m7ye30hjzey4dp7byyvok'}
      clientId={'client-WY2jPdxGstKyN1bAmgECTcjE873iTVGiEskRBgZyf6Hir'}>
      <Content />
    </PrivyProvider>
  );
}

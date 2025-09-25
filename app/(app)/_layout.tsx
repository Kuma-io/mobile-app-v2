import { Redirect, SplashScreen, Stack } from 'expo-router';
import { AuthBoundary, usePrivy } from '@privy-io/expo';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function Layout() {
  return (
    <AuthBoundary
      loading={
        <View className="flex-1 items-center justify-center">
          <Text className="mt-4 font-inter-semibold text-lg text-bg">Loading...</Text>
          <Image source="~/assets/splash.png" className="flex-1" />
        </View>
      }
      error={(error) => <Text>Error Occured</Text>}
      unauthenticated={<Redirect href="/login" />}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="settings" />
      </Stack>
    </AuthBoundary>
  );
}

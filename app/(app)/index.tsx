import { router } from 'expo-router';
import { Button } from '~/components/ui/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Actions, Balance } from '~/pages/home';
import { View, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mb-2 w-full flex-1 flex-col items-center justify-start">
          <Balance />
          <View className="my-2 h-px w-full" />
        </View>
      </ScrollView>
      <Actions />
      <Button
        text="Go to Login"
        onPress={() => {
          router.push('/login');
        }}
      />
    </SafeAreaView>
  );
}

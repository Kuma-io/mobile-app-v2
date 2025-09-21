import { Link, router } from 'expo-router';
import { Button, Text } from '~/components/ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Actions, Balance, Chart } from '~/pages/home';
import { View, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mb-2 w-full flex-1 flex-col items-center justify-start">
          <Balance />
          <View className="my-2 h-px w-full" />
          <Chart />
        </View>
      </ScrollView>
      <Actions />
    </SafeAreaView>
  );
}

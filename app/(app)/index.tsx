import { Link, router } from 'expo-router';
import { Button, Text } from '~/components/ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Balance, Chart, Performances, Transactions, Actions } from '~/pages/home';
import { View, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Balance />
        <Chart />
        <Performances />
        <Transactions />
        <View className="h-32" />
      </ScrollView>
      <Actions />
    </SafeAreaView>
  );
}

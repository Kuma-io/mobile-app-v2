import { router } from 'expo-router';
import { Button } from '~/components/ui/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Actions } from '~/pages/settings';
import { View, ScrollView } from 'react-native';

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}></ScrollView>
      <Actions />
    </SafeAreaView>
  );
}

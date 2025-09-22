import { router } from 'expo-router';
import { Button } from '~/components/ui/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Account, Preferences, Actions } from '~/pages/settings';
import { View, ScrollView } from 'react-native';

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <Header />
      <ScrollView className="px-8" contentContainerStyle={{ flexGrow: 1 }}>
        <Account />
        <Preferences />
      </ScrollView>
      <Actions />
    </SafeAreaView>
  );
}

import { View } from 'react-native';
import { Button, Text } from '~/components/ui';
import { CircleUserRound } from 'lucide-react-native';
import { router } from 'expo-router';

export function Header() {
  return (
    <View className="flex w-full flex-row items-center justify-between p-4">
      <Text variant="heading">Overview</Text>
      <Button
        onPress={() => {
          router.push('/settings');
        }}
        variant="icon"
        icon={<CircleUserRound size={20} color="white" strokeWidth={2} />}
      />
    </View>
  );
}

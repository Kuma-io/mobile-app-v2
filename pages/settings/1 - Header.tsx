import { View } from 'react-native';
import { Text } from '~/components/ui';

export function Header() {
  return (
    <View className="flex w-full flex-row items-center justify-between p-4">
      <Text variant="heading">Settings</Text>
    </View>
  );
}

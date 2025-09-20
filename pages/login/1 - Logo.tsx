import { View } from 'react-native';

import { Text } from '~/components/ui/text';

export function Logo() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text variant="logo">Kuma</Text>
    </View>
  );
}

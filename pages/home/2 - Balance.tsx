import { View } from 'react-native';
import { Text } from '~/components/ui';

export function Balance() {
  return (
    <View className="mt-6 px-8">
      <Text variant="subheading">Total</Text>
      <Total />
      <Change />
    </View>
  );
}

function Total() {
  return (
    <View className="flex-row items-center justify-start">
      <Text variant="heading" className="text-4xl tracking-wide ">
        12,500.00
      </Text>
      <Text variant="heading" className="mb-1 ml-1 text-3xl">
        $
      </Text>
    </View>
  );
}

function Change() {
  return (
    <View className="flex-row items-center justify-start">
      <Text variant="none" className="text-lg">
        ▲
      </Text>
      <Text variant="none" className="font-inter-bold text-lg tracking-tight">
        0.00123
      </Text>
      <Text variant="none" className="ml-[0.1rem] font-inter-black text-base">
        %
      </Text>
    </View>
  );
}

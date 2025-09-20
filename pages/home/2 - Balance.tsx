import { View } from 'react-native';
import { Text } from '~/components/ui';

export function Balance() {
  return (
    <View className="w-full items-start justify-center px-8">
      <Text variant="subheading">Balance</Text>
      <Text className="font-sans-extrabold text-4xl tracking-[0.05em]">$2500.00</Text>
      <View className="w-full flex-row items-center justify-start">
        <Text className={`font-sans-medium text-xs text-black/90`}>▲</Text>
        <Text className={`font-sans-black tracking-[0.05em] text-black/90`}>{`$0.00123 `}</Text>
        <Text className={`font-sans-extrabold text-sm tracking-[0.05em] text-black/90`}>$</Text>
      </View>
    </View>
  );
}

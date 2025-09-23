import { View } from 'react-native';
import { Text } from '~/components/ui';
import { formatBalance } from '~/lib/formatBalance';

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
    <View className="flex-row items-baseline justify-start">
      <Text variant="heading" className="text-4xl tracking-wide ">
        {formatBalance(12500.12349293883, 4, true)}
      </Text>
      <Text variant="heading" className="text-lg text-fg/90">
        {' '}
        $US
      </Text>
    </View>
  );
}

function Change() {
  return (
    <View className="flex-row items-center justify-start">
      <Text variant="none" className="text-xl text-fg/80">
        ▲
      </Text>
      <Text variant="none" className="font-inter-bold text-xl tracking-tight text-fg/80">
        0.00123
      </Text>
      <Text variant="none" className="ml-[0.1rem] font-inter-black text-lg text-fg/80">
        %
      </Text>
    </View>
  );
}

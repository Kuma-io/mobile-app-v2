import { View } from 'react-native';
import { Text } from '~/components/ui';
import { formatNumber } from '~/lib/formatNumber';

export function Performances() {
  return (
    <View className="mt-6 w-full items-start justify-center px-8">
      <Text variant="subheading" className="text-fg">
        Performances
      </Text>
      <View className="mt-4 w-full gap-3">
        <Performance title="Profit" value="0.0015 $" />
        <Performance title="Principal" value="12 500.78 $" />
        <Performance title="Yield" value="5.35 %" />
        <Performance title="Supply" value={formatNumber(3687000) + ' $'} />
      </View>
    </View>
  );
}

function Performance({ title, value }: { title: string; value: string }) {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Text variant="subheading" className="text-base">
        {title}
      </Text>
      <Text variant="heading" className="font-inter-extrabold text-lg">
        {value}
      </Text>
    </View>
  );
}

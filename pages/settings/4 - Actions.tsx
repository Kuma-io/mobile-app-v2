import { ChevronLeft, Unplug } from 'lucide-react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { Button } from '~/components/ui';

export function Actions() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: insets.bottom,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        className="w-full flex-row items-center justify-between px-8 py-4">
        <Button
          onPress={() => {
            router.back();
          }}
          variant="icon"
          className="h-12 w-12"
          icon={<ChevronLeft color="white" size={20} strokeWidth={2.5} />}
        />
        <Button
          variant="floating"
          text="Log Out"
          className="border-red-600 bg-red-600"
          icon={<Unplug color="white" size={16} strokeWidth={3} />}
        />
      </View>
    </>
  );
}

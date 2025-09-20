import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { LoginDrawer } from '../login/drawer';
import { useRouter } from 'expo-router';

export function Actions() {
  const [openLoginDrawer, setOpenLoginDrawer] = useState(false);
  const router = useRouter();
  return (
    <>
      <View className="flex-row items-center justify-between px-8 py-4">
        <Button
          text="Enter App"
          variant="floating-negative"
          onPress={() => router.push('/(app)')}
          icon={<ChevronRight color="black" size={16} strokeWidth={3} />}
        />
        <Button
          onPress={() => setOpenLoginDrawer(true)}
          text="Enter App"
          variant="floating"
          icon={<ChevronRight color="white" size={16} strokeWidth={3} />}
        />
      </View>
      <LoginDrawer isVisible={openLoginDrawer} onClose={() => setOpenLoginDrawer(false)} />
    </>
  );
}

import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { Drawer } from './drawer';
import { useRouter } from 'expo-router';

export function Actions() {
  const [open, setOpen] = useState(false);
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
          onPress={() => setOpen(true)}
          text="Enter App"
          variant="floating"
          icon={<ChevronRight color="white" size={16} strokeWidth={3} />}
        />
      </View>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}

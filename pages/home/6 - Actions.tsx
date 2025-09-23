import { Minus, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { Button } from '~/components/ui';
import { DepositDrawer, WithdrawDrawer } from './drawer';

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
        className="w-full flex-row justify-between px-8 py-4">
        <Withdraw />
        <Deposit />
      </View>
    </>
  );
}

function Withdraw() {
  return (
    <Button
      variant="floating-negative"
      text="Withdraw"
      // className="border-black"
      icon={<Minus color="black" size={16} strokeWidth={3.5} />}
      onPress={() => {
        router.push('/login');
      }}
    />
  );
}

function Deposit() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="floating"
        text="Deposit"
        icon={<Plus color="white" size={16} strokeWidth={3.5} />}
        onPress={() => {
          setOpen(true);
        }}
      />
      <WithdrawDrawer open={open} setOpen={setOpen} />
    </>
  );
}

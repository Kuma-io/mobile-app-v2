import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '~/components/ui';

export function Actions() {
  const insets = useSafeAreaInsets();
  const [isWithdrawModalVisible, setIsWithdrawModalVisible] = useState(false);
  const [isDepositModalVisible, setIsDepositModalVisible] = useState(false);
  const [isOnRampModalVisible, setIsOnRampModalVisible] = useState(false);
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
        className="w-full flex-row items-center justify-around px-8 py-4">
        <Button
          variant="floating-negative"
          text="Withdraw"
          icon={<ChevronRight color="black" size={16} strokeWidth={3} />}
          onPress={() => {
            setIsWithdrawModalVisible(true);
          }}
        />
        <Button
          variant="floating"
          text="Deposit"
          icon={<ChevronRight color="white" size={16} strokeWidth={3} />}
          onPress={() => {
            setIsDepositModalVisible(true);
          }}
        />
      </View>
    </>
  );
}

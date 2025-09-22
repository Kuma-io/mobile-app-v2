import { View } from 'react-native';
import { Text, Button } from '~/components/ui';
import { ChevronRight, UserRound, Wallet as WalletIcon } from 'lucide-react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export function Account() {
  return (
    <View className="mt-6 ">
      <Text variant="subheading">Account</Text>
      <Mail />
      <Wallet />
    </View>
  );
}

function Mail() {
  return (
    <View className="w-full">
      <Button
        variant="settings"
        text="Email"
        description="lcombaret@hotmail.com"
        iconPosition="left"
        icon={
          <View className="w-[32px] items-center justify-center">
            <UserRound size={30} />
          </View>
        }
      />
    </View>
  );
}

function Wallet() {
  return (
    <View className="w-full">
      <Button
        variant="settings"
        text="Wallet"
        description="0x123...abc"
        iconPosition="left"
        icon={
          <View className="w-[32px] items-center justify-center">
            <WalletIcon size={28} />
          </View>
        }
      />
    </View>
  );
}

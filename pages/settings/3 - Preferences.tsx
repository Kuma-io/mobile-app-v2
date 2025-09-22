import { View } from 'react-native';
import { Text, Button } from '~/components/ui';
import { BadgeEuro, BellDot } from 'lucide-react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { useState } from 'react';
import { toast } from 'sonner-native';

export function Preferences() {
  return (
    <View className="mt-4">
      <Text variant="subheading">Preferences</Text>
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
        text="Currency"
        description="USD"
        iconPosition="left"
        icon={
          <View className="w-[32px] items-center justify-center">
            <BadgeEuro size={30} />
          </View>
        }
      />
    </View>
  );
}

function Wallet() {
  const [notification, setNotification] = useState(false);

  function updateNotification() {
    setNotification(!notification);
    toast.success(`Notifications ${notification ? 'enabled' : 'disabled'}`);
  }
  return (
    <View className="w-full">
      <Button
        variant="settings"
        text="Notifications"
        description="Be alerted"
        iconPosition="left"
        icon={
          <View className="w-[32px] items-center justify-center">
            <BellDot size={28} />
          </View>
        }
        replaceChevronIcon={
          <ToggleSwitch
            isOn={notification}
            onColor="#000"
            offColor="#d1d5db"
            size="medium"
            onToggle={updateNotification}
          />
        }
        onPress={updateNotification}
      />
    </View>
  );
}

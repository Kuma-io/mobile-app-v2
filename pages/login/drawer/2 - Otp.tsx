import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { View, Animated } from 'react-native';
import { Button, Text, Numpad } from '~/components/ui';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';

export function OtpDrawer({ setStep }: { setStep: (step: number) => void }) {
  const [otp, setOtp] = useState('');
  return (
    <View className="flex-1">
      <Text variant="heading" className="text-bg">
        Enter the OTP sent to your email.
      </Text>
      <Otp otp={otp} />
      <Numpad setNumber={setOtp} allowDecimals={false} maxValue={999999} isOtpMode />
      <Actions otp={otp} setStep={setStep} />
    </View>
  );
}

function Otp({ otp }: { otp: string }) {
  const currentPosition = otp.length;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => pulse());
    };

    pulse();
  }, [fadeAnim]);

  return (
    <View className="flex-1 flex-row items-center justify-center space-x-6 ">
      {Array.from({ length: 6 }).map((_, index) => {
        const isCurrent = index === currentPosition;
        const digit = index < otp.length ? otp[index] : '';

        return (
          <View key={index} className="h-12 w-12 items-center justify-center">
            {digit ? (
              <View className="flex-row items-center justify-center">
                <Text className="font-inter-bold text-5xl text-bg">{digit}</Text>
                {isCurrent && (
                  <Animated.View
                    className="absolute h-6 w-[2px] bg-bg"
                    style={{
                      opacity: fadeAnim,
                    }}
                  />
                )}
              </View>
            ) : (
              <View className={`h-6 w-6 rounded-full ${isCurrent ? 'bg-bg' : 'bg-bg/30'}`} />
            )}
          </View>
        );
      })}
    </View>
  );
}

function Actions({ otp, setStep }: { otp: string; setStep: (step: number) => void }) {
  return (
    <View className="w-full flex-row items-center justify-between p-4">
      <Button
        onPress={() => {
          setStep(1);
        }}
        variant="icon"
        className="h-12 w-12 bg-bg/10"
        icon={<ChevronLeft color="white" size={20} strokeWidth={2.5} />}
      />
      <Button
        variant="floating-negative"
        text="Verify"
        disabled={otp.length !== 6}
        onPress={() => {
          router.replace('/(app)');
        }}
        icon={<ChevronRight color="black" size={16} strokeWidth={3} />}
      />
    </View>
  );
}

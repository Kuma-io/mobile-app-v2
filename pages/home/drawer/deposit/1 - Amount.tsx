import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { View, Animated } from 'react-native';
import { Button, Text, Numpad } from '~/components/ui';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';

export function AmountDrawer({ setStep }: { setStep: (step: number) => void }) {
  const [amount, setAmount] = useState<number>(0);
  return (
    <View className="flex-1">
      <Text variant="heading" className="text-bg">
        Enter the amount to deposit.
      </Text>
      <Amount amount={amount} />
      <QuickAmount setAmount={setAmount} />
      <Numpad setNumber={setAmount} allowDecimals={true} maxValue={999999} />
      <Actions amount={amount} />
    </View>
  );
}

function Amount({ amount }: { amount: number }) {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex-row items-baseline justify-center">
        <Text variant="heading" className="text-3xl text-bg/90">
          $
        </Text>
        <Text variant="heading" className="text-6xl text-bg">
          {amount}
        </Text>
        {/* <Text variant="heading" className="text-2xl text-bg/90">
          {' '}
          $US
        </Text> */}
      </View>
    </View>
  );
}

function QuickAmount({ setAmount }: { setAmount: (amount: number) => void }) {
  return (
    <View className="w-full flex-row justify-center gap-3 p-4">
      {[50, 100, 500, 1000].map((amt) => (
        <Button
          key={amt}
          variant="text"
          className="w-20 rounded-xl border-2 border-bg/20 bg-bg/5 py-2"
          textClassName="text-sm font-inter-bold text-bg/80"
          text={`${amt}`}
          onPress={() => setAmount(amt)}
        />
      ))}
    </View>
  );
}

function Actions({ amount }: { amount: number }) {
  return (
    <View className="w-full p-4">
      <Button
        variant="full-width-negative"
        text="Deposit"
        disabled={amount === 0}
        // onPress={() => {
        //   router.replace('/(app)');
        // }}
        // icon={<ChevronRight color="black" size={16} strokeWidth={3} />}
      />
    </View>
  );
}

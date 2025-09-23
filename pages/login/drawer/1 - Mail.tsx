import { Button, Text } from '~/components/ui';
import AppleSvg from '~/assets/svg/apple.svg';
import GoogleSvg from '~/assets/svg/google.svg';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';

export function MailDrawer({ setStep }: { setStep: (step: number) => void }) {
  const [email, setEmail] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 78 : 0}
      className="flex-1">
      <Text variant="heading" className="text-bg">
        Choose your login method.
      </Text>
      <Email email={email} setEmail={setEmail} />
      <Socials />
      <Actions email={email} setStep={setStep} />
    </KeyboardAvoidingView>
  );
}

function Email({
  // inputRef,
  email,
  setEmail,
}: {
  // inputRef?: React.RefObject<TextInput>;
  email?: string;
  setEmail?: (email: string) => void;
}) {
  return (
    <View className="mt-8">
      <Text variant="subheading">With your email</Text>
      <View className="mt-2 w-full gap-4">
        <TextInput
          // ref={inputRef}
          value={email}
          onChangeText={setEmail}
          placeholder="johndoe@gmail.com"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          cursorColor="white"
          selectionColor="white"
          textAlignVertical="center"
          className="font-inter-semibold text-2xl tracking-[-0.04em] text-bg"
        />
      </View>
    </View>
  );
}

function Socials() {
  return (
    <View className="mt-8 flex-1 ">
      {/* <View className="w-full flex-row items-center justify-center gap-3"> */}
      <Text variant="subheading">Or use</Text>
      {/* <View className="h-[1px] flex-1 bg-gray-200" /> */}
      {/* </View> */}
      <View className="mt-2 w-full gap-2">
        <Button
          text="Use Google"
          variant="full-width"
          icon={<GoogleSvg width={18} height={18} />}
          iconPosition="left"
          className="gap-2 bg-bg/10"
        />
        <Button
          text="Use Apple"
          variant="full-width"
          icon={<AppleSvg width={18} height={18} />}
          iconPosition="left"
          className="gap-2 bg-bg/10"
        />
      </View>
    </View>
  );
}

function Actions({ email, setStep }: { email: string; setStep: (step: number) => void }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <View className="w-full flex-row justify-between p-4 ">
      <View className="flex-1" />
      <Button
        variant="floating-negative"
        text="Access"
        disabled={!emailRegex.test(email)}
        onPress={() => {
          setStep(2);
        }}
        icon={<ChevronRight color="black" size={16} strokeWidth={3} />}
      />
    </View>
  );
}

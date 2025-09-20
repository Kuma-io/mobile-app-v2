import { Drawer } from '~/components/ui/drawer';
import { Text, Keyboard, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function LoginDrawer({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpStep, setIsOtpStep] = useState(false);
  const inputRef = useRef<TextInput>(null);

  //   useEffect(() => {
  //     if (isVisible) {
  //       setTimeout(() => {
  //         inputRef.current?.focus();
  //       }, 100);
  //     } else {
  //       Keyboard.dismiss();
  //       setIsOtpStep(false);
  //       setOtp('');
  //       setEmail('');
  //     }
  //   }, [isVisible]);

  //   useEffect(() => {
  //     if (state.status === 'awaiting-code-input') {
  //       setIsOtpStep(true);
  //     }
  //   }, [state, isVisible]);

  //   const handleMailLogin = useCallback(async () => {
  //     try {
  //       sendCode({ email });
  //     } catch (e) {
  //       console.error('Unable to send OTP to user. Ensure your credentials are properly set: ', e);
  //     }
  //   }, [email]);

  //   const handleVerifyOtp = useCallback(async () => {
  //     await loginWithCode({ email, code: otp });
  //   }, [otp, onClose]);

  return (
    <Drawer isVisible={isVisible} onClose={onClose} negative>
      <Text>Login Drawer Content</Text>
    </Drawer>
  );
}

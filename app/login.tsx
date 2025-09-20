import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo, Description, Actions } from '~/pages/login';

export default function Login() {
  return (
    <SafeAreaView className=" flex-1 bg-bg">
      <Logo />
      <Description />
      <Actions />
    </SafeAreaView>
  );
}

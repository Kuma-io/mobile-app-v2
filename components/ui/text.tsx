import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { ClassValue } from 'clsx';
import { cn } from '~/lib/utils';

const variantClasses = {
  default: 'font-inter-extrabold text-xl tracking-tighter',
  heading: 'font-inter-bold text-3xl tracking-[-0.04em]',
  subheading: 'font-inter-bold text-lg tracking-[-0.04em] text-gray-400',
  logo: 'font-inter-black text-6xl tracking-[-0.03em]',
  none: '',
} as const;

type TextVariant = keyof typeof variantClasses;

interface TextProps extends Omit<RNTextProps, 'className'> {
  children: string;
  variant?: TextVariant;
  className?: ClassValue;
}

export function Text({ children, variant = 'default', className, ...props }: TextProps) {
  return (
    <RNText className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </RNText>
  );
}

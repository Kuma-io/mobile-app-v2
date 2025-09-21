import { Animated, Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { triggerHaptic } from '~/lib/haptics';
import { useRef, useState } from 'react';
import { ClassValue } from 'clsx';
import { cn } from '~/lib/utils';
import { Text } from './text';

const ButtonVariantClasses = {
  default: '',
  floating:
    'bg-fg rounded-2xl h-16 w-[42vw] flex-row items-center justify-between px-3 border-2 border-transparent',
  'floating-negative':
    'bg-bg rounded-2xl h-16 w-[42vw] flex-row items-center justify-between gap-2 px-3 border-2 border-transparent',
  'full-width': 'bg-fg rounded-2xl h-16 w-full flex-row items-center justify-center px-3',
  'full-width-negative': 'bg-bg rounded-2xl h-14 w-full flex-row items-center justify-center px-3',
  icon: 'h-10 w-10 rounded-xl items-center justify-center bg-fg',
  text: 'p-1 flex-row items-center justify-around',
} as const;

type ButtonVariant = keyof typeof ButtonVariantClasses;

const TextVariantClasses = {
  default: '',
  floating: 'text-bg font-inter-extrabold text-base tracking-tighter',
  'floating-negative': 'font-inter-extrabold text-base tracking-tighter',
  'full-width': 'text-bg font-inter-extrabold text-xl tracking-tighter',
  'full-width-negative': 'font-inter-extrabold text-fg text-xl tracking-tighter',
  icon: '',
  text: 'text-fg/70 font-inter-extrabold text-sm tracking-tighter',
} as const;

interface ButtonProps extends Omit<PressableProps, 'className'> {
  className?: ClassValue;
  text?: string;
  textClassName?: ClassValue;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: ButtonVariant;
  onPress?: () => void;
  shadow?: boolean;
  disabled?: boolean;
  animateBackground?: boolean;
}

export function Button({
  text,
  onPress,
  icon,
  iconPosition = 'right',
  variant = 'default',
  className,
  textClassName,
  shadow = variant === 'floating',
  disabled = false,
  animateBackground = false,
  ...props
}: ButtonProps) {
  const translate = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const scale = useRef(new Animated.Value(1)).current;
  const backgroundOpacity = useRef(new Animated.Value(0)).current;
  const [isPressed, setIsPressed] = useState(false);

  const animatePress = (pressed: boolean) => {
    if (disabled) return;
    setIsPressed(pressed);
    Animated.parallel([
      Animated.spring(scale, {
        toValue: pressed ? 0.98 : 1,
        useNativeDriver: true,
      }),
      Animated.spring(backgroundOpacity, {
        toValue: pressed ? 0.4 : 0,
        useNativeDriver: true,
        friction: 20,
        tension: 200,
      }),
    ]).start();
  };
  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => {
        animatePress(true);
        triggerHaptic('medium');
      }}
      onPressOut={() => {
        animatePress(false);
      }}
      onPress={onPress}
      {...props}>
      <Animated.View
        className={cn(
          ButtonVariantClasses[variant],
          className ?? '',
          disabled ? 'opacity-50' : 'opacity-100'
        )}
        style={{
          transform: [...translate.getTranslateTransform(), { scale }],
          ...(shadow
            ? {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: isPressed ? 0 : 0.25,
                shadowRadius: 6,
                elevation: isPressed ? 0 : 5,
              }
            : {}),
          ...(animateBackground
            ? {
                backgroundColor: 'transparent',
              }
            : {}),
        }}>
        {animateBackground && (
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'white',
              opacity: backgroundOpacity,
              borderRadius: 30,
            }}
          />
        )}
        {icon && iconPosition === 'left' && icon}
        {Text && text && (
          <Text
            variant="none"
            className={cn(TextVariantClasses[variant]) + ' ' + cn(textClassName)}>
            {String(text)}
          </Text>
        )}
        {icon && iconPosition === 'right' && icon}
      </Animated.View>
    </Pressable>
  );
}

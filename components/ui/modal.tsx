import React, { useRef, useEffect } from 'react';
import {
  Modal as RNModal,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  SafeAreaView,
  StatusBar,
  Platform,
  Easing,
} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const gestureRef = useRef<PanGestureHandler>(null);
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          useNativeDriver: true,
          duration: 600,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.6,
          useNativeDriver: true,
          duration: 600,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          useNativeDriver: true,
          duration: 600,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          useNativeDriver: true,
          duration: 600,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      ]).start();
    }

    return () => {
      translateY.stopAnimation();
      backdropOpacity.stopAnimation();
    };
  }, [visible, translateY, backdropOpacity]);

  const handleGestureStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      const { translationY, velocityY } = nativeEvent;

      if (translationY > 100 || velocityY > 500) {
        closeModal();
      } else {
        Animated.timing(translateY, {
          toValue: 0,
          useNativeDriver: true,
          duration: 600,
          easing: Easing.bezier(0.16, 1, 0.3, 1), // Updated to use imported Easing
        }).start();
      }
    }
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT,
        useNativeDriver: true,
        duration: 250,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 250,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
    ]).start(() => {
      onClose();
    });
  };

  const handleGestureEvent = Animated.event([{ nativeEvent: { translationY: translateY } }], {
    useNativeDriver: true,
  });

  if (!visible) return null;

  return (
    <RNModal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={closeModal}
      statusBarTranslucent={true}>
      <GestureHandlerRootView style={styles.overlay}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgb(0, 0, 0)',
              opacity: backdropOpacity,
            },
          ]}
        />
        <View style={styles.backdrop}>
          <PanGestureHandler
            ref={gestureRef}
            onHandlerStateChange={handleGestureStateChange}
            onGestureEvent={handleGestureEvent}
            minPointers={1}
            maxPointers={1}>
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  backgroundColor: 'black',
                  transform: [{ translateY }],
                },
              ]}>
              <SafeAreaView style={styles.safeArea}>
                <StatusBar
                  barStyle="light-content"
                  backgroundColor={Platform.OS === 'android' ? 'black' : undefined}
                />

                {/* Drag Handle */}
                <View style={styles.dragHandle} />

                {/* Content */}
                <View style={styles.content}>{children}</View>
              </SafeAreaView>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  safeArea: {
    flex: 1,
  },
  dragHandle: {
    width: 30,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

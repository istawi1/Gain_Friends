import { useRef, useState } from 'react'
import { Animated, Easing } from 'react-native'
import {
  authFlowConfig,
  AuthScreen,
  getExpandedCardHeight,
} from './auth-flow.config'

export function useAuthSheet() {
  const [sheetScreen, setSheetScreen] = useState<AuthScreen | null>(null)
  const cardProgress = useRef(new Animated.Value(0)).current
  const cardHeight = useRef(
    new Animated.Value(authFlowConfig.collapsedCardHeight),
  ).current

  const openSheet = (screen: AuthScreen) => {
    const nextHeight = getExpandedCardHeight(screen)

    if (sheetScreen) {
      setSheetScreen(screen)
      cardProgress.setValue(0)
      Animated.parallel([
        Animated.timing(cardHeight, {
          toValue: nextHeight,
          duration: authFlowConfig.animation.switchHeightDuration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(cardProgress, {
          toValue: 1,
          duration: authFlowConfig.animation.switchContentDuration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
      ]).start()
      return
    }

    setSheetScreen(screen)
    cardProgress.setValue(0)
    cardHeight.setValue(authFlowConfig.collapsedCardHeight)

    Animated.parallel([
      Animated.timing(cardHeight, {
        toValue: nextHeight,
        duration: authFlowConfig.animation.expandHeightDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(cardProgress, {
        toValue: 1,
        duration: authFlowConfig.animation.enterContentDuration,
        delay: authFlowConfig.animation.enterContentDelay,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start()
  }

  const closeSheet = () => {
    Animated.parallel([
      Animated.timing(cardProgress, {
        toValue: 0,
        duration: authFlowConfig.animation.exitContentDuration,
        easing: Easing.in(Easing.quad),
        useNativeDriver: false,
      }),
      Animated.timing(cardHeight, {
        toValue: authFlowConfig.collapsedCardHeight,
        duration: authFlowConfig.animation.collapseHeightDuration,
        delay: authFlowConfig.animation.collapseHeightDelay,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start(() => {
      setSheetScreen(null)
    })
  }

  const cardTranslateY = cardProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, authFlowConfig.animation.expandedTranslateY],
  })

  const cardScale = cardProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, authFlowConfig.animation.expandedScale],
  })

  return {
    sheetScreen,
    cardProgress,
    cardHeight,
    cardScale,
    cardTranslateY,
    openSheet,
    closeSheet,
  }
}

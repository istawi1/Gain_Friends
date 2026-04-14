import { useMemo, useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Text,
  View,
} from 'react-native'
import { InteractivePressable } from '../../../ui/InteractivePressable'
import { welcomePageStyles } from './welcome-page.styles'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CARD_HORIZONTAL_MARGIN = 16
const CARD_WIDTH = SCREEN_WIDTH - CARD_HORIZONTAL_MARGIN * 2

const welcomeSlides = [
  {
    id: 'stories',
    title: 'Buduj więź z dzieckiem przez opowiadanie historii.',
  },
  {
    id: 'moments',
    title: 'Twórz wspólne chwile, do których chce się wracać.',
  },
  {
    id: 'imagination',
    title: 'Rozwijaj wyobraźnię i bliskość każdego dnia.',
  },
] as const

type WelcomePageProps = {
  onGoToRegister: () => void
  onGoToLogin: () => void
  hideCard?: boolean
}

export function WelcomePage({
  onGoToRegister,
  onGoToLogin,
  hideCard = false,
}: WelcomePageProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const translateX = useRef(new Animated.Value(0)).current
  const gestureX = useRef(new Animated.Value(0)).current

  const dotProgress = useRef(
    welcomeSlides.map((_, index) => new Animated.Value(index === 0 ? 1 : 0)),
  ).current

  const animateDots = (nextIndex: number) => {
    Animated.parallel(
      dotProgress.map((progress, index) =>
        Animated.spring(progress, {
          toValue: index === nextIndex ? 1 : 0,
          useNativeDriver: true,
          tension: 180,
          friction: 14,
        }),
      ),
    ).start()
  }

  const animateToSlide = (nextIndex: number) => {
    Animated.spring(translateX, {
      toValue: -nextIndex * CARD_WIDTH,
      useNativeDriver: true,
      tension: 90,
      friction: 12,
    }).start()

    setActiveSlideIndex(nextIndex)
    animateDots(nextIndex)
  }

  const resetGesture = () => {
    Animated.spring(gestureX, {
      toValue: 0,
      useNativeDriver: true,
      tension: 120,
      friction: 12,
    }).start()
  }

  const changeSlide = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= welcomeSlides.length || nextIndex === activeSlideIndex) {
      resetGesture()
      return
    }

    gestureX.setValue(0)
    animateToSlide(nextIndex)
  }

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) =>
          Math.abs(gestureState.dx) > 12 && Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
        onPanResponderMove: (_, gestureState) => {
          const isAtFirst = activeSlideIndex === 0 && gestureState.dx > 0
          const isAtLast =
            activeSlideIndex === welcomeSlides.length - 1 && gestureState.dx < 0

          gestureX.setValue(isAtFirst || isAtLast ? gestureState.dx * 0.35 : gestureState.dx)
        },
        onPanResponderRelease: (_, gestureState) => {
          const threshold = CARD_WIDTH * 0.18

          if (gestureState.dx < -threshold) {
            changeSlide(activeSlideIndex + 1)
            return
          }

          if (gestureState.dx > threshold) {
            changeSlide(activeSlideIndex - 1)
            return
          }

          resetGesture()
        },
        onPanResponderTerminate: resetGesture,
      }),
    [activeSlideIndex, gestureX],
  )

  const sliderTranslateX = Animated.add(translateX, gestureX)
  const backgroundTranslateX = Animated.multiply(sliderTranslateX, 0.22)

  return (
    <View style={welcomePageStyles.screen}>
      <View style={welcomePageStyles.background}>
        <Animated.View
          style={[
            welcomePageStyles.backgroundTrack,
            { transform: [{ translateX: backgroundTranslateX }] },
          ]}
        >
          {welcomeSlides.map((slide) => (
            <View key={slide.id} style={welcomePageStyles.backgroundSlide}>
              <Image
                source={require('../../../../../assets/img.png')}
                resizeMode="cover"
                style={[welcomePageStyles.slideImage, welcomePageStyles.slideImageStatic]}
              />
            </View>
          ))}
        </Animated.View>

        <View style={welcomePageStyles.overlay}>
          <View style={welcomePageStyles.heroSection}>
            <View style={welcomePageStyles.spacer} />

            <View style={welcomePageStyles.dots}>
              {welcomeSlides.map((slide, index) => {
                const dotScale = dotProgress[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.35],
                })
                const isActive = index === activeSlideIndex

                return (
                  <InteractivePressable
                    key={slide.id}
                    accessibilityRole="button"
                    accessibilityLabel={`Pokaż slajd ${index + 1}`}
                    onPress={() => changeSlide(index)}
                    style={welcomePageStyles.dotButton}
                  >
                    <Animated.View
                      style={[
                        welcomePageStyles.dot,
                        isActive && welcomePageStyles.dotActive,
                        { transform: [{ scale: dotScale }] },
                      ]}
                    />
                  </InteractivePressable>
                )
              })}
            </View>
          </View>

          {!hideCard && (
            <View {...panResponder.panHandlers} style={welcomePageStyles.card}>
              <Animated.View
                style={[
                  welcomePageStyles.sliderTrack,
                  { width: CARD_WIDTH * welcomeSlides.length },
                  { transform: [{ translateX: sliderTranslateX }] },
                ]}
              >
                {welcomeSlides.map((slide) => (
                  <View key={slide.id} style={[welcomePageStyles.slide, { width: CARD_WIDTH }]}>
                    <Text style={welcomePageStyles.title}>{slide.title}</Text>

                    <InteractivePressable
                      onPress={onGoToRegister}
                      style={welcomePageStyles.primaryButton}
                    >
                      <Text style={welcomePageStyles.primaryButtonText}>Załóż konto</Text>
                    </InteractivePressable>

                    <View style={welcomePageStyles.loginRow}>
                      <Text style={welcomePageStyles.loginText}>Masz już konto?</Text>
                      <InteractivePressable
                        onPress={onGoToLogin}
                        style={welcomePageStyles.loginLinkButton}
                      >
                        <Text style={welcomePageStyles.loginLinkText}>Zaloguj się</Text>
                      </InteractivePressable>
                    </View>
                  </View>
                ))}
              </Animated.View>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

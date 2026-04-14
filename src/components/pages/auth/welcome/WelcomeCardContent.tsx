import { Animated, Text, View } from 'react-native'
import { InteractivePressable } from '../../../ui/InteractivePressable'
import { welcomePageStyles } from './welcome-page.styles'

type WelcomeCardContentProps = {
  onGoToRegister: () => void
  onGoToLogin: () => void
  progress: Animated.Value
}

export function WelcomeCardContent({
  onGoToRegister,
  onGoToLogin,
  progress,
}: WelcomeCardContentProps) {
  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  })

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  })

  return (
    <Animated.View
      pointerEvents="auto"
      style={[
        welcomePageStyles.staticCardContent,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Text style={welcomePageStyles.title}>
        Buduj więź z dzieckiem przez opowiadanie historii.
      </Text>

      <InteractivePressable
        onPress={onGoToRegister}
        style={welcomePageStyles.primaryButton}
      >
        <Text style={welcomePageStyles.primaryButtonText}>Załóż konto</Text>
      </InteractivePressable>

      <View style={welcomePageStyles.loginRow}>
        <Text style={welcomePageStyles.loginText}>Masz już konto?</Text>
        <InteractivePressable onPress={onGoToLogin} style={welcomePageStyles.loginLinkButton}>
          <Text style={welcomePageStyles.loginLinkText}>Zaloguj się</Text>
        </InteractivePressable>
      </View>
    </Animated.View>
  )
}

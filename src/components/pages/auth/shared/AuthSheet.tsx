import { Animated, View } from 'react-native'
import { LoginPage } from '../login/LoginPage'
import { RegisterPage } from '../register/RegisterPage'
import { WelcomeCardContent } from '../welcome/WelcomeCardContent'
import { welcomePageStyles } from '../welcome/welcome-page.styles'
import { authSharedStyles } from './auth-shared.styles'
import { AuthScreen } from './auth-flow.config'

type AuthSheetProps = {
  cardHeight: Animated.Value
  cardProgress: Animated.Value
  cardScale: Animated.AnimatedInterpolation<number>
  cardTranslateY: Animated.AnimatedInterpolation<number>
  sheetScreen: AuthScreen | null
  onClose: () => void
  onGoToLogin: () => void
  onGoToRegister: () => void
}

export function AuthSheet({
  cardHeight,
  cardProgress,
  cardScale,
  cardTranslateY,
  sheetScreen,
  onClose,
  onGoToLogin,
  onGoToRegister,
}: AuthSheetProps) {
  return (
    <View pointerEvents="box-none" style={authSharedStyles.sheetOverlay}>
      <Animated.View
        style={[
          welcomePageStyles.card,
          authSharedStyles.growingCard,
          {
            height: cardHeight,
            transform: [{ translateY: cardTranslateY }, { scale: cardScale }],
          },
        ]}
      >
        {!sheetScreen && (
          <WelcomeCardContent
            progress={cardProgress}
            onGoToLogin={onGoToLogin}
            onGoToRegister={onGoToRegister}
          />
        )}

        {sheetScreen === 'login' && (
          <LoginPage
            progress={cardProgress}
            onBack={onClose}
            onGoToRegister={onGoToRegister}
          />
        )}

        {sheetScreen === 'register' && (
          <RegisterPage
            progress={cardProgress}
            onBack={onClose}
            onGoToLogin={onGoToLogin}
          />
        )}
      </Animated.View>
    </View>
  )
}

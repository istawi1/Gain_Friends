import { Animated, Text, TextInput, View } from 'react-native'
import { InteractivePressable } from '../../../ui/InteractivePressable'
import { SocialAuthButtons } from '../shared/SocialAuthButtons'
import { authSharedStyles } from '../shared/auth-shared.styles'
import { registerPageStyles } from './register-page.styles'

type RegisterPageProps = {
  onBack: () => void
  onGoToLogin: () => void
  progress: Animated.Value
}

export function RegisterPage({ onBack, onGoToLogin, progress }: RegisterPageProps) {
  const animatedBlockStyle = (index: number) => ({
    opacity: progress.interpolate({
      inputRange: [0.1 + index * 0.12, 0.32 + index * 0.12],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0.1 + index * 0.12, 0.32 + index * 0.12],
          outputRange: [18, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  })

  return (
    <View style={registerPageStyles.content}>
      <Animated.View style={animatedBlockStyle(0)}>
        <InteractivePressable onPress={onBack} style={authSharedStyles.backButton}>
          <Text style={authSharedStyles.backButtonText}>Wróć</Text>
        </InteractivePressable>

        <Text style={authSharedStyles.title}>Załóż konto</Text>
        <Text style={authSharedStyles.subtitle}>
          Stwórz profil i zacznij budować codzienne rytuały z dzieckiem.
        </Text>
      </Animated.View>

      <Animated.View style={animatedBlockStyle(1)}>
        <SocialAuthButtons />
      </Animated.View>

      <Animated.View style={animatedBlockStyle(2)}>
        <View style={authSharedStyles.separatorRow}>
          <View style={authSharedStyles.separatorLine} />
          <Text style={authSharedStyles.separatorText}>lub e-mailem</Text>
          <View style={authSharedStyles.separatorLine} />
        </View>
      </Animated.View>

      <Animated.View style={[authSharedStyles.form, animatedBlockStyle(3)]}>
        <View style={authSharedStyles.inputGroup}>
          <Text style={authSharedStyles.inputLabel}>Imię</Text>
          <TextInput
            placeholder="Jak masz na imię?"
            placeholderTextColor="#9aa0af"
            style={authSharedStyles.input}
          />
        </View>

        <View style={authSharedStyles.inputGroup}>
          <Text style={authSharedStyles.inputLabel}>E-mail</Text>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="twoj@email.com"
            placeholderTextColor="#9aa0af"
            style={authSharedStyles.input}
          />
        </View>

        <View style={authSharedStyles.inputGroup}>
          <Text style={authSharedStyles.inputLabel}>Hasło</Text>
          <TextInput
            placeholder="Ustaw hasło"
            placeholderTextColor="#9aa0af"
            secureTextEntry
            style={authSharedStyles.input}
          />
        </View>

        <InteractivePressable style={authSharedStyles.primaryButton}>
          <Text style={authSharedStyles.primaryButtonText}>Utwórz konto</Text>
        </InteractivePressable>
      </Animated.View>

      <Animated.View style={[authSharedStyles.footerRow, animatedBlockStyle(4)]}>
        <Text style={authSharedStyles.footerText}>Masz już konto?</Text>
        <InteractivePressable
          onPress={onGoToLogin}
          style={authSharedStyles.footerLinkButton}
        >
          <Text style={authSharedStyles.footerLinkText}>Zaloguj się</Text>
        </InteractivePressable>
      </Animated.View>
    </View>
  )
}

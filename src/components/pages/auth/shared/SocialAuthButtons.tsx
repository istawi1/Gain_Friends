import { Text, View } from 'react-native'
import { InteractivePressable } from '../../../ui/InteractivePressable'
import { authSharedStyles } from './auth-shared.styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const socialButtons = [
  {
    id: 'google',
    label: 'Kontynuuj z Google',
    backgroundColor: '#ea4335',
    icon: <AntDesign name="google" size={18} color="#fff" />,
  },
  {
    id: 'apple',
    label: 'Kontynuuj z Apple',
    backgroundColor: '#111111',
    icon: <AntDesign name="apple1" size={18} color="#fff" />,
  },
  {
    id: 'facebook',
    label: 'Kontynuuj z Facebook',
    backgroundColor: '#1877f2',
    icon: <FontAwesome name="facebook" size={18} color="#fff" />,
  },
] as const

export function SocialAuthButtons() {
  return (
    <View style={authSharedStyles.socialSection}>
      {socialButtons.map((button) => (
        <InteractivePressable key={button.id} style={authSharedStyles.socialButton}>
          <View
            style={[
              authSharedStyles.socialButtonIcon,
              { backgroundColor: button.backgroundColor },
            ]}
          >
            {button.icon}
          </View>
          <Text style={authSharedStyles.socialButtonText}>{button.label}</Text>
        </InteractivePressable>
      ))}
    </View>
  )
}
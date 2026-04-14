import { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { authSharedStyles } from './auth-shared.styles'

type AuthCardProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

export function AuthCard({ children, style }: AuthCardProps) {
  return <View style={[authSharedStyles.card, style]}>{children}</View>
}

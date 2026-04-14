import { ReactNode, useState } from 'react'
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'

type PressableStateStyles = {
  default?: StyleProp<ViewStyle>
  hover?: StyleProp<ViewStyle>
  pressed?: StyleProp<ViewStyle>
}

type InteractivePressableProps = PressableProps & {
  children: ReactNode
  styleSet?: PressableStateStyles
  textStyleSet?: {
    default?: StyleProp<TextStyle>
    hover?: StyleProp<TextStyle>
    pressed?: StyleProp<TextStyle>
  }
  childrenStyle?: (style: StyleProp<TextStyle>) => ReactNode
}

export function InteractivePressable({
  children,
  style,
  styleSet,
  textStyleSet,
  childrenStyle,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  ...props
}: InteractivePressableProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Pressable
      {...props}
      onHoverIn={(event) => {
        setIsHovered(true)
        onHoverIn?.(event)
      }}
      onHoverOut={(event) => {
        setIsHovered(false)
        onHoverOut?.(event)
      }}
      onPressIn={(event) => {
        setIsPressed(true)
        onPressIn?.(event)
      }}
      onPressOut={(event) => {
        setIsPressed(false)
        onPressOut?.(event)
      }}
      style={(state) => [
        typeof style === 'function' ? style(state) : style,
        styleSet?.default,
        isHovered && styles.hovered,
        isHovered && styleSet?.hover,
        isPressed && styles.pressed,
        isPressed && styleSet?.pressed,
      ]}
    >
      {childrenStyle
        ? childrenStyle([
            textStyleSet?.default,
            isHovered && textStyleSet?.hover,
            isPressed && textStyleSet?.pressed,
          ])
        : children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  hovered: {
    transform: [{ translateY: -1 }, { scale: 1.01 }],
  },
  pressed: {
    transform: [{ scale: 0.985 }],
  },
})

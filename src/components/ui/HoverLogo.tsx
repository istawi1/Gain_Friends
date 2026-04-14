import { useEffect, useRef } from 'react'
import {
  Animated,
  Image,
  ImageStyle,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native'

type HoverLogoProps = {
  source: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
}

export function HoverLogo({ source, style, imageStyle }: HoverLogoProps) {
  const scale = useRef(new Animated.Value(1)).current
  const rotate = useRef(new Animated.Value(0)).current

  const animateTo = (toValue: number) => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: toValue > 1 ? 1 : 0,
        duration: 260,
        useNativeDriver: true,
      }),
    ]).start()
  }

  useEffect(() => {
    return () => {
      scale.stopAnimation()
      rotate.stopAnimation()
    }
  }, [rotate, scale])

  return (
    <Pressable
      onHoverIn={() => animateTo(1.05)}
      onHoverOut={() => animateTo(1)}
      onPressIn={() => animateTo(0.97)}
      onPressOut={() => animateTo(1.05)}
    >
      <Animated.View
        style={[
          style,
          {
            transform: [
              { scale },
              {
                rotate: rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '4deg'],
                }),
              },
            ],
          },
        ]}
      >
        <Image source={source} style={imageStyle} resizeMode="contain" />
      </Animated.View>
    </Pressable>
  )
}

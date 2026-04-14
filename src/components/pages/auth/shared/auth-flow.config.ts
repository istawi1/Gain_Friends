import { Dimensions } from 'react-native'

export type AuthScreen = 'login' | 'register'

const { height: screenHeight } = Dimensions.get('window')

const collapsedCardHeight = 252
const expandedCardTopGap = 24
const expandedCardBottomGap = 40
const expandedCardMaxHeight =
  screenHeight - expandedCardTopGap - expandedCardBottomGap

export const authFlowConfig = {
  collapsedCardHeight,
  expandedCardHeights: {
    login: Math.min(580, expandedCardMaxHeight),
    register: Math.min(700, expandedCardMaxHeight),
  },
  animation: {
    switchHeightDuration: 280,
    switchContentDuration: 260,
    expandHeightDuration: 340,
    enterContentDuration: 320,
    enterContentDelay: 40,
    exitContentDuration: 180,
    collapseHeightDuration: 320,
    collapseHeightDelay: 60,
    expandedTranslateY: -10,
    expandedScale: 1.01,
  },
} as const

export function getExpandedCardHeight(screen: AuthScreen) {
  return authFlowConfig.expandedCardHeights[screen]
}

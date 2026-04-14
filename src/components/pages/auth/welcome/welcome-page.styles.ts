import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export const welcomePageStyles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.heroDark,
  },

  background: {
    flex: 1,
    overflow: 'hidden',
  },

  backgroundTrack: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    width: SCREEN_WIDTH * 3,
  },

  backgroundSlide: {
    width: SCREEN_WIDTH,
    height: '100%',
    overflow: 'hidden',
  },

  slideImage: {
    width: '100%',
    height: '100%',
    opacity: 0.96,
  },

  slideImageStatic: {
    transform: [{ scale: 1.18 }, { translateX: 52 }, { translateY: -18 }],
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 23, 39, 0.42)',
    justifyContent: 'flex-end',
  },

  heroSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 34,
  },

  spacer: {
    flex: 1,
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dotButton: {
    paddingHorizontal: 5,
    paddingVertical: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.52)',
  },

  dotActive: {
    width: 11,
    height: 11,
    backgroundColor: colors.text.white,
    borderWidth: 2,
    borderColor: 'rgba(74, 88, 173, 0.28)',
  },

  card: {
    marginHorizontal: 16,
    backgroundColor: 'rgba(255, 253, 249, 0.97)',
    borderRadius: 30,
    paddingTop: 22,
    paddingBottom: 28,
    marginBottom: 36,
    shadowColor: '#10131f',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -4 },
    elevation: 8,
    overflow: 'hidden',
  },

  sliderTrack: {
    flexDirection: 'row',
  },

  staticCardContent: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 36,
  },

  slide: {
    paddingHorizontal: 22,
  },

  title: {
    color: colors.text.primary,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 31,
    textAlign: 'center',
    marginBottom: 22,
  },

  primaryButton: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: '#d8ff69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    width: '100%',
  },

  primaryButtonText: {
    color: colors.text.dark,
    fontSize: 16,
    fontWeight: '700',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingBottom: 2,
  },

  loginText: {
    color: '#8a8e9c',
    fontSize: 14,
    fontWeight: '400',
  },

  loginLinkButton: {
    paddingVertical: 2,
  },

  loginLinkText: {
    color: '#5c56d8',
    fontSize: 14,
    fontWeight: '600',
  },
})

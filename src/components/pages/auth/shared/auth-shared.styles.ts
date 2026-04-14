import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

export const authSharedStyles = StyleSheet.create({
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

  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: 0.96,
    transform: [{ scale: 1.18 }, { translateX: 52 }, { translateY: -18 }],
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 23, 39, 0.42)',
    justifyContent: 'flex-end',
  },

  heroSpacer: {
    flex: 1,
  },

  sheetOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17, 23, 39, 0.22)',
  },

  sheetContent: {
    justifyContent: 'flex-end',
  },

  card: {
    marginHorizontal: 16,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 253, 249, 0.98)',
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 20,
    marginBottom: 12,
    shadowColor: '#10131f',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -4 },
    elevation: 8,
    overflow: 'hidden',
  },

  growingCard: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingVertical: 2,
  },

  backButtonText: {
    color: '#5c56d8',
    fontSize: 14,
    fontWeight: '600',
  },

  title: {
    color: colors.text.primary,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    color: colors.text.secondary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 14,
  },

  form: {
    gap: 10,
    marginBottom: 14,
  },

  inputGroup: {
    gap: 6,
  },

  inputLabel: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  input: {
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(27, 31, 47, 0.08)',
    paddingHorizontal: 16,
    color: colors.text.primary,
    fontSize: 14,
  },

  primaryButton: {
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#d8ff69',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 2,
  },

  primaryButtonText: {
    color: colors.text.dark,
    fontSize: 15,
    fontWeight: '700',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  footerText: {
    color: '#8a8e9c',
    fontSize: 14,
    fontWeight: '400',
  },

  footerLinkButton: {
    paddingVertical: 2,
  },

  footerLinkText: {
    color: '#5c56d8',
    fontSize: 14,
    fontWeight: '600',
  },

  socialSection: {
    gap: 8,
    marginBottom: 14,
  },

  separatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },

  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(27, 31, 47, 0.08)',
  },

  separatorText: {
    color: colors.text.secondary,
    fontSize: 13,
    fontWeight: '500',
  },

  socialButton: {
    minHeight: 46,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(27, 31, 47, 0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  socialButtonIcon: {
    width: 24,
    height: 24,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialButtonIconText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },

  socialButtonText: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '600',
  },
})

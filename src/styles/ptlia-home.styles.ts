import { StyleSheet } from 'react-native'

export const ptliaHomeStyles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 36,
    gap: 18,
  },

  heroCard: {
    backgroundColor: '#edf7ff',
    borderRadius: 30,
    padding: 18,
    borderWidth: 1,
    borderColor: '#cfe4f6',
    shadowColor: '#8fb5d1',
    shadowOpacity: 0.18,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 12 },
    elevation: 5,
    gap: 18,
  },

  navbarCard: {
    backgroundColor: '#f8fcff',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d7ebf8',
    gap: 16,
  },

  brandBlock: {
    gap: 8,
  },

  brandTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#d8ecfb',
    color: '#3d6e96',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  brandName: {
    color: '#163a59',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '800',
  },

  navGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  navPill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: '#e4f2fc',
    borderWidth: 1,
    borderColor: '#c6def0',
  },

  navPillText: {
    color: '#355d82',
    fontSize: 13,
    fontWeight: '600',
  },

  heroBody: {
    gap: 16,
  },

  heroCopy: {
    gap: 12,
  },

  heroEyebrow: {
    color: '#5383ac',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  heroTitle: {
    color: '#14324c',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '800',
  },

  heroDescription: {
    color: '#496b88',
    fontSize: 15,
    lineHeight: 24,
  },

  heroAsideCard: {
    backgroundColor: '#f9fcff',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d4e7f5',
    gap: 12,
  },

  heroAsideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  heroAsideTitle: {
    color: '#214968',
    fontSize: 15,
    fontWeight: '700',
  },

  heroAsideText: {
    color: '#54728d',
    fontSize: 14,
    lineHeight: 22,
  },

  heroAsideDivider: {
    height: 1,
    backgroundColor: '#d8e8f3',
  },

  highlightGrid: {
    gap: 12,
  },

  infoCard: {
    backgroundColor: '#dff0fb',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#c5dfef',
    gap: 8,
  },

  infoCardValue: {
    color: '#1f4868',
    fontSize: 18,
    fontWeight: '700',
  },

  infoCardLabel: {
    color: '#527089',
    fontSize: 14,
    lineHeight: 21,
  },

  sectionRow: {
    gap: 18,
  },

  sectionCard: {
    backgroundColor: '#f7fbff',
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: '#d8e9f5',
    gap: 18,
  },

  sectionCardSplit: {
    flex: 1,
  },

  asideCard: {
    backgroundColor: '#f1f8fe',
  },

  sectionHeader: {
    gap: 8,
  },

  sectionEyebrow: {
    color: '#5b8ab1',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.9,
  },

  sectionTitle: {
    color: '#173650',
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
  },

  sectionDescription: {
    color: '#5c7690',
    fontSize: 14,
    lineHeight: 22,
  },

  cardGrid: {
    gap: 12,
  },

  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dbeaf4',
    gap: 10,
  },

  featureBadge: {
    alignSelf: 'flex-start',
    minWidth: 34,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#e4f1fb',
  },

  featureBadgeText: {
    color: '#3d668d',
    fontSize: 12,
    fontWeight: '700',
  },

  featureTitle: {
    color: '#1e4667',
    fontSize: 18,
    fontWeight: '700',
  },

  featureText: {
    color: '#5d7891',
    fontSize: 14,
    lineHeight: 22,
  },

  listCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d9e9f4',
    gap: 12,
  },

  listCardTitle: {
    color: '#1d4465',
    fontSize: 18,
    fontWeight: '700',
  },

  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },

  listDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#77a8cf',
    marginTop: 6,
  },

  listText: {
    flex: 1,
    color: '#5b7891',
    fontSize: 14,
    lineHeight: 22,
  },

  newsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 8,
  },

  newsText: {
    flex: 1,
    color: '#56738d',
    fontSize: 14,
    lineHeight: 22,
  },

  partnerRow: {
    gap: 12,
  },

  partnerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d9e9f5',
    gap: 6,
  },

  partnerName: {
    color: '#204869',
    fontSize: 17,
    fontWeight: '700',
  },

  partnerMeta: {
    color: '#6c8397',
    fontSize: 13,
  },

  timelineRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
    paddingVertical: 6,
  },

  timelineMarker: {
    width: 12,
    height: 12,
    borderRadius: 999,
    marginTop: 5,
    backgroundColor: '#7eaed0',
    borderWidth: 3,
    borderColor: '#dcecf7',
  },

  timelineText: {
    flex: 1,
    color: '#56728b',
    fontSize: 14,
    lineHeight: 22,
  },

  footerCard: {
    backgroundColor: '#eaf6ff',
    borderRadius: 30,
    padding: 18,
    borderWidth: 1,
    borderColor: '#d4e7f6',
    gap: 18,
  },

  footerGrid: {
    gap: 12,
  },

  contactCard: {
    backgroundColor: '#fdfefe',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d8e9f4',
  },

  contactText: {
    color: '#4f6f8b',
    fontSize: 14,
    lineHeight: 22,
  },
})

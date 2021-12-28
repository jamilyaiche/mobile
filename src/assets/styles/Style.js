import { StyleSheet, Dimensions, Platform } from 'react-native'
import Colors from './Colors'
import {
  font1Bold,
  font1Regular,
  font2Bold,
  font2Regular,
  font2Medium,
  font1boldQuicksand,
  lato,

} from './Fonts'
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Style = StyleSheet.create({
  boderError: {
    borderWidth: 1,
    borderColor: Colors.red()
  },
  textInput: {
    width: '100%',
    height: 49,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    color: Colors.black(),
    fontFamily: lato,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 1,
    paddingLeft: 16,
    paddingRight: 16.8
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: Colors.blue()
  },
  textInputLabel: {
    fontFamily: font2Bold,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 1,
    color: Colors.black()
  },
  h1: {
    fontFamily: font1Bold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    marginTop: 26,
    marginBottom: 20,
    color: Colors.black(),
    width: '100%'
  },
  h2: {
    fontFamily: font2Bold,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1,
    marginTop: 26,
    marginBottom: 20,
    color: Colors.black(),
    width: '100%'
  },
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    backgroundColor: Colors.white()
  },
  TextInputStyle1: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grey(),
    borderRadius: 10,
    backgroundColor: Colors.grey(),
    color: Colors.primary(),
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1,
    paddingLeft: 18,
    paddingRight: 18
  },
  TextInputStyleWithRightIcon: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grey(),
    borderRadius: 10,
    backgroundColor: Colors.grey(),
    color: Colors.primary(),
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1,
    paddingLeft: 40,
    paddingRight: 18
  },
  TextInputStyle2: {
    width: '100%',
    height: 50,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: Colors.primary(),
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    padding: 18
  },
  TextInputLabelStyle1: {
    position: 'absolute',
    top: -5,
    left: 12,
    paddingHorizontal: 8,
    height: 14,
    color: Colors.grey(),
    backgroundColor: Colors.white(),
    fontFamily: font2Bold,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1
  },
  TextInputViewStyle2: {
    marginTop: 10,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    height: 50,
    backgroundColor: Colors.white(),
    borderRadius: 10
  },
  TextInputRightIcon: {
    position: 'absolute',
    right: 16,
    top: 45
  },
  passwordEyeClosed: {
    height: 28,
    width: 3,
    backgroundColor: Colors.grey(),
    position: 'absolute',
    right: 27,
    top: 10,
    transform: [{ rotate: '45deg' }]
  },
  passwordEyeClosedFocused: {
    height: 28,
    width: 3,
    backgroundColor: Colors.primary(),
    position: 'absolute',
    right: 27,
    top: 10,
    transform: [{ rotate: '45deg' }]
  },
  textInputErrorMessageStyle1: {
    width: '100%',
    marginTop: 10,
    color: Colors.red(),
    fontFamily: font2Bold,
    fontSize: 12,
    lineHeight: 18
  },
  textInputMultiline: {
    height: 150,
    paddingTop: 20,
    textAlignVertical: 'top'
  },
  TextInputValidityCriteria: {
    fontFamily: font2Regular,
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey()
  },
  TextInputValidityCriteriaValid: {
    fontFamily: font2Regular,
    fontSize: 12,
    lineHeight: 14,
    color: Colors.primary()
  },
  textInputValidityCriteriasContainerStyle1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  btn: {
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 5
  },
  btnDisabled: {
    opacity: 0.7
  },
  btnNormal: {
    padding: 18
  },
  btnLarge: {
    padding: 22
  },
  btnSmall: {
    padding: 14
  },
  btnPrimary: {

    backgroundColor: Colors.primary(),
    borderRadius: 5,
    height: 52,

  },
  btnWhite: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    height: 52,
  },
  btnWithShadow: {
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  btnDefault: {
    backgroundColor: Colors.blue(),
    borderRadius: 4
  },
  btnPrimaryDisabled: {
    backgroundColor: Colors.grey(0.7)
  },
  btnLabelDisabled: {
    color: Colors.darkGrey()
  },
  whiteButtonLabel: {
    color: Colors.primary()
  },

  btnTransparent: {
    backgroundColor: 'transparent',
    shadowRadius: 5
  },
  btnLabel: {
    fontFamily: lato,
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: 1,
    textAlign: 'center'
  },

  btnLabelSmall: {
    fontSize: 12,
    lineHeight: 14
  },
  btnLabelNormal: {
    fontSize: 14,
    lineHeight: 16
  },
  btnLabelLarge: {
    fontSize: 16,
    lineHeight: 18
  },
  btnLabelPrimary: {
    color: Colors.white()
  },
  btnLabelDefault: {
    color: Colors.white()
  },
  btnLabelTransparent: {
    color: Colors.blue()
  },
  carousel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselPagerContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselPagerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: Colors.primary()
  },
  card: {
    padding: 8,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 6,
    backgroundColor: Colors.white(),
    width: '100%',

  },
  cardWithIcon: {
    height: 72,
    backgroundColor: '#04311F',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }, cardWithIconBackground: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  CardTitle: {
    marginTop: 5,
    color: Colors.black(),
    fontFamily: lato,
    fontStyle: 'normal',
    fontWeight: '400',
    // "textShadow": "0px 12px 12px rgba(50, 50, 71, 0.08), 0px 16px 24px rgba(50, 50, 71, 0.08)",
    fontSize: 18,
    lineHeight: 21.6,
  },
  avatarSmall: {
    width: 48,
    height: 48,
    borderRadius: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey()
  },
  avatarMedium: {
    width: 77,
    height: 77,
    borderRadius: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: Colors.grey()
  },
  avatarBig: {
    width: 98,
    height: 98,
    borderRadius: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey()
  },
  avatarLabelFontSmall: {
    fontFamily: font1boldQuicksand,
    fontWeight: '400',
    color: Colors.white(),
    marginTop: 0,
    fontSize: 14,
    letterSpacing: 3
  },
  avatarLabelFontMedium: {
    fontFamily: font1boldQuicksand,
    fontWeight: '700',
    color: Colors.white(),
    marginTop: 0,
    fontSize: 18,
    letterSpacing: 3
  },
  avatarLabelFontBig: {
    fontFamily: font1boldQuicksand,
    fontWeight: '700',
    color: Colors.white(),
    marginTop: 0,
    fontSize: 28,
    letterSpacing: 3
  },
  elementFirstLabel: {
    fontFamily: font2Bold,
    fontWeight: '500',
    color: Colors.black(),
    marginTop: 9,
    marginLeft: 10,
    fontSize: 16,
    letterSpacing: 1
  },
  elementSecondtLabel: {
    fontFamily: font2Medium,
    color: Colors.grey(),
    marginTop: 1,
    marginLeft: 10,
    fontSize: 14,
    letterSpacing: 1,
    height: 15
  },
  elementBordure: {
    borderColor: Colors.primary(),
    borderWidth: 1
  },
  elementBordureWithoutCheck: {
    borderColor: Colors.transparent,
    borderWidth: 1
  },
  elementPartCardWithOutBordure: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Colors.grey(),
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: Colors.white(),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  elementPartOfImage: {
    flexDirection: 'column',
    width: '100%',
    aspectRatio: 1.34,
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  elementPartOfLabel: {
    flexDirection: 'column',
    width: '100%',
    height: 58,
    backgroundColor: Colors.white(),
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  iconElementCardImage: {
    position: 'absolute',
    right: 5,
    top: 8
  },
  iconElementCardAvatar: {
    position: 'absolute',
    right: 5,
    top: 8
  },
  labelCentredLMedium: {
    fontFamily: font2Bold,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    width: '100%',
    textAlign: 'center',
    color: Colors.grey(),
    marginVertical: 15
  },
  labelPriceBig: {
    fontFamily: font2Bold,
    fontSize: 58,
    letterSpacing: 1,
    width: '100%',
    textAlign: 'center',
    color: Colors.grey()
  },
  labelPriceBigDevise: {
    fontFamily: font2Bold,
    fontSize: 16,
    letterSpacing: 1,
    color: Colors.grey()
  },
  hr: {
    marginVertical: 15
  },
  hrSmall: {
    height: 1
  },
  hrMedium: {
    height: 2
  },
  hrLarge: {
    height: 5
  },
  hrDefault: {
    backgroundColor: Colors.grey()
  },
  hrPrimary: {
    backgroundColor: Colors.primary()
  },
  SelectInput: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: Colors.grey(),
    borderRadius: 10,
    backgroundColor: Colors.grey(),
    padding: 0,
    textAlign: 'left',
    paddingTop: 6,
    paddingHorizontal: 12
  },
  SelectInputPlaceholder: {
    color: Colors.grey(),
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    height: '100%'
  },
  SelectInputText: {
    color: Colors.primary(),
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    height: '100%'
  },
  SelectInputContainer: {
    height: '100%',
    borderWidth: 0
  },
  SelectInputOptionsContainer: {
    backgroundColor: Colors.white()
  },
  SelectInputOptionsText: {
    color: Colors.grey(),
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 1
  },
  SelectInputCaret: {
    position: 'absolute',
    right: 17,
    top: 17,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: Colors.grey(),
    transform: [{ rotate: '-45deg' }],
    width: 10,
    height: 10
  },
  SelectInputCaretSelected: {
    borderColor: Colors.primary()
  },
  p: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: font1Regular,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.grey()
  },
  pTextJustify: {
    textAlign: 'justify'
  },
  pTextLeft: {
    textAlign: 'left'
  },
  centredModal: {
    backgroundColor: 'transparent'
  },
  modalChildrenContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white()
  },
  bottomModalContainer: {
    justifyContent: 'flex-end',
    margin: 0,

  },
  bottomModal: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'transparent'
  },
  modalCloseIconContainer: {
    alignItems: 'flex-end'
  },
  slider: {
    width: '100%'
  },
  sliderContainer: {
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  sliderThumb: {
    width: 24,
    height: 24,
    backgroundColor: Colors.primary(),
    borderRadius: 5
  },
  sliderValuesContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  cardShadow: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  cardContainer: {
    backgroundColor: Colors.white(),
    borderRadius: 16
  },

  headerContainer: {
    height: 87,
    backgroundColor: Colors.primary(),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    justifyContent: 'space-between'
  },
  headerScreenNameLabel: {
    backgroundColor: Colors.primary(),
    color: Colors.white(),
    fontFamily: font2Bold,
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 0.85,
    textAlign: "center"
  },
  headerSecondaryLabel: {
    color: Colors.white(),
    fontFamily: font1Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.85
  },
  hedearLeftIconContainer: {
    alignItems: 'flex-start',
    height: 87,
    justifyContent: "center"
  },
  hedearRightIconContainer: {
    paddingRight: 5,
    alignItems: 'flex-end',
    height: 87,
    justifyContent: "center"
  },
  hedearCenterContainer: {
    textAlign: "center"

  },
  paddingRow: {
    marginRight: -15,
    marginLeft: -15,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  col: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  UploadImageTextProfil: {
    color: Colors.grey(),
    fontFamily: font2Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 1,
    paddingTop: 12,
    textAlign: 'center'
  },
  iconRotate: {
    transform: [{ rotateX: '-180deg' }],
    marginRight: 20,
    marginTop: 25
  },
  iconRotate180: {
    transform: [{ rotateX: '0deg' }],
    marginTop: 25,
    marginRight: 20
  },
  collapsableView: {
    backgroundColor: Colors.white(),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  showRowResearchCategory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  elementCardView: {
    width: 150
  },
  btnLabelLeft: {
    fontFamily: font2Bold,
    letterSpacing: 1,
    textAlign: 'left',
    marginLeft: 30,
    fontSize: 14
  },
  btnIconLeft: {
    alignSelf: 'flex-start',
    position: 'absolute',
    marginLeft: 10
  },
  btnWithSvgThemeSecondary: {
    backgroundColor: Colors.white(),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row'
  },
  btnWithSvgThemePrimary: {
    backgroundColor: Colors.primary(),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row'
  },
  btnWithSvgTransparent: {
    backgroundColor: 'transparent',
    shadowRadius: 5
  },
  btnWithSvg: {
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    marginVertical: 5,
    justifyContent: 'space-between'
  },
  containerElementList: {
    height: 43,
    borderRadius: 10,
    backgroundColor: Colors.white(),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  elementListView: {
    flexDirection: 'row',
    width: '100%',
    height: 43
  },
  containerDescriptionElementList: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageListElement: {
    aspectRatio: 1.34,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  contactNameListElement: {
    fontFamily: font2Bold,
    fontWeight: '500',
    color: Colors.black(),
    marginHorizontal: 18,
    fontSize: 12,
    letterSpacing: 1
  },
  contactDescriptionListElement: {
    fontFamily: font2Medium,
    fontWeight: '400',
    color: Colors.grey(),
    marginVertical: 10,
    fontSize: 12,
    letterSpacing: 1
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalTitle: {
    color: Colors.black(),
    fontFamily: font1Bold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1
  },

  recommendedText: {
    position: 'relative',
    top: -17,
    zIndex: 5,
    left: 15,
    color: Colors.white(),
    fontFamily: font2Regular,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1
  },
  btnLabelLefTagged: {
    fontFamily: font2Bold,
    fontSize: 12,
    paddingLeft: 5
  },
  FontWhiteTag: {
    color: Colors.white()
  },
  FontBlackTag: {
    color: Colors.black()
  },
  StyleTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 31,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 12,
    marginLeft: 10
  },
  themeWhiteTag: {
    backgroundColor: Colors.white(),
    borderColor: Colors.grey(),
    borderWidth: 1
  },
  themePrimaryTag: {
    backgroundColor: Colors.primary()
  },
  TagContentStyle: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5
  },
  TagIconStyle: {
    marginRight: 10,
    marginLeft: 5,
    marginTop: 10
  },
  pricingCardHeaderRecommended: {
    position: 'absolute',
    top: 12,
    right: -20,
    height: 20
  },
  textLabelBtnSVG: {
    marginLeft: 21,
    marginTop: 5
  },
  subGroupStyle: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1,
    marginTop: 26,
    marginBottom: 20,
    width: '100%'
  },
  subGroupStyleColorGrey: {
    fontFamily: font2Regular,
    color: Colors.grey()
  },
  subGroupStyleColorBlack: {
    fontFamily: font2Bold,
    color: Colors.black()
  },
  TextInputLeftIcon: {
    position: 'absolute',
    top: 38,
    left: 16
  },
  txtDetailDocmument: {
    fontFamily: font2Bold,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 1,
    color: Colors.black(),
    marginLeft: 15,
  },
  txtPopOver: {
    fontFamily: font2Regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.77,
    color: Colors.black()
  },
  elementDocumentContainer: {
    minHeight: 65,
    backgroundColor: Colors.white(),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  popOverStyle: {
    borderRadius: 4,
    width: '90%',
    height: 136,
    backgroundColor: Colors.white(),
    marginTop: 4,
    borderColor: Colors.black(0.1),
    borderWidth: 0.5
  },
  popOverAutoComplteStyle: {
    borderRadius: 4,
    width: '100%',
    height: 136,
    backgroundColor: Colors.white(),
    borderColor: Colors.black(0.1),
    borderWidth: 0.5,
    zIndex: 10,
    position: 'absolute',
    top: 80,
    opacity: 1
  },
  arrowPopOver: {
    width: 0,
    height: 0,
  },
  containerSvgDocument: {
    height: 30,
    width: 30,
  },
  popOverMsgContainer: {
    height: 104,
    width: 145,
    borderRadius: 20
  },
  popOverContent: {
    marginTop: 24,
    marginLeft: 52
  }, containerImageElementCard: {
    aspectRatio: 1.44
  },

  uploadProfilStyle: {
    alignItems: "center"
  },
  backIconContainer: {
    height: 87,
    justifyContent: "center",
    width: "100%"
  },
  sliderMaxAndMinContainer: {
    height: 27,
    backgroundColor: Colors.grey(),
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  sliderMaxAndMinTxt: {
    color: Colors.grey(),
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  offerAdvantagesContainer: {
    height: 200,
    justifyContent: 'center'
  },
  outSideSafeAreaViewContainer: {
    backgroundColor: Colors.black(0.5),
    height: '50%',
    width: '100%',
    position: 'absolute',
    top: 0
  },
  containerTextElementDocument: {
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  btnCameraBackGround: {
    backgroundColor: Colors.black(),
    width: '100%',
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  containerImageDocument: {
    position: "absolute",
    top: 13,
    left: 15,
    width: 35,
    height: 39,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDocument: {
    flexDirection: 'row',
    paddingRight: 30,
    paddingLeft: 35,
  },
  containerOptionDocument: {
    position: "absolute",
    right: 0
  },
  btnPrimaryDisabled: {
    backgroundColor: Colors.white()
  },
  multiSelectOption: {
    flexDirection: 'row',
    padding: 16
  },
  multiSelectLabel: {
    paddingLeft: 8,
    paddingTop: 5
  },
  popOverStyleAutoComplete: {
    width: '90%',
    height: 220,
    marginTop: -77
  },
  popOverStyleAutoCompleteOptionContainer: {
    borderRadius: 4,
    width: '100%',
    height: 136,
    backgroundColor: Colors.white(),
    marginTop: 4,
    borderColor: Colors.black(0.1),
    borderWidth: 0.5


  },
  btnCloseModal: {
    backgroundColor: Colors.grey(),
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 8
  },
  datePickerPopOver: {
    width: '90%',
    borderWidth: 0.5,
    borderColor: Colors.black(0.3)
  },
  cardLabel: {

    marginTop: 5,
    color: Colors.black(0.3),
    fontFamily: lato,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 17,
    //textTransform: 'uppercase',

  }, cardIconRoundBackground: {
    height: 72,
    backgroundColor: Colors.seconday(),
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }, cardIcon: {
    height: 72,
    backgroundColor: Colors.greyBackground(),
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }, roundView: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: Colors.white(0.2),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionLabel: {

    marginVertical: 16,
    color: Colors.black(0.3),
    fontFamily: lato,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    textTransform: 'uppercase',

  },
  connectionTitle: {
    marginBottom:16,
    color: Colors.white(),
    fontFamily: lato,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center'
    //textTransform: 'uppercase',

  }, connectionText: {
    color: Colors.white(),
    fontFamily: lato,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    marginHorizontal: 25
  }, connectionContainer: {
    padding: 20,
  },

})

export default Style

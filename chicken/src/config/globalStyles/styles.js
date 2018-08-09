import colors from './colors';

const globalStyles = {
  bottomTabBarLabel: {
    fontFamily: 'Arial',
    fontSize: 11
  },
  buttonLabel: {
    backgroundColor: 'transparent',
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold'
  },
  calloutEmphasized: {
    color: colors.white,
    fontFamily: 'Times New Roman',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  calloutBig: {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 38,
    fontWeight: 'bold',
    lineHeight: 48,
    textAlign: 'center'
  },
  callout: {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34
  },
  link: {
    color: colors.red,
    fontFamily: 'Arial',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  modalNavigationHeaderTabLabel: {
    color: colors.modalNavigationHeaderTabActive,
    fontFamily: 'Arial',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalNavigationHeaderTitle: {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  navigationHeaderTitle: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainStatement: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center'
  }
};

export default globalStyles;

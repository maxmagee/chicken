import colors from './colors';

const globalStyles = {
  // Allows me to override the color of the modal navigation background and border color more easily
  getModalNavigationHeaderStyle: (color = colors.modalNavigationHeaderBackground) => ({
    backgroundColor: color,
    borderBottomColor: color
  }),
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
  modalNavigationHeaderTabBar: {
    backgroundColor: colors.modalNavigationHeaderBackground,
    marginTop: 0,
    paddingTop: 13,
    borderBottomColor: colors.white,
    borderStyle: 'solid',
    height: 39
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
  },
  regularSmallText: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 11,
    lineHeight: 16
  },
  smallTextButton: {
    color: colors.red,
    fontFamily: 'Arial',
    fontSize: 10,
    fontWeight: 'bold'
  },
  textInput: {
    label: {
      color: colors.inputLabelGray,
      fontFamily: 'Times New Roman',
      fontSize: 12,
      fontWeight: 'bold'
    },
    placeHolder: {
      color: colors.inputLabelGray,
      fontFamily: 'Times New Roman',
      fontSize: 13,
      fontWeight: 'bold'
    },
    text: {
      color: colors.darkGray,
      fontFamily: 'Arial',
      fontSize: 15,
      fontWeight: 'bold'
    },
    container: {
      borderBottomColor: colors.gray,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      height: 26 // tweak this as needed
    }
  }
};

export default globalStyles;

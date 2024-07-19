import {Platform} from 'react-native';

export const fontFamilies = {
  Inter: {
    thin: Platform.OS === 'ios' ? 'Inter-Thin' : 'InterThin',
    light: Platform.OS === 'ios' ? 'Inter-Light' : 'InterLight',
    extraLight: Platform.OS === 'ios' ? 'Inter-ExtraLight' : 'InterExtraLight',
    regular: Platform.OS === 'ios' ? 'Inter-Regular' : 'InterRegular',
    medium: Platform.OS === 'ios' ? 'Inter-Medium' : 'InterMedium',
    semiBold: Platform.OS === 'ios' ? 'Inter-SemiBold' : 'InterSemiBold',
    bold: Platform.OS === 'ios' ? 'Inter-Bold' : 'InterBold',
    extraBold: Platform.OS === 'ios' ? 'Inter-ExtraBold' : 'InterExtraBold',
    black: Platform.OS === 'ios' ? 'Inter-Black' : 'InterBlack',
  },
};

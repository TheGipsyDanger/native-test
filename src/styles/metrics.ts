import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import normalize from '../utils/sizeHelper';

export const metrics = {
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
  windownWidth: Dimensions.get('window').width,
  windownHeight: Dimensions.get('window').height,
  defaultSpace: (multiplier = 1) => normalize(8 * multiplier),
  header: isIphoneX() ? 44 + getStatusBarHeight() : 44,
  normalize: normalize,
};

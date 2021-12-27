import { IWrappedProps } from '~/utils';

export interface IWrapped extends IWrappedProps {
  shadow?: string;
  testID?: string;
  center?: boolean;
  onPress?(): void;
  activeOpacity?: number;
}

export interface IWrappedLayout extends IWrapped {}

import { IWrappedProps, IFont, IFontSize } from '~/utils';

export interface IButton extends IWrappedProps {
  font: IFont;
  fontSize: IFontSize;
  textColor: string;
  title: string;
  onPress(): void;
}

export interface IButtonLayout extends IButton {}

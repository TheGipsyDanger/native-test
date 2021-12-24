export type IModalType = { [key: string]: JSX.Element };
export type IInsets = { top: number; bottom: number };
export type IStringMap = { [key: string]: string };
export type StringToNumberMap = { [key: string]: number };
export type ListViewType = 'grid' | 'list';
export type withChildren<T = {}> = T & { children?: React.ReactNode };

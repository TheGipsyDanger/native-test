//@ts-nocheck
import * as React from 'react';

import { IInputLayout } from '~/components/Basics/Input/data';

import S from './styles';

export const Input = ({
  type,
  disabled,
  onChange,
  autoFocus,
  forwardRef,
  handleValue,
  handleChange,
  color = 'TEXT',
  font = 'regular',
  size = 'default',
  ...props
}: IInputLayout) => {
  return (
    <S.Input
      {...props}
      ref={forwardRef}
      font={font}
      autoFocus={autoFocus}
      color={color}
      size={size}
      value={handleValue}
      editable={!disabled}
      onChangeText={handleChange}
      returnKeyType={'next'}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      keyboardType={type === 'number' ? 'numeric' : undefined}
      secureTextEntry={type === 'password'}
      opacity={disabled ? 0.5 : 1}
    />
  );
};

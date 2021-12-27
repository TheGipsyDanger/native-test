import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IButtonLayout } from '~/components/Button/data';

export const Button = ({
  title,
  font,
  fontSize,
  textColor,
  ...props
}: IButtonLayout) => (
  <Wrapped {...props} borderRadius="Circle" center testID={`Button`}>
    <Text
      {...{ font, size: fontSize, color: textColor }}
      testID={`ButtonTitle`}>
      {title}
    </Text>
  </Wrapped>
);

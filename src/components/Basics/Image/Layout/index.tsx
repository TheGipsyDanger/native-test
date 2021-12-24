import * as React from "react";

import { Wrapped } from "~/components/Basics/Wrapped";

import { IImageLayout } from "~/components/Basics/Image/data";

import S from "./styles";

export const Image = ({ uri, ...props }: IImageLayout) => (
  <Wrapped overflow="hidden" {...props}>
    <S.Image resizeMode="cover" source={{ uri }} />
  </Wrapped>
);

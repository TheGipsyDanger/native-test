import * as React from "react";

import { IImage } from "~/components/Basics/Image/data";
import { Image as Layout } from "./Layout";

export const Image = (props: IImage) => <Layout {...props} />;

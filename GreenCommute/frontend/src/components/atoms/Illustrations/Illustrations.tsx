import * as React from 'react';
import { imageTypes } from '../../../theme';

interface IllustrationProps {
  name: imageTypes;
  height: string;
  width: string;
  borderRadius?: string;
}
function Illustration({
  name,
  height,
  width,
  borderRadius
}: IllustrationProps) {
  return (
    <img
      src={`/images/${name}.svg`}
      test-id="illustrations"
      style={{ height: height, width: width, borderRadius: borderRadius }}
    ></img>
  );
}

export default Illustration;

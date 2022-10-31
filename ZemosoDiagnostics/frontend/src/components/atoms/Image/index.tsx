import Box from '@mui/material/Box';
import React from 'react';
import { IMAGES } from '../../../utils/Constants';
import { ImagePropsType } from '../../../utils/Types';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Image = ({ name, ...props }: ImagePropsType) => {
  return (
    <Box {...props} data-testid={`${name}-image`}>
      {IMAGES[name]}
    </Box>
  );
};

export default Image;

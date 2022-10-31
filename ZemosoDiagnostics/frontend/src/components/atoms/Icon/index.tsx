/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import { SvgIcon } from '@mui/material';
import React from 'react';
import { ICONS } from '../../../utils/Constants';
import { IconPropsType } from '../../../utils/Types';

const Icon = ({ name, ...props }: IconPropsType) => {
  return (
    <SvgIcon {...props} data-testid={`${name}-icon`}>
      {ICONS[name]}
    </SvgIcon>
  );
};

export default Icon;

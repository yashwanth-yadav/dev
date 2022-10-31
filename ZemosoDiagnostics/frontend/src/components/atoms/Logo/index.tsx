/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */
import * as React from 'react';
import { LOGOS } from '../../../utils/Constants';
import { LogoPropsType } from '../../../utils/Types';

const Logo = ({ name, ...props }: LogoPropsType) => {
  return (
    <span {...props} data-testid={`${name}-logo`}>
      {LOGOS[name]}
    </span>
  );
};

export default Logo;

import React from 'react';
import { SignUp } from '../../components/organisms/SignUp';
import AuthenticationTemplate from '../../components/templates/AuthenticationTemplate';

export const SignUpPage = () => {
  return <AuthenticationTemplate mainComponent={<SignUp />} />;
};

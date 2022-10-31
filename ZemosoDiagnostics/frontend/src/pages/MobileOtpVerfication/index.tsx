import React from 'react';
import { MobileForm } from '../../components/organisms/MobileForm';
import { OtpForm } from '../../components/organisms/OtpForm';
import AuthenticationTemplate from '../../components/templates/AuthenticationTemplate';
import { UserPropsType } from '../../utils/Types';
import { UserService } from '../../ApiService/UserService';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const MobileOtpVerification = () => {
  const [showForm, setShowForm] =
    React.useState<'mobileForm' | 'otpForm'>('mobileForm');

  const handleForm = (form: 'mobileForm' | 'otpForm') => {
    setShowForm(form);
  };

  const { user } = useAuth0();

  const navigate = useNavigate();

  const loadUsers = async () => {
    const users: UserPropsType[] = await UserService.getUsers();

    if (users.find((userItem) => userItem.userId === user?.sub)) {
      navigate('/');
    }
  };

  React.useEffect(() => {
    loadUsers();
  });

  if (showForm === 'otpForm')
    return <AuthenticationTemplate mainComponent={<OtpForm />} />;

  return (
    <AuthenticationTemplate
      mainComponent={<MobileForm handleForm={handleForm} />}
    />
  );
};

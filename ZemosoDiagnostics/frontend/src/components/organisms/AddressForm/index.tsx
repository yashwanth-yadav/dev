import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ADD_ADDRESS } from '../../../utils/Messages';
import { AddressFormProps } from '../../../utils/Types';
import InputField from '../../molecules/InputField';

interface Props {
  address: AddressFormProps;
  setAddress: React.Dispatch<React.SetStateAction<AddressFormProps>>;
}

const AddressForm = ({ address, setAddress }: Props) => {
  return (
    <Stack direction="column" gap="22px" width="535px">
      <Typography variant="subtitle1" sx={{ mb: '32px' }}>
        {ADD_ADDRESS}
      </Typography>
      <InputField
        label={'House/ Flat/ Block No.'}
        placeholder={'2235 California Street APT 021'}
        handleChange={(value: string) =>
          setAddress({ ...address, houseNumber: value })
        }
      />
      <InputField
        label={'Road / Area'}
        placeholder={'Mountain View California'}
        handleChange={(value: string) =>
          setAddress({ ...address, roadOrArea: value })
        }
      />
      <InputField
        label={'Zipcode'}
        placeholder={'11023'}
        handleChange={(value: string) =>
          setAddress({ ...address, zipCode: value })
        }
      />
      <InputField
        label={'City, State'}
        placeholder={'Mountain View ,California'}
        handleChange={(value: string) =>
          setAddress({ ...address, cityOrState: value })
        }
      />
    </Stack>
  );
};

export default AddressForm;

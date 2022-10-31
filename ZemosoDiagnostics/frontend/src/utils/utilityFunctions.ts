

export const handleText = (
  step: number,
  isLabs: boolean,
  isPatients: boolean,
  address: any,
  isSelectAddress: boolean
) => {
  switch (step) {
    case 0:
      return 'Select Date & Time';

    case 1:
      if (isLabs) {
        return 'Add Address';
      } else {
        return 'Add Patient';
      }

    case 2:
      if (isLabs) {
        if (address.length === 0 || !isSelectAddress) {
          return 'Save Address';
        }
        return 'Next';
      } else if (!isPatients) {
        return 'Next';
      } else {
        return 'Select Lab';
      }

    case 3:
      return 'Continue';
    case 4:
      return "Pay Now";
  }
};





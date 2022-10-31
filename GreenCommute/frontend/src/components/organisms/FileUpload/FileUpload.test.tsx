import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import FileUpload from './FIleUpload';

test('checks whether component renders', () => {
  render(
    <FileUpload
      open={true}
      setFileUploadOpen={() => console.log('File upload logic')}
    />
  );

  const element = screen.getByText('File Upload');
  expect(element).toBeInTheDocument();
});

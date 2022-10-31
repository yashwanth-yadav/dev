import * as React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Button from '.'

test('renders an button with text click', () => {
    render(<Button>click</Button>);
});

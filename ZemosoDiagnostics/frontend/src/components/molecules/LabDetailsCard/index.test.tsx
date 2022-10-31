import React from 'react';
import LabDetailsCard from '.';
import { render, screen } from '@testing-library/react';
import { LAB_DETAILS } from '../../../utils/Constants';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

describe('Lab Details Card', () => {
  test('renders LabelDetailsCard', () => {
    render(<LabDetailsCard lab={LAB_DETAILS} selected={false} />);
    expect(screen.getByText('4 Slots Available')).toBeInTheDocument();
  });
  test('checks selected LabelDetailsCard', () => {
    render(<LabDetailsCard lab={LAB_DETAILS} selected={true} />);
    expect(screen.getByText('Reports ready in 24 hrs')).toBeInTheDocument();
  });
});

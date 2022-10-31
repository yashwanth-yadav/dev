import React from 'react';
import { FaqList } from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('FaqList', () => {
  test('renders FaqList', () => {
    render(<FaqList />);
    expect(screen.getByTestId('faq-list')).toBeInTheDocument();
  });
});

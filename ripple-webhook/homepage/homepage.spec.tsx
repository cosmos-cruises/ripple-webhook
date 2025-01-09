import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomepage } from './homepage.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicHomepage />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

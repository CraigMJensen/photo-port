import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('contact form renders', () => {
  it('Contact renders', () => {
    render(<Contact />);
  });

  it('testId renders', () => {
    const { getByTestId } = render(<Contact />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1')).toHaveTextContent('Contact me');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

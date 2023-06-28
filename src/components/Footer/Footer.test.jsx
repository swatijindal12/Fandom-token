import * as React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer test cases', () => {

  it('renders Footer component', () => {
    render(
      <Footer />
    );
  });

  it('check footer content', () => {
    const { getByTestId } = render(
      <Footer />
    );
    const dataElement = getByTestId('main-content');
    expect(dataElement).toBeInTheDocument();
  })

  it('check footer content company name', () => {
    const { getByTestId } = render(
      <Footer />
    );
    const dataElement = getByTestId('company-name');
    expect(dataElement).toBeInTheDocument();
  })

});
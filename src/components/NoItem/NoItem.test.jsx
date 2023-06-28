import * as React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import NoItem from './NoItem';

describe('No Item test cases', () => {

  it('renders No Item component', () => {
    render(
      <NoItem
        heading="Test heading"
        content="Test content"
      />
    );
  });

  it('checks props heading text', () => {
    render(
      <NoItem
        heading="Test heading"
        content="Test content"
      />
    );
    // regular expression with ignore case
    const headingElement = screen.getByText(/test heading/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('checks props content text', () => {
    render(
      <NoItem
        heading="Test heading"
        content="Test content"
      />
    );
    // regular expression with ignore case
    const headingElement = screen.getByText("Test content");
    expect(headingElement).toBeInTheDocument();
  });

});
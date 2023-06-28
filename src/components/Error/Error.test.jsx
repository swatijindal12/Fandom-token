import * as React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Error from './Error';

describe('Error test cases', () => {

  it('renders Error component', () => {
    render(
      <Error />
    );
  });

});
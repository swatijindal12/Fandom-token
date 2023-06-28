import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

let handleButtonMock = jest.fn();

describe('Modal test cases', () => {

  it('renders Modal component', () => {
    render(
      <Modal
        setIsModalOpen={true}
        heading="Test heading"
        description="Test description"
        isButtonEnabled={true}
      />
    );
  });

  it('checks props heading text', () => {
    render(
      <Modal
        setIsModalOpen={true}
        heading="Test heading"
        description="Test description"
        isButtonEnabled={true}
      />
    );
    // regular expression with ignore case
    const headingElement = screen.getByText(/test heading/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('checks props description text', () => {
    render(
      <Modal
        setIsModalOpen={true}
        heading="Test heading"
        description="Test description"
        isButtonEnabled={true}
      />
    );
    const headingElement = screen.getByText("Test description");
    expect(headingElement).toBeInTheDocument();
  });

  it('checks props button text', () => {
    render(
      <Modal
        setIsModalOpen={true}
        heading="Test heading"
        description="Test description"
        isButtonEnabled={true}
      />
    );
    const headingElement = screen.getByText(/OK/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('checks modal method to close modal by click on OK button', async () => {
    const { getByTestId } = render(<Modal
      setIsModalOpen={handleButtonMock}
      heading="Test heading"
      description="Test description"
      isButtonEnabled={true}
      errors={{}}
    />);

    fireEvent.click(getByTestId('action-btn'));
    expect(handleButtonMock).toBeCalled();
  });

  it('checks modal method to close modal', async () => {
    const { getByTestId } = render(<Modal
      setIsModalOpen={handleButtonMock}
      heading="Test heading"
      description="Test description"
      isButtonEnabled={true}
      errors={{}}
    />);

    fireEvent.click(getByTestId('close-btn'));
    expect(handleButtonMock).toBeCalled();
  });

  it('checks modal having loader', async () => {
    const { getByTestId } = render(<Modal
      setIsModalOpen={true}
      heading="Test heading"
      description="Test description"
      isButtonEnabled={false}
      errors={{}}
    />);

    const loader = getByTestId('loader')
    expect(loader).toBeInTheDocument();
  });

});
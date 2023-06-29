import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react';
import NetworkModal from './NetworkModal';

let handleButtonMock = jest.fn();

// mock network data list
const networkData = [
  { id: 1, name: "Ethereum" },
  { id: 2, name: "Polygon" },
  { id: 3, name: "Avalanche" }
];

// custom render method to utilize again and again
const renderComp = () => {
  return render(
    <NetworkModal
      setIsNetworkModalOpen={handleButtonMock}
      data={networkData}
      setModalHeading={handleButtonMock}
      setModalDescription={handleButtonMock}
      setModalButtonEnabled={handleButtonMock}
      setIsModalOpen={handleButtonMock}
      setNetworkSelected={handleButtonMock}
      setWalletEthBalance={handleButtonMock}
      setChainConfig={handleButtonMock}
      setWalletConnected={handleButtonMock}
      setIsChainSupported={handleButtonMock}
      walletConnected={0x00}
      setWeb3={handleButtonMock}
    />
  );
}

describe('Network Modal test cases', () => {

  it('renders Network Modal component', () => {
    renderComp();
  });

  it('checks close network modal method to close modal', async () => {
    const { getByTestId } = renderComp();
    fireEvent.click(getByTestId('ntwrk-close'));
    expect(handleButtonMock).toBeCalled();
  });

  it('checks close modal by cross icon click', async () => {
    const { getByTestId } = renderComp();
    const check = fireEvent.click(getByTestId('cross-close'));
    expect(check).toBe(true);
  });

  it('checks click on select network from the list', async () => {
    const { getByTestId } = renderComp();
    const check = fireEvent.click(getByTestId('select-ntwrk-1'));
    expect(check).toBe(true);
  });

});
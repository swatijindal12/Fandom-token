import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import PriceModal from './PriceModal';
import { MyContext } from '../App/App';

// mock function for testing
let handleButtonMock = jest.fn();

// functions to pass as context api data
const setWeb3 = () => { };
const setIsModalOpen = () => { };
const setModalHeading = () => { };
const setModalDescription = () => { };
const setModalButtonEnabled = () => { };

// object to wrap all function
const contextObjValue = {
  setIsModalOpen: setIsModalOpen,
  setModalButtonEnabled: setModalButtonEnabled,
  setModalDescription: setModalDescription,
  setModalHeading: setModalHeading
};

// custome nft data for testing
const nftData = { nftId: 1, amount: 0.005 };

describe('PriceModal test cases', () => {

  it('renders PriceModal component', () => {
    render(
      <MyContext.Provider value={setWeb3}>
        <PriceModal
          listPrice={0.0025}
          setShowPricePopup={true}
          nftData={nftData}
        />
      </MyContext.Provider>
    );
  });

  it('checks heading content', () => {
    render(
      <MyContext.Provider value={setWeb3}>
        <PriceModal
          listPrice={0.0025}
          setShowPricePopup={true}
          nftData={nftData}
        />
      </MyContext.Provider>
    );
    const dataElement = screen.getByText("Sell Confirmation");
    expect(dataElement).toBeInTheDocument();
  });

  it('checks nft price content', () => {
    render(
      <MyContext.Provider value={setWeb3}>
        <PriceModal
          listPrice={0.0025}
          setShowPricePopup={true}
          nftData={nftData}
        />
      </MyContext.Provider>
    );
    const dataElement = screen.getByText(/NFT Price/i);
    expect(dataElement).toBeInTheDocument();
  });

  it('checks on change nft price in input box', () => {
    const { getByTestId } = render(
      <MyContext.Provider value={setWeb3}>
        <PriceModal
          listPrice={0.0025}
          setShowPricePopup={true}
          nftData={nftData}
        />
      </MyContext.Provider>
    );
    const check = fireEvent.change(getByTestId('price'));
    expect(check).toBe(true);
  });

  it('checks click on price confirm button', () => {
    const { getByTestId } = render(
      <MyContext.Provider value={contextObjValue}>
        <PriceModal
          listPrice={0.0025}
          setShowPricePopup={handleButtonMock}
          nftData={nftData}
        />
      </MyContext.Provider>
    );
    const check = fireEvent.click(getByTestId('price-confirm'));
    expect(check).toBe(true);
  });

  it('checks click on price cancel button', () => {
    const { getByTestId } = render(
      <MyContext.Provider value={contextObjValue}>
        <PriceModal
          listPrice={0.0025}
          setShowPricePopup={handleButtonMock}
          nftData={nftData}
        />
      </MyContext.Provider>
    );
    const check = fireEvent.click(getByTestId('price-cancel'));
    expect(check).toBe(true);
  });

});
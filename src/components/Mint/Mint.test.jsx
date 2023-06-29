import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, getByPlaceholderText, getByTestId, render } from '@testing-library/react';
import Mint from './Mint';
import { MyContext } from '../App/App';
import { BrowserRouter } from 'react-router-dom';

global.d = null;

jest.mock('web3', async (data) => { global.d = data });

// functions to pass as context api data
const web3 = d;
const isMetamaskPresent = true;
const walletConnected = "0x00";
const walletEthBalance = "0.2";
const isChainSupported = true;
const chainConfig = null;
const networkSelected = "Ethereum";
const networkList = [
  { id: 1, name: "Ethereum" },
  { id: 2, name: "Polygon" },
  { id: 3, name: "Avalanche" }
];
const setChainConfig = () => { };
const setIsNetworkModalOpen = () => { };
const setNetworkSelected = () => { };
const setMarketplaceContract = () => { };
const setNftContract = () => { };
const setWalletEthBalance = () => { };
const setIsChainSupported = () => { };
const setWalletConnected = () => { };
const setIsMetamaskPresent = () => { };
const setWeb3 = () => { };
const setIsModalOpen = () => { };
const setModalHeading = () => { };
const setModalDescription = () => { };
const setModalButtonEnabled = () => { };

// object to wrap all function
const contextObjValue = {
  web3: web3,
  isMetamaskPresent: isMetamaskPresent,
  walletConnected: walletConnected,
  walletEthBalance: walletEthBalance,
  isChainSupported: isChainSupported,
  chainConfig: chainConfig,
  networkSelected: networkSelected,
  networkList: networkList,
  setWeb3: setWeb3,
  setIsModalOpen: setIsModalOpen,
  setModalButtonEnabled: setModalButtonEnabled,
  setModalDescription: setModalDescription,
  setModalHeading: setModalHeading,
  setChainConfig: setChainConfig,
  setIsNetworkModalOpen: setIsNetworkModalOpen,
  setNetworkSelected: setNetworkSelected,
  setMarketplaceContract: setMarketplaceContract,
  setNftContract: setNftContract,
  setWalletEthBalance: setWalletEthBalance,
  setIsChainSupported: setIsChainSupported,
  setWalletConnected: setWalletConnected,
  setIsMetamaskPresent: setIsMetamaskPresent
};

describe('Mint test cases', () => {

  it('renders Mint component', () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );
  });

  it('fetch Create NFT text', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const data = getByTestId("create-nft");
    expect(data).toBeInTheDocument();
  });

  it('fetch Create NFT page description text', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const data = getByTestId("create-details");
    expect(data).toBeInTheDocument();
  });

  it('fetch Create NFT form name placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-name');
    expect(element.placeholder).toBe("NFT Name");
  });

  it('fetch Create NFT form description placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-description');
    expect(element.placeholder).toBe("NFT Description");
  });

  it('fetch Create NFT form description placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-description');
    expect(element.placeholder).toBe("NFT Description");
  });

  it('fetch Create NFT form quantity placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-quantity');
    expect(element.placeholder).toBe("1");
  });

  it('fetch Create NFT form maximum quantity value', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-max-quan');
    expect(element.value).toBe("100");
  });

  it('fetch Create NFT form rarity placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-rarity');
    expect(element.placeholder).toBe("1");
  });

  it('fetch Create NFT form maximum rarity value', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-max-rarity');
    expect(element.value).toBe("10");
  });

  it('fetch Create NFT form action placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-action');
    expect(element.placeholder).toBe("1");
  });

  it('fetch Create NFT form comedy placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-comedy');
    expect(element.placeholder).toBe("1");
  });

  it('fetch Create NFT form beauty placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-beauty');
    expect(element.placeholder).toBe("1");
  });

  it('fetch Create NFT form style placeholder', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-style');
    expect(element.placeholder).toBe("1");
  });

  it('fetch Create NFT form maximum action value', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-max-action');
    expect(element.value).toBe("10");
  });

  it('fetch Create NFT form maximum comedy value', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-max-comedy');
    expect(element.value).toBe("10");
  });

  it('fetch Create NFT form maximum beauty value', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-max-beauty');
    expect(element.value).toBe("10");
  });

  it('fetch Create NFT form maximum style value', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint />
        </MyContext.Provider>
      </BrowserRouter>
    );

    const element = getByTestId('create-nft-max-style');
    expect(element.value).toBe("10");
  });

  it('check Create NFT form submit', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Mint handleSubmit={handleSubmit} />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const check = fireEvent.click(getByTestId("submit"));
    expect(check).toBe(true);
  });

});
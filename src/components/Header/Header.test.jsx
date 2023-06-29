import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { MyContext } from '../App/App';
import { BrowserRouter } from 'react-router-dom';

global.d = null;

jest.mock('web3', async(data) => { global.d = data});

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

describe('Header test cases', () => {

  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
  });

  it('checks connect wallet button text', async () => {
    contextObjValue.walletConnected = null;
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const textElement = screen.getAllByText("Connect Wallet");
    expect(textElement.length).toBe(2);
  });

  it('checks wallet address text', async () => {
    contextObjValue.walletConnected = "0x00";
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const textElement = screen.getAllByText(/0x00...0x00/i);
    expect(textElement.length).toBe(2);
  });

  it('checks click on connect button', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const check = fireEvent.click(getByTestId("con-wal-btn"));
    expect(check).toBe(true);
  });

  it('checks home button link', async () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const element = screen.getAllByTitle("home-btn");
    expect(element[0]).toHaveAttribute('href', '/')
  });

  it('checks dashboard button link', async () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const element = screen.getAllByTitle("dashboard-btn");
    expect(element[0]).toHaveAttribute('href', '/dashboard')
  });

  it('checks mint button link', async () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const element = screen.getAllByTitle("mint-btn");
    expect(element[0]).toHaveAttribute('href', '/mint')
  });

  it('checks buy button link', async () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const element = screen.getAllByTitle("buy-btn");
    expect(element[0]).toHaveAttribute('href', '/buy')
  });

  it('checks sell button link', async () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={contextObjValue}>
          <Header />
        </MyContext.Provider>
      </BrowserRouter>
    );
    const element = screen.getAllByTitle("sell-btn");
    expect(element[0]).toHaveAttribute('href', '/sell')
  });

});
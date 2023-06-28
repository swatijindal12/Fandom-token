import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import { MyContext } from '../App/App';

const setWeb3 = () => { };
const setIsNetworkModalOpen = () => { };

describe('Home test cases', () => {

  it('renders Home component', () => {
    render(
      <MyContext.Provider value={setWeb3}>
        < Home />
      </MyContext.Provider>
    );
  });

  it('checks button -> Connect Wallet', () => {
    const { queryByTestId } = render(
      <MyContext.Provider value={setWeb3}>
        < Home />
      </MyContext.Provider>
    );
    const buttonElement = queryByTestId('connect-wal-btn');
    expect(buttonElement).toBeInTheDocument();
  });

  it('checks home page content', () => {
    render(
      <MyContext.Provider value={setWeb3}>
        < Home />
      </MyContext.Provider>
    );
    const textElement = screen.queryByText('Discover and collect your favourite digital NFTs');
    expect(textElement).toBeInTheDocument();
  });

  it('checks connect button click method', async () => {
    const obj = { setIsNetworkModalOpen: setIsNetworkModalOpen }
    const { getByTestId } = render(
      <MyContext.Provider value={obj}>
        < Home />
      </MyContext.Provider>
    );

    const data = fireEvent.click(getByTestId('connect-wal-btn'));
    expect(data).toBe(true);
  });

});
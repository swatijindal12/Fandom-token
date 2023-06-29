import * as React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, getByTitle, render, screen } from '@testing-library/react';
import Detail from './Detail';
import { MyContext } from '../App/App';
import { BrowserRouter } from 'react-router-dom';

const nft_data = [
  {
    nftId: 1,
    name: "NFT 1",
    description: "NFT 1 description",
    uri: "https://test/1",
    attributes: [
      {
        "trait_type": "confidence",
        "value": "Top level"
      },
      {
        "trait_type": "energy_level",
        "value": "Hot"
      }
    ]
  },
  {
    nftId: 2,
    name: "NFT 2",
    description: "NFT 2 description",
    uri: "https://test/2",
    attributes: [
      {
        "trait_type": "personality",
        "value": "Dashing"
      },
      {
        "trait_type": "behavior",
        "value": "Polite"
      }
    ]
  }
];

const setshowDetail = () => { };

describe('Detail test cases', () => {

  it('renders Detail component', () => {
    render(
      <Detail />
    );
  });

  // it('check NFT Metadata details text', () => {
  //   const { getByTestId } = render(
  //     <Detail setshowDetail={setshowDetail} metadata={nft_data} />
  //   );
  //   const check = fireEvent.click(getByTestId("hand-cls-btn"));
  //   expect(check).toBe(true);
  // });


});
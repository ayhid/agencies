import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, waitForElementToBeRemoved, wait } from '@testing-library/react';
import selectEvent from 'react-select-event'

import React from 'react';
import App from './App';
import { findAllAgencies } from './lib/api';
jest.mock('./lib/api');






describe('agencies test suite', () => {
  test('findAllAgencies', async () => {
    const agencies = await findAllAgencies();
    expect(agencies).toBeInstanceOf(Array);
    expect(agencies.length).toBe(8);

  })
  test('renders loading message', async() => {
    render(<App />);
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/chargement/i))
  });
  test('renders select agencies component', async () => {
    render(<App />);
    await waitFor(() => screen.getAllByTestId('agencies-selector'))

  });
  test('does not render selected agency component intitially', async () => {
    const { queryByTestId } = render(<App />);
    await waitFor(() => screen.getAllByTestId('agencies-selector'));
    expect(queryByTestId(/selected-agency/i)).toBeNull();
  })
  test('select agencies components loads with no selected agency first', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => screen.getAllByTestId('agencies-selector'));
    expect(getByTestId('agencies-selector')).toHaveFormValues({ agency: '' })
  })
  /**
   * Todo finish select component testing
   */
  test('select an agency triggers the display of select agency block', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => screen.getAllByTestId('agencies-selector'));
    // await waitForElementToBe(() => screen.getByText(/chargement/i))
    // await selectEvent.select(getByTestId('agencies-selector-label'), 'Fleury GIE');
  })
})

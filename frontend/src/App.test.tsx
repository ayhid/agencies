import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import App from './App';
import { findAllAgencies } from './lib/api';


jest.mock('./lib/api');

jest.mock("react-select", () => ({ options, value, onChange }) => {
  
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value
    );
    onChange(option);
  }
  return (
    <select data-testid="select" value={value === null ? '' : value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option data-testid={`option-${value}`} key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

const persistedValue = { label: "Agence Strasbourg", value: "Agence Strasbourg", "name": "Agence Strasbourg", manager: "Bruno Brassard", activity: "Climatisation" };


describe('agencies test suite', () => {
  test('findAllAgencies', async () => {
    const agencies = await findAllAgencies();
    expect(agencies).toBeInstanceOf(Array);
    expect(agencies.length).toBe(8);

  })
  test('renders loading message', async () => {
    render(<App />);
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/chargement/i));
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
    expect(getByTestId('agencies-selector')).toHaveFormValues({})
  })
  test('select agencies loads 5 entries', async () => {
    const { getAllByTestId } = render(<App />);
    await waitFor(() => screen.getAllByTestId('agencies-selector'));
    expect(getAllByTestId(/option-/i).length).toBe(5);
  })

  test('select an agency triggers the display of select agency block and local storage persist', async () => {
    const { getByTestId } = render(<App />);
    const valueToSelect = "Agence Strasbourg"
    await waitFor(() => getByTestId('agencies-selector'));
    fireEvent.change(getByTestId("select"), {
      target: { value: valueToSelect },
    });

    expect(getByTestId('selected-agency-container')).toBeInTheDocument();
    expect(getByTestId('selected-agency-container')).toHaveTextContent(valueToSelect);
    expect(localStorage.getItem('selectedAgency')).toBe(JSON.stringify(persistedValue));
  })
  test('select list should load with persisted value', async () => {
    localStorage.setItem('selectedAgency', JSON.stringify(persistedValue));
    const { getByTestId } = render(<App />);
    const expectedValue = "Agence Strasbourg"
    await waitFor(() => getByTestId('agencies-selector'));


    expect(getByTestId('selected-agency-container')).toBeInTheDocument();
    expect(getByTestId('selected-agency-container')).toHaveTextContent(expectedValue);
    expect(localStorage.getItem('selectedAgency')).toBe(JSON.stringify(persistedValue));
  })
})

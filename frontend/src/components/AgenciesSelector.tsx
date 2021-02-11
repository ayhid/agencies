import React from 'react';
import Select from 'react-select'
import { AgencyOption } from '../interfaces/agency';

;



const AgenciesSelector: React.FC<{
  options: AgencyOption[],
  handleOnChange: (selectedAgency: AgencyOption | null) => void;
}> = ({ handleOnChange, options }) => {
  return (
    <Select
      placeholder="Selectionner un agence"
      data-testid="agencies-selector"
      defaultOptions
      isClearable
      options={options}
      onChange={(selectedAgency) => {
        handleOnChange(selectedAgency);
      }}
    />

  );
};

export default AgenciesSelector;

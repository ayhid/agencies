import React from 'react';
import Select from 'react-select'
import { SelectComponentsProps } from 'react-select/src/Select';
import { AgencyOption } from '../interfaces/agency';

const AgenciesSelector: React.FC<{
  options: AgencyOption[],
  handleOnChange: (selectedAgency: AgencyOption | null) => void;
  limit: number
} & SelectComponentsProps> = ({ handleOnChange, options, limit=0, value }) => {
  const limitedOptions = limit? options.slice(0,limit):options;
  return (
    <form className="agencies-selector" data-testid="agencies-selector">
      <label htmlFor="agencies" data-testid="agencies-selector-label">Agences</label>
      <Select
        name="agency"
        placeholder="Selectionner un agence"
        inputId="agencies"
        isClearable
        value={value}
        options={limitedOptions}
        onChange={(selectedAgency) => {
          handleOnChange(selectedAgency);
        }}
      />
    </form>

  );
};

export default AgenciesSelector;

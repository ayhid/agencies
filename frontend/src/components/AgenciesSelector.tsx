import React from 'react';
import AsyncSelect from 'react-select/async';
import { AgencyOption } from '../interfaces/agency';
import api from '../lib/api';

const agenciesOptions = (inputValue:string): Promise<AgencyOption[]> =>{
  return api.get('/agencies').then(({data})=>{
    return data.map((agency: any)=>({
      label: agency.name,
      value: agency.name,
    }))
  })
}

const AgenciesSelector:React.FC<{
  handleOnChange: (selectedAgency:AgencyOption|null)=>void;
}> = ({handleOnChange}) => {
  return (
    <div>
      <AsyncSelect
       cacheOptions
       defaultOptions
       loadOptions={agenciesOptions}
       onChange={(selectedAgency)=>{
         handleOnChange(selectedAgency);
       }}
      />
    </div>
  );
};

export default AgenciesSelector;

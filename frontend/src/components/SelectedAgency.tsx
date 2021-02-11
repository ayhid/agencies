import React from 'react';
import { AgencyOption } from '../interfaces/agency';

const SelectedAgency: React.FC<{ agency: AgencyOption | null }> = ({ agency }) => {
  return (
    <div data-testid="selected-agency">
      {agency ? <div className="selected-agency">
        Votre agence: <strong>{`${agency.name}`}</strong>
        <ul>
          <li>Responsable: {agency.manager}</li>
          <li>Activité: {agency.activity}</li>
        </ul>
      </div> : (<></>)
      }
    </div>
  );
};

export default SelectedAgency;

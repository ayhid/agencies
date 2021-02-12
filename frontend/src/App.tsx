import React, { useEffect, useState } from 'react';
import './App.scss';
import AgenciesSelector from './components/AgenciesSelector';
// import api from './lib/api';
import Card from './components/Card';
import Loading from './components/Loading';
// import AgenciesSelector from './components/AgenciesSelector';
import SelectedAgency from './components/SelectedAgency';
import { AgencyOption } from './interfaces/agency';
import { findAllAgencies } from './lib/api';

function App() {
  const [selectedAgency, setSelectedAgency] = useState<AgencyOption | null>(null);
  const [agenciesList, setAgenciesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;
    const fetchAgencies = async () => {
      if (!cancel) {
        setLoading(true);
        try {
          const agencies = await findAllAgencies();
          if (agencies && agencies.length > 0) {
            setAgenciesList(agencies.map((agency: any) => ({
              label: agency.name,
              value: agency.name,
              ...agency
            })));
          }
          setLoading(false);
        }
        catch (error) {
          console.error('ERROR', error);
        }
      }

    }
    fetchAgencies();
    return () => {
      cancel = true
    };
  }, []);
  useEffect(() => {
    localStorage.setItem('selectedAgency', selectedAgency && selectedAgency.value ? selectedAgency.value : '');
    return () => {
      localStorage.removeItem('selectedAgency');
    };
  }, [selectedAgency])
  return (
    <div className="App">
      {loading ? (<Loading />) : (
        <Card>
          <AgenciesSelector
            limit={5}
            options={agenciesList}
            handleOnChange={(selectedAgency) => {
              setSelectedAgency(selectedAgency);
            }}
          />
          {selectedAgency ? (<SelectedAgency agency={selectedAgency} />) : (<></>)}
        </Card>
      )}
    </div>
  );
}

export default App;

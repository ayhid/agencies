import React, { useEffect, useState } from 'react';
import './App.scss';
import AgenciesSelector from './components/AgenciesSelector';
// import api from './lib/api';
import Card from './components/Card';
import Loading from './components/Loading';
// import AgenciesSelector from './components/AgenciesSelector';
import SelectedAgency from './components/SelectedAgency';
import { findAllAgencies } from './lib/api';

function App() {
  const [selectedAgency, setSelectedAgency] = useState(()=>{
    const persitedValue = localStorage.getItem('selectedAgency');
    return persitedValue !== null? JSON.parse(persitedValue):null;
  });
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
    if (selectedAgency) {
      localStorage.setItem('selectedAgency', selectedAgency?.value ? JSON.stringify(selectedAgency) : '');
      return () => {
        localStorage.removeItem('selectedAgency');
      };
    }
  }, [selectedAgency])
  return (
    <div className="App">
      {loading ? (<Loading />) : (
        <Card>
          <AgenciesSelector
            limit={5}
            value={selectedAgency}
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

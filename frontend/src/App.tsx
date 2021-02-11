import React, { useEffect, useState } from 'react';
import './App.scss';
// import AgenciesSelector from './components/AgenciesSelector';
import SelectedAgency from './components/SelectedAgency';
import { AgencyOption } from './interfaces/agency';
import api from './lib/api';
import Card from './components/Card';
import AgenciesSelector from './components/AgenciesSelector';

function App() {
  const [selectedAgency, setSelectedAgency] = useState<AgencyOption | null>(null);
  const [agenciesList, setAgenciesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('/agencies').then(({ data }) => {
      setAgenciesList(data.map((agency: any) => ({
        label: agency.name,
        value: agency.name,
        ...agency
      })));
      setLoading(false);
    })
  }, []);
  useEffect(() => {
    localStorage.setItem('selectedAgency', selectedAgency && selectedAgency.value ? selectedAgency.value : '');
  }, [selectedAgency])
  return (
    <div className="App">
      {loading ? <p>chargement...</p> : (<Card>
        <AgenciesSelector options={agenciesList} handleOnChange={(selectedAgency) => {
          setSelectedAgency(selectedAgency);
        }} />
        <SelectedAgency agency={selectedAgency} />
      </Card>)}

    </div>
  );
}

export default App;

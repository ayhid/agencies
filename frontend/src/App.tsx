import React, { useEffect, useState } from 'react';
import './App.scss';
import AgenciesSelector from './components/AgenciesSelector';
import { AgencyOption } from './interfaces/agency';

import Card from './components/Card';

function App() {
  const [selectedAgency, setSelectedAgency] = useState<AgencyOption | null>(null);
  useEffect(()=>{
    localStorage.setItem('selectedAgency', selectedAgency && selectedAgency.value ? selectedAgency.value: '');
  },[selectedAgency])
  return (
    <div className="App">
      <Card>
        <AgenciesSelector handleOnChange={(selectedAgency) => {
          setSelectedAgency(selectedAgency);
        }} />
      </Card>
    </div>
  );
}

export default App;

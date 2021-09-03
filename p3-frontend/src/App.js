import { useState } from 'react';
import './App.css';
import { DataContext } from './components/DataContext.jsx'
import Landing from './components/Landing';


function App() {

  const initialStateMinMax = {
    min: "",
    max: ""
}

const [formStateMinMax, setFormStateMinMax] = useState(initialStateMinMax)
const [inputMinMax, setInputMinMax] = useState(initialStateMinMax)

  return (
    <div className = "App" >
      <DataContext.Provider value = {{ formStateMinMax,
                                      setFormStateMinMax,
                                      inputMinMax,
                                      setInputMinMax,
                                      initialStateMinMax}}>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}
// pat access

export default App;

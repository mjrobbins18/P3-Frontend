import './App.css';
import { DataContext } from './components/DataContext.jsx'
import Landing from './components/Landing';

function App() {
  return (
    <div className = "App" >
      <DataContext.Provider>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}

export default App;

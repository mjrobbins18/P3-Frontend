import './App.css';
import { DataContext } from './components/DataContext.jsx'
import Landing from './components/Landing';

function App() {
  return (
    <div >
      <DataContext.Provider>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}
// pat access

export default App;

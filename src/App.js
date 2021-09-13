
import { Route, BrowserRouter } from 'react-router-dom';
import CarSearchForm from './Components/CarSearchFiles/CarSearchForm';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
              <Route exact path="/" component={CarSearchForm} />
              <Route/>
      </BrowserRouter>


    </div>
  );
}

export default App;

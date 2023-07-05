import './App.css';
import Home from './components/Home';
import { Route ,Routes} from "react-router-dom";
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    
    <Routes>
      
        <Route exact="true" path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<CardDetails />}> </Route>
    </Routes>
  );
};

export default App;

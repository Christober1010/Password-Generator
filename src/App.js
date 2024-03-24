import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Password from './Components/Password';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Password></Password>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <Home />
      <UserForm />
      {/* <ExportPdfComponent/> */}
    </div>
  );
}

export default App;

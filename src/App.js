import "./App.css";
import LoginForm from "./Components/LoginForm.jsx";
import logo from "./Components/images/lolo.jpg";
import instruction from "./Components/images/futterhas.png";

function App() {
  return (
    <div>
      <img src={logo} className='App-logo' alt='Logo' />
      <h1 className='title'>
        This is Fake Dont Enter Anything i make only For Testing
      </h1>
      <LoginForm></LoginForm>
      <img src={instruction} className='App-logos' alt='Logo below' />
    </div>
  );
}

export default App;

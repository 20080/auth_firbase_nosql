import './App.css';
import LoginUsername from "./components/LoginUsername";
import {AuthProvider} from "./context/AuthContext";


function App() {
  return (

    <div>
        <AuthProvider>
      <LoginUsername/>
      </AuthProvider>
    </div>
  );
}

export default App;

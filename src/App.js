import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;

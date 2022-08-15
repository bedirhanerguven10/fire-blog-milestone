import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover />
      </AuthContextProvider>
    </div>
  );
}

export default App;

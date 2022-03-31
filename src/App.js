import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const DashboardWrapper = ()=>{
  return( 
    <>
      <Navbar />
      <Dashboard />
    </>
  );

};

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="login" element={<Login/>} /> 
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<DashboardWrapper />} />
      </Route>
    </Routes> 
    </BrowserRouter>
      
  );
}

export default App;

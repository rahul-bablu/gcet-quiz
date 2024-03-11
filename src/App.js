import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from './component/Home';
import Quiz from './component/Quiz';
import Login from './component/Login';
import "./App.css";



function App() {
  return (
    <>
        
        <div>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/quiz' element={<Quiz />}/>
            <Route path='/login' element={<Login />}/>
            </Routes>
        </div>
      
    </>
  );
}

export default App;

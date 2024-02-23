import { Routes, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Quiz from './component/Quiz';
import Login from './component/Login';
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from "./AccountType/Home";
import AddEdit from './AccountType/Edit';
import View from './AccountType/View';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <ToastContainer position="top-center"/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/addData" element = {<AddEdit/>}/>
        <Route path = "/update/:id" element = {<AddEdit/>}/>
        <Route path = "/view/:id" element = {<View/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


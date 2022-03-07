import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {Route} from route;
import Home from "./components/home";
import Allproducts from "./components/product";

import './App.css';


function App() {
    return (
        <div className="App">
            <Home />
            
        </div>
    );
}

export default App;


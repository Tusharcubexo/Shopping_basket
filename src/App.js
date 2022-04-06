import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// import {Route} from route;
import Home from "./components/home";
import Allproducts from "./components/product";

import './App.css';
import { Aboutpage } from "./components/about";
import Header from "./components/navbar";
import Address from "./components/footer";
import { Brandpage, Productpage } from "./components/brand";
import { Contactuspage } from "./components/contact";
import Phonedetails from "./components/product";
import Signup from "./components/loginsignup";
import { Login } from "./components/loginsignup";
import axios from 'axios';
import React, { useState, useEffect } from 'react'

import Loader from "react-js-loader";

function App() {
    const [isloading, setIsloading] = useState(true);
    const [user, setUser] = useState(null);
    const [userlogdata, setUserlogdata] = useState(false);
    const [authtoken, setAuthtoken] = useState("");
    console.log(userlogdata);
    console.log(isloading);


    const setLog = () => {
        const is = JSON.parse(localStorage.getItem('userlogin'));
        const token = sessionStorage.getItem("token");
        if (is) {
            setUserlogdata(is);
            setAuthtoken(token);
            return true
        }
        else {
            return false
        }
    }
    setTimeout(() => {
        setIsloading(false);
    }, 1000);
    // useEffect(() => {
    //     setIsloading(false);
    //     console.log("run");
    // }, [])

    useEffect(() => {
        const check = setLog();
        if (check) {
            const config = {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem("token")
                }
            }
            console.log(config);
            function userdataApi() {
                axios.get("https://e-shopper-backend.herokuapp.com/api/user/", config)
                    .then((res) => {
                        console.log(res.data);
                        setUser(res.data);
                        console.log(user);

                    })
                    .catch((err) => {
                        console.log(err.response.data.err);
                    })

            }
            userdataApi();
        }

    }, [userlogdata]);


    return (
        <div className="App">
            {isloading && <div className={"item"} >
                <Loader type="spinner-default" bgColor={"red"} color={'#FFFFFF'} size={100} />
            </div>}
            {/* <Home /> */}
            {!isloading &&
                <Router>
                    <Header userdetailtoken={authtoken} userloginData={userlogdata} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<Aboutpage />} />
                        <Route path="/products" element={<Productpage />} />
                        <Route path="/contactus" element={<Contactuspage />} />
                        <Route path="/login" element={<Login update={setLog} />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/productDetails/:productid" element={<Phonedetails />} />

                    </Routes>
                    <Address />
                </Router>
            }
        </div>

    );
}

export default App;


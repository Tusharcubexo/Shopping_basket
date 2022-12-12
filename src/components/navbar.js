import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { NewFileForTesting } from "./newfile"

export default function Header(props) {
    // const [redirect, setRedirect] = useState(false)
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [userAuthToken, setUserAuthToken] = useState("");
    // const [isloading, setIsloading] = useState(true);


    console.log(userAuthToken);
    console.log(isUserLogin)

    useEffect(() => {

        setUserAuthToken(props.userdetailtoken)
        console.log(userAuthToken);

        setIsUserLogin(props.userloginData);
        console.log(isUserLogin);
    }, [props.userdetailtoken]);

    function logout() {
        localStorage.clear("userlogin");
        setIsUserLogin(false)
        console.log(localStorage);



        sessionStorage.clear("token");
        console.log(sessionStorage);
        setUserAuthToken(null)
        console.log(userAuthToken);
    }
    return (
        <>
            <header>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            {/* <a href="javascript:;"><img src={logo} alt="#"/></a> */}
                                            <Link to="/">Shopping Basket</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">

                                            {
                                                isUserLogin === true ? <ul className="menu-area-main">
                                                    <li className="active"><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/products">Products</Link></li>
                                                    <li><Link to="/contactus">Contact Us</Link></li>
                                                    <li><Link to="/short">Short</Link></li>
                                                    <li><Link onClick={logout} to="/">Logout</Link></li>

                                                    {/* <li className="last">
                                                <a><img src={search_icon} alt="icon"/></a>
                                            </li> */}
                                                </ul> : <ul className="menu-area-main">
                                                    <li className="active"><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/products">Products</Link></li>
                                                    <li><Link to="/contactus">Contact Us</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                    <li><Link to="/signup">Signup</Link></li>
                                                    <li><Link to="/short">Short</Link></li>
                                                    <NewFileForTesting />




                                                    {/* <li className="last">
                                                    <a><img src={search_icon} alt="icon"/></a>
                                                </li> */}
                                                </ul>

                                            }


                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 offset-md-6">
                                <div className="location_icon_bottum">
                                    <ul>
                                        <li><img src={call}/>(+71)9876543109</li>
                                        <li><img src={email}/>demo@gmail.com</li>
                                        <li><img src={loc}/>Location</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>

            </header>

        </>
    )

}


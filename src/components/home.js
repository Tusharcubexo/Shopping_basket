import React from 'react'
import Header from "./navbar";
import Boady from "./boady"
import Aboutus from "./about";
import Product from "./brand";
import Contactus from "./contact";
import Address from "./footer";

function Home() {
    return (
        <>
            <div>
                <Header />
                <Boady />
                <Aboutus />
                <Product />
                <Contactus />
                <Address />
            </div>
        </>
    )
}

export default Home;
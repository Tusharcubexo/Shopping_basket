import React from 'react'
import Header from "./boady";
import Boady from "./navbar"
import Aboutus from "./about";
import Product from "./products";
import Contactus from "./contact";
import Address from "./footer";

export default function Home() {
    return (
        <>
            <div>
                <Boady/>
                <Header/>
                <Aboutus/>
                <Product/>
                <Contactus/>
                <Address/>
            </div>
        </>
    )
}


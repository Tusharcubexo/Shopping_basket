import React from 'react'
import Header from "./navbar";
import Boady from "./boady"
import Aboutus from "./about";
import Productbrand from "./brand";
import Contactus from "./contact";
import Address from "./footer";

function Home() {
    return (
        <>
            <div>
                <Boady />
                <Aboutus />
                <Productbrand />
                <Contactus />               
            </div>
        </>
    )
}

export default Home;
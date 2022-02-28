import React from 'react'
import herobg from '../assets/img/hero-bg.jpg'
import '../assets/css/style.css'
import Header from "./boady";
import Boady from "./navbar"

export default function Home() {
    return (
        <>
            <div>
            <Boady/>
            <Header/>
            </div>
        </>
    )
}


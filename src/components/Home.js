import React from "react"
import EngineOutline from "../images/engine_outline.png";
import Header from './Header'

export default function Home() {
  return (
    <div>
    <Header />
            <img alt="Car engine outline" style={{position: "absolute", width: "50vw", right: "25vw"}} src={EngineOutline} />
            <div style={{position: "relative"}}>
            <h1 style={{fontFamily: 'Open Sans', fontweight: '200', fontSize: "clamp(1rem, -0.875rem + 8.333vw, 4rem)"}}>We understand safety, it's time you <i>Check Your Car</i></h1>
            <br />
            <p style={{fontFamily: 'Open Sans', fontSize: 'clamp(1rem, -0.875rem + 8.333vw, 2rem)'}}>We have been collected data for almost every vehichle, and we are committed to getting the data to people who need it most.</p>
            </div>
        </div>
  )
}

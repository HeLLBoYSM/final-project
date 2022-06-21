import React from "react";
import EigthQuestion from "./EigthQuestion";
import FifthQuestion from "./FifthQuestion";
import FirstQuestion from "./FirstQuestion";
import './FirstTest.css'
import FourthQuestion from "./FourthQuestion";
import NinethQuestion from "./NinethQuestion";
import SecondQuestion from "./SecondQuestion";
import SeventhQuestion from "./SeventhQuestion";
import SixthQuestion from "./SixthQuestion";
import TenthQuestion from "./TenthQuestion";
import ThirdQuestion from "./ThirdQuestion";


// useState pentru fiecare intrebare 
// cate un handle pentru fiecare grup de radio buttons

const FirstTest = () => {
    return <>
        

        <div className="content-test">
            <h1>Afla ce cred ceilalti despre tine</h1>

            <p className="info-test">
                Acesta este un test utilizat in prezent de departamentul de relatii umane al multor mari companii.
                Contine doar zece intrebari simple asa ca nu mai sta pe ganduri. Da repede click si vezi ce iese.
            </p>
            <form method="post">
            <FirstQuestion></FirstQuestion>
            <SecondQuestion></SecondQuestion>
            <ThirdQuestion></ThirdQuestion>
            <FourthQuestion></FourthQuestion>
            <FifthQuestion></FifthQuestion>
            <SixthQuestion></SixthQuestion>
            <SeventhQuestion></SeventhQuestion>
            <EigthQuestion></EigthQuestion>
            <NinethQuestion></NinethQuestion>
            <TenthQuestion></TenthQuestion>

            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare">Finalizare</button>
            </div>
        </div>
    </>
}

export default FirstTest
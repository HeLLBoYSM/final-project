import React from "react";
import '../test-1/FirstTest.css'
import FifthQT3 from "./FifthQT3";
import FirstQT3 from "./FirstQT3";
import FourthQT3 from "./FourthQT3";
import SecondQT3 from "./SecondQT3";
import SeventhQT3 from "./SeventhQT3";
import SixthQT3 from "./SixthQT3";
import ThirdQT3 from "./ThirdQT3";
import EithQT3 from "./EithQT3";
import NinethQT3 from "./NinethQT3";
import TenthQT3 from "./TenthQT3";

const ThirdTest = () => {
    return <>
        <div className="content-test">
            <h1>Cat de vulnerabil esti la la stres?</h1>

            <p className="info-test">
                Fiecare dintre noi are o dominanta stanga sau dreapta a creierului.
                Asta inseamna ca una din cele doua emisfere cerebrale munceste mai mult decat cealalta. Care e dominanta in cazul tau si ce implica acest lucru?
                Identifica-te in afirmatiile de mai jos pentru a vedea raspunsul.
            </p>
            <form method="post">
                <FirstQT3></FirstQT3>
                <SecondQT3></SecondQT3>
                <ThirdQT3></ThirdQT3>
                <FourthQT3></FourthQT3>
                <FifthQT3></FifthQT3>
                <SixthQT3></SixthQT3>
                <SeventhQT3></SeventhQT3>
                <EithQT3></EithQT3>
                <NinethQT3></NinethQT3>
                <TenthQT3></TenthQT3>
                


            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare">Finalizare</button>
            </div>
        </div>


    </>

}

export default ThirdTest
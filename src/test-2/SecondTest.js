import React from "react";
import '../test-1/FirstTest.css'
import FirstQuestionT2 from "./FirstQuestionT2";
import FourthQT2 from "./FourthQT2";
import SecondQT2 from "./SecondQT2";
import ThirdQT2 from "./ThirdQT2";
import FifthQT2 from "./FifthQT2";
import SixthQT2 from "./SixthQT2";
import SeventhQT2 from "./SeventhQT2";
import EithQT2 from "./EithQT2";
import NinethQT2 from "./NinethQT2";
import TenthQT2 from "./TenthQT2";

const SecondTest = () => {
    return <>
        <div className="content-test">
            <h1>Cat de vulnerabil esti la la stres?</h1>

            <p className="info-test">
                Legatura dintre stresul psihologic si afectiunile fizice a fost evidentiata in numeroase cercetari in domeniu.
                In perioadele de stres multe boli se agraveaza, productivitatea scade, iar efectele negative ale instabilitatii emotionale devin tot mai pronuntate. Pentru a afla cat de vulnerabil esti in fata stresului, completeaza raspunsul la urmatoarele afirmatii:
            </p>
            <form method="post">

            <FirstQuestionT2></FirstQuestionT2>
            <SecondQT2></SecondQT2>
            <ThirdQT2></ThirdQT2>
            <FourthQT2></FourthQT2>
            <FifthQT2></FifthQT2>
            <SixthQT2></SixthQT2>
            <SeventhQT2></SeventhQT2>
            <EithQT2></EithQT2>
            <NinethQT2></NinethQT2>
            <TenthQT2></TenthQT2>
            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare">Finalizare</button>
            </div>
        </div>


    </>

}

export default SecondTest
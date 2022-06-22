import React from "react";
import '../test-1/FirstTest.css'
import EithQT4 from "./EithQT4";
import FifthQT4 from "./FifthQT4";
import FirstQT4 from "./FirstQT4";
import FourthQT4 from "./FourthQT4";
import NinethQT4 from "./NinethQT4";
import SecondQT4 from "./SecondQT4";
import SeventhQT4 from "./SeventhQT4";
import SixthQT4 from "./SixthQT4";
import TenthQT4 from "./TenthQT4";
import ThirdthQT4 from "./ThirdthQT4";

const FourthTest = () => {
    return <>
        <div className="content-test">
            <h1>Testeaza-ti capacitatea de concentrare</h1>

            <p className="info-test">
                Ce iti capteaza atentia? Unul sau douazeci de lucruri odata? Te gandesti la moment sau traiesti in viitor?
                Sau poate inca te mai deranjeaza ceva ce s-a intamplat cu 10 ani in urma.
                Productivitatea si concentrarea fac pereche, astfel incat daca iti vei imbunatati concentrarea vei reusi sa fii mai eficient in ceea ce ai de facut.
            </p>
            <form method="post">
                <FirstQT4></FirstQT4>
                <SecondQT4></SecondQT4>
                <ThirdthQT4></ThirdthQT4>
                <FourthQT4></FourthQT4>
                <FifthQT4></FifthQT4>
                <SixthQT4></SixthQT4>
                <SeventhQT4></SeventhQT4>
                <EithQT4></EithQT4>
                <NinethQT4></NinethQT4>
                <TenthQT4></TenthQT4>


            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare">Finalizare</button>
            </div>
        </div>


    </>

}

export default FourthTest
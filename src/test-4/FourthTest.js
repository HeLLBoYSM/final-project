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
    const [totalResult, setTotalResult] = React.useState()
    const handleSubmit = () => {
        setTotalResult(response + response2 + response3 + response4 + response5 + response6 + response7 + response8 + response9 + response10)
    }
    console.log(totalResult)

    const [response, setResponese] = React.useState(null)
    const handleSetResponse = (newValue) => {
        setResponese(newValue)
    }
    const [response2,setResponese2] = React.useState(null)
    const handleSetResponse2 = (newValue) => {
        setResponese2(newValue)
    }
    const [response3,setResponese3] = React.useState(null)
    const handleSetResponse3 = (newValue) => {
        setResponese3(newValue)
    }
    const [response4,setResponese4] = React.useState(null)
    const handleSetResponse4 = (newValue) => {
        setResponese4(newValue)
    }
    const [response5,setResponese5] = React.useState(null)
    const handleSetResponse5 = (newValue) => {
        setResponese5(newValue)
    }
    const [response6,setResponese6] = React.useState(null)
    const handleSetResponse6= (newValue) => {
        setResponese6(newValue)
    }
    const [response7,setResponese7] = React.useState(null)
    const handleSetResponse7 = (newValue) => {
        setResponese7(newValue)
    }
    const [response8,setResponese8] = React.useState(null)
    const handleSetResponse8 = (newValue) => {
        setResponese8(newValue)
    }
    const [response9,setResponese9] = React.useState(null)
    const handleSetResponse9 = (newValue) => {
        setResponese9(newValue)
    }
    const [response10,setResponese10] = React.useState(null)
    const handleSetResponse10 = (newValue) => {
        setResponese10(newValue)
    }
    return <>
        <div className="content-test">
            <h1>Testeaza-ti capacitatea de concentrare</h1>

            <p className="info-test">
                Ce iti capteaza atentia? Unul sau douazeci de lucruri odata? Te gandesti la moment sau traiesti in viitor?
                Sau poate inca te mai deranjeaza ceva ce s-a intamplat cu 10 ani in urma.
                Productivitatea si concentrarea fac pereche, astfel incat daca iti vei imbunatati concentrarea vei reusi sa fii mai eficient in ceea ce ai de facut.
            </p>
            <form method="post">
                <FirstQT4 response={response} handleSetResponse={handleSetResponse}></FirstQT4>
                <SecondQT4 response={response2} handleSetResponse={handleSetResponse2}></SecondQT4>
                <ThirdthQT4 response={response3} handleSetResponse={handleSetResponse3}></ThirdthQT4>
                <FourthQT4 response={response4} handleSetResponse={handleSetResponse4}></FourthQT4>
                <FifthQT4 response={response5} handleSetResponse={handleSetResponse5}></FifthQT4>
                <SixthQT4 response={response6} handleSetResponse={handleSetResponse6}></SixthQT4>
                <SeventhQT4 response={response7} handleSetResponse={handleSetResponse7}></SeventhQT4>
                <EithQT4 response={response8} handleSetResponse={handleSetResponse8}></EithQT4>
                <NinethQT4 response={response9} handleSetResponse={handleSetResponse9}></NinethQT4>
                <TenthQT4 response={response10} handleSetResponse={handleSetResponse10}></TenthQT4>


            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare" onClick={() =>{handleSubmit()}}>Finalizare</button>
            </div>
        </div>


    </>

}

export default FourthTest
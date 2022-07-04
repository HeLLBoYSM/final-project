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
            <h1>Cat de vulnerabil esti la la stres?</h1>

            <p className="info-test">
                Fiecare dintre noi are o dominanta stanga sau dreapta a creierului.
                Asta inseamna ca una din cele doua emisfere cerebrale munceste mai mult decat cealalta. Care e dominanta in cazul tau si ce implica acest lucru?
                Identifica-te in afirmatiile de mai jos pentru a vedea raspunsul.
            </p>
            <form method="post">
                <FirstQT3 response={response} handleSetResponse={handleSetResponse}></FirstQT3>
                <SecondQT3 response={response2} handleSetResponse={handleSetResponse2}></SecondQT3>
                <ThirdQT3 response={response3} handleSetResponse={handleSetResponse3}></ThirdQT3>
                <FourthQT3 response={response4} handleSetResponse={handleSetResponse4}></FourthQT3>
                <FifthQT3 response={response5} handleSetResponse={handleSetResponse5}></FifthQT3>
                <SixthQT3 response={response6} handleSetResponse={handleSetResponse6}></SixthQT3>
                <SeventhQT3 response={response7} handleSetResponse={handleSetResponse7}></SeventhQT3>
                <EithQT3 response={response8} handleSetResponse={handleSetResponse8}></EithQT3>
                <NinethQT3 response={response9} handleSetResponse={handleSetResponse9}></NinethQT3>
                <TenthQT3 response={response10} handleSetResponse={handleSetResponse10}></TenthQT3>
                


            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare" onClick={() =>{handleSubmit()}}>Finalizare</button>
            </div>
        </div>


    </>

}

export default ThirdTest
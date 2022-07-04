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
                Legatura dintre stresul psihologic si afectiunile fizice a fost evidentiata in numeroase cercetari in domeniu.
                In perioadele de stres multe boli se agraveaza, productivitatea scade, iar efectele negative ale instabilitatii emotionale devin tot mai pronuntate. Pentru a afla cat de vulnerabil esti in fata stresului, completeaza raspunsul la urmatoarele afirmatii:
            </p>
            <form method="post">

            <FirstQuestionT2 response={response} handleSetResponse={handleSetResponse} ></FirstQuestionT2>
            <SecondQT2 response={response2} handleSetResponse={handleSetResponse2}></SecondQT2>
            <ThirdQT2 response={response3} handleSetResponse={handleSetResponse3}></ThirdQT2>
            <FourthQT2 response={response4} handleSetResponse={handleSetResponse4}></FourthQT2>
            <FifthQT2 response={response5} handleSetResponse={handleSetResponse5}></FifthQT2>
            <SixthQT2 response={response6} handleSetResponse={handleSetResponse6}></SixthQT2>
            <SeventhQT2 response={response7} handleSetResponse={handleSetResponse7}></SeventhQT2>
            <EithQT2 response={response8} handleSetResponse={handleSetResponse8}></EithQT2>
            <NinethQT2 response={response9} handleSetResponse={handleSetResponse9}></NinethQT2>
            <TenthQT2 response={response10} handleSetResponse={handleSetResponse10}></TenthQT2>
            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare" onClick={() =>{handleSubmit()}}>Finalizare</button>
            </div>
        </div>


    </>

}

export default SecondTest
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

// un useState ganeral , cu un handler si un array cu response


const FirstTest = () => {
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
    console.log(response , response2 , response4, response10)
    return <>
        

        <div className="content-test">
            <h1>Afla ce cred ceilalti despre tine</h1>

            <p className="info-test">
                Acesta este un test utilizat in prezent de departamentul de relatii umane al multor mari companii.
                Contine doar zece intrebari simple asa ca nu mai sta pe ganduri. Da repede click si vezi ce iese.
            </p>
            <form method="post">
                <FirstQuestion response={response} handleSetResponse={handleSetResponse}></FirstQuestion>
                <SecondQuestion response={response2} handleSetResponse={handleSetResponse2}></SecondQuestion>
                <ThirdQuestion response={response3} handleSetResponse={handleSetResponse3}></ThirdQuestion>
                <FourthQuestion response={response4} handleSetResponse={handleSetResponse4}></FourthQuestion>
                <FifthQuestion response={response5} handleSetResponse={handleSetResponse5}></FifthQuestion>
                <SixthQuestion response={response6} handleSetResponse={handleSetResponse6}></SixthQuestion>
                <SeventhQuestion response={response7} handleSetResponse={handleSetResponse7}></SeventhQuestion>
                <EigthQuestion response={response8} handleSetResponse={handleSetResponse8}></EigthQuestion>
                <NinethQuestion response={response9} handleSetResponse={handleSetResponse9}></NinethQuestion>
                <TenthQuestion response={response10} handleSetResponse={handleSetResponse10}></TenthQuestion>

            </form>
            <div className="btn">
                <button type="submit" className="btn-finalizare" onClick={() =>{handleSubmit()}}>Finalizare</button>
            </div>
        </div>
    </>
}

export default FirstTest
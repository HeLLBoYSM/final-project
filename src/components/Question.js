import React from "react";

// props: props.number(numarul intrebari)
//        props.question(intrebarea propriu zisa)
//        props.answers ( array ) , o sa primim si handlesetresponse


const Question = (props) => {
    
    return <>
        <div className="question">
            <div className="test-qnr">{props.number}</div>
            <div className="test-q">{props.question}</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q9" onChange={ () => (props.handleSetResponse(1))}  checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Stai intins pe spate.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q9" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">


                    Stai pe o parte, usor incovoiat.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q9" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">


                    Stai cu capul sub patura.

                </div>

            </div>

        </div>
    </>
}


export default Question
import React from "react";

const SeventhQuestion = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">7</div>
            <div className="test-q">Cum reactioneazi daca esti intrerupt atunci cand lucrezi intens si te concentrezi foarte mult?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q7" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Esti fericit de o pauza.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q7" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Esti foarte iritat.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q7" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">


                    Oscilezi intre cele doua extreme.

                </div>

            </div>

        </div>
    </>
}
export default SeventhQuestion
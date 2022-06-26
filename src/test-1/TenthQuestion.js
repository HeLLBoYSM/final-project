import React from "react";

const TenthQuestion = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">10</div>
            <div className="test-q">Ce visezi cel mai des?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q10" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Cazi in gol.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q10" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Cauti ceva sau pe cineva.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q10"onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    De obicei nu visezi.

                </div>

            </div>

        </div>
    </>
}

export default TenthQuestion
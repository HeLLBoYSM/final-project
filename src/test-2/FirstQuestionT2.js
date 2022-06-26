import React from "react";

const FirstQuestionT2 = (props) => {
    return <>
        <div className="question">
            <div className="test-qnr">1</div>
            <div className="test-q">Fac exercitii cardiovasculare de cel putin trei ori pe saptamana.</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">DA</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    NU

                </div>

            </div>

        </div>

    </>
}

export default FirstQuestionT2
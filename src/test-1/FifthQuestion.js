import React from "react";

const FifthQuestion = (props) => {
    return <>

        <div className="question">
            <div className="test-qnr">5</div>
            <div className="test-q">Cum reactionezi atunci cand ceva te amuza teribil?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q5" onChange={ () => (props.handleSetResponse(1))} checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Razi larg, cu toata fiinta.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q5" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Razi, dar fara zgomot puternic.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q5" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    Chicotesti fara zgomot puternic.

                </div>

            </div>

        </div>
    </>
}

export default FifthQuestion
import React from "react";

const SecondQuestion = (props) => {
    return <>
    <div className="question">
            <div className="test-qnr">2</div>
            <div className="test-q">Cum mergi de obicei?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q2" onChange={ () => (props.handleSetResponse(1))}  checked={props.response === 1} type="radio"></input>
                </div>

                <div className="test-atxt">Destul de repede, cu pasi mari.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q2" onChange={ () => (props.handleSetResponse(2))} checked={props.response === 2} type="radio"></input>

                </div>

                <div className="test-atxt">

                Nu prea repede, cu capul sus, privind lumea in fata.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q2" onChange={ () => (props.handleSetResponse(3))} checked={props.response === 3} type='radio'></input>

                </div>

                <div className="test-atxt">

                Destul de incet.

                </div>

            </div>

        </div>
    </>
}

export default SecondQuestion
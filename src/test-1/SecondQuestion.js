import React from "react";

const SecondQuestion = () => {
    return <>
    <div className="question">
            <div className="test-qnr">2</div>
            <div className="test-q">Cum mergi de obicei?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Destul de repede, cu pasi mari.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                Nu prea repede, cu capul sus, privind lumea in fata.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">

                Destul de incet.

                </div>

            </div>

        </div>
    </>
}

export default SecondQuestion
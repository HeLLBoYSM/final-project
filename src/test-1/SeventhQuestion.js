import React from "react";

const SeventhQuestion = () => {
    return <>
        <div className="question">
            <div className="test-qnr">7</div>
            <div className="test-q">Cum reactioneazi daca esti intrerupt atunci cand lucrezi intens si te concentrezi foarte mult?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Esti fericit de o pauza.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Esti foarte iritat.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">


                    Oscilezi intre cele doua extreme.

                </div>

            </div>

        </div>
    </>
}
export default SeventhQuestion
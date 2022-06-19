import React from "react";

const TenthQuestion = () => {
    return <>
        <div className="question">
            <div className="test-qnr">10</div>
            <div className="test-q">Ce visezi cel mai des?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Cazi in gol.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">

                    Cauti ceva sau pe cineva.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">

                    De obicei nu visezi.

                </div>

            </div>

        </div>
    </>
}

export default TenthQuestion
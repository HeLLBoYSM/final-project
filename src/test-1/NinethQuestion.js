import React from "react";

const NinethQuestion = () => {
    return <>
        <div className="question">
            <div className="test-qnr">9</div>
            <div className="test-q">Ce pozitie ai seara in pat, chiar inainte de a adormi?</div>

            <div className="test-a">

                <div className="test-abif">
                    <input name="q1" onClick={1} type="radio"></input>
                </div>

                <div className="test-atxt">Stai intins pe spate.</div>
            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={2} type="radio"></input>

                </div>

                <div className="test-atxt">


                    Stai pe o parte, usor incovoiat.

                </div>

            </div>

            <div className="test-a">

                <div className="test-abif">

                    <input name="q1" onClick={3} type='radio'></input>

                </div>

                <div className="test-atxt">


                    Stai cu capul sub patura.

                </div>

            </div>

        </div>
    </>
}

export default NinethQuestion